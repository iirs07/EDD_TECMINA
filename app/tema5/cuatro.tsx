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

export default function MetodoBurbujaEjemploScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Datos de las iteraciones para un renderizado más limpio
  const iteraciones = [
    { id: 1, lista: '[34, 25, 12, 22, 11, 64, 90]', desc: 'El 64 "burbujea" hasta su posición correcta antes del 90.' },
    { id: 2, lista: '[25, 12, 22, 11, 34, 64, 90]', desc: 'El 34 se coloca en su lugar final.' },
    { id: 3, lista: '[12, 22, 11, 25, 34, 64, 90]', desc: 'El 25 queda ordenado.' },
    { id: 4, lista: '[12, 11, 22, 25, 34, 64, 90]', desc: 'El 22 queda ordenado.' },
    { id: 5, lista: '[11, 12, 22, 25, 34, 64, 90]', desc: 'Intercambio final entre 12 y 11.' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Simulación paso a paso</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.introBox}>
          <Text style={styles.mainTitle}>Trazado del Algoritmo</Text>
          <Text style={styles.paragraph}>
            Observa cómo en cada iteración el número más grande se desplaza hacia la derecha.
          </Text>
        </View>

        

        {/* Iteración 1 Detallada */}
        <View style={[styles.conceptCard, styles.firstIteration]}>
          <Text style={styles.subheading}>Iteración 1: El inicio</Text>
          <Text style={styles.paragraph}>
            Lista inicial: <Text style={styles.bold}>[64, 34, 25, 12, 22, 11, 90]</Text>{"\n\n"}
            • 64 {'>'} 34 → Intercambio{"\n"}
            • 64 {'>'} 25 → Intercambio{"\n"}
            • 64 {'>'} 12 → Intercambio{"\n"}
            • ... continúa hasta colocar el <Text style={styles.bold}>64</Text> antes del 90.
          </Text>
        </View>

        {/* Mapeo de iteraciones siguientes */}
        {iteraciones.map((item) => (
          <View key={item.id} style={styles.conceptCard}>
            <View style={styles.cardHeader}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>{item.id + 1}</Text>
              </View>
              <Text style={styles.subheading}>Iteración {item.id + 1}</Text>
            </View>
            <Text style={styles.codeText}>{item.lista}</Text>
            <Text style={styles.descText}>{item.desc}</Text>
          </View>
        ))}

        <View style={[styles.conceptCard, styles.finalCard]}>
          <Text style={styles.subheading}>✅ Resultado Final</Text>
          <Text style={styles.finalList}>[11, 12, 22, 25, 34, 64, 90]</Text>
          <Text style={styles.descText}>La lista está completamente ordenada.</Text>
        </View>

        <TouchableOpacity
          style={[styles.nextButton, { width: width * 0.7, alignSelf: 'center' }]}
          onPress={() => router.push('/tema5/cinco')}
        >
          <Text style={styles.nextButtonText}>Siguiente tema ▶</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 12 },
  barTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  scrollContent: { padding: 20 },
  introBox: { marginBottom: 20 },
  mainTitle: { fontSize: 22, fontWeight: 'bold', color: '#120B8F', marginBottom: 8 },
  paragraph: { fontSize: 15, color: '#444', lineHeight: 22 },
  conceptCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  firstIteration: { borderLeftWidth: 5, borderLeftColor: '#5087F7' },
  finalCard: { backgroundColor: '#E8F5E9', borderLeftWidth: 5, borderLeftColor: '#2E7D32' },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#120B8F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  circleText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  subheading: { fontSize: 16, fontWeight: 'bold', color: '#120B8F' },
  codeText: {
    fontFamily: 'monospace',
    backgroundColor: '#F0F4FF',
    padding: 8,
    borderRadius: 6,
    color: '#000',
    fontSize: 14,
    marginVertical: 8,
  },
  descText: { fontSize: 14, color: '#666', fontStyle: 'italic' },
  finalList: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32', textAlign: 'center', marginVertical: 10 },
  bold: { fontWeight: 'bold', color: '#000' },
  nextButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});