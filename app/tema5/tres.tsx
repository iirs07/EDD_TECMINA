import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';

export default function MetodoBurbujaEjemploScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  // Código como string para evitar errores de renderizado
  const pythonCode = `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

lista = [64, 34, 25, 12, 22]
bubble_sort(lista)
print(lista)`;

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Ejemplo en Python</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.mainTitle}>Implementación de la lógica</Text>

        {/* Bloque de Código Estilo Terminal */}
        <View style={styles.codeWrapper}>
          <View style={styles.codeHeader}>
            <Text style={styles.headerText}>bubble_sort.py</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <Text style={styles.codeText}>{pythonCode}</Text>
          </ScrollView>
        </View>

        

        {/* Explicación Detallada */}
        <View style={styles.explanationSection}>
          <View style={styles.infoCard}>
            <Text style={styles.stepTitle}>¿Cómo funciona el código?</Text>
            <Text style={styles.stepDesc}>
              1. <Text style={styles.bold}>n = len(arr):</Text> Define el límite del recorrido.{"\n"}
              2. <Text style={styles.bold}>Bucle i:</Text> Controla cuántas pasadas completas haremos.{"\n"}
              3. <Text style={styles.bold}>Bucle j:</Text> Compara los vecinos. Si el de la izquierda es mayor, los intercambia.{"\n"}
              4. <Text style={styles.bold}>Optimización:</Text> El <Text style={styles.bold}>n-i-1</Text> hace que no revisemos lo que ya está ordenado al final.
            </Text>
          </View>
        </View>

        {/* Resultado Simulado */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Salida en consola:</Text>
          <View style={styles.terminalBox}>
            <Text style={styles.terminalText}>{`> [12, 22, 25, 34, 64]`}</Text>
          </View>
        </View>

        {/* Botón Siguiente Responsivo */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema5/cuatro')}
        >
          <Text style={styles.nextButtonText}>Siguiente Paso ▶</Text>
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
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 12 },
  barTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  scrollContent: { padding: 20, alignItems: 'center' },
  mainTitle: { fontSize: 22, fontWeight: 'bold', color: '#120B8F', marginBottom: 20 },
  
  // Terminal/Code styles
  codeWrapper: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    width: '100%',
    overflow: 'hidden',
    elevation: 5,
  },
  codeHeader: {
    backgroundColor: '#333',
    padding: 8,
    paddingLeft: 15,
  },
  headerText: { color: '#AAA', fontSize: 12, fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace' },
  codeText: {
    color: '#9CDCFE',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    padding: 15,
    fontSize: 14,
    lineHeight: 20,
  },

  explanationSection: { width: '100%', marginTop: 25 },
  infoCard: {
    backgroundColor: '#F0F4FF',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#5087F7',
  },
  stepTitle: { fontSize: 18, fontWeight: 'bold', color: '#120B8F', marginBottom: 10 },
  stepDesc: { fontSize: 15, color: '#333', lineHeight: 24 },
  bold: { fontWeight: 'bold' },

  resultContainer: { width: '100%', marginTop: 20 },
  resultTitle: { fontSize: 16, fontWeight: 'bold', color: '#555', marginBottom: 8 },
  terminalBox: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  terminalText: { fontFamily: 'monospace', color: '#2E7D32', fontWeight: 'bold' },

  nextButton: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});