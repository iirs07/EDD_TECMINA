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

export default function MetodoQuickSortEjemploScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Código guardado como string para evitar errores de sintaxis con símbolos < >
  const pythonCode = `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[0]
    # Elementos menores o iguales
    less = [x for x in arr[1:] if x <= pivot]
    # Elementos mayores
    greater = [x for x in arr[1:] if x > pivot]
    
    return quick_sort(less) + [pivot] + quick_sort(greater)

# Ejemplo de uso
lista = [40, 21, 8, 17, 51, 34]
print(quick_sort(lista))`;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Barra superior con padding para evitar el notch */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Ejemplo: QuickSort</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>Implementación Recursiva</Text>

        <View style={styles.codeContainer}>
          <View style={styles.codeHeader}>
            <Text style={styles.headerText}>quicksort.py</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <Text style={styles.codeText}>{pythonCode}</Text>
          </ScrollView>
        </View>

        

        <Text style={styles.sectionTitle}>Análisis del Código</Text>

        <View style={styles.explanationSection}>
          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>Caso Base</Text>
            {/* CORRECCIÓN AQUÍ: Texto envuelto correctamente para evitar SyntaxError */}
            <Text style={styles.stepDesc}>
              <Text style={styles.boldCode}>{"if len(arr) <= 1:"}</Text> Si la lista tiene 0 o 1 elemento, ya está ordenada por definición.
            </Text>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>Particionamiento</Text>
            <Text style={styles.stepDesc}>
              Dividimos la lista en dos grupos: los que son menores/iguales al <Text style={styles.bold}>pivote</Text> y los que son mayores.
            </Text>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>Recursividad</Text>
            <Text style={styles.stepDesc}>
              La magia ocurre al llamar a <Text style={styles.boldCode}>quick_sort</Text> dentro de sí misma para resolver las sublistas.
            </Text>
          </View>
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Salida esperada:</Text>
          <Text style={styles.resultValue}>[8, 17, 21, 34, 40, 51]</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema5/nueve')}
        >
          <Text style={styles.nextButtonText}>Siguiente Paso ▶</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
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
  mainTitle: { fontSize: 22, fontWeight: 'bold', color: '#120B8F', marginBottom: 20 },
  codeContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    width: '100%',
    overflow: 'hidden',
    elevation: 5,
  },
  codeHeader: { backgroundColor: '#333', padding: 8, paddingLeft: 15 },
  headerText: { color: '#AAA', fontSize: 12, fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace' },
  codeText: {
    color: '#9CDCFE',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    padding: 15,
    fontSize: 14,
    lineHeight: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 30, marginBottom: 15, alignSelf: 'flex-start' },
  explanationSection: { width: '100%' },
  stepCard: {
    backgroundColor: '#F0F4FF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#5087F7',
  },
  stepTitle: { fontSize: 16, fontWeight: 'bold', color: '#120B8F', marginBottom: 4 },
  stepDesc: { fontSize: 14, color: '#333', lineHeight: 20 },
  boldCode: { fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace', fontWeight: 'bold', color: '#D32F2F' },
  bold: { fontWeight: 'bold' },
  resultBox: {
    backgroundColor: '#E8F5E9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  resultLabel: { fontSize: 14, color: '#2E7D32', fontWeight: 'bold' },
  resultValue: { fontSize: 16, color: '#1B5E20', fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace', marginTop: 5 },
  nextButton: {
    marginTop: 35,
    paddingVertical: 16,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});