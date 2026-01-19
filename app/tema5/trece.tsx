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

export default function MetodoInsercionEjemploScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const pythonCode = `def insercion(lista):
    # Recorremos desde el segundo elemento
    for i in range(1, len(lista)):
        clave = lista[i]
        j = i - 1
        
        # Desplazamos elementos mayores que la clave
        while j >= 0 and lista[j] > clave:
            lista[j + 1] = lista[j]
            j -= 1
            
        # Insertamos la clave en su lugar
        lista[j + 1] = clave
    return lista

# Ejemplo de uso
arr = [5, 2, 4, 1, 3]
print(insercion(arr))`;

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Ejemplo: Inserción</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.mainTitle}>Implementación en Python</Text>

        {/* Tarjeta de Código tipo Editor */}
        <View style={styles.codeContainer}>
          <View style={styles.codeHeader}>
            <View style={styles.dotRed} />
            <View style={styles.dotYellow} />
            <View style={styles.dotGreen} />
            <Text style={styles.codeHeaderText}>insertion_sort.py</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <Text style={styles.codeText}>{pythonCode}</Text>
          </ScrollView>
        </View>

        

        <Text style={styles.sectionTitle}>Análisis de la lógica</Text>

        <View style={styles.explanationSection}>
          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>La "Clave" (lista[i])</Text>
            <Text style={styles.stepDesc}>
              Es el elemento que estamos evaluando en la mano. Intentamos buscarle su lugar correcto a la izquierda.
            </Text>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>El desplazamiento (while)</Text>
            <Text style={styles.stepDesc}>
              Mientras los números a la izquierda sean <Text style={styles.bold}>mayores</Text> que nuestra clave, los movemos un espacio a la derecha para abrir camino.
            </Text>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>Inserción (j + 1)</Text>
            <Text style={styles.stepDesc}>
              Cuando el bucle se detiene, <Text style={styles.bold}>j</Text> apunta al primer número menor o al inicio. Colocamos la clave justo después.
            </Text>
          </View>
        </View>

        {/* Resultado Final */}
        <View style={styles.resultBox}>
          <Ionicons name="terminal-outline" size={20} color="#2E7D32" />
          <Text style={styles.resultText}>Terminal: [1, 2, 3, 4, 5]</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.7, alignSelf: 'center' }]}
          onPress={() => router.push('/tema5/catorce')}
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
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 12 },
  barTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  scrollContent: { padding: 20 },
  mainTitle: { fontSize: 22, fontWeight: 'bold', color: '#120B8F', marginBottom: 20, textAlign: 'center' },
  
  // Editor de código
  codeContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    width: '100%',
    paddingBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  codeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 10,
  },
  dotRed: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FF5F56', marginRight: 6 },
  dotYellow: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FFBD2E', marginRight: 6 },
  dotGreen: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#27C93F', marginRight: 10 },
  codeHeaderText: { color: '#AAA', fontSize: 11, fontFamily: 'monospace' },
  codeText: {
    color: '#9CDCFE',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontSize: 14,
    paddingHorizontal: 15,
    lineHeight: 20,
  },

  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 30, marginBottom: 15 },
  explanationSection: { width: '100%' },
  stepCard: {
    backgroundColor: '#F0F4FF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#5087F7',
  },
  stepTitle: { fontSize: 15, fontWeight: 'bold', color: '#120B8F', marginBottom: 4 },
  stepDesc: { fontSize: 14, color: '#555', lineHeight: 20 },
  bold: { fontWeight: 'bold' },

  resultBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  resultText: { marginLeft: 10, color: '#2E7D32', fontWeight: 'bold', fontFamily: 'monospace' },

  nextButton: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});