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

export default function ClasificacionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Clasificación de las Estructuras de Datos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Estáticas */}
        <View style={styles.sectionBox}>
          <Text style={styles.heading}>
            <Ionicons name="cube-outline" size={22} color="#5087F7" /> Tipo de Dato Estático
          </Text>
          <Text style={styles.paragraph}>
            Son aquellas estructuras en las que el tamaño ocupado en memoria se define antes de que
            el programa se ejecute y no puede modificarse durante la ejecución.
          </Text>
          <View style={styles.subBox}>
            <Text style={styles.subheading}>📘 Ejemplos:</Text>
            <Text style={styles.bullet}>• Arreglos (vectores y matrices)</Text>
            <Text style={styles.bullet}>• Registros</Text>
            <Text style={styles.bullet}>• Archivos</Text>
            <Text style={styles.bullet}>• Cadenas de caracteres</Text>
          </View>
        </View>

        {/* Dinámicas */}
        <View style={styles.sectionBox}>
          <Text style={styles.heading}>
            <Ionicons name="sync-outline" size={22} color="#5087F7" /> Tipo de Dato Dinámico
          </Text>
          <Text style={styles.paragraph}>
            Su tamaño puede modificarse en tiempo de ejecución. Permiten estructuras más complejas
            como listas, árboles y grafos.
          </Text>
          <View style={styles.subBox}>
            <Text style={styles.subheading}>📏 Estructuras Lineales:</Text>
            <Text style={styles.bullet}>• Pilas</Text>
            <Text style={styles.bullet}>• Colas</Text>
            <Text style={styles.bullet}>• Listas enlazadas</Text>
          </View>

          <View style={styles.subBoxAlt}>
            <Text style={styles.subheading}>🌳 Estructuras No Lineales:</Text>
            <Text style={styles.bullet}>• Árboles</Text>
            <Text style={styles.bullet}>• Grafos</Text>
          </View>
        </View>

        {/* Botón siguiente */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/tema1/uno')}>
            <Text style={styles.nextButtonText}>Cuestionario</Text>
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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    flexShrink: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  sectionBox: {
    backgroundColor: '#E3EAF4',
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 12,
  },
  imageLeft: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  imageRight: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  subBox: {
    backgroundColor: '#D0EDFB',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  subBoxAlt: {
    backgroundColor: '#C3EDE1',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A3275',
    marginBottom: 6,
  },
  bullet: {
    fontSize: 15,
    color: '#333',
    paddingLeft: 8,
    marginTop: 4,
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  nextButton: {
    backgroundColor: '#120B8F',
    paddingHorizontal: 60,
    paddingVertical: 18,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
