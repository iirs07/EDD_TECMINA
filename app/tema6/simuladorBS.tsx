import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Button,
    Dimensions,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

export default function App() {
  const router = useRouter();
  const [lista, setLista] = useState<number[]>([]);
  const [nuevoValor, setNuevoValor] = useState('');
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [visitandoIndice, setVisitandoIndice] = useState<number | null>(null);
  const [encontrado, setEncontrado] = useState<number | null>(null);
  const [isBuscando, setIsBuscando] = useState(false);
  const [busquedaFinalizada, setBusquedaFinalizada] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const MAX_VALORES = 7;
  const NODO_ANCHO = 50;
  const NODO_ALTURA = 50;

  const ESPACIOS = 8;
  const anchoEspacio = screenWidth / ESPACIOS;

  const agregarValor = () => {
    const numero = parseInt(nuevoValor);
    if (!isNaN(numero) && lista.length < MAX_VALORES) {
      setLista([...lista, numero]);
      setNuevoValor('');
    }
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const buscarSecuencial = async () => {
    const valor = parseInt(valorBusqueda);
    if (isNaN(valor) || isBuscando) return;

    setIsBuscando(true);
    setEncontrado(null);
    setBusquedaFinalizada(false);

    for (let i = 0; i < lista.length; i++) {
      setVisitandoIndice(i);
      await delay(1000);

      if (lista[i] === valor) {
        setEncontrado(i);
        break;
      }
    }

    setVisitandoIndice(null);
    setIsBuscando(false);
    setBusquedaFinalizada(true);

    // Limpiar input de búsqueda al terminar
    setValorBusqueda('');
  };

  const limpiarLista = () => {
    setLista([]);
    setEncontrado(null);
    setVisitandoIndice(null);
    setBusquedaFinalizada(false);
    setNuevoValor('');
    setValorBusqueda('');
  };

  const eliminarValor = () => {
    const valor = parseInt(valorBusqueda);
    if (isNaN(valor)) return;

    const nuevaLista = [...lista];
    const index = nuevaLista.indexOf(valor);
    if (index !== -1) {
      nuevaLista.splice(index, 1);
      setLista(nuevaLista);
      setEncontrado(null);
      setVisitandoIndice(null);
      setBusquedaFinalizada(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#120B8F" />
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/tema6/BusquedaSecuencial')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema VI: Métodos de Busqueda</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Simulador de Búsqueda Secuencial</Text>

        {/* Grupo agregar número: solo si hay espacio */}
        {lista.length < MAX_VALORES && (
          <View style={styles.inputGroupVertical}>
            <TextInput
              style={styles.input}
              placeholder={`Nuevo número (máx ${MAX_VALORES})`}
              value={nuevoValor}
              keyboardType="numeric"
              onChangeText={setNuevoValor}
            />
            <Button
              title="AGREGAR A LA LISTA"
              onPress={agregarValor}
              color="#5087f7"
              disabled={nuevoValor.trim() === ''}
            />
          </View>
        )}

        {/* Grupo buscar número */}
        <View style={styles.inputGroupVertical}>
          <TextInput
            style={styles.input}
            placeholder="Número a buscar"
            value={valorBusqueda}
            keyboardType="numeric"
            onChangeText={setValorBusqueda}
          />
          <Button
            title="BUSCAR"
            onPress={buscarSecuencial}
            color="#120b8f"
            disabled={valorBusqueda.trim() === ''}
          />
        </View>

        <Button title="LIMPIAR LISTA" onPress={limpiarLista} color="#5087f7" />
        <Button title="ELIMINAR VALOR" onPress={eliminarValor} color="#120b8f" />

        <View style={{ marginTop: 20 }}>
          <Svg height={NODO_ALTURA + 60} width={screenWidth}>
            {lista.map((valor, index) => {
              const isVisitando = visitandoIndice === index;
              const isEncontrado = encontrado === index;

              const posIndex = index < ESPACIOS ? index : ESPACIOS - 1;

              const posX = anchoEspacio * posIndex + (anchoEspacio - NODO_ANCHO) / 2;

              return (
                <React.Fragment key={index}>
                  <Rect
                    x={posX}
                    y={20}
                    width={NODO_ANCHO}
                    height={NODO_ALTURA}
                    fill={isEncontrado ? '#8bcff1' : isVisitando ? '#5087f7' : '#8bcff1'}
                    rx={6}
                    ry={6}
                  />
                  <SvgText
                    x={posX + NODO_ANCHO / 2}
                    y={50}
                    fontSize="16"
                    fill="white"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {valor}
                  </SvgText>
                  <SvgText
                    x={posX + NODO_ANCHO / 2}
                    y={85}
                    fontSize="12"
                    fill="black"
                    textAnchor="middle"
                  >
                    {index}
                  </SvgText>
                </React.Fragment>
              );
            })}
          </Svg>
        </View>

        {busquedaFinalizada && encontrado !== null && (
          <Text style={styles.resultado}>Número encontrado en el índice: {encontrado}</Text>
        )}
        {busquedaFinalizada && !isBuscando && encontrado === null && lista.length > 0 && (
          <Text style={styles.resultado}>Número no encontrado</Text>
        )}

        <TouchableOpacity
          style={[styles.customButton, { marginTop: 30 }]}
          onPress={() => router.push('/tema6/testBS')}
        >
          <Text style={styles.buttonText}>Test</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#ffffff' },
  container: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#120b8f', textAlign: 'center', marginBottom: 10 },
  inputGroupVertical: {
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 8, // espacio entre input y botón
  },
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
  resultado: {
    marginTop: 10,
    fontSize: 18,
    color: '#120b8f',
    textAlign: 'center',
    fontWeight: 'bold',
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
  bottom: 30,
  left: 0,
  right: 0,
  marginHorizontal: 'auto',
},

  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
});











