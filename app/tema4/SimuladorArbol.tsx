import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';

type Nodo = {
  id: number;
  nombre: string;
  x: number;
  y: number;
  izquierda: Nodo | null;
  derecha: Nodo | null;
};

// Constantes para tamaño
const WIDTH = 360;
const HEIGHT = 350;

// Calcula puntos de conexión en borde del nodo (círculo)
const calcularPuntoEnBorde = (x1: number, y1: number, x2: number, y2: number, radio: number) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const offsetX = (dx * radio) / dist;
  const offsetY = (dy * radio) / dist;
  return {
    xInicio: x1 + offsetX,
    yInicio: y1 + offsetY,
    xFinal: x2 - offsetX,
    yFinal: y2 - offsetY,
  };
};

// Asigna posiciones X e Y para el árbol binario, distribuyendo hijos
const asignarPosiciones = (
  nodo: Nodo | null,
  nivel: number,
  minX: number,
  maxX: number,
  yBase: number
) => {
  if (!nodo) return;

  if (nivel === 1) {
    // Si es raíz, no cambiamos posición
    // Deja el nodo.x y nodo.y tal cual están (ya los definiste al insertar raíz)
  } else {
    // Para hijos sí asigna posición
    nodo.x = (minX + maxX) / 2;
    nodo.y = yBase * nivel;
  }

  asignarPosiciones(nodo.izquierda, nivel + 1, minX, (minX + maxX) / 2, yBase);
  asignarPosiciones(nodo.derecha, nivel + 1, (minX + maxX) / 2, maxX, yBase);
};


// Calcula ancho y alto máximo ocupado por el árbol
const calcularLimites = (nodo: Nodo | null): { ancho: number; alto: number } => {
  let maxX = 0;
  let maxY = 0;

  const recorrer = (n: Nodo | null) => {
    if (!n) return;
    if (n.x > maxX) maxX = n.x;
    if (n.y > maxY) maxY = n.y;
    recorrer(n.izquierda);
    recorrer(n.derecha);
  };

  recorrer(nodo);

  return {
    ancho: maxX + 50,
    alto: maxY + 50,
  };
};

// Recorrido preorden que devuelve los nombres para mostrar
const recorridoPreorden = (nodo: Nodo | null): string[] => {
  const resultado: string[] = [];
  if (nodo) {
    resultado.push(nodo.nombre);
    resultado.push(...recorridoPreorden(nodo.izquierda));
    resultado.push(...recorridoPreorden(nodo.derecha));
  }
  return resultado;
};

// Altura del árbol
const calcularAltura = (nodo: Nodo | null): number => {
  if (!nodo) return 0;
  const alturaIzq = calcularAltura(nodo.izquierda);
  const alturaDer = calcularAltura(nodo.derecha);
  return 1 + Math.max(alturaIzq, alturaDer);
};

// Verifica si árbol es completo hasta nivel alturaMax
const arbolCompleto = (nodo: Nodo | null, alturaMax: number, nivelActual = 1): boolean => {
  if (!nodo) {
    return nivelActual > alturaMax;
  }
  if (nivelActual > alturaMax) return true;
  if (nivelActual === alturaMax) {
    if (nodo.izquierda || nodo.derecha) return false;
    return true;
  }
  if (!nodo.izquierda || !nodo.derecha) return false;
  return (
    arbolCompleto(nodo.izquierda, alturaMax, nivelActual + 1) &&
    arbolCompleto(nodo.derecha, alturaMax, nivelActual + 1)
  );
};

// Inserta nodo por niveles, izquierda primero
const insertarPorNiveles = (raiz: Nodo, nuevoNodo: Nodo) => {
  const cola: Nodo[] = [raiz];

  while (cola.length > 0) {
    const nodo = cola.shift()!;
    if (!nodo.izquierda) {
      nodo.izquierda = nuevoNodo;
      return;
    } else {
      cola.push(nodo.izquierda);
    }

    if (!nodo.derecha) {
      nodo.derecha = nuevoNodo;
      return;
    } else {
      cola.push(nodo.derecha);
    }
  }
};



export default function ArbolBasico() {
  const router = useRouter();

  const [raiz, setRaiz] = useState<Nodo | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [historial, setHistorial] = useState<Nodo[]>([]);
  const [recorrido, setRecorrido] = useState<string>('');
  const [arbolEstaCompleto, setArbolEstaCompleto] = useState(false);

  const [indiceResaltado, setIndiceResaltado] = useState<number | null>(null);
  const [recorridoNodos, setRecorridoNodos] = useState<Nodo[]>([]);

  // Recorrido preorden que devuelve nodos para animación
  const recorridoPreordenNodos = (nodo: Nodo | null): Nodo[] => {
    if (!nodo) return [];
    return [nodo, ...recorridoPreordenNodos(nodo.izquierda), ...recorridoPreordenNodos(nodo.derecha)];
  };

  // Animar recorrido preorden
  const iniciarAnimacionRecorrido = () => {
    if (!raiz) return;
    const nodosOrdenados = recorridoPreordenNodos(raiz);
    setRecorridoNodos(nodosOrdenados);
    setRecorrido(nodosOrdenados.map(n => n.nombre).join(', '));
    setIndiceResaltado(0);
  };

  useEffect(() => {
    if (indiceResaltado === null) return;
    if (indiceResaltado >= recorridoNodos.length) {
      setIndiceResaltado(null);
      return;
    }
    const timer = setTimeout(() => {
      setIndiceResaltado(indiceResaltado + 1);
    }, 800);
    return () => clearTimeout(timer);
  }, [indiceResaltado, recorridoNodos]);

  // Calcular minX y maxX del árbol
  const calcularMinMaxX = (nodo: Nodo | null): { minX: number; maxX: number } => {
    let minX = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;

    const recorrer = (n: Nodo | null) => {
      if (!n) return;
      if (n.x < minX) minX = n.x;
      if (n.x > maxX) maxX = n.x;
      recorrer(n.izquierda);
      recorrer(n.derecha);
    };

    recorrer(nodo);

    return { minX, maxX };
  };

  // Centrar árbol sumando desplazamiento X a todos los nodos
  const centrarArbol = (nodo: Nodo | null, desplazamientoX: number) => {
    if (!nodo) return;
    nodo.x += desplazamientoX;
    centrarArbol(nodo.izquierda, desplazamientoX);
    centrarArbol(nodo.derecha, desplazamientoX);
  };
  

  // Insertar nodo nuevo
  const insertarNodo = () => {
    if (inputValue.trim() === '') return;

    const nuevoNodo: Nodo = {
      id: Date.now(),
      nombre: inputValue,
      x: 0,
      y: 0,
      izquierda: null,
      derecha: null,
    };

    if (!raiz) {
      // Caso raíz
      nuevoNodo.x = WIDTH / 2;
      nuevoNodo.y = 30;
      setRaiz(nuevoNodo);
      setHistorial([nuevoNodo]);
      setArbolEstaCompleto(false);
    } else {
      const alturaActual = calcularAltura(raiz);
      if (alturaActual >= 6) return;

      // Clonar árbol para evitar mutación directa
      const nuevaRaiz = JSON.parse(JSON.stringify(raiz)) as Nodo;

      insertarPorNiveles(nuevaRaiz, nuevoNodo);

      // Recalcular posiciones
      asignarPosiciones(nuevaRaiz, 1, 0, WIDTH, 50);

      // Centrar árbol
      const { minX, maxX } = calcularMinMaxX(nuevaRaiz);
      const anchoArbol = maxX - minX;
      setRaiz(nuevaRaiz);
      setHistorial([...historial, nuevoNodo]);
      setArbolEstaCompleto(arbolCompleto(nuevaRaiz, 4));
    }

    setInputValue('');
  };
  // Altura del árbol
const calcularAltura = (nodo: Nodo | null): number => {
  if (!nodo) return 0;
  const alturaIzq = calcularAltura(nodo.izquierda);
  const alturaDer = calcularAltura(nodo.derecha);
  return 1 + Math.max(alturaIzq, alturaDer);
};

// Verifica si árbol es completo hasta nivel alturaMax
const arbolCompleto = (nodo: Nodo | null, alturaMax: number, nivelActual = 1): boolean => {
  if (!nodo) {
    return nivelActual > alturaMax;
  }
  if (nivelActual > alturaMax) return true;
  if (nivelActual === alturaMax) {
    if (nodo.izquierda || nodo.derecha) return false;
    return true;
  }
  if (!nodo.izquierda || !nodo.derecha) return false;
  return (
    arbolCompleto(nodo.izquierda, alturaMax, nivelActual + 1) &&
    arbolCompleto(nodo.derecha, alturaMax, nivelActual + 1)
  );
};


  // Eliminar último nodo insertado
  const eliminarUltimoNodo = () => {
    if (historial.length === 0) return;
    const ultimoNodo = historial[historial.length - 1];

    if (raiz?.id === ultimoNodo.id) {
      setRaiz(null);
      setArbolEstaCompleto(false);
    } else {
      const eliminarEnSubarbol = (nodo: Nodo | null, nodoEliminar: Nodo): Nodo | null => {
        if (!nodo) return null;
        if (nodo.id === nodoEliminar.id) return null;
        nodo.izquierda = eliminarEnSubarbol(nodo.izquierda, nodoEliminar);
        nodo.derecha = eliminarEnSubarbol(nodo.derecha, nodoEliminar);
        return nodo;
      };
      const nuevaRaiz = eliminarEnSubarbol(raiz, ultimoNodo);
      setRaiz(nuevaRaiz);
    }

    setHistorial(historial.slice(0, -1));
  };

  // Mostrar recorrido preorden texto
  const mostrarRecorrido = () => {
    if (raiz) {
      const resultado = recorridoPreorden(raiz);
      setRecorrido(resultado.join(', '));
    }
  };

  // Limpiar todo el árbol
  const limpiarArbol = () => {
    setRaiz(null);
    setHistorial([]);
    setRecorrido('');
    setArbolEstaCompleto(false);
  };

  // Renderizar nodos y líneas con resaltado animado
  const renderizarNodos = (nodo: Nodo | null): React.ReactNode[] => {
    if (!nodo) return [];

    const estaResaltado = indiceResaltado !== null && recorridoNodos[indiceResaltado]?.id === nodo.id;

    const colorNodo = estaResaltado ? '#5087f7' : '#8bcff1';
    const colorTexto = '#FFFFFF';
    const fontWeight = estaResaltado ? 'bold' : 'normal';

    const elementos: React.ReactNode[] = [
      <React.Fragment key={nodo.id}>
        <Circle cx={nodo.x} cy={nodo.y} r={20} fill={colorNodo} />
        <SvgText
          x={nodo.x}
          y={nodo.y + 5}
          fontSize="12"
          fill={colorTexto}
          fontWeight={fontWeight}
          textAnchor="middle"
        >
          {nodo.nombre}
        </SvgText>
      </React.Fragment>,
    ];

    if (nodo.izquierda) {
  const radio = 20;  // radio fijo que coincide con el círculo
  const { xInicio, yInicio, xFinal, yFinal } = calcularPuntoEnBorde(
    nodo.x,
    nodo.y,
    nodo.izquierda.x,
    nodo.izquierda.y,
    radio
  );
  elementos.push(
    <Line
      key={`${nodo.id}-line-izq`}
      x1={xInicio}
      y1={yInicio}
      x2={xFinal}
      y2={yFinal}
      stroke="black"
    />
  );
  elementos.push(...renderizarNodos(nodo.izquierda));
}

if (nodo.derecha) {
  const radio = 20;  // radio fijo que coincide con el círculo
  const { xInicio, yInicio, xFinal, yFinal } = calcularPuntoEnBorde(
    nodo.x,
    nodo.y,
    nodo.derecha.x,
    nodo.derecha.y,
    radio
  );
  elementos.push(
    <Line
      key={`${nodo.id}-line-der`}
      x1={xInicio}
      y1={yInicio}
      x2={xFinal}
      y2={yFinal}
      stroke="black"
    />
  );
  elementos.push(...renderizarNodos(nodo.derecha));
}


    return elementos;
  };

  const { ancho, alto } = calcularLimites(raiz);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#120B8F" />
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/tema4/Arbol')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema IV: Estructuras no lineales</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Simulador Árbol Binario</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Nombre del nodo"
        />
        {!arbolEstaCompleto && <Button title="Agregar Nodo" onPress={insertarNodo} />}
        <Button title="Mostrar Recorrido Preorden" onPress={iniciarAnimacionRecorrido} color="#120b8f" />
        <Button title="Eliminar Último Nodo" onPress={eliminarUltimoNodo} color="#5087f7" />
        <Button title="Limpiar Árbol" onPress={limpiarArbol} color="#120b8f" />
        {recorrido && (
          <Text style={styles.recorridoText}>
            {'\n'}Recorrido Preorden:{'\n'}
            {recorrido}
          </Text>
        )}

        <View style={[styles.canvas, { width: WIDTH, height: HEIGHT, alignSelf: 'center' }]}>
          <Svg height={HEIGHT} width={WIDTH}>
            {renderizarNodos(raiz)}
          </Svg>
        </View>

        <TouchableOpacity
          style={styles.customButton}
          onPress={() => router.push('/tema4/testArbol')}
        >
          <Text style={styles.buttonText}>Test</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#ffffff' },
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#120b8f', textAlign: 'center', marginBottom: 10 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingLeft: 10 },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 12 },
  barTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
  recorridoText: { fontSize: 18, fontWeight: 'bold', color: '#120b8f', textAlign: 'center', marginBottom: 10 },
  canvas: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#5087f7',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    alignSelf: 'center',
  },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
});








