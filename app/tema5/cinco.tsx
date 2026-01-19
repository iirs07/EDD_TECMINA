import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';

export default function BubbleSortSimulator() {
  const initialArray = [64, 34, 25, 12, 22, 11, 90];
  const [array] = useState(initialArray);
  const [steps, setSteps] = useState<number[][]>([]);
  const [messages, setMessages] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const router = useRouter();
  const { width } = useWindowDimensions();

  useEffect(() => {
    const arr = [...array];
    const recordedSteps: number[][] = [[...arr]]; // Incluimos el estado inicial
    const stepMessages: string[] = ['Presiona "Siguiente" para comenzar.'];
    let swapped;

    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          stepMessages.push(
            `Intercambiando ${arr[j]} y ${arr[j + 1]} porque ${arr[j]} > ${arr[j + 1]}`
          );
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        } else {
          stepMessages.push(
            `Se mantienen ${arr[j]} y ${arr[j + 1]} (${arr[j]} ≤ ${arr[j + 1]})`
          );
        }
        recordedSteps.push([...arr]);
      }
      if (!swapped) break;
    }

    setSteps(recordedSteps);
    setMessages(stepMessages);
  }, [array]);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Simulador: Ordenamiento Burbuja</Text>
      </View>

      <ScrollView contentContainerStyle={[styles.scrollContainer, { width: width }]}>
        <Text style={styles.title}>Visualizador</Text>
        
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionText}>
            Observa cómo los números más grandes "flotan" hacia la derecha en cada comparación.
          </Text>
        </View>

        

        {/* Cuadro de mensaje estable */}
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>
            {messages[currentStep] ?? '¡Ordenamiento completo!'}
          </Text>
        </View>

        {/* Contenedor de las barras */}
        <View style={styles.visualizationArea}>
          <View style={styles.arrayContainer}>
            {steps.length > 0 ? (
              steps[currentStep].map((num, index) => (
                <View key={index} style={styles.barContainer}>
                  <View 
                    style={[
                      styles.bar, 
                      { height: num * 1.5, backgroundColor: currentStep === steps.length - 1 ? '#2E7D32' : '#5087F7' }
                    ]} 
                  />
                  <Text style={styles.barLabel}>{num}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.emptyText}>Cargando simulación...</Text>
            )}
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.controlButton} onPress={handleNextStep}>
            <Text style={styles.buttonText}>Paso a Paso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.controlButton, styles.resetBtn]} onPress={handleReset}>
            <Text style={styles.buttonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={[styles.nextButton, { width: width * 0.8 }]} 
          onPress={() => router.push('/tema5/seis')}
        >
          <Text style={styles.nextButtonText}>Siguiente tema ▶</Text>
        </TouchableOpacity>
        
        <View style={{ height: 40 }} />
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
  barTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', flex: 1 },
  scrollContainer: { alignItems: 'center', paddingVertical: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#120B8F', marginBottom: 15 },
  descriptionCard: {
    backgroundColor: '#E8EAF6',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    width: '90%',
  },
  descriptionText: { fontSize: 14, color: '#333', textAlign: 'center', lineHeight: 20 },
  messageBox: {
    backgroundColor: '#FFF9C4',
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
    width: '90%',
    minHeight: 60,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FBC02D',
  },
  messageText: { fontSize: 15, color: '#5D4037', textAlign: 'center', fontWeight: 'bold' },
  visualizationArea: {
    height: 200,
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 10,
  },
  arrayContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
  },
  barContainer: {
    alignItems: 'center',
    marginHorizontal: 4,
  },
  bar: {
    width: 28,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  barLabel: { fontSize: 12, color: '#333', marginTop: 5, fontWeight: 'bold' },
  emptyText: { fontSize: 16, color: '#666' },
  buttonRow: { flexDirection: 'row', marginTop: 30, gap: 15 },
  controlButton: {
    backgroundColor: '#120B8F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
  },
  resetBtn: { backgroundColor: '#757575' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  nextButton: {
    marginTop: 40,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});