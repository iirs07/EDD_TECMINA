import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity, // 1. Importar ScrollView
  useWindowDimensions,
  View,
} from 'react-native';

export default function CaracteristicasScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions(); // Obtenemos el ancho de la pantalla

  const caracteristicas = [
    'Secuencialidad: Los elementos están organizados en un orden específico.',
    'Relación Directa: Cada elemento tiene un predecesor y un sucesor.',
    'Acceso Ordenado: Se accede a los elementos de forma secuencial.',
    'Fácil Recorrido: Se pueden recorrer con bucles fácilmente.',
    'Uso de Memoria: Usan memoria contigua o enlaces entre elementos.',
    'Inserción y Eliminación Secuencial: Requieren mover elementos.',
    'Acceso Directo o Secuencial: Algunas estructuras permiten acceso directo (arreglos).',
    'Espacio de Memoria: Memoria predecible, fija o dinámica.',
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Características principales</Text>
      </View>

      {/* 3. ScrollView envolviendo las tarjetas para adaptabilidad */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.cardContainer}>
          {caracteristicas.map((texto, index) => {
            const [concepto, descripcion] = texto.split(':');
            return (
              <View key={index} style={styles.card}>
                <Ionicons name="ellipse" size={10} color="#120B8F" style={styles.icon} />
                <Text style={styles.cardText}>
                  <Text style={styles.boldText}>{concepto}:</Text>{descripcion}
                </Text>
              </View>
            );
          })}
        </View>

        {/* 4. Botón responsivo usando el ancho detectado */}
        <TouchableOpacity
          style={[styles.toggleButton, { width: width * 0.7, alignSelf: 'center' }]}
          onPress={() => router.push('/tema3/dos')}
        >
          <Text style={styles.toggleButtonText}>Ejercicios ▶</Text>
        </TouchableOpacity>

        {/* Espacio extra al final para un scroll limpio */}
        <View style={{ height: 30 }} />
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
    marginBottom: 10,
  },
  backButton: {
    marginRight: 12,
  },
  barTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flexShrink: 1,
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
  cardContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#120B8F',
    backgroundColor: '#B1DFE6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    flex: 1,
    color: '#120B8F',
  },
  boldText: {
    fontWeight: 'bold',
  },
  toggleButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});