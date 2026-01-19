import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const question = {
  text: 'Funciona comparando pares de elementos adyacentes y cambiándolos de lugar si están en el orden incorrecto. Este proceso se repite varias veces hasta que todos los elementos estén ordenados.',
  options: [
    { label: 'A) Método QuickSort', correct: false },
    { label: 'B) Método Inserción', correct: false },
    { label: 'C) Método Burbuja', correct: true },
    { label: 'D) Método de Intercalación', correct: false },
  ],
};

export default function PreguntaScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsCorrect(question.options[index].correct);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Franja superior mejorada */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>🧠 Pregunta 1</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Contenedor de la pregunta tipo Card */}
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{question.text}</Text>
        </View>

        

        {/* Opciones */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => {
            const isCurrentSelected = selected === index;
            const backgroundColor = isCurrentSelected 
              ? (option.correct ? '#A7E9AF' : '#F8B4B4') 
              : '#E0ECF8';

            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                style={[styles.option, { backgroundColor }]}
                onPress={() => handleSelect(index)}
              >
                <Text style={styles.optionText}>{option.label}</Text>
                {isCurrentSelected && (
                  <Ionicons 
                    name={option.correct ? "checkmark-circle" : "close-circle"} 
                    size={20} 
                    color={option.correct ? "#2E7D32" : "#C62828"} 
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Feedback dinámico */}
        {isCorrect === false && (
          <View style={styles.feedbackBoxError}>
            <Text style={styles.feedbackTextError}>❌ Incorrecto. Intenta de nuevo.</Text>
          </View>
        )}

        {/* Botón Siguiente (Solo si es correcto) */}
        {isCorrect && (
          <TouchableOpacity
            style={styles.nextButton}
            activeOpacity={0.8}
            onPress={() => router.push('/tema5/p2')}
          >
            <Text style={styles.buttonText}>✅ ¡Excelente! Siguiente</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  backButton: { marginRight: 12 },
  barTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginTop: 30,
    marginBottom: 10,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  questionText: {
    fontSize: 17,
    color: '#333',
    lineHeight: 25,
    textAlign: 'center',
    fontWeight: '500',
  },
  optionsContainer: {
    width: '100%',
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(18, 11, 143, 0.1)',
  },
  optionText: {
    fontSize: 16,
    color: '#120B8F',
    fontWeight: '600',
    flex: 1,
  },
  feedbackBoxError: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#FFEBEE',
    borderRadius: 10,
    width: '100%',
  },
  feedbackTextError: {
    color: '#C62828',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#120B8F',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});