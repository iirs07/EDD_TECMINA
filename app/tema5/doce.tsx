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

export default function MetodoInsercionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Método Inserción</Text>
      </View>

      {/* Contenido scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Encabezado */}
        <View style={styles.headerBox}>
          <Text style={styles.heading}>¿CÓMO FUNCIONA?</Text>
          
          {/* Imagen ilustrativa - Paso 1 */}
          <Image
            source={require('../../assets/images/i1.png')}
            style={styles.imageStep1}
          />
          
          {/* Tarjeta Paso 1 */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 1: Se comienza con el segundo elemento</Text>
            <Text style={styles.paragraph}>
              Comienza con el segundo valor de la lista y lo toma como clave. Luego, se compara con los valores
              que están a su izquierda.
            </Text>
          </View>

          {/* Imagen ilustrativa - Paso 2 */}
          <Image
            source={require('../../assets/images/i2.png')}
            style={styles.imageStep2}
          />
          
          {/* Tarjeta Paso 2 */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 2: Comparación y Desplazamiento</Text>
            <Text style={styles.paragraph}>
              Si la clave es menor que los elementos a su izquierda, se desplazan los valores mayores hacia la derecha
              hasta encontrar el lugar adecuado para la clave.
            </Text>
          </View>

          {/* Imagen ilustrativa - Paso 3 */}
          <Image
            source={require('../../assets/images/i3.png')}
            style={styles.imageStep3}
          />
          
          {/* Tarjeta Paso 3 */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 3: Inserción en la posición correcta</Text>
            <Text style={styles.paragraph}>
              Una vez encontrado el lugar adecuado, se inserta la clave en esa posición. 
              Luego, se repite este proceso para los siguientes elementos de la lista.
            </Text>
          </View>

          {/* Imagen ilustrativa - Paso 4 */}
          <Image
            source={require('../../assets/images/i4.png')}
            style={styles.imageStep4}
          />
          
          {/* Tarjeta Paso 4 */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 4: Repetir hasta ordenar toda la lista</Text>
            <Text style={styles.paragraph}>
              Este proceso se repite hasta que toda la lista esté ordenada.
            </Text>
          </View>

          {/* Imagen ilustrativa - Paso 5 */}
          <Image
            source={require('../../assets/images/i5.png')}
            style={styles.imageStep5}
          />

          {/* Imagen ilustrativa - Paso 6 */}
          <Image
            source={require('../../assets/images/i6.png')}
            style={styles.imageStep6}
          />

          {/* Botón Siguiente */}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.push('/tema5/trece')}
          >
            <Text style={styles.nextButtonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  conceptCard: {
    backgroundColor: '#F0F4FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  // Estilos para cada imagen con tamaños específicos
  imageStep1: {
    width: '80%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 1,
  },
  imageStep2: {
    width: '80%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 1,
  },
  imageStep3: {
    width: '80%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  imageStep4: {
    width: '80%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  imageStep5: {
    width: '80%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 0,
  },
  imageStep6: {
    width: '80%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 0,
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
