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

export default function TemaColasScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions(); // Obtenemos el ancho del dispositivo

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Colas - Operaciones</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Operaciones Principales */}
        <View style={styles.contentBoxConcept}>
          <Text style={styles.heading}>Operaciones Principales</Text>
          <Text style={styles.paragraph}>
            Las colas realizan principalmente dos operaciones:
          </Text>
          <Text style={styles.paragraph}>
            1. <Text style={styles.boldBlue}>Enqueue</Text>: Inserta un elemento al final de la cola.
          </Text>
          <Text style={styles.paragraph}>
            2. <Text style={styles.boldBlue}>Dequeue</Text>: Elimina el primer elemento de la cola.
          </Text>
          <Text style={styles.paragraph}>
            El <Text style={styles.boldBlue}>frente</Text> es el primer elemento insertado, y es el único accesible para eliminar o consultar.
          </Text>
        </View>

        {/* Imagen ilustrativa responsiva */}
        <View style={styles.imageContainer}>
          
          <Image
            source={require('../../assets/images/cola1.png')}
            style={[styles.sideImage, { width: width * 0.9 }]}
          />
        </View>

        {/* Ejemplo de Cola */}
        <View style={styles.contentBoxConcept}>
          <Text style={styles.heading}>Ejemplo de Cola</Text>
          <Text style={styles.paragraph}>
            Imagina una fila en el cine. Las personas se agregan al final, pero la primera en llegar es la primera en ser atendida. Esto sigue el principio <Text style={styles.boldBlue}>FIFO</Text> (First In, First Out).
          </Text>
        </View>

        {/* Botón de navegación */}
        <TouchableOpacity
          style={[styles.toggleButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema3/doce')}
        >
          <Text style={styles.toggleButtonText}>Siguiente</Text>
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
    backgroundColor: '#E0ECF8',
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
  },
  boldBlue: {
    fontWeight: 'bold',
    color: '#120B8F'
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  sideImage: {
    height: 180,
    borderRadius: 15,
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