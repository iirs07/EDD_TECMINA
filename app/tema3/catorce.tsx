import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions, // Añadido para responsividad
} from 'react-native';

export default function OperacionesListaScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Operaciones de Listas</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.section}>
          <Text style={styles.heading}>🔧 Operaciones básicas</Text>
          <Text style={styles.paragraph}>
            Las operaciones más comunes en una lista incluyen:
          </Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.paragraph}>• Crear una lista</Text>
            <Text style={styles.paragraph}>• Verificar si está vacía</Text>
            <Text style={styles.paragraph}>• Obtener su tamaño</Text>
            <Text style={styles.paragraph}>• Obtener la cabeza (head)</Text>
            <Text style={styles.paragraph}>• Agregar elementos</Text>
            <Text style={styles.paragraph}>• Eliminar por índice</Text>
          </View>
        </View>

        

        <View style={styles.section}>
          <Text style={styles.heading}>🛠️ ¿Cómo se realiza?</Text>
          
          {/* Ejemplo: Crear */}
          <Text style={styles.subHeading}>1. Crear una lista</Text>
          <Text style={styles.paragraph}>Array: <Text style={styles.codeText}>let lista = [];</Text></Text>
          <Text style={styles.paragraph}>Linked List: <Text style={styles.codeText}>let head = null;</Text></Text>

          {/* Ejemplo: Tamaño */}
          <Text style={styles.subHeading}>2. Obtener tamaño</Text>
          <Text style={styles.paragraph}>Array: <Text style={styles.codeText}>lista.length;</Text></Text>
          <Text style={styles.paragraph}>Linked List: Recorrer nodos con un contador.</Text>

          {/* Ejemplo: Agregar */}
          <Text style={styles.subHeading}>3. Agregar elementos</Text>
          <Text style={styles.paragraph}>Array: <Text style={styles.codeText}>lista.push(valor);</Text></Text>
          <Text style={styles.paragraph}>Linked List: Crear nuevo nodo y apuntar al final.</Text>
          
          
        </View>

        <TouchableOpacity
          style={[styles.nextButton, { width: width * 0.8, alignSelf: 'center' }]}
          onPress={() => router.push('/tema3/quince')}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
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
  barTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flexShrink: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  section: {
    backgroundColor: '#E1F5FE',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1565C0',
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    marginBottom: 5,
  },
  bulletContainer: {
    paddingLeft: 10,
  },
  codeText: {
    backgroundColor: '#ECEFF1',
    color: '#D32F2F',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  nextButton: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});