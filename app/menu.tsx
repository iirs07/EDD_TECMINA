import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';

type TemaRoute =
  | '/tema1/tema1'
  | '/tema2/Recursividad'
  | '/tema3/tema3'
  | '/tema4/Arbol'
  | '/tema5/tema5'
  | '/tema6/BusquedaSecuencial';

const botones: { label: string; route: TemaRoute; icon: keyof typeof Ionicons.glyphMap; color: string }[] = [
  { label: 'Introducción a EDD', route: '/tema1/tema1', icon: 'book', color: '#120B8F' },
  { label: 'Recursividad', route: '/tema2/Recursividad', icon: 'sync', color: '#3498DB' },
  { label: 'Estructuras Lineales', route: '/tema3/tema3', icon: 'reorder-four', color: '#120B8F' },
  { label: 'Estructuras No Lineales', route: '/tema4/Arbol', icon: 'git-network', color: '#3498DB' },
  { label: 'Métodos de ordenamiento', route: '/tema5/tema5', icon: 'swap-vertical', color: '#120B8F' },
  { label: 'Métodos de búsqueda', route: '/tema6/BusquedaSecuencial', icon: 'search', color: '#3498DB' },
];

export default function MenuScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const containerWidth = width > 600 ? 550 : width * 0.92;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Menú de Temas</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={[styles.welcomeCard, { width: containerWidth }]}>
          <View style={styles.welcomeIconContainer}>
            <Ionicons name="school" size={30} color="#120B8F" />
          </View>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeTitle}>¡Explora el contenido!</Text>
            <Text style={styles.welcomeSub}>Selecciona un tema para comenzar.</Text>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {botones.map((boton, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              style={[styles.themeCard, { width: containerWidth }]}
              onPress={() => router.push(boton.route)}
            >
              <View style={[styles.colorIndicator, { backgroundColor: boton.color }]} />
              <View style={styles.cardContent}>
                <View style={styles.iconWrapper}>
                  <Ionicons name={boton.icon} size={26} color={boton.color} />
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.moduloText}>TEMA {index + 1}</Text>
                  <Text style={styles.buttonText} numberOfLines={2}>{boton.label}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F5F9' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: Platform.OS === 'ios' ? 20 : 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 15 },
  barTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' },
  scrollContent: { alignItems: 'center', paddingTop: 20 },
  welcomeCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
  },
  welcomeIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#E0F2FE',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTextContainer: { marginLeft: 15, flex: 1 },
  welcomeTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  welcomeSub: { fontSize: 14, color: '#64748B' },
  gridContainer: { width: '100%', alignItems: 'center' },
  themeCard: {
    backgroundColor: '#FFFFFF',
    height: 90,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 3,
  },
  colorIndicator: { width: 6, height: '100%' },
  cardContent: { flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 },
  iconWrapper: { width: 45, height: 45, backgroundColor: '#F8FAFC', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  textWrapper: { flex: 1 },
  moduloText: { fontSize: 10, fontWeight: 'bold', color: '#94A3B8' },
  buttonText: { fontSize: 15, fontWeight: '700', color: '#1E293B' },
});