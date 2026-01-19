import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function MetodoInsercionSimulacionScreen() {
  const router = useRouter();

  const initialList = [5, 2, 4, 1, 3];
  const [list, setList] = useState(initialList);
  const [step, setStep] = useState(0);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || step >= list.length) {
      if (step >= list.length) setIsRunning(false);
      return;
    }

    const interval = setInterval(() => {
      runInsertionSortStep();
    }, 1500);

    return () => clearInterval(interval);
  }, [isRunning, step]);

  const runInsertionSortStep = () => {
    let arr = [...list];
    let i = step === 0 ? 1 : step;
    let clave = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > clave) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = clave;
    setList(arr);
    setCurrentIndex(j + 1);
    setStep(i + 1);
  };

  const resetSimulation = () => {
    setList(initialList);
    setStep(0);
    setCurrentIndex(null);
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#120B8F" />
      
      {/* Barra superior corregida */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Simulación: Inserción</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.centerContainer}>
          <Text style={styles.simulationTitle}>Visualizador de Pasos</Text>
          
          <Text style={styles.paragraph}>
            Observa cómo cada número se compara con los anteriores y se inserta en su posición correcta.
          </Text>

          

          {/* Tarjeta de simulación */}
          <View style={[styles.conceptCard, { width: width * 0.9 }]}>
            <Text style={styles.subheading}>
              {step >= list.length ? "Ordenamiento Completo" : `Paso actual: ${step === 0 ? 'Inicial' : step}`}
            </Text>
            
            <View style={styles.listContainer}>
              {list.map((item, index) => {
                const isActive = index === currentIndex && isRunning;
                return (
                  <View
                    key={index}
                    style={[
                      styles.listItem,
                      isActive && styles.activeItem
                    ]}
                  >
                    <Text style={[styles.listItemText, isActive && styles.activeItemText]}>
                      {item}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Controles centrados */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={[styles.controlButton, styles.resetButton]} 
              onPress={resetSimulation}
            >
              <Text style={styles.buttonText}>Reiniciar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.controlButton, styles.startButton, isRunning && styles.disabledButton]} 
              onPress={() => setIsRunning(true)}
              disabled={isRunning || step >= list.length}
            >
              <Text style={styles.buttonText}>
                {isRunning ? "Corriendo..." : "Iniciar"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.nextButton, { width: width * 0.75 }]}
            onPress={() => router.push('/tema5/quince')}
          >
            <Text style={styles.nextButtonText}>Siguiente Tema</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: Platform.OS === 'ios' ? 60 : 45, 
    paddingBottom: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
  },
  backButton: { marginRight: 12 },
  barTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 30,
  },
  centerContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  simulationTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#120B8F',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  conceptCard: {
    backgroundColor: '#FFFFFF',
    padding: 50,
    borderRadius: 30,
    elevation: 5,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 25,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  listItem: {
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderWidth: 2,
    borderRadius: 12,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  activeItem: {
    backgroundColor: '#FFB703',
    borderColor: '#FB8C00',
  },
  activeItemText: {
    color: '#fff',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 15,
  },
  controlButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    minWidth: 140,
    alignItems: 'center',
  },
  resetButton: { backgroundColor: '#FF6347' },
  startButton: { backgroundColor: '#5087F7' },
  disabledButton: { opacity: 0.5 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  nextButton: {
    marginTop: 50,
    paddingVertical: 16,
    backgroundColor: '#120B8F',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});