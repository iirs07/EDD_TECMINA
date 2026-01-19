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
  useWindowDimensions,
  View
} from 'react-native';

const question = {
  text: 'Técnica utilizada en ordenamientos externos, especialmente útil cuando los datos no caben completamente en la memoria principal. Consiste en dividir los datos en bloques ordenados más pequeños y luego fusionarlos en una única secuencia ordenada.',
  options: [
    { label: 'A) Método QuickSort', correct: false },
    { label: 'B) Método Inserción', correct: false },
    { label: 'C) Método Burbuja', correct: false },
    { label: 'D) Método de Intercalación', correct: true },
  ],
};

export default function PreguntaTresScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (index: number) => {
    if (isCorrect) return; // Evita cambios si ya acertó
    setSelected(index);
    setIsCorrect(question.options[index].correct);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#120B8F" />
      
      {/* Barra superior con estilo consistente */}
      <View style={[styles.blueBar, { paddingTop: Platform.OS === 'ios' ? 60 : 45 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>🧠 Pregunta 3</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Card de la Pregunta tipo diseño unificado */}
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{question.text}</Text>
        </View>

        {/* Opciones con el diseño de las preguntas anteriores */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => {
            const isCurrentSelected = selected === index;
            
            // Colores basados en el diseño unificado
            const backgroundColor = isCurrentSelected 
              ? (option.correct ? '#A7E9AF' : '#F8B4B4') 
              : '#E0ECF8';

            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                style={[
                  styles.option,
                  { width: width * 0.88, backgroundColor }
                ]}
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

        {/* Feedback dinámico consistente */}
        {isCorrect === false && (
          <View style={styles.feedbackBoxError}>
            <Text style={styles.feedbackTextError}>❌ Incorrecto. Intenta de nuevo.</Text>
          </View>
        )}

        {/* Botón Siguiente consistente */}
        {isCorrect && (
          <TouchableOpacity
            style={styles.nextButton}
            activeOpacity={0.8}
            onPress={() => router.push('/tema5/p4')}
          >
            <Text style={styles.buttonText}>✅ ¡Excelente! Siguiente</Text>
          </TouchableOpacity>
        )}
        
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  blueBar: {
    backgroundColor: '#120B8F',
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
  barTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
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