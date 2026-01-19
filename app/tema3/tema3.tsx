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
  const { width, height } = useWindowDimensions(); // Obtenemos ancho y alto

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema III: Estructuras Lineales</Text>
      </View>

      {/* 3. Contenedor con Scroll para que no se corte el contenido */}
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Concepto */}
        <View style={styles.contentBoxConcept}>
          <Text style={styles.heading}>ESTRUCTURAS LINEALES</Text>
          <Text style={styles.paragraph}>
            Son estructuras de datos en las que los elementos se organizan de manera secuencial, 
            uno después del otro. Cada elemento tiene un lugar específico y puede tener un 
            antecesor y un sucesor directo (excepto el primero y el último).
          </Text>
        </View>

        {/* Ejemplo común */}
        <View style={styles.contentBoxExample}>
          <Text style={styles.heading}>EJEMPLO:</Text>
          <Text style={styles.paragraph}>
            Un ejemplo común de una estructura lineal es una fila en una tienda. Las personas están 
            organizadas de manera secuencial, donde cada persona tiene un sucesor (la persona detrás de 
            ella) y un predecesor (la persona frente a ella). En esta estructura, el acceso y el movimiento 
            se hacen en orden secuencial.
          </Text>
        </View>

        {/* Imagen Responsiva (Ajusta su altura según el ancho de pantalla) */}
        <Image
          source={require('../../assets/images/cinco.jpg')}
          style={[styles.sideImageBottom, { width: width - 40, height: height * 0.3 }]}
        />

        {/* Botón de navegación responsivo */}
        <TouchableOpacity
          style={[styles.toggleButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema3/uno')}
        >
          <Text style={styles.toggleButtonText}>Ver Características ▶</Text>
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
  scrollContainer: {
    paddingBottom: 20,
    alignItems: 'center', // Centra los elementos horizontalmente
  },
  contentBoxConcept: {
    backgroundColor: '#A8D5E2',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '90%', // Asegura que no choque con los bordes
  },
  contentBoxExample: {
    backgroundColor: '#BDC7D7', 
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20, // Aumenté el padding para legibilidad
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '90%',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 10,
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify', // Mejora la estética del texto largo
  },
  sideImageBottom: {
    borderRadius: 8,
    resizeMode: 'cover',
    marginTop: 20,
  },
  toggleButton: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});