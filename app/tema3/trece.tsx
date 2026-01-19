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

export default function TemaListasScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Listas - Estructura Lineal</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Concepto de Listas */}
        <View style={styles.contentBoxConcept}>
          <Text style={styles.heading}>¿Qué es una Lista?</Text>
          <Text style={styles.paragraph}>
            Una lista es una estructura de datos que puede almacenar una colección de elementos de manera secuencial. 
            {"\n\n"}
            A diferencia de los arreglos, las listas tienen un tamaño dinámico, lo que permite agregar o eliminar elementos con facilidad. Son fundamentales para implementar estructuras más complejas como árboles o grafos.
          </Text>
        </View>

        {/* Imagen de la lista responsiva */}
        
        <Image
          source={require('../../assets/images/lista1.png')}
          style={[styles.largeImage, { width: width * 0.9, height: height * 0.3 }]}
        />

        {/* Botón de navegación siguiente */}
        <TouchableOpacity
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema3/catorce')}
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
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  largeImage: {
    marginTop: 40,
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