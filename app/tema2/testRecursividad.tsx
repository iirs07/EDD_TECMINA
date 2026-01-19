import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TestRecursividad = () => {
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState({
    pregunta1: '',
    pregunta3: '',
  });
  const [respuesta, setRespuesta] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempted, setAttempted] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState<boolean>(false); 

  const handleOptionSelect = (opcion: string, pregunta: 'pregunta1' | 'pregunta3') => {
    setSelectedOption(prev => ({ ...prev, [pregunta]: opcion }));
  };

  const comprobarRespuestas = () => {
    const correcta1 = selectedOption.pregunta1 === 'Técnica de programación en la cual un método puede llamarse a sí mismo.';
    const correcta2 = respuesta === '15'; // 5 + 4 + 3 + 2 + 1
    const correcta3 = selectedOption.pregunta3 === 'Debe tener un caso base';
  
    if (correcta1 && correcta2 && correcta3) {
      setFeedback('🎉¡Felicidades! Todas tus respuestas son correctas.');
      setShowMenuButton(true); // 👈 Mostrar el botón
    } else {
      setFeedback('❌ ¡Inténtalo de nuevo!');
      setShowMenuButton(false); // 👈 Ocultarlo si falla
    }
    setAttempted(true);
  };
  
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#120B8F" /> 
      {/* Barra de navegación */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/tema2/Recursividad')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Test de Recursividad</Text>
      </View>

      <ScrollView style={styles.container}>
        {/* Pregunta 1 */}
        <View style={styles.card}>
          <Text style={styles.subtitulo}>¿Qué es la recursividad?</Text>
          {[
            'Técnica de programación en la cual un método puede llamarse a sí mismo.',
            'Método de iteración',
            'Proceso de cálculo de una fórmula',
          ].map(opcion => (
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
          <Text style={styles.subtitulo}>¿Cuál es el resultado de la siguiente función recursiva?</Text>
          <Text style={styles.codigo}>
            public static int sumaRecursiva(int n) {'{'}{'\n'}
            {'  '}if (n == 1) {'{'} // Caso Base{'\n'}
            {'    '}return 1;{'\n'}
            {'  '}else{'\n'}
            {'    '}return n + sumaRecursiva(n - 1); // Parte Recursiva{'\n'}
            {'}'}{'\n'}
            {'\n'}
            public static void main(String[] args) {'{'}{'\n'}
            {'  '}SumaRecursiva suma = new SumaRecursiva();{'\n'}
            {'  '}int resultado = suma.sumaRecursiva(5);{'\n'}
            {'  '}System.out.println("La suma recursiva es: " + resultado);{'\n'}
            {'}'}
          </Text>
          <TextInput
            style={styles.input}
            value={respuesta}
            onChangeText={setRespuesta}
            placeholder="Escribe tu respuesta"
            keyboardType="numeric"
          />
        </View>

        {/* Pregunta 3 */}
        <View style={styles.card}>
          <Text style={styles.subtitulo}>¿Cuál es una de las reglas básicas de la recursividad?</Text>
          {[
            'Debe tener un caso base',
            'Debe ser iterativa',
            'Debe terminar en un bucle infinito',
          ].map(opcion => (
            <TouchableOpacity
              key={opcion}
              style={[styles.optionButton, selectedOption.pregunta3 === opcion && styles.selectedOption]}
              onPress={() => handleOptionSelect(opcion, 'pregunta3')}
            >
              <Text style={styles.optionText}>{opcion}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Mensaje final */}
        {attempted && (
          <View style={styles.card}>
            <Text
              style={[styles.finalMessage, { color: feedback.includes('Felicidades') ? '#22c55e' : '#ef4444' }]}
            >
              {feedback}
            </Text>
          </View>
        )}

        {/* Botón de comprobar respuestas */}
        <TouchableOpacity style={styles.buttonFullWidth} onPress={comprobarRespuestas}>
          <Text style={styles.buttonText}>Comprobar Respuestas</Text>
        </TouchableOpacity>
        {showMenuButton && (
                  <TouchableOpacity
                    style={styles.buttonFullWidth}
                    onPress={() => router.push('/menu')}
                  >
                    <Text style={styles.buttonText}>Menú</Text>
                  </TouchableOpacity>
                )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TestRecursividad;

// Estilos
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 20,
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
    marginLeft: 10,
  },
  barTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 10,
  },
  codigo: {
    fontFamily: 'monospace',
    backgroundColor: '#f3f4f6',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 14,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  optionButton: {
    backgroundColor: '#f0f4f8',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#60a5fa',
  },
  optionText: {
    fontSize: 16,
    color: '#1e3a8a',
  },
  finalMessage: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonFullWidth: {
    backgroundColor: '#3b82f6',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});