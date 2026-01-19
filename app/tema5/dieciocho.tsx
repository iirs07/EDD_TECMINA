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

export default function MetodoMezclaDirectaScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#120B8F" />
      
      {/* Barra superior responsiva */}
      <View style={[styles.blueBar, { paddingTop: Platform.OS === 'ios' ? 60 : 45 }]}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Externos - Mezcla Directa</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerBox}>
          <Text style={styles.heading}>MÉTODO DE MEZCLA DIRECTA</Text>

          {/* Tarjeta del concepto con diseño mejorado */}
          <View style={[styles.conceptCard, { width: width * 0.9, alignSelf: 'center' }]}>
            <Text style={styles.paragraph}>
              La <Text style={styles.boldText}>mezcla directa</Text> es un algoritmo de ordenamiento externo basado en la estrategia de <Text style={styles.boldText}>"dividir y combinar"</Text>.
              {"\n\n"}
              El proceso consiste en fragmentar los datos originales en bloques pequeños que se ordenan individualmente. Posteriormente, se realiza una <Text style={styles.boldText}>intercalación</Text> sucesiva de estos bloques para formar secuencias cada vez más grandes hasta lograr el orden total.
            </Text>
          </View>
        </View>

        

        {/* Imagen adaptable */}
        <Image
          source={require('../../assets/images/mezcla1.png')}
          style={[
            styles.imageBelow, 
            { width: width * 0.85, height: height * 0.25 }
          ]}
        />

        <View style={styles.infoBox}>
          <Ionicons name="information-circle-outline" size={22} color="#120B8F" />
          <Text style={styles.infoText}>
            Este método es sumamente eficiente para archivos que no pueden cargarse por completo en la memoria RAM.
          </Text>
        </View>

        {/* Botón Siguiente responsivo */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.nextButton, { width: width * 0.75, alignSelf: 'center' }]}
          onPress={() => router.push('/tema5/diecinueve')}
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
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  headerBox: {
    marginTop: 25,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 22,
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
    borderRadius: 12,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 35,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E8EAF6',
    marginHorizontal: 25,
    marginTop: 30,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 10,
    color: '#120B8F',
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  nextButton: {
    marginTop: 40,
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