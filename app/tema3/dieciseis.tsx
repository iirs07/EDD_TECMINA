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
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tipos de Listas</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.heading}>📘 Más Variaciones de Listas</Text>

          {/* Lista Circular */}
          <Text style={styles.subheading}>• Lista Circular</Text>
          <Text style={styles.paragraph}>
            Es una variante donde el puntero del **último nodo** no es nulo, sino que apunta de regreso al **primer nodo**. Esto crea un ciclo infinito de recorrido, ideal para sistemas operativos o juegos que rotan turnos.
          </Text>
          
          <Image 
            source={require('../../assets/images/lista4.png')} 
            style={[styles.image, { height: width * 0.35 }]} 
          />

          <View style={styles.separator} />

          {/* Lista Basada en Array */}
          <Text style={styles.subheading}>• Lista Basada en Array (ArrayList)</Text>
          <Text style={styles.paragraph}>
            Utiliza un bloque de memoria contiguo. Es extremadamente rápida para leer datos por índice ($O(1)$), pero costosa para insertar elementos al inicio, ya que requiere desplazar todos los demás elementos.
          </Text>
          
          <Image 
            source={require('../../assets/images/lista5.png')} 
            style={[styles.image, { height: width * 0.3 }]} 
          />
        </View>

        <TouchableOpacity 
          style={[styles.nextButton, { width: width * 0.7, alignSelf: 'center' }]} 
          onPress={() => router.push('/tema3/diecisiete')}
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
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heading: { fontSize: 16, fontWeight: 'bold', color: '#0D47A1', marginBottom: 15 },
  subheading: { fontSize: 17, fontWeight: 'bold', color: '#120B8F', marginTop: 10, marginBottom: 5 },
  paragraph: { fontSize: 15, color: '#333', lineHeight: 22, textAlign: 'justify' },
  image: { marginTop: 12, width: '100%', borderRadius: 10, resizeMode: 'contain' },
  separator: { 
    height: 1, 
    backgroundColor: 'rgba(0,0,0,0.1)', 
    marginVertical: 25 
  },
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