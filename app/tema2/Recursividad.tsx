import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const RecursividadScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#120B8F" />
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/menu')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema II: Recursividad</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.infoContainer}>
  <Text style={styles.etiqueta}>¿Qué es la Recursividad?</Text>
  <Text style={styles.textoJustificado}>
    La recursividad es una técnica de programación en la que una función se llama a sí misma para resolver un problema dividiéndolo en subproblemas más pequeños del mismo tipo. Para evitar una llamada infinita, la función debe tener un caso base que detenga la recursión.
  </Text>
  <Image
    source={require('../../assets/images/recursividad.png')}
    style={styles.imagenGrande}
    accessibilityLabel="Ejemplo de árbol"
  />
</View>


        {/* Contenedor de reglas */}
        <View style={styles.infoContainer}>
          <Text style={styles.subtitulo}>Reglas de Recursividad:</Text>
          <Text style={styles.textoJustificado}>
            1. Debe tener al menos un caso base y una parte recursiva.
          </Text>
          <Text style={styles.textoJustificado}>
            2. Toda parte recursiva debe tender a un caso base.
          </Text>
          <Text style={styles.textoJustificado}>
            3. El trabajo nunca se debe duplicar resolviendo el mismo ejemplar de un problema en llamadas recursivas separadas.
          </Text>
        </View>

        {/* Ejemplo 1: fuera de contenedor */}
        <Text style={styles.subtitulo}>Ejemplo de suma recursiva en Java:</Text>
        <Text style={styles.codeBlock}>
          <Text style={styles.keyword}>public </Text>
          <Text style={styles.keyword}>class </Text>
          <Text style={styles.codeText}>Suma</Text>{'\n'}
          {'  '}<Text style={styles.keyword}>public static class </Text>
          <Text style={styles.codeText}>SumaRecursiva </Text>{'{'}{'\n'}
          {'    '}<Text style={styles.keyword}>public int </Text>
          <Text style={styles.codeText}>sumaRecursiva</Text>(<Text style={styles.codeText}>int n</Text>) {'{'}{'\n'}
          {'      '}<Text style={styles.keyword}>if </Text>(n == 1) <Text style={styles.keyword}>return </Text>1;{'\n'}
          {'      '}<Text style={styles.keyword}>else return </Text>n + sumaRecursiva(n - 1);{'\n'}
          {'    '}{'}'}{'\n'}
          {'  '}{'}'}{'\n'}
          <Text style={styles.keyword}>public static void </Text>
          <Text style={styles.codeText}>main</Text>(String[] args) {'{'}{'\n'}
          {'    '}<Text style={styles.codeText}>Suma suma = new Suma();</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>int resultado = suma.sumaRecursiva(5);</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>System.out.println("La suma recursiva es: " + resultado);</Text>{'\n'}
          {'  '}{'}'}
        </Text>

        {/* Ejemplo 2: fuera de contenedor */}
        <Text style={styles.subtitulo}>Ejemplo de fibonacci recursivo en Java:</Text>
        <Text style={styles.codeBlock}>
          <Text style={styles.keyword}>public class </Text>
          <Text style={styles.codeText}>Fibonacci </Text>{'{'}{'\n'}
          {'  '}<Text style={styles.keyword}>public int </Text>
          <Text style={styles.codeText}>fibonacci</Text>(int n) {'{'}{'\n'}
          {'    '}<Text style={styles.keyword}>if </Text>(n == 0) {'{'}{'\n'}
          {'      '}<Text style={styles.keyword}>return </Text>0;{'\n'}
          {'    '}{'}'} <Text style={styles.keyword}>else if </Text>(n == 1) {'{'}{'\n'}
          {'      '}<Text style={styles.keyword}>return </Text>1;{'\n'}
          {'    '}{'}'} <Text style={styles.keyword}>else </Text>{'{'}{'\n'}
          {'      '}<Text style={styles.keyword}>return </Text>fibonacci(n - 1) + fibonacci(n - 2);{'\n'}
          {'    '}{'}'}{'\n'}
          {'  '}{'}'}{'\n'}
          {'  '}<Text style={styles.keyword}>public static void </Text>
          <Text style={styles.codeText}>main</Text>(String[] args) {'{'}{'\n'}
          {'    '}<Text style={styles.codeText}>Fibonacci fibonacci = new Fibonacci();</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>int resultado = fibonacci.fibonacci(5);</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>System.out.println("El resultado de fibonacci es: " + resultado);</Text>{'\n'}
          {'  '}{'}'}{'\n'}
          {'}'}{'\n'}
        </Text>

        <View style={{ height: 20 }} />

        {/* Botón sin contenedor */}
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => router.push('/tema2/testRecursividad')}
        >
          <Text style={styles.buttonText}>Test</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecursividadScreen;

// Estilos
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
        paddingBottom: 40,
        backgroundColor: '#f8fafc',
  },
  headerText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#120b8f',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#b1dfe6',
  },
  etiqueta: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#120b8f',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#120b8f',
    textAlign: 'center',
  },
  
  codeBlock: {
    fontFamily: 'monospace',
    fontSize: 14,
    backgroundColor: '#f1f5f9',
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
    borderRadius: 8,
    marginTop: 10,
    color: '#333',
  },
  keyword: {
    color: '#0070f3',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: '#1f2937',
  },
  comment: {
    color: '#6c757d',
  },
  string: {
    color: '#00791b',
  },
  customButton: {
    backgroundColor: '#5087f7',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  spacing: {
    height: 30,
  },
  Ejemplo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#5087f7',
    textAlign: 'center',
  },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginLeft: 10,
  },
  barTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  
  textoJustificado: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  
  imagenGrande: {
    width: width - 40,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 20,
    alignSelf: 'center',
  }
  
});
