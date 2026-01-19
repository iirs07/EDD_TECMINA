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
  useWindowDimensions,
  View
} from 'react-native';

export default function MetodoInsercionScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Barra superior con padding dinámico */}
      <View style={styles.blueBar}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Internos - Método Inserción</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerBox}>
          <Text style={styles.heading}>ORDENAMIENTO POR INSERCIÓN</Text>

          <View style={styles.conceptCard}>
            <Text style={styles.paragraph}>
              El <Text style={styles.bold}>método de inserción</Text> es un algoritmo que construye la lista ordenada de uno en uno.
              {"\n\n"}
              Imagina que estás ordenando cartas: tomas una carta y la "insertas" en el lugar correcto comparándola con las que ya tienes en la mano.
              {"\n\n"}
              Es ideal para <Text style={styles.highlight}>listas casi ordenadas</Text> debido a su baja sobrecarga.
            </Text>
          </View>
        </View>

        {/* Diagrama explicativo del método de inserción */}
        

        <Image
          source={require('../../assets/images/insercion.png')}
          style={[
            styles.imageBelow, 
            { width: width * 0.85, height: height * 0.28 }
          ]}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.75 }]}
          onPress={() => router.push('/tema5/doce')}
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
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 20,
    textAlign: 'center',
  },
  conceptCard: {
    backgroundColor: '#F0F4FF',
    padding: 22,
    borderRadius: 18,
    borderLeftWidth: 6,
    borderLeftColor: '#5087F7',
    // Sombras
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
  bold: { fontWeight: 'bold', color: '#000' },
  highlight: { fontWeight: 'bold', color: '#120B8F' },
  imageBelow: {
    borderRadius: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 35,
  },
  nextButton: {
    marginTop: 35,
    paddingVertical: 16,
    backgroundColor: '#120B8F',
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