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

const question = {
  text: '¿Qué estructura de datos sigue el principio FIFO (First In, First Out), donde el primer elemento en ser insertado es el primero en ser eliminado?',
  options: [
    { label: 'A) Pila', correct: false },
    { label: 'B) Lista enlazada', correct: false },
    { label: 'C) Cola', correct: true },
  ],
};

export default function PreguntaScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsCorrect(question.options[index].correct);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton}
          activeOpacity={0.6}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>🧠 Ejercicio 6</Text>
      </View>

      <ScrollView 
        contentContainerStyle={[styles.scrollContent, { minHeight: height - 120 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Pregunta con margen dinámico */}
        <Text style={[styles.questionText, { marginTop: height * 0.04, paddingHorizontal: width * 0.05 }]}>
          {question.text}
        </Text>

        

        <View style={[styles.optionsContainer, { marginTop: height * 0.03 }]}>
          {question.options.map((option, index) => {
            const isThisSelected = selected === index;
            
            // Colores limpios sin transparencias extrañas
            let backgroundColor = '#E0ECF8';
            if (isThisSelected) {
              backgroundColor = option.correct ? '#A7E9AF' : '#F8B4B4';
            }

            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8} // Controla el feedback visual al tocar
                style={[
                  styles.option,
                  { 
                    width: width * 0.85, 
                    backgroundColor: backgroundColor,
                    borderColor: isThisSelected ? (option.correct ? '#4CAF50' : '#D32F2F') : 'transparent',
                    borderWidth: isThisSelected ? 2 : 0
                  },
                ]}
                onPress={() => handleSelect(index)}
              >
                <Text style={[styles.optionText, isThisSelected && { color: '#000' }]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Feedback y Botón Siguiente */}
        <View style={styles.feedbackContainer}>
          {isCorrect === false && (
            <Text style={styles.feedbackText}>❌ Incorrecto. Intenta de nuevo.</Text>
          )}

          {isCorrect && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.nextButton, { width: width * 0.7, marginTop: height * 0.02 }]}
              onPress={() => router.push('/tema3/veinte')}
            >
              <Text style={styles.nextButtonText}>✅ Correcto. Siguiente</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { 
    marginRight: 12 
  },
  barTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
  },
  questionText: {
    fontSize: 19,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 26,
  },
  optionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  option: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 15,
  },
  optionText: {
    fontSize: 17,
    color: '#120B8F',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  feedbackContainer: {
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  feedbackText: {
    color: '#D32F2F',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#120B8F',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});