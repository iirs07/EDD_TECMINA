import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Tipado para las opciones seleccionadas
interface SelectedOption {
  pregunta1?: string;
  pregunta2?: string;
  pregunta3?: string;
}

type RootStackParamList = {
  TestArbolScreen: undefined;
};

const TestBScreen: React.FC = () => {
    const router = useRouter();

  const [selectedOption, setSelectedOption] = useState<SelectedOption>({});
  const [feedback, setFeedback] = useState<string>('');
  const [attempted, setAttempted] = useState<boolean>(false);
  const [showGrafosButton, setShowGrafosButton] = useState<boolean>(false); // Nuevo estado para el botón "Ir a Grafos"

  const respuestasCorrectas: SelectedOption = {
    pregunta1: 'Es una técnica en la que se compara un valor clave con todos los elementos de un conjunto registro por registro hasta encontrar el valor buscado.',
    pregunta2: 'Nulo',
    pregunta3: 'Se comparan secuencialmente los elementos.',
  };

  const normalizar = (texto: string): string =>
    texto.trim().toLowerCase().replace(/[.,;:]$/, '');

  const validarOpcionMultiple = (opcionSeleccionada: string, pregunta: keyof SelectedOption) => {
    setSelectedOption((prev) => ({ ...prev, [pregunta]: opcionSeleccionada }));
  };

  const comprobarRespuestas = () => {
    setAttempted(true);
    let respuestasCorrectasCount = 0;

    if (
      selectedOption.pregunta1 &&
      normalizar(selectedOption.pregunta1) === normalizar(respuestasCorrectas.pregunta1!)
    )
      respuestasCorrectasCount++;

    if (
      selectedOption.pregunta2 &&
      normalizar(selectedOption.pregunta2) === normalizar(respuestasCorrectas.pregunta2!)
    )
      respuestasCorrectasCount++;

    if (
      selectedOption.pregunta3 &&
      normalizar(selectedOption.pregunta3) === normalizar(respuestasCorrectas.pregunta3!)
    )
      respuestasCorrectasCount++;

    setFeedback(
      respuestasCorrectasCount === 3
        ? '🎉 ¡Felicidades, todas tus respuestas son correctas!'
        : '❌ ¡Inténtalo de nuevo!'
    );

    // Mostrar el botón "Ir a Grafos" si todas las respuestas son correctas
    if (respuestasCorrectasCount === 3) {
      setShowGrafosButton(true);
    }
  };

  const handleOptionSelect = (opcionSeleccionada: string, pregunta: keyof SelectedOption) => {
    validarOpcionMultiple(opcionSeleccionada, pregunta);
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

      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Prueba Busqueda Secuencial</Text>

        {/* Pregunta 1 */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>¿Qué es una Busqueda Secuencial?</Text>
        {['Es una técnica en la que se compara un valor clave con todos los elementos de un conjunto registro por registro hasta encontrar el valor buscado.', 'Estructura lineal de elementos.', 'Estructura con conexiones entre nodos en una sola dirección.'].map(opcion => (
          <TouchableOpacity
            key={opcion}
            style={[styles.optionButton, selectedOption.pregunta1 === opcion && styles.selectedOption]}
            onPress={() => handleOptionSelect(opcion, 'pregunta1')}
          >
            <Text style={styles.optionText}>{opcion}</Text>
          </TouchableOpacity>
        ))}
      </View>
{/* Pregunta 2 */}
<View style={styles.card}>
        <Text style={styles.subtitulo}>¿Cómo puede definirse un  el resultado de una busqueda Secuencial en caso de no encontrar el valor buscado?</Text>
        {['Nulo', 'Lineal', 'Arreglo'].map(opcion => (
          <TouchableOpacity
            key={opcion}
            style={[styles.optionButton, selectedOption.pregunta2 === opcion && styles.selectedOption]}
            onPress={() => handleOptionSelect(opcion, 'pregunta2')}
          >
            <Text style={styles.optionText}>{opcion}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pregunta 3 */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>¿Por qué se concoce como Busqueda secuencial?</Text>
        {['Se comparan secuencialmente los elementos.', 'Es un arreglo ordenado.', 'Es un valor nulo.'].map(opcion => (
          <TouchableOpacity
            key={opcion}
            style={[styles.optionButton, selectedOption.pregunta3 === opcion && styles.selectedOption]}
            onPress={() => handleOptionSelect(opcion, 'pregunta3')}
          >
            <Text style={styles.optionText}>{opcion}</Text>
          </TouchableOpacity>

          ))}
        </View>

        {/* Resultado */}
        {attempted && (
          <View style={styles.card}>
            <Text
              style={[
                styles.finalMessage,
                { color: feedback.includes('Felicidades') ? '#22c55e' : '#ef4444' }
              ]}
            >
              {feedback}
            </Text>
          </View>
        )}

        {/* Botón de comprobación */}
        <TouchableOpacity style={styles.buttonFullWidth} onPress={comprobarRespuestas}>
          <Text style={styles.buttonText}>Comprobar Todas</Text>
        </TouchableOpacity>

        {/* Botón "Ir a Grafos" */}
        {showGrafosButton && (
          <TouchableOpacity
            style={styles.buttonFullWidth}
            onPress={() => router.push('/tema6/BusquedaBinaria')}
          >
            <Text style={styles.buttonText}>Ir a Busqueda Binaria</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f8fafc',
  },
  titulo: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#120b8f', marginBottom: 20 },
  subtitulo: { fontSize: 20, fontWeight: '600', color: '#1e3a8a', marginBottom: 10 },
  card: { backgroundColor: '#ffffff', padding: 16, borderRadius: 12, marginBottom: 20, shadowOpacity: 0.1, elevation: 4 },
  buttonFullWidth: { backgroundColor: '#3b82f6', padding: 14, borderRadius: 8, alignItems: 'center', width: '100%', marginBottom: 30 },
  buttonText: { fontSize: 16, color: '#fff' },
  optionButton: { backgroundColor: '#f0f4f8', padding: 10, borderRadius: 8, marginBottom: 10 },
  selectedOption: { backgroundColor: '#60a5fa' },
  optionText: { fontSize: 16, color: '#1e3a8a' },
  finalMessage: { fontSize: 18, textAlign: 'center', fontWeight: 'bold' },
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
});

export default TestBScreen;
