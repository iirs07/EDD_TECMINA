import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
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

export default function MetodoQuickSortTrazado() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const iteraciones = [
    {
      id: 1,
      titulo: 'Iteración 1: Partición Inicial',
      pivote: '34',
      comparacion: '[40, 21, 8, 17, 51, 34]',
      detalle: '40 > 34 (Derecha)\n21 < 34 (Izquierda)\n8 < 34 (Izquierda)\n17 < 34 (Izquierda)\n51 > 34 (Derecha)',
      resultado: 'Sublistas: [21, 8, 17] | 34 | [40, 51]'
    },
    {
      id: 2,
      titulo: 'Iteración 2: Sublista Izquierda',
      pivote: '21',
      comparacion: '[21, 8, 17]',
      detalle: '8 < 21 (Izquierda)\n17 < 21 (Izquierda)',
      resultado: 'Sublistas: [8, 17] | 21'
    },
    {
      id: 3,
      titulo: 'Iteración 3: Sublista Derecha',
      pivote: '40',
      comparacion: '[40, 51]',
      detalle: '51 > 40 (Derecha)',
      resultado: 'Resultado: 40 | [51]'
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Trazado de QuickSort</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.finalResultCard}>
          <Text style={styles.subheading}>Resultado Final</Text>
          <Text style={styles.paragraph}>
            Lista ordenada: <Text style={styles.bold}>[8, 17, 21, 34, 40, 51]</Text>
          </Text>
        </View>

        

        <Text style={styles.infoText}>Seguimiento paso a paso del pivote:</Text>

        {iteraciones.map((step) => (
          <View key={step.id} style={styles.conceptCard}>
            <View style={styles.cardHeader}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepCircleText}>{step.id}</Text>
              </View>
              <Text style={styles.subheading}>{step.titulo}</Text>
            </View>
            
            <View style={styles.pivotBadge}>
              <Text style={styles.pivotText}>Pivote: {step.pivote}</Text>
            </View>

            <Text style={styles.detailText}>
              <Text style={styles.bold}>Análisis:</Text> {"\n"}
              {step.detalle}
            </Text>

            <View style={styles.resultBox}>
              <Text style={styles.resultText}>{step.resultado}</Text>
            </View>
          </View>
        ))}

        <View style={styles.noteCard}>
          <Ionicons name="information-circle" size={20} color="#120B8F" />
          <Text style={styles.noteText}>
            El proceso continúa recursivamente hasta que cada sublista tiene un solo elemento (Caso Base).
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema5/diez')}
        >
          <Text style={styles.nextButtonText}>Siguiente Paso ▶</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 12 },
  barTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  scrollContent: { padding: 20, alignItems: 'center' },
  finalResultCard: {
    backgroundColor: '#E8F5E9',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#C8E6C9',
    marginBottom: 20,
  },
  infoText: { fontSize: 16, color: '#555', marginBottom: 15, fontWeight: '600', alignSelf: 'flex-start' },
  conceptCard: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#120B8F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepCircleText: { color: '#FFF', fontWeight: 'bold' },
  subheading: { fontSize: 17, fontWeight: 'bold', color: '#120B8F' },
  pivotBadge: {
    backgroundColor: '#FFF4E5',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 10,
  },
  pivotText: { color: '#B45309', fontWeight: 'bold', fontSize: 14 },
  detailText: { fontSize: 14, color: '#444', lineHeight: 22, backgroundColor: '#F9FAFB', padding: 10, borderRadius: 8 },
  resultBox: { marginTop: 12, borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 10 },
  resultText: { fontSize: 14, fontWeight: 'bold', color: '#120B8F', textAlign: 'center' },
  noteCard: {
    flexDirection: 'row',
    backgroundColor: '#E0E7FF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  noteText: { marginLeft: 10, flex: 1, color: '#1E1B4B', fontSize: 13, lineHeight: 18 },
  bold: { fontWeight: 'bold' },
  paragraph: { fontSize: 16, color: '#1B5E20' },
  nextButton: {
    marginTop: 35,
    paddingVertical: 16,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});