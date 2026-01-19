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

export default function MetodoIntercalacionFuncionamientoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Método Intercalación</Text>
      </View>

      {/* Contenido scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Encabezado */}
        <View style={styles.headerBox}>
          <Text style={styles.heading}>¿CÓMO FUNCIONA?</Text>

          {/* Tarjeta Paso 1 */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 1</Text>
            <Text style={styles.paragraph}>
              Se divide el archivo o conjunto de datos en bloques más pequeños que estén previamente ordenados.
            </Text>
          </View>

          {/* Tarjeta Paso 2 */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 2</Text>
            <Text style={styles.paragraph}>
              Se seleccionan dos bloques ordenados y se comparan los primeros elementos de cada uno.
            </Text>
          </View>

          {/* Tarjeta Paso 3 */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 3</Text>
            <Text style={styles.paragraph}>
              El menor de los elementos comparados se escribe en el archivo final.
            </Text>
          </View>

          {/* Tarjeta Paso 4 */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 4</Text>
            <Text style={styles.paragraph}>
              Se avanza al siguiente elemento en el bloque de donde provino el menor valor.
            </Text>
          </View>

          {/* Tarjeta Paso 5 */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 5</Text>
            <Text style={styles.paragraph}>
              El proceso continúa hasta que todos los bloques hayan sido fusionados en un único bloque ordenado.
            </Text>
          </View>
        </View>

        {/* Imagen */}
        <Image
          source={require('../../assets/images/inter.jpg')}
          style={styles.imageBelow}
        />

        {/* Botón Siguiente */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push('/tema5/diecisiete')}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
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
  imageBelow: {
    width: '90%',
    height: 290,
    borderRadius: 0,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 40,
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
