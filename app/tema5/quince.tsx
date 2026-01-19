import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';

export default function MetodoIntercalacionScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#120B8F" />
      
      {/* Barra superior con padding dinámico */}
      <View style={[styles.blueBar, { paddingTop: Platform.OS === 'ios' ? 60 : 45 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Externos - Intercalación</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerBox}>
          <Text style={styles.heading}>ORDENAMIENTO POR INTERCALACIÓN</Text>
          
          <View style={[styles.conceptCard, { width: width * 0.9, alignSelf: 'center' }]}>
            <Text style={styles.paragraph}>
              El <Text style={styles.boldText}>método de intercalación</Text> es una técnica fundamental en los ordenamientos externos.
              {"\n\n"}
              Es ideal cuando los datos residen en archivos y no caben en la RAM. Consiste en tomar dos o más secuencias ya ordenadas y 
              <Text style={styles.boldText}> fusionarlas </Text> 
              para crear una nueva secuencia única y totalmente organizada.
            </Text>
          </View>
        </View>

        

        {/* Imagen adaptable - Asegúrate de que el nombre del archivo sea correcto */}
        <Image
          source={require('../../assets/images/intercalacion.png')}
          style={[styles.imageBelow, { width: width * 0.9 }]}
          resizeMode="contain"
        />

        <View style={styles.tipBox}>
          <Ionicons name="flash-outline" size={20} color="#120B8F" />
          <Text style={styles.tipText}>
            Dato clave: Es la base de algoritmos potentes como el MergeSort.
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.7, alignSelf: 'center' }]}
          onPress={() => router.push('/tema5/dieciseis')}
        >
          <Text style={styles.nextButtonText}>Funcionamiento ▶</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  backButton: { marginRight: 12 },
  barTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  headerBox: {
    marginTop: 25,
    paddingHorizontal: 10,
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
    padding: 22,
    borderRadius: 15,
    borderLeftWidth: 6,
    borderLeftColor: '#5087F7',
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
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  imageBelow: {
    height: 200,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 30,
  },
  tipBox: {
    flexDirection: 'row',
    backgroundColor: '#E8EAF6',
    marginHorizontal: 25,
    marginTop: 25,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  tipText: {
    marginLeft: 10,
    color: '#120B8F',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  nextButton: {
    marginTop: 35,
    paddingVertical: 16,
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