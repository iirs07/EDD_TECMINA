import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Ajustar las rutas relativas 
type TemaRoute =
  | '/tema1/tema1'
  | '/tema2'
  | '/tema3/tema3'
  | '/tema4'
  | '/tema5/tema5'
  | '/tema6';

const botones: { label: string; route: TemaRoute }[] = [
  { label: 'Tema I. Introducción a las Estructuras de Datos', route: '/tema1/tema1' },
  { label: 'Tema II. Recursividad', route: '/tema2' },
  { label: 'Tema III. Estructuras Lineales', route: '/tema3/tema3' },
  { label: 'Tema IV. Estructuras No Lineales', route: '/tema4' },
  { label: 'Tema V. Métodos de ordenamiento', route: '/tema5/tema5' },
  { label: 'Tema VI. Métodos de búsqueda', route: '/tema6' },
];

export default function MenuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior azul oscuro */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Menú de Temas</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.introductionText}>
          📘 Bienvenido al menú de temas. Selecciona el tema que deseas explorar.
        </Text>

        <View style={styles.buttonsContainer}>
          {botones.map((boton, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button, 
                index % 2 === 0 ? styles.buttonLight : styles.buttonDark, 
                { marginBottom: 15 }, // Espacio 
              ]}
              onPress={() => router.push(boton.route)} // Uso de la ruta correcta
            >
              <Text style={styles.buttonText}>{boton.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    marginRight: 12,
  },
  barTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  introductionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 14,
    width: '100%',
    maxWidth: 380,
  },
  buttonLight: {
    backgroundColor: '#8BCFF1',  // Color claro
  },
  buttonDark: {
    backgroundColor: '#B1DFE6',  // Color más oscuro
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});
