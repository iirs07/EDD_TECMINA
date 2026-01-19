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

const TestArbolScreen: React.FC = () => {
    const router = useRouter();

  const [selectedOption, setSelectedOption] = useState<SelectedOption>({});
  const [feedback, setFeedback] = useState<string>('');
  const [attempted, setAttempted] = useState<boolean>(false);
  const [showGrafosButton, setShowGrafosButton] = useState<boolean>(false); // Nuevo estado para el botón "Ir a Grafos"

  const respuestasCorrectas: SelectedOption = {
    pregunta1: 'Estructura jerárquica compuesta por nodos.',
    pregunta2: 'Nodo hoja',
    pregunta3: 'Es la distancia al nodo raíz.',
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
        <TouchableOpacity onPress={() => router.push('/tema4/SimuladorArbol')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema IV: Estructuras no lineales</Text>
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Prueba sobre Árboles</Text>

        {/* Pregunta 1 */}
        <View style={styles.card}>
          <Text style={styles.subtitulo}>¿Qué es un árbol en estructuras de datos?</Text>
          {[
            'Estructura jerárquica compuesta por nodos.',
            'Estructura lineal de elementos.',
            'Estructura con conexiones entre nodos en una sola dirección.'
          ].map((opcion) => (
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
          <Text style={styles.subtitulo}>¿Cómo se llama un nodo sin descendientes?</Text>
          {['Nodo hoja', 'Nodo raíz', 'Nodo interior'].map((opcion) => (
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
          <Text style={styles.subtitulo}>¿Qué describe el "nivel de un nodo" en un árbol?</Text>
          {[
            'Es la distancia al nodo raíz.',
            'Es la cantidad de hijos de un nodo.',
            'Es la posición de un nodo en el árbol.'
          ].map((opcion) => (
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

        {showGrafosButton && (
          <TouchableOpacity
            style={styles.buttonFullWidth}
            onPress={() => router.push('/tema4/Grafos')}
          >
            <Text style={styles.buttonText}>Grafos</Text>
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

export default TestArbolScreen;
