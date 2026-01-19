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

export default function MetodoQuickSortScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Internos - Método QuickSort</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerBox}>
          <Text style={styles.heading}>MÉTODO QUICKSORT</Text>
          
          <View style={styles.conceptCard}>
            <Text style={styles.paragraph}>
              El <Text style={styles.bold}>QuickSort</Text> (Ordenamiento Rápido) es un algoritmo basado en la técnica de <Text style={styles.bold}>"Divide y Vencerás"</Text>.
              {"\n\n"}
              Funciona eligiendo un elemento clave llamado <Text style={styles.highlight}>"Pivote"</Text>. El objetivo es colocar el pivote en su posición final, dejando los menores a un lado y los mayores al otro.
              {"\n\n"}
              Es preferido por su velocidad en grandes volúmenes de datos, con una eficiencia de $O(n \log n)$.
            </Text>
          </View>
        </View>

        {/* Diagrama de partición y pivote */}
        

        <Image
          source={require('../../assets/images/quicksort.png')}
          style={[
            styles.imageBelow, 
            { width: width * 0.9, height: height * 0.28 }
          ]}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.75 }]}
          onPress={() => router.push('/tema5/siete')}
        >
          <Text style={styles.nextButtonText}>Funcionamiento ▶</Text>
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
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerBox: {
    marginTop: 25,
    width: '92%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  conceptCard: {
    backgroundColor: '#F0F4FF',
    padding: 22,
    borderRadius: 18,
    borderLeftWidth: 6,
    borderLeftColor: '#5087F7',
    // Sombras optimizadas
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#120B8F',
    textDecorationLine: 'underline',
  },
  imageBelow: {
    borderRadius: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 35,
  },
  nextButton: {
    marginTop: 35,
    paddingVertical: 16,
    backgroundColor: '#120B8F', // Color más oscuro para el botón principal
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});