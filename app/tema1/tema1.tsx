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
} from 'react-native';

export default function Tema1Screen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior (Se queda fija porque está fuera del ScrollView) */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema I: Introducción a las Estructuras de Datos</Text>
      </View>

      {/* 2. Envolvemos todo el contenido que queremos que baje */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true} // Esto muestra la barrita al bajar
      >
        
        {/* ¿Qué son? */}
        <View style={styles.contentBox}>
          <Text style={styles.heading}>¿QUÉ SON LAS ESTRUCTURAS DE DATOS?</Text>
          <View style={styles.rowContent}>
            <Image
              source={require('../../assets/images/uno.jpg')}
              style={styles.sideImageLeft}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.paragraph}>
                Son formas organizadas de almacenar y manipular datos. Nos permiten trabajar con eficiencia y claridad en la resolución de problemas y la creación de programas eficaces.
              </Text>
            </View>
          </View>
        </View>

        {/* ¿Por qué son importantes? */}
        <View style={styles.contentBox}>
          <Text style={styles.heading}>¿POR QUÉ SON IMPORTANTES?</Text>
          <View style={styles.rowContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.paragraph}>
                Las estructuras de datos permiten organizar y acceder a la información de forma eficiente. 
                Una buena elección puede hacer que un programa sea más rápido, consuma menos memoria y sea más fácil de mantener.
              </Text>
            </View>
            <Image
              source={require('../../assets/images/tres.jpg')}
              style={styles.sideImageRight}
            />
          </View>
        </View>

        {/* Botón de navegación */}
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => router.push('/tema1/clasificacion')}
        >
          <Text style={styles.toggleButtonText}>Ver Clasificación ▶</Text>
        </TouchableOpacity>

        {/* Espacio extra al final para que el botón no quede pegado al borde */}
        <View style={{ height: 40 }} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  // Estilo para el contenido dentro del scroll
  scrollContent: {
    paddingBottom: 20, 
  },
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
  contentBox: {
    backgroundColor: '#8BCFF1',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#120B8F',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sideImageLeft: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 10,
  },
  sideImageRight: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
    marginLeft: 10,
  },
  toggleButton: {
    marginTop: 30,
    marginHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});