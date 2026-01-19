import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');



const BusquedaSecuencial: React.FC = () => {
  const router = useRouter();

  const slides = [
    {
        imagen: require('../../assets/images/BusquedaBinaria/1.png'),
        texto: 'Paso 1: Comenzamos tomando el valor medio del arreglo, comparamos el valor medio con el valor buscado. Si el objetivo es menor que el punto medio el algoritmo busca en la mitad izquierda de la matriz. En este caso : 6 < 16',
      },
      {
        imagen: require('../../assets/images/BusquedaBinaria/2.png'),
        texto: 'Paso 2: Lo anterior nos inclina hacia los valores de la izquierda, donde nuevamente buscaremos el valor medio que es 8. Ahora 6 < 8.',
      },
      {
        imagen: require('../../assets/images/BusquedaBinaria/3.png'),
        texto: 'Paso 3: Nuevamente buscaremos en los valores de la izquierda, donde 6 > 4, por lo tanto debemos debemos buscar en los valores de la derecha.',
      },
      {
        imagen: require('../../assets/images/BusquedaBinaria/4.png'),
        texto: 'Paso 4: Comparamos el primer valor de la derecha con el valor buscado 6 == 6, busqueda terminada.',
      },
    ];
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#120B8F" /> 
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/tema6/testBS')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema VI: Métodos de Busqueda</Text>
      </View>

      <ScrollView style={styles.container}>
  <View style={styles.cardContenedor}>
    <Text style={styles.etiqueta}>¿Qué es la Busqueda binaria?</Text>
    <Text style={styles.textoJustificado}>
    Consiste en reducir en cada paso el ámbito de búsqueda a la mitad de los elementos, basándose
          en comparar el elemento a buscar con el elemento que se encuentra en la mitad del intervalo y
          con base en esta comparación:
    </Text>
    <Image
      source={require('../../assets/images/ArregloB.png')}
      style={styles.imagenGrande}
      accessibilityLabel="Ejemplo de arreglo"
    />
    <Text style={styles.textoJustificado}>
    Del anterior término, se deriva su nombre de búsqueda secuencial, pues se comparan secuencialmente todos los elementos, desde el inicio hasta el fin del arreglo uno por uno, hasta que el elemento se encuentre o se llegue al final.

    </Text>
    </View>

    <Text style={styles.subtitulo}>Ejemplo Gráfico</Text>
    <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={styles.carruselContainer}
            >
              {slides.map((slide, index) => (
                <View key={index} style={styles.slide}>
                  <Image source={slide.imagen} style={styles.carruselImagen} />
                  <Text style={styles.slideTexto}>{slide.texto}</Text>
                </View>
              ))}

            </ScrollView>
            <Text style={styles.subtitulo}>Ejemplo de búsqueda binaria en Java:</Text>
<Text style={styles.codeBlock}>
  <Text style={styles.keyword}>public class </Text>
  <Text style={styles.codeText}>BusquedaBinaria </Text>{'{'}{'\n'}
  {'  '}<Text style={styles.keyword}>public static int </Text>
  <Text style={styles.codeText}>buscar</Text>(int[] arreglo, int valor) {'{'}{'\n'}
  {'    '}int inicio = 0;{'\n'}
  {'    '}int fin = arreglo.length - 1;{'\n'}
  {'    '}<Text style={styles.keyword}>while</Text> (inicio {'<='} fin) {'{'}{'\n'}
  {'      '}int medio = (inicio + fin) / 2;{'\n'}
  {'      '}<Text style={styles.keyword}>if</Text> (arreglo[medio] == valor) {'{'}{'\n'}
  {'        '}<Text style={styles.keyword}>return</Text> medio;{'\n'}
  {'      '}<Text style={styles.keyword}>else if</Text> (arreglo[medio] {'<'} valor) {'{'}{'\n'}
  {'        '}inicio = medio + 1;{'\n'}
  {'      '}<Text style={styles.keyword}>else</Text> {'{'}{'\n'}
  {'        '}fin = medio - 1;{'\n'}
  {'      '}{'}'}{'\n'}
  {'    '}{'}'}{'\n'}
  {'    '}<Text style={styles.keyword}>return</Text> -1;{'\n'}
  {'  '}{'}'}{'\n'}
  {'  '}<Text style={styles.keyword}>public static void </Text>
  <Text style={styles.codeText}>main</Text>(String[] args) {'{'}{'\n'}
  {'    '}int[] numeros = {'{'}10, 20, 30, 40, 50{'}'};{'\n'}
  {'    '}int valor = 30;{'\n'}
  {'    '}int resultado = buscar(numeros, valor);{'\n'}
  {'    '}<Text style={styles.keyword}>if</Text> (resultado != -1) {'{'}{'\n'}
  {'      '}System.out.println("El valor se encuentra en la posición: " + resultado);{'\n'}
  {'    '}{'}'} <Text style={styles.keyword}>else</Text> {'{'}{'\n'}
  {'      '}System.out.println("El valor no se encuentra en el arreglo.");{'\n'}
  {'    '}{'}'}{'\n'}
  {'  '}{'}'}{'\n'}
  {'}'}{'\n'}
</Text>


  <TouchableOpacity
    style={[styles.customButton, { marginTop: 20 }]}
    onPress={() => router.push('/tema6/simuladorBB')}
  >
    <Text style={styles.buttonText}>Simulador</Text>
  </TouchableOpacity>

  <View style={{ height: 40 }} />
</ScrollView>

    </SafeAreaView>
  );
};

export default BusquedaSecuencial;

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
  cardContenedor: {
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
  },
  textoViñetas: {
    marginTop: 10,
    marginLeft: 15,
  },
  viñeta: {
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  carruselContainer: {
    height: 350,
    marginBottom: 30,

  },
  slide: {
    width: width - 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  carruselImagen: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
    alignSelf: 'center',

  },
  slideTexto: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#120b8f',
    fontWeight: '500',
    paddingHorizontal: 10,
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
  subtitulo: {
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
    marginRight: 12,
  },
  barTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  infoContainer: {
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#b1dfe6',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#d1d1d1',
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

});