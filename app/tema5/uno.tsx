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
  View,
  useWindowDimensions
} from 'react-native';

export default function MetodoBurbujaScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Internos - Método Burbuja</Text>
      </View>

      {/* Contenido scrollable */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Encabezado */}
        <View style={styles.headerBox}>
          <Text style={styles.heading}>MÉTODO DE ORDENAMIENTO BURBUJA</Text>
          
          {/* Tarjeta del concepto */}
          <View style={styles.conceptCard}>
            <Text style={styles.paragraph}>
              El <Text style={styles.bold}>método burbuja</Text> es una técnica sencilla para ordenar una lista. 
              Funciona comparando pares de elementos adyacentes y cambiándolos de lugar si están en el orden incorrecto. 
              Se llama así porque los elementos más grandes "flotan" hacia el final de la lista como burbujas de aire.
            </Text>
          </View>
        </View>

        {/* Imagen adaptable */}
        
        <Image
          source={require('../../assets/images/burbuja.png')}
          style={[styles.imageBelow, { width: width * 0.9, height: height * 0.3 }]}
        />

        {/* Botón Siguiente responsivo */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema5/dos')}
        >
          <Text style={styles.nextButtonText}>Funcionamiento ▶</Text>
        </TouchableOpacity>

        {/* Espacio extra al final */}
        <View style={{ height: 20 }} />
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
    alignItems: 'center',
  },
  headerBox: {
    marginTop: 20,
    width: '90%',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 15,
    textAlign: 'center',
  },
  conceptCard: {
    backgroundColor: '#F0F4FF',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
    color: '#120B8F',
  },
  imageBelow: {
    borderRadius: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
  },
  nextButton: {
    marginTop: 40,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});