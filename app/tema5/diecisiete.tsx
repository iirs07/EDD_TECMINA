import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

export default function MetodoIntercalacionSimulacionScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const leftInitial = [1, 3, 5];
  const rightInitial = [2, 4, 6];

  const [left, setLeft] = useState([...leftInitial]);
  const [right, setRight] = useState([...rightInitial]);
  const [merged, setMerged] = useState<number[]>([]);
  const [step, setStep] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState<{ left: number | null; right: number | null }>({
    left: null,
    right: null,
  });

  useEffect(() => {
    if (!isSorting || (left.length === 0 && right.length === 0)) {
      if (left.length === 0 && right.length === 0) setIsSorting(false);
      return;
    }

    const interval = setInterval(() => {
      runMergeStep();
    }, 1500);

    return () => clearInterval(interval);
  }, [isSorting, left, right]);

  const runMergeStep = () => {
    const leftVal = left[0];
    const rightVal = right[0];

    if (left.length > 0 && (right.length === 0 || leftVal <= rightVal)) {
      setMerged((prev) => [...prev, leftVal]);
      setLeft((prev) => prev.slice(1));
      setActiveIndices({ left: 0, right: null });
    } else if (right.length > 0) {
      setMerged((prev) => [...prev, rightVal]);
      setRight((prev) => prev.slice(1));
      setActiveIndices({ left: null, right: 0 });
    }
  };

  const resetSimulation = () => {
    setLeft([...leftInitial]);
    setRight([...rightInitial]);
    setMerged([]);
    setStep(0);
    setIsSorting(false);
    setActiveIndices({ left: null, right: null });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#120B8F" />
      
      {/* Barra superior con padding dinámico */}
      <View style={[styles.blueBar, { paddingTop: Platform.OS === 'ios' ? 60 : 45 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Simulación: Intercalación</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.centerContainer}>
          <Text style={styles.simulationTitle}>Visualizador de Fusión</Text>
          <Text style={styles.paragraph}>
            Comparamos los elementos al frente de cada lista y movemos el menor al resultado final.
          </Text>

          

          {/* Tarjeta de simulación centrada */}
          <View style={[styles.conceptCard, { width: width * 0.9 }]}>
            <Text style={styles.subheading}>Lista A (Izquierda)</Text>
            <View style={styles.listContainer}>
              {left.length > 0 ? left.map((item, index) => (
                <View key={index} style={[styles.listItem, index === 0 && isSorting && styles.activeItem]}>
                  <Text style={[styles.listItemText, index === 0 && isSorting && styles.activeItemText]}>{item}</Text>
                </View>
              )) : <Text style={styles.emptyText}>Vacía</Text>}
            </View>

            <View style={styles.divider} />

            <Text style={styles.subheading}>Lista B (Derecha)</Text>
            <View style={styles.listContainer}>
              {right.length > 0 ? right.map((item, index) => (
                <View key={index} style={[styles.listItem, index === 0 && isSorting && styles.activeItemRight]}>
                  <Text style={[styles.listItemText, index === 0 && isSorting && styles.activeItemText]}>{item}</Text>
                </View>
              )) : <Text style={styles.emptyText}>Vacía</Text>}
            </View>

            <View style={styles.divider} />

            <Text style={styles.subheading}>Resultado (Ordenado)</Text>
            <View style={styles.listContainer}>
              {merged.map((item, index) => (
                <View key={index} style={[styles.listItem, styles.mergedItem]}>
                  <Text style={styles.mergedItemText}>{item}</Text>
                </View>
              ))}
              {merged.length === 0 && <Text style={styles.emptyText}>Esperando datos...</Text>}
            </View>
          </View>

          {/* Botones de control */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={[styles.actionButton, styles.resetButton]} onPress={resetSimulation}>
              <Text style={styles.buttonText}>Reiniciar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.actionButton, styles.startButton, isSorting && styles.disabledButton]} 
              onPress={() => setIsSorting(true)}
              disabled={isSorting || (left.length === 0 && right.length === 0)}
            >
              <Text style={styles.buttonText}>{isSorting ? "Mezclando..." : "Iniciar"}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.nextButton, { width: width * 0.75 }]}
            onPress={() => router.push('/tema5/dieciocho')}
          >
            <Text style={styles.nextButtonText}>Siguiente Paso ▶</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 12 },
  barTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  centerContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  simulationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#120B8F',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  conceptCard: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 10,
    textAlign: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    minHeight: 50,
  },
  listItem: {
    backgroundColor: '#fff',
    borderColor: '#120B8F',
    borderWidth: 2,
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemText: { fontSize: 16, fontWeight: 'bold', color: '#120B8F' },
  activeItem: { backgroundColor: '#FFB703', borderColor: '#FB8C00' },
  activeItemRight: { backgroundColor: '#4FC3F7', borderColor: '#0288D1' },
  activeItemText: { color: '#fff' },
  mergedItem: { backgroundColor: '#E8F5E9', borderColor: '#2E7D32' },
  mergedItemText: { color: '#2E7D32', fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: '#DDD', marginVertical: 15, width: '100%' },
  emptyText: { color: '#AAA', fontStyle: 'italic', marginTop: 10 },
  buttonGroup: { flexDirection: 'row', marginTop: 30, gap: 15 },
  actionButton: { paddingVertical: 14, borderRadius: 30, minWidth: 130, alignItems: 'center' },
  resetButton: { backgroundColor: '#FF6347' },
  startButton: { backgroundColor: '#5087F7' },
  disabledButton: { opacity: 0.5 },
  buttonText: { color: 'white', fontWeight: 'bold' },
  nextButton: {
    marginTop: 40,
    paddingVertical: 16,
    backgroundColor: '#120B8F',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});