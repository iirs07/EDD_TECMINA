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
  const { width, height } = useWindowDimensions(); // Para dimensiones dinámicas

  const [text, setText] = useState<string[]>([
    'Las estructuras lineales organizan los elementos de forma',
    '______',
    ', donde cada uno tiene un',
    '______',
    'y un',
    '______',
    '.',
  ]);

  const emptySpacesOriginal = [1, 3, 5];
  const [options, setOptions] = useState<string[]>(['secuencial', 'antecesor', 'sucesor']);
  const [emptySpaces, setEmptySpaces] = useState<number[]>([1, 3, 5]);
  const [selectedWords, setSelectedWords] = useState<(string | null)[]>([null, null, null]);
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
      'Las estructuras lineales organizan los elementos de forma',
      '______',
      ', donde cada uno tiene un',
      '______',
      'y un',
      '______',
      '.',
    ]);
    setEmptySpaces([1, 3, 5]);
    setOptions(['secuencial', 'antecesor', 'sucesor']);
    setSelectedWords([null, null, null]);
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (
      selectedWords[0] === 'secuencial' &&
      selectedWords[1] === 'antecesor' &&
      selectedWords[2] === 'sucesor'
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (isCorrect === null) {
      checkAnswer();
    } else if (isCorrect === true) {
      router.push('/tema3/tres');
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
        <Text style={styles.blueBarText}>🧠 Ejercicio 1</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Rellena los espacios con las palabras correctas:</Text>

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {text.map((item, index) => {
              const isSelected = selectedWords.includes(item);
              return item === '______' ? (
                <Text key={index} style={styles.spaceText}> _____ </Text>
              ) : (
                <Text key={index} style={isSelected ? styles.selectedWord : styles.normalText}>
                  {item}{" "}
                </Text>
              );
            })}
          </Text>
        </View>

        {/* Feedback visual */}
        <View style={styles.feedbackBox}>
          {isCorrect === true && <Text style={styles.correctText}>✔ ¡Respuesta correcta!</Text>}
          {isCorrect === false && <Text style={styles.errorText}>✘ Respuesta incorrecta.</Text>}
        </View>

        {/* Opciones de palabras */}
        <View style={styles.optionsContainer}>
          {options.map((word, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={() => selectWord(word)} 
              style={[styles.optionButton, { width: width * 0.28 }]}
            >
              <Text style={styles.optionButtonText}>{word}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Controles de edición */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={deleteLastWord} style={[styles.button, { width: width * 0.35 }]}>
            <Text style={styles.controlButtonText}>Eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetText} style={[styles.button, { width: width * 0.35 }]}>
            <Text style={styles.controlButtonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>

        {/* Botón de acción principal */}
        <TouchableOpacity 
          onPress={handleNext} 
          style={[styles.nextButton, { width: width * 0.8, marginTop: height * 0.05 }]}
        >
          <Text style={styles.actionButtonText}>
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
    paddingHorizontal: 20,
    color: '#333'
  },
  textContainer: {
    paddingHorizontal: 25,
    marginVertical: 10,
    minHeight: 120,
    justifyContent: 'center',
  },
  text: { fontSize: 20, textAlign: 'center', lineHeight: 35 },
  normalText: { color: '#333' },
  spaceText: { color: '#A0A0A0', fontWeight: 'bold' },
  selectedWord: { color: '#120B8F', fontWeight: 'bold', textDecorationLine: 'underline' },
  feedbackBox: { height: 40, justifyContent: 'center', marginVertical: 10 },
  correctText: { color: 'green', fontSize: 18, fontWeight: 'bold' },
  errorText: { color: 'red', fontSize: 18, fontWeight: 'bold' },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 20,
  },
  optionButton: {
    paddingVertical: 12,
    backgroundColor: '#5087F7',
    borderRadius: 15,
    alignItems: 'center',
    elevation: 3,
  },
  optionButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginVertical: 10,
  },
  button: {
    padding: 12,
    backgroundColor: '#FF6347',
    borderRadius: 15,
    alignItems: 'center',
  },
  controlButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  nextButton: {
    backgroundColor: '#120B8F',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 4,
  },
  actionButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});