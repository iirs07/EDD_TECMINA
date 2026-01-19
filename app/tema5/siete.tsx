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
  useWindowDimensions // Hook para detectar el tamaño de la pantalla
} from 'react-native';

export default function MetodoQuickSortScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  // Array de pasos para un renderizado más limpio
  const steps = [
    { title: 'Paso 1', text: 'Se selecciona un elemento clave llamado pivote.' },
    { title: 'Paso 2', text: 'Se reordenan los elementos: los menores al pivote a la izquierda y los mayores a la derecha.' },
    { title: 'Paso 3', text: 'El pivote queda en su posición final, dividiendo la lista en dos sublistas.' },
    { title: 'Paso 4', text: 'Se repite el proceso de forma recursiva con las sublistas izquierda y derecha.' },
    { title: 'Paso 5', text: 'El algoritmo termina cuando todas las sublistas están vacías o tienen un solo elemento.' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Funcionamiento QuickSort</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerBox}>
          <Text style={styles.heading}>¿CÓMO TRABAJA EL ALGORITMO?</Text>

          {/* Renderizado dinámico de tarjetas de pasos */}
          {steps.map((item, index) => (
            <View key={index} style={styles.conceptCard}>
              <View style={styles.stepHeader}>
                <View style={styles.stepCircle}>
                  <Text style={styles.stepCircleText}>{index + 1}</Text>
                </View>
                <Text style={styles.subheading}>{item.title}</Text>
              </View>
              <Text style={styles.paragraph}>{item.text}</Text>
            </View>
          ))}
        </View>

        {/* Imagen del proceso de partición */}
        

        <Image
          source={require('../../assets/images/quicksort1.png')}
          style={[
            styles.imageBelow, 
            { width: width * 0.9, height: height * 0.25 }
          ]}
        />

        {/* Botón Siguiente responsivo */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.7, alignSelf: 'center' }]}
          onPress={() => router.push('/tema5/ocho')}
        >
          <Text style={styles.nextButtonText}>Siguiente ▶</Text>
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
    paddingBottom: 20,
  },
  headerBox: {
    marginTop: 20,
    marginHorizontal: 20,
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
    padding: 16,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: '#5087F7',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#120B8F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  stepCircleText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#120B8F',
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  imageBelow: {
    borderRadius: 10,
    resizeMode: 'contain',
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