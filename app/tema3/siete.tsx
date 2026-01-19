import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity, // 1. Importado para evitar recortes
  useWindowDimensions // 2. Para calcular el tamaño de la imagen
  ,

  View
} from 'react-native';

export default function Tema2Screen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions(); // Obtenemos las dimensiones de la pantalla

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Pilas - Estructura Lineal</Text>
      </View>

      {/* 3. Contenido con Scroll para asegurar que el botón siempre sea accesible */}
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {/* Concepto de Pilas */}
        <View style={styles.contentBoxConcept}>
          <Text style={styles.heading}>¿Qué es una Pila?</Text>
          <Text style={styles.paragraph}>
            Una pila es una estructura de datos que sigue el principio de **LIFO** (Last In, First Out). 
            Esto significa que el último elemento en ser insertado es el primero en ser eliminado. 
            Las pilas se utilizan en una amplia variedad de aplicaciones, como la gestión de la memoria 
            en los programas y la navegación en el historial web.
          </Text>
        </View>

        {/* Imagen Dinámica: Ocupará el 35% de la altura de la pantalla */}
        <Image
          source={require('../../assets/images/pila1.png')}
          style={[styles.largeImage, { width: width * 0.85, height: height * 0.35 }]}
        />

        {/* Botón de navegación responsivo */}
        <TouchableOpacity
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema3/ocho')}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>

        {/* Espacio extra al final para un scroll cómodo */}
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
    width: '90%',
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
    textAlign: 'justify'
  },
  largeImage: {
    marginTop: 40, // Reducido para mejor flujo visual
    alignSelf: 'center',
    borderRadius: 12,
    resizeMode: 'contain',
  },
  nextButton: {
    marginTop: 40,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});