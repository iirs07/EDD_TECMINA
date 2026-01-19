import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

export default function QuickSortSimulator() {
  const { width } = useWindowDimensions();
  const router = useRouter();

  const initialArray = [40, 21, 8, 17, 51, 34];
  const [steps] = useState<number[][]>([
    [40, 21, 8, 17, 51, 34], // Estado inicial
    [21, 8, 17, 34, 40, 51], // Paso 1 (Pivote: 34)
    [8, 17, 21, 34, 40, 51], // Paso 2 (Pivote: 17)
    [8, 17, 21, 34, 40, 51], // Paso 3 (Pivote: 51)
  ]);
  
  const [pivots] = useState<number[]>([34, 17, 51]);
  
  const [explanations] = useState<string[][]>([
    [
      'Pivote 34: 40 es mayor (va a la derecha).',
      '21, 8 y 17 son menores (van a la izquierda).',
      '51 es mayor (va a la derecha).',
    ],
    [
      'Sublista izquierda [21, 8, 17]: Pivote 17.',
      '21 es mayor (va a la derecha de 17).',
      '8 es menor (va a la izquierda de 17).',
    ],
    [
      'Sublista derecha [40, 51]: Pivote 51.',
      '40 es menor (va a la izquierda de 51).',
    ],
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Simulador QuickSort</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Visualización Paso a Paso</Text>

        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionText}>
            <Text style={styles.bold}>Lógica:</Text> Dividimos la lista usando un <Text style={styles.pivoteLabel}>Pivote</Text>. Los menores van a la izquierda y los mayores a la derecha.
          </Text>
        </View>

        

        {steps.map((step, stepIndex) => (
          <View key={stepIndex} style={[styles.stepCard, { width: width * 0.9 }]}>
            <View style={styles.stepHeader}>
              <Text style={styles.stepTitle}>Paso {stepIndex === 0 ? 'Inicial' : stepIndex}</Text>
              {pivots[stepIndex - 1] && (
                <View style={styles.pivoteBadge}>
                  <Text style={styles.pivoteBadgeText}>Pivote: {pivots[stepIndex - 1]}</Text>
                </View>
              )}
            </View>

            <View style={styles.barContainer}>
              {step.map((num, index) => (
                <View key={index} style={styles.barWrapper}>
                  <View
                    style={[
                      styles.bar,
                      {
                        height: num * 1.5,
                        backgroundColor:
                          pivots[stepIndex] === num ? '#FFB703' : 
                          stepIndex === steps.length - 1 ? '#4CAF50' : '#5087F7',
                      },
                    ]}
                  />
                  <Text style={styles.barLabel}>{num}</Text>
                </View>
              ))}
            </View>

            {explanations[stepIndex] && (
              <View style={styles.explanationBox}>
                {explanations[stepIndex].map((msg, i) => (
                  <Text key={i} style={styles.explanationText}>• {msg}</Text>
                ))}
              </View>
            )}
          </View>
        ))}

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.8 }]}
          onPress={() => router.push('/tema5/once')}
        >
          <Text style={styles.nextButtonText}>Siguiente Tema ▶</Text>
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
  barTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
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
  bold: { fontWeight: 'bold' },
  pivoteLabel: { color: '#E65100', fontWeight: 'bold' },
  stepCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepTitle: { fontSize: 16, fontWeight: 'bold', color: '#555' },
  pivoteBadge: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFB703',
  },
  pivoteBadgeText: { color: '#E65100', fontSize: 12, fontWeight: 'bold' },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 100,
    marginBottom: 15,
  },
  barWrapper: { alignItems: 'center', marginHorizontal: 5 },
  bar: {
    width: 25,
    borderRadius: 4,
  },
  barLabel: { fontSize: 12, color: '#333', marginTop: 4, fontWeight: 'bold' },
  explanationBox: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
  },
  explanationText: { fontSize: 13, color: '#666', marginBottom: 4 },
  nextButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});