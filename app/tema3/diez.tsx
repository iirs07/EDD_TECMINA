import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';

export default function TemaColasScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Colas - Estructura Lineal</Text>
      </View>

      {/* Contenido deslizable */}
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {/* Concepto de Colas */}
        <View style={styles.contentBoxConcept}>
          <Text style={styles.heading}>¿Qué es una Cola?</Text>
          <Text style={styles.paragraph}>
            Una cola es una estructura de datos que sigue el principio de **FIFO** (First In, First Out). 
            Esto significa que el primer elemento en ser insertado es el primero en ser eliminado.
            Se utilizan en situaciones como la gestión de procesos en sistemas operativos y la transmisión de datos en redes.
          </Text>
        </View>

        {/* Imagen Responsiva: ocupa el 30% del alto de la pantalla */}
        
        <Image
          source={require('../../assets/images/cola2.jpg')}
          style={[styles.largeImage, { width: width * 0.85, height: height * 0.3 }]}
        />

        {/* Botón de navegación responsivo */}
        <TouchableOpacity
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema3/once')}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>

        {/* Espacio extra al final para evitar que el botón toque el borde */}
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
  },
  backButton: { marginRight: 12 },
  barTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flexShrink: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  contentBoxConcept: {
    backgroundColor: '#B1DFE6',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '90%', // Asegura que el cuadro no sea más ancho que la pantalla
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 10,
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify', // Mejora la lectura del concepto
  },
  largeImage: {
    marginTop: 40, // Reducido para que quepa mejor en pantallas pequeñas
    alignSelf: 'center',
    borderRadius: 12,
    resizeMode: 'contain',
  },
  nextButton: {
    marginTop: 40,
    paddingVertical: 14,
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