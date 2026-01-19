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

export default function Tema5Screen() {
  const router = useRouter();
  const { width } = useWindowDimensions(); // Obtenemos el ancho de la pantalla

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema V: Métodos de Ordenamiento</Text>
      </View>

      {/* Contenedor con Scroll */}
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {/* ¿Qué son los métodos de ordenamiento? */}
        <View style={styles.contentBox}>
          <Text style={styles.heading}>¿QUÉ SON LOS MÉTODOS DE ORDENAMIENTO?</Text>
          <Text style={styles.paragraph}>
            Son algoritmos que organizan los datos en un orden específico, como ascendente o descendente. 
            Son fundamentales para optimizar búsquedas, mejorar la presentación y facilitar el manejo de información.
          </Text>
          
          <Image
            source={require('../../assets/images/ordenamiento.png')}
            style={styles.imageBelow}
          />
        </View>

        {/* ¿Por qué son importantes? */}
        <View style={styles.contentBox}>
          <Text style={styles.heading}>¿POR QUÉ SON IMPORTANTES?</Text>
          <View style={styles.rowContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.paragraph}>
                Ordenar datos permite encontrar elementos más rápido, detectar duplicados y visualizar mejor la información. 
                {"\n\n"}
                <Text style={styles.boldText}>• Internos:</Text> Burbuja, Quicksort, Inserción, ShellSort y Radix.
                {"\n"}
                <Text style={styles.boldText}>• Externos:</Text> Intercalación, Mezcla Directa y Mezcla Natural.
              </Text>
            </View>
          </View>
        </View>

        {/* Botón de navegación responsivo */}
        <TouchableOpacity
          style={[styles.toggleButton, { width: width * 0.7 }]} // 70% del ancho de pantalla
          onPress={() => router.push('/tema5/clasificacion')}
        >
          <Text style={styles.toggleButtonText}>Ver Clasificación ▶</Text>
        </TouchableOpacity>

        {/* Espacio extra al final para un scroll cómodo */}
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { 
    marginRight: 12 
  },
  barTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flexShrink: 1,
  },
  scrollContent: {
    paddingBottom: 20, // Espacio al final del scroll
    alignItems: 'center',
  },
  contentBox: {
    backgroundColor: '#BDC7D7',
    width: '90%', // Ancho relativo para mejor respuesta
    marginTop: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#120B8F',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBelow: {
    width: '100%', // Se ajusta al ancho del contenedor
    height: 180,
    borderRadius: 10,
    resizeMode: 'contain', // Cambiado a contain para no cortar la imagen educativa
    marginTop: 15,
  },
  toggleButton: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  toggleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});