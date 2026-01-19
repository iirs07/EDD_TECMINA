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

export default function TiposListasScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tipos de Listas</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.section}>
          <Text style={styles.heading}>📘 Clasificación de Listas</Text>

          {/* Lista Enlazada Simple */}
          <Text style={styles.subheading}>• Lista Enlazada Simple</Text>
          <Text style={styles.paragraph}>
            Cada nodo contiene un valor y un **puntero único** hacia el siguiente elemento. 
            Es la forma más básica y eficiente en uso de memoria para colecciones dinámicas.
          </Text>
          
          <Image 
            source={require('../../assets/images/lista2.png')} 
            style={[styles.image, { height: width * 0.35 }]} 
          />

          <View style={styles.separator} />

          {/* Lista Doblemente Enlazada */}
          <Text style={styles.subheading}>• Lista Doblemente Enlazada</Text>
          <Text style={styles.paragraph}>
            Cada nodo tiene **dos punteros**: uno al siguiente y otro al anterior. 
            Esto permite navegación bidireccional (hacia adelante y hacia atrás).
          </Text>
          
          <Image 
            source={require('../../assets/images/lista3.png')} 
            style={[styles.image, { height: width * 0.35 }]} 
          />
        </View>

        <TouchableOpacity 
          style={[styles.nextButton, { width: width * 0.7, alignSelf: 'center' }]} 
          onPress={() => router.push('/tema3/dieciseis')}
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
    alignItems: 'center' 
  },
  backButton: { marginRight: 12 },
  barTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  scrollContainer: { padding: 20 },
  section: { 
    backgroundColor: '#8BCFF1', 
    padding: 20, 
    borderRadius: 15, 
    marginBottom: 15, 
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heading: { fontSize: 20, fontWeight: 'bold', color: '#0D47A1', marginBottom: 15 },
  subheading: { fontSize: 17, fontWeight: 'bold', color: '#120B8F', marginTop: 10, marginBottom: 5 },
  paragraph: { fontSize: 15, color: '#333', lineHeight: 22, textAlign: 'justify' },
  image: { marginTop: 12, width: '100%', borderRadius: 10, resizeMode: 'contain' },
  separator: { height: 25, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.05)', marginVertical: 10 },
  nextButton: { 
    marginTop: 20, 
    paddingVertical: 15, 
    backgroundColor: '#5087F7', 
    borderRadius: 30, 
    alignItems: 'center', 
    marginBottom: 30 
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});