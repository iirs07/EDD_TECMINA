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
  useWindowDimensions // Hook para responsividad
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
        <Text style={styles.barTitle}>Método Burbuja</Text>
      </View>

      {/* Contenido scrollable */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerBox}>
          <Text style={styles.heading}>¿CÓMO FUNCIONA?</Text>

          {/* Pasos del algoritmo */}
          {[
            { step: 'Paso 1', desc: 'Se recorre la lista desde el primer hasta el penúltimo elemento.' },
            { step: 'Paso 2', desc: 'Se comparan elementos adyacentes (los que están uno junto al otro).' },
            { step: 'Paso 3', desc: 'Si el primero es mayor que el segundo, se intercambian.' },
            { step: 'Paso 4', desc: 'Al finalizar una pasada, el número más grande "flota" hasta el final.' },
            { step: 'Paso 5', desc: 'Se repite el proceso ignorando el último elemento ya ordenado.' },
          ].map((item, index) => (
            <View key={index} style={styles.conceptCard}>
              <Text style={styles.subheading}>{item.step}</Text>
              <Text style={styles.paragraph}>{item.desc}</Text>
            </View>
          ))}
        </View>

        {/* Imagen representativa del intercambio */}
        
        <Image
          source={require('../../assets/images/burbuja1.png')}
          style={[styles.imageBelow, { width: width * 0.9, height: height * 0.3 }]}
        />

        {/* Botón Siguiente responsivo */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema5/tres')}
        >
          <Text style={styles.nextButtonText}>Siguiente ▶</Text>
        </TouchableOpacity>

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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 20,
    textAlign: 'center',
  },
  conceptCard: {
    backgroundColor: '#F0F4FF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: '#5087F7', // Indicador visual lateral
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  imageBelow: {
    resizeMode: 'contain', // Mejor para diagramas técnicos
    alignSelf: 'center',
    marginTop: 20,
  },
  nextButton: {
    marginTop: 30,
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