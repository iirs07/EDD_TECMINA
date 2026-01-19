import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Button,
  FlatList,
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
  conexiones: number[];
  x: number;
  y: number;
};

export default function App() {
  const [nodos, setNodos] = useState<Nodo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [seleccionados, setSeleccionados] = useState<number[]>([]);
  const [visitados, setVisitados] = useState<Set<number>>(new Set());
  const [visitandoAhora, setVisitandoAhora] = useState<number | null>(null);
  const [recorridoFinal, setRecorridoFinal] = useState<string[]>([]);
  const [isRecorriendo, setIsRecorriendo] = useState<boolean>(false);
  const router = useRouter();

  const insertarNodo = () => {
    if (inputValue.trim() !== '') {
      let x: number, y: number;
      let overlap = true;
      const margen = 50;

      do {
        x = Math.random() * (300 - margen * 2) + margen;
        y = Math.random() * (300 - margen * 2) + margen;
        overlap = nodos.some(n => Math.abs(n.x - x) < 40 && Math.abs(n.y - y) < 40);
      } while (overlap);

      const nuevoNodo: Nodo = {
        id: Date.now(),
        nombre: inputValue.trim(),
        conexiones: [],
        x,
        y,
      };

      setNodos([...nodos, nuevoNodo]);
      setInputValue('');
    }
  };

  const eliminarNodo = (id: number) => {
    const actualizados = nodos
      .filter(n => n.id !== id)
      .map(n => ({
        ...n,
        conexiones: n.conexiones.filter(c => c !== id),
      }));
    setNodos(actualizados);
    setSeleccionados([]);
  };

  const seleccionarNodo = (id: number) => {
    if (seleccionados.includes(id)) {
      setSeleccionados(seleccionados.filter(s => s !== id));
    } else if (seleccionados.length < 2) {
      setSeleccionados([...seleccionados, id]);
    }
  };

  const conectarNodos = () => {
    if (seleccionados.length === 2) {
      const [a, b] = seleccionados;
      const actualizados = nodos.map(n => {
        if (n.id === a && !n.conexiones.includes(b)) {
          return { ...n, conexiones: [...n.conexiones, b] };
        }
        if (n.id === b && !n.conexiones.includes(a)) {
          return { ...n, conexiones: [...n.conexiones, a] };
        }
        return n;
      });
      setNodos(actualizados);
      setSeleccionados([]);
    }
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const dfs = async (nodoId: number) => {
    if (isRecorriendo || !nodoId) return;

    const visitadosSet = new Set<number>();
    const recorrido: string[] = [];
    setIsRecorriendo(true);

    const recorridoDFS = async (id: number) => {
      if (visitadosSet.has(id)) return;
      setVisitandoAhora(id);

      visitadosSet.add(id);
      setVisitados(new Set(visitadosSet));

      const nodo = nodos.find(n => n.id === id);
      if (nodo) recorrido.push(nodo.nombre);
      setRecorridoFinal([...recorrido]);

      await delay(1000);
      setVisitandoAhora(null);

      for (const conId of nodo?.conexiones || []) {
        await recorridoDFS(conId);
      }
    };

    await recorridoDFS(nodoId);
    setIsRecorriendo(false);
    setVisitandoAhora(null);
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
        <Text style={styles.title}>Simulador de Grafos</Text>

        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Nombre del nodo"
          style={styles.input}
        />

        <Button title="AGREGAR NODO" onPress={insertarNodo} color="#5087f7" />
        <Button
          title="CONECTAR NODOS SELECCIONADOS"
          onPress={conectarNodos}
          disabled={seleccionados.length !== 2}
          color="#120b8f"
        />

        <Button
          title="INICIAR DFS"
          onPress={() => {
            if (nodos.length === 0) {
              alert("No hay nodos disponibles para recorrer");
              setRecorridoFinal([]);  // Limpia recorrido visible
              setVisitados(new Set()); // Limpia nodos visitados
              return;
            }
            dfs(nodos[0].id);
          }}
          color="#5087f7"
        />

        <Button
          title="LIMPIAR NODOS"
          onPress={() => {
            setNodos([]);
            setSeleccionados([]);
            setVisitados(new Set());
            setRecorridoFinal([]);
          }}
          color="#120b8f"
        />

        <View style={styles.canvas}>
          <Svg height="100%" width="100%">
  {nodos.map(nodo =>
    nodo.conexiones.map(conId => {
      const destino = nodos.find(n => n.id === conId);
      if (!destino) return null;
      return (
        <Line
          key={`${nodo.id}-${conId}`}
          x1={nodo.x}
          y1={nodo.y}
          x2={destino.x}
          y2={destino.y}
          stroke="#000"
          strokeWidth="2"
        />
      );
    })
  )}

  {nodos.map(n => (
    <React.Fragment key={n.id}>
      <Circle
        cx={n.x}
        cy={n.y}
        r={20}
        fill={visitandoAhora === n.id ? '#5087f7' : '#8bcff1'}
        onPress={() => seleccionarNodo(n.id)}
      />
      <SvgText
        x={n.x}
        y={n.y + 5}
        fontSize="12"
        fill="white"
        fontWeight="bold"
        textAnchor="middle"
      >
        {n.nombre}
      </SvgText>
    </React.Fragment>
  ))}
</Svg>

        </View>

        <Text style={styles.title}>Recorrido Completo (DFS):</Text>
        <Text style={styles.recorridoText}>{recorridoFinal.join(' → ')}</Text>

        <Text style={styles.title}>Nodos Conectados:</Text>
        <FlatList
          data={nodos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.itemContainer, seleccionados.includes(item.id) && { backgroundColor: '#e0f7fa' }]}
              onPress={() => seleccionarNodo(item.id)}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.itemText}>
                  {item.nombre} → {item.conexiones.map(id => nodos.find(n => n.id === id)?.nombre).join(', ')}
                </Text>
              </View>
              <Ionicons name="trash-bin-outline" size={24} color="red" onPress={() => eliminarNodo(item.id)} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
          style={styles.customButton}
          onPress={() => router.push('/tema4/testGrafos')}
        >
          <Text style={styles.buttonText}>Test</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f9',
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
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
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
    color: '#fff',
  },
  canvas: {
    height: 300,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 5,
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
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  recorridoText: {
    fontSize: 18, fontWeight: 'bold', color: '#120b8f', textAlign: 'center', marginBottom: 10
  },
});









