import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

const question4 = {
  text: '¿Qué tipo de estructuras permiten modificar su tamaño en tiempo de ejecución?',
  options: [
    { label: 'A) Estáticas', correct: false },
    { label: 'B) Dinámicas', correct: true },
    { label: 'C) Rígidas', correct: false },
    { label: 'D) Inmutables', correct: false },
  ],
};

export default function PreguntaScreen4() {
  const router = useRouter();
  const { width, height } = useWindowDimensions(); // Obtenemos ancho y alto
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsCorrect(question4.options[index].correct);
  };

  const handleNext = () => {
    router.push('/tema1/cinco');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>🧠 Pregunta 4</Text>
      </View>

      {/* Contenido con Scroll para adaptabilidad */}
      <ScrollView 
        contentContainerStyle={[styles.scrollContainer, { minHeight: height - 120 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Margen superior proporcional (5% del alto) */}
        <Text style={[styles.question, { marginTop: height * 0.05 }]}>
          {question4.text}
        </Text>

        <View style={styles.optionsContainer}>
          {question4.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                { width: width * 0.85 }, // Ocupa el 85% del ancho de cualquier pantalla
                selected === index && { 
                    backgroundColor: option.correct ? '#A7E9AF' : '#F8B4B4' 
                }
              ]}
              onPress={() => handleSelect(index)}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Feedback y Botón de Siguiente */}
        <View style={styles.feedbackContainer}>
            {isCorrect === false && (
                <Text style={styles.feedback}>❌ Incorrecto. Intenta de nuevo.</Text>
            )}

            {isCorrect && (
                <TouchableOpacity 
                    style={[styles.nextButton, { width: width * 0.7 }]} 
                    onPress={handleNext}
                >
                    <Text style={styles.buttonText}>✅ Correcto. Siguiente</Text>
                </TouchableOpacity>
            )}
        </View>
        
        {/* Espacio extra al final */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 12 },
  barTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  question: {
    fontSize: 19,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  optionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  option: {
    backgroundColor: '#E0ECF8',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 16,
    color: '#120B8F',
    fontWeight: '600',
    textAlign: 'center',
  },
  feedbackContainer: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  feedback: {
    color: '#D32F2F',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#120B8F',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});