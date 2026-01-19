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
  View
} from 'react-native';

export default function EjercicioScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const [text, setText] = useState<string[]>([
    'Algunas estructuras permiten acceso directo (arreglos).',
    '______',
    'Memoria predecible, fija o dinámica.',
    '______',
  ]);

  const emptySpacesOriginal = [1, 3];
  const [options, setOptions] = useState<string[]>([
    'Acceso Directo o Secuencial',
    'Espacio de Memoria',
  ]);
  const [emptySpaces, setEmptySpaces] = useState<number[]>([1, 3]);
  const [selectedWords, setSelectedWords] = useState<(string | null)[]>([null, null]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const selectWord = (word: string) => {
    if (emptySpaces.length === 0) return;
    const emptyIndex = emptySpaces[0];
    const newText = [...text];
    newText[emptyIndex] = word;
    const updatedSelectedWords = [...selectedWords];
    updatedSelectedWords[emptySpacesOriginal.indexOf(emptyIndex)] = word;

    setOptions(options.filter(opt => opt !== word));
    setEmptySpaces(emptySpaces.slice(1));
    setText(newText);
    setSelectedWords(updatedSelectedWords);
    setIsCorrect(null);
  };

  const deleteLastWord = () => {
    const lastIndex = [...selectedWords].map((w, i) => (w ? i : -1)).filter(i => i !== -1).pop();
    if (lastIndex === undefined) return;
    const newText = [...text];
    const positionInText = emptySpacesOriginal[lastIndex];
    const wordToReturn = selectedWords[lastIndex];

    newText[positionInText] = '______';
    setText(newText);
    setOptions(prev => [...prev, wordToReturn!]);

    const updatedSelectedWords = [...selectedWords];
    updatedSelectedWords[lastIndex] = null;
    setSelectedWords(updatedSelectedWords);

    const updatedEmptySpaces = [...emptySpaces, positionInText].sort((a, b) => a - b);
    setEmptySpaces(updatedEmptySpaces);
    setIsCorrect(null);
  };

  const resetText = () => {
    setText([
      'Algunas estructuras permiten acceso directo (arreglos).',
      '______',
      'Memoria predecible, fija o dinámica.',
      '______',
    ]);
    setEmptySpaces([1, 3]);
    setOptions(['Acceso Directo o Secuencial', 'Espacio de Memoria']);
    setSelectedWords([null, null]);
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (
      selectedWords[0] === 'Acceso Directo o Secuencial' &&
      selectedWords[1] === 'Espacio de Memoria'
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (isCorrect === null) {
      if (selectedWords.includes(null)) return;
      checkAnswer();
    } else if (isCorrect === true) {
      router.push('/tema3/seis');
    } else {
      resetText();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.blueBarText}>🧠 Ejercicio 4</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Rellena los espacios con las palabras correctas:</Text>

        <View style={styles.textContainer}>
          {text.map((item, index) => {
            const isPlaceholder = item === '______';
            const isSelected = selectedWords.includes(item);
            return (
              <Text 
                key={index} 
                style={[
                  styles.text, 
                  isPlaceholder ? styles.spaceText : (isSelected ? styles.selectedWord : styles.normalText)
                ]}
              >
                {item}
              </Text>
            );
          })}
        </View>

        <View style={styles.feedbackBox}>
          {isCorrect === true && <Text style={styles.correctText}>✔ ¡Respuesta correcta!</Text>}
          {isCorrect === false && <Text style={styles.errorText}>✘ Incorrecto. Intenta de nuevo.</Text>}
        </View>

        <View style={styles.optionsContainer}>
          {options.map((word, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={() => selectWord(word)} 
              style={[styles.optionButton, { width: width * 0.44 }]}
            >
              <Text style={styles.optionButtonText}>{word}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={deleteLastWord} style={[styles.button, { width: width * 0.35 }]}>
            <Text style={styles.controlText}>Eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetText} style={[styles.button, { width: width * 0.35 }]}>
            <Text style={styles.controlText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          onPress={handleNext} 
          style={[styles.nextButton, { width: width * 0.8, marginTop: height * 0.05 }]}
        >
          <Text style={styles.buttonText}>
            {isCorrect === null ? 'Verificar' : isCorrect === true ? '✅ Siguiente' : 'Reintentar'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 12 },
  blueBarText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  scrollContent: { paddingBottom: 40, alignItems: 'center' },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 25,
  },
  textContainer: {
    paddingHorizontal: 25,
    width: '100%',
    marginBottom: 20,
    minHeight: 140,
  },
  text: { fontSize: 18, lineHeight: 28, marginBottom: 8 },
  normalText: { color: '#333' },
  spaceText: { color: '#999', fontWeight: 'bold', letterSpacing: 1 },
  selectedWord: { color: '#120B8F', fontWeight: 'bold', textDecorationLine: 'underline' },
  feedbackBox: { height: 40, justifyContent: 'center', marginBottom: 20 },
  correctText: { color: 'green', fontSize: 18, fontWeight: 'bold' },
  errorText: { color: 'red', fontSize: 18, fontWeight: 'bold' },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 25,
  },
  optionButton: {
    paddingVertical: 14,
    backgroundColor: '#5087F7',
    borderRadius: 15,
    alignItems: 'center',
    elevation: 3,
  },
  optionButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 13, textAlign: 'center', paddingHorizontal: 5 },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  button: {
    padding: 12,
    backgroundColor: '#FF6347',
    borderRadius: 15,
    alignItems: 'center',
  },
  controlText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  nextButton: {
    backgroundColor: '#120B8F',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});