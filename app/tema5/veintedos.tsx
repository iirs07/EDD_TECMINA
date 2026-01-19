import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function FuncionamientoMezclaNaturalScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Mezcla Natural</Text>
      </View>

      {/* Contenido */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerBox}>
          <Text style={styles.heading}>¿CÓMO FUNCIONA?</Text>

          {/* Tarjetas descriptivas */}
          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Descripción General</Text>
            <Text style={styles.paragraph}>
              Este método aprovecha las secuencias ordenadas ya existentes en el archivo original, llamadas series naturales, para minimizar el número de pasadas.
            </Text>
          </View>

          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 1</Text>
            <Text style={styles.paragraph}>
              Se realiza una lectura del archivo original y se detectan las secuencias ordenadas (series naturales).
            </Text>
          </View>

          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 2</Text>
            <Text style={styles.paragraph}>
              Estas series se distribuyen alternadamente en dos archivos auxiliares para su fusión.
            </Text>
          </View>

          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 3</Text>
            <Text style={styles.paragraph}>
              Se fusionan las series correspondientes de los archivos auxiliares y se almacenan en un nuevo archivo.
            </Text>
          </View>

          <View style={styles.conceptCard}>
            <Text style={styles.subheading}>Paso 4</Text>
            <Text style={styles.paragraph}>
              El proceso se repite hasta que todas las series se han fusionado en una sola serie ordenada completa.
            </Text>
          </View>
        </View>

        {/* Botón siguiente */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push('/tema5/veintetres')}
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
