import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';

export default function ClasificacionScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Clasificación</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Encabezado */}
        <View style={styles.headerBox}>
          <Text style={styles.heading}>CLASIFICACIÓN DE LOS MÉTODOS</Text>
          <Text style={styles.paragraph}>
            La principal diferencia radica en el lugar donde se almacenan los datos durante el proceso:
          </Text>
        </View>

        

        {/* Tarjeta Internos */}
        <View style={styles.cardInternos}>
          <View style={styles.cardHeader}>
            <Ionicons name="hardware-chip-outline" size={24} color="#CA6F1E" />
            <Text style={styles.subheading}>1. Métodos Internos</Text>
          </View>
          <Text style={styles.paragraph}>
            Se realizan íntegramente en la **Memoria RAM**. Son extremadamente rápidos pero están limitados por la capacidad de la memoria principal.
          </Text>
          {["Burbuja", "Quicksort", "Inserción", "ShellSort"].map((item, index) => (
            <View key={index} style={styles.bulletItem}>
              <Ionicons name="checkmark-circle" size={16} color="#CA6F1E" />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Tarjeta Externos */}
        <View style={styles.cardExternos}>
          <View style={styles.cardHeader}>
            <Ionicons name="save-outline" size={24} color="#2874A6" />
            <Text style={[styles.subheading, { color: '#1B4F72' }]}>2. Métodos Externos</Text>
          </View>
          <Text style={styles.paragraph}>
            Se usan cuando los datos no caben en la RAM y residen en **archivos o discos**. Requieren técnicas de mezcla y partición.
          </Text>
          {["Intercalación", "Mezcla Directa", "Mezcla Natural"].map((item, index) => (
            <View key={index} style={styles.bulletItem}>
              <Ionicons name="checkmark-circle" size={16} color="#2874A6" />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Botón Siguiente responsivo */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema5/uno')}
        >
          <Text style={styles.nextButtonText}>Comenzar con Burbuja</Text>
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 10,
    textAlign: 'center', 
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#873600',
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    marginBottom: 10,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 6,
  },
  bulletText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#444',
  },
  cardInternos: {
    backgroundColor: '#FEF5E7',
    width: '90%',
    marginTop: 15,
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#CA6F1E',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardExternos: {
    backgroundColor: '#EBF5FB',
    width: '90%',
    marginTop: 20,
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#2874A6',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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