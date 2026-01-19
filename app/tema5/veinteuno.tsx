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
  View
} from 'react-native';

export default function MetodoMezclaNaturalScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Externos - Mezcla Natural</Text>
      </View>

      {/* Contenido scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Encabezado */}
        <View style={styles.headerBox}>
          <Text style={styles.heading}>MÉTODO DE MEZCLA NATURAL</Text>

          {/* Tarjeta del concepto */}
          <View style={styles.conceptCard}>
            <Text style={styles.paragraph}>
              La <Text style={{ fontWeight: 'bold' }}>mezcla natural</Text> es un algoritmo de ordenamiento externo basado en el principio
              de dividir y combinar, pero con una diferencia clave: en lugar de dividir los datos en bloques de tamaño fijo, 
              el algoritmo busca bloques ya ordenados en el arreglo original y los fusiona para formar nuevos bloques ordenados.
              Este proceso se repite hasta que todos los bloques están combinados en un único arreglo ordenado.
            </Text>
          </View>
        </View>

        {/* Imagen del algoritmo de Mezcla Natural */}
        <Image
          source={require('../../assets/images/natural.png')}  // Cambia la ruta a la imagen de Mezcla Natural
          style={styles.imageBelow}
        />
         <Image
          source={require('../../assets/images/natural1.png')}  // Cambia la ruta a la imagen de Mezcla Natural
          style={styles.imageBelow1}
        />

        {/* Botón Siguiente */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push('/tema5/veintedos')}  // Aquí va la siguiente pantalla
        >
          <Text style={styles.nextButtonText}>Funcionamiento</Text>
        </TouchableOpacity>
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
    paddingBottom: 30,
  },
  headerBox: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 10,
    textAlign: 'center',
  },
  conceptCard: {
    backgroundColor: '#F0F4FF',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  imageBelow: {
    width: '70%',
    height: 230,
    borderRadius: 8,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 40,
  },
  imageBelow1: {
    width: '70%',
    height: 170,
    borderRadius: 9,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 7,
  },
  
  nextButton: {
    marginTop: 30,
    marginHorizontal: 50,
    paddingVertical: 12,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
