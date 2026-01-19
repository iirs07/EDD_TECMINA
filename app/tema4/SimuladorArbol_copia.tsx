import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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

const calcularPuntoEnBorde = (
  x1: number, y1: number,
  x2: number, y2: number,
  radio: number
) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const offsetX = (dx * radio) / dist;
  const offsetY = (dy * radio) / dist;
  return {
    xInicio: x1 + offsetX,
    yInicio: y1 + offsetY,
    xFinal: x2 - offsetX,
    yFinal: y2 - offsetY
  };
};

const insertarPorNiveles = (raiz: Nodo, nuevoNodo: Nodo) => {
    const cola: { nodo: Nodo; nivel: number }[] = [];
    cola.push({ nodo: raiz, nivel: 1 });
  
    while (cola.length > 0) {
      const { nodo, nivel } = cola.shift()!;
  
      const offsetX = Math.max(20, 140 / (nivel * 0.7));
      const offsetY = 20 + nivel * 20;
  
      if (!nodo.izquierda) {
        nuevoNodo.x = nodo.x - offsetX;
        nuevoNodo.y = nodo.y + offsetY;
        nodo.izquierda = nuevoNodo;
        return;
      } else {
        cola.push({ nodo: nodo.izquierda, nivel: nivel + 1 });
      }
  
      if (!nodo.derecha) {
        nuevoNodo.x = nodo.x + offsetX;
        nuevoNodo.y = nodo.y + offsetY;
        nodo.derecha = nuevoNodo;
        return;
      } else {
        cola.push({ nodo: nodo.derecha, nivel: nivel + 1 });
      }
    }
  };
  
const insertarEnSubarbol = (
    nodo: Nodo,
    nuevoNodo: Nodo,
    nivel: number
  ): boolean => {
    const offsetX = Math.max(20, 140 / (nivel * 0.7));
    const offsetY = 20 + nivel * 20;
  
    if (!nodo.izquierda) {
      nuevoNodo.x = nodo.x - offsetX;
      nuevoNodo.y = nodo.y + offsetY;
      nodo.izquierda = nuevoNodo;
      return true;
    }
  
    if (!nodo.derecha) {
      nuevoNodo.x = nodo.x + offsetX;
      nuevoNodo.y = nodo.y + offsetY;
      nodo.derecha = nuevoNodo;
      return true;
    }
  
    if (insertarEnSubarbol(nodo.izquierda, nuevoNodo, nivel + 1)) {
      return true;
    }
  
    return insertarEnSubarbol(nodo.derecha, nuevoNodo, nivel + 1);
  };

const recorridoPreorden = (nodo: Nodo | null): string[] => {
  const resultado: string[] = [];
  if (nodo) {
    resultado.push(nodo.nombre); // Primero el nodo raíz
    resultado.push(...recorridoPreorden(nodo.izquierda)); 
    resultado.push(...recorridoPreorden(nodo.derecha)); 
  }
  return resultado;
};

export default function ArbolBasico() {
  const router = useRouter();
  const [raiz, setRaiz] = useState<Nodo | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [historial, setHistorial] = useState<Nodo[]>([]);
  const [recorrido, setRecorrido] = useState<string>(''); 

  const insertarNodo = (tipo: 'raiz' | 'izquierdo' | 'derecho') => {
    if (inputValue.trim() === '') return;
    
    const nuevoNodo: Nodo = {
      id: Date.now(),
      nombre: inputValue,
      x: 0,
      y: 0,
      izquierda: null,
      derecha: null,
    };
    
    if (!raiz && tipo === 'raiz') {
      nuevoNodo.x = 180;
      nuevoNodo.y = 40;
      setRaiz(nuevoNodo);
      setHistorial([nuevoNodo]);
    } else if (raiz) {
      const nuevaRaiz = { ...raiz };
    
      const offsetY = 40;
      const offsetX = 40;
    
      if (!nuevaRaiz.izquierda) {
        nuevoNodo.x = nuevaRaiz.x - offsetX;
        nuevoNodo.y = nuevaRaiz.y + offsetY;
        nuevaRaiz.izquierda = nuevoNodo;
      } else if (!nuevaRaiz.derecha) {
        nuevoNodo.x = nuevaRaiz.x + offsetX;
        nuevoNodo.y = nuevaRaiz.y + offsetY;
        nuevaRaiz.derecha = nuevoNodo;
      } else {
        insertarPorNiveles(nuevaRaiz, nuevoNodo);
      }
    
      setRaiz(nuevaRaiz);
      setHistorial([...historial, nuevoNodo]);
    }
    
    setInputValue('');
  };

  const eliminarUltimoNodo = () => {
    if (historial.length === 0) return;
  
    const ultimoNodo = historial[historial.length - 1];
  
    if (raiz?.id === ultimoNodo.id) {
      setRaiz(null);
    } else {
      const eliminarEnSubarbol = (nodo: Nodo | null, nodoEliminar: Nodo): Nodo | null => {
        if (!nodo) return null;
  
        if (nodo.id === nodoEliminar.id) {
          return null;
        }
  
        nodo.izquierda = eliminarEnSubarbol(nodo.izquierda, nodoEliminar);
        nodo.derecha = eliminarEnSubarbol(nodo.derecha, nodoEliminar);
  
        return nodo;
      };
  
      const nuevaRaiz = eliminarEnSubarbol(raiz, ultimoNodo);
  
      setRaiz(nuevaRaiz);
    }
  
    setHistorial(historial.slice(0, -1));
  };

  const renderizarNodos = (nodo: Nodo | null): React.ReactNode[] => {
    if (!nodo) return [];

    const elementos: React.ReactNode[] = [
      <React.Fragment key={nodo.id}>
        <Circle
          cx={nodo.x}
          cy={nodo.y}
          r={20}
          fill="#4CAF50"
        />
        <SvgText
          x={nodo.x}
          y={nodo.y + 5}
          fontSize="12"
          fill="white"
          fontWeight="bold"
          textAnchor="middle"
        >
          {nodo.nombre}
        </SvgText>
      </React.Fragment>
    ];

    if (nodo.izquierda) {
      const { xInicio, yInicio, xFinal, yFinal } = calcularPuntoEnBorde(
        nodo.x,
        nodo.y,
        nodo.izquierda.x,
        nodo.izquierda.y,
        20
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
      const { xInicio, yInicio, xFinal, yFinal } = calcularPuntoEnBorde(
        nodo.x,
        nodo.y,
        nodo.derecha.x,
        nodo.derecha.y,
        20
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

  const mostrarRecorrido = () => {
    if (raiz) {
      const resultado = recorridoPreorden(raiz);
      setRecorrido(resultado.join(', ')); 
    }
  };
  const renderizarBotones = () => {
    if (!raiz) {
      return <Button title="Agregar Raíz" onPress={() => insertarNodo('raiz')} />;
    }
 
    if (!raiz.izquierda || !raiz.derecha) {
      return (
        <>
          {!raiz.izquierda && (
            <Button title="Agregar Hijo Izquierdo" onPress={() => insertarNodo('izquierdo')} />
          )}
          {!raiz.derecha && (
            <Button title="Agregar Hijo Derecho" onPress={() => insertarNodo('derecho')} />
          )}
        </>
      );
    }
  
    
    return <Button title="Agregar Nodo" onPress={() => insertarNodo('izquierdo')} />;
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#120B8F" />
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/tema4/Grafos')} style={styles.backButton}>
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

        {renderizarBotones()}

        <Button title="Eliminar Último Nodo" onPress={eliminarUltimoNodo} color="#FF5722" />

        <Button title="Mostrar Recorrido Preorden" onPress={mostrarRecorrido} color="#3f51b5" />

        {recorrido && <Text>Recorrido Preorden: {recorrido}</Text>}

        <View style={styles.canvas}>
          <Svg height="100%" width="100%">
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
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#120b8f',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth:1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    },
    blueBar: {
        backgroundColor: '#120B8F',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 12,
    },
    barTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    recorridoText: {
    fontSize: 16,
    textAlign: 'center',
    },
    canvas: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 30,
        backgroundColor: '#ffffff', 
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
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      
    });



