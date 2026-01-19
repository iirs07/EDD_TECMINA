import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity, // 1. Importamos ScrollView
  useWindowDimensions,
  View,
} from 'react-native';

export default function Tema2Screen() {
  const router = useRouter();
  const { width } = useWindowDimensions(); // Obtenemos el ancho de la pantalla

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tipos de Estructuras Lineales</Text>
      </View>

      {/* 3. Contenedor con Scroll para que quepa todo el contenido */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Concepto */}
        <View style={styles.contentBoxConcept}>
          <Text style={styles.heading}>Tipos de Estructuras Lineales</Text>
          <Text style={styles.paragraph}>
            Las estructuras lineales incluyen varios tipos principales, que son:
          </Text>
        </View>

        {/* Pilas */}
        <View style={styles.rowContainer}>
          <View style={[styles.contentBoxSmall, { flex: 1 }]}>
            <Text style={styles.headingSmall}>1. Pilas</Text>
          </View>
          <Image
            source={require('../../assets/images/pila.png')}
            style={[styles.sideImageRight, { width: width * 0.45 }]}
          />
        </View>

        {/* Colas */}
        <View style={styles.rowContainer}>
          <View style={[styles.contentBoxSmall, { flex: 1 }]}>
            <Text style={styles.headingSmall}>2. Colas</Text>
          </View>
          <Image
            source={require('../../assets/images/cola.jpg')}
            style={[styles.sideImageRight, { width: width * 0.45 }]}
          />
        </View>

        {/* Listas */}
        <View style={styles.rowContainer}>
          <View style={[styles.contentBoxSmall, { flex: 1 }]}>
            <Text style={styles.headingSmall}>3. Listas</Text>
          </View>
          <Image
            source={require('../../assets/images/lista.png')}
            style={[styles.sideImageRight, { width: width * 0.45 }]}
          />
        </View>

        {/* Importancia */}
        <View style={styles.contentBoxConcept}>
          <Text style={styles.heading}>Importancia de las Estructuras Lineales</Text>
          <Text style={styles.paragraph}>
            Permiten un acceso y manipulación de los datos en orden secuencial, lo cual es esencial para el rendimiento en tareas como la búsqueda, inserción y eliminación de datos.
          </Text>
        </View>
        
        {/* Botón de navegación responsivo */}
        <TouchableOpacity
          style={[styles.toggleButton, { width: width * 0.7, alignSelf: 'center' }]}
          onPress={() => router.push('/tema3/siete')}
        >
          <Text style={styles.toggleButtonText}>Iniciar ▶</Text>
        </TouchableOpacity>

        {/* Espacio extra al final */}
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
    paddingBottom: 20,
  },
  contentBoxConcept: {
    backgroundColor: '#B1DFE6',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
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
    lineHeight: 22,
    textAlign: 'justify'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  contentBoxSmall: {
    backgroundColor: '#8BCFF1',
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 2,
    marginRight: 10,
  },
  headingSmall: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  sideImageRight: {
    height: 80,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  toggleButton: {
    marginTop: 30,
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