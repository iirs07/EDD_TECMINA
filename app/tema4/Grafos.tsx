import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const Grafos: React.FC = () => {
  const router = useRouter();

  const slides = [
    {
      imagen: require('../../assets/images/Profundidad/1.png'),
      texto: 'Paso 1: Inicio en A',
    },
    {
      imagen: require('../../assets/images/Profundidad/2.png'),
      texto: 'Paso 2: Se visita B.',
    },
    {
      imagen: require('../../assets/images/Profundidad/3.png'),
      texto: 'Paso 3: Se visita F.',
    },
    {
      imagen: require('../../assets/images/Profundidad/4.png'),
      texto: 'Paso 4: Se visita G.',
    },
    {
      imagen: require('../../assets/images/Profundidad/5.png'),
      texto: 'Paso 5: Se visita D.',
    },
    {
      imagen: require('../../assets/images/Profundidad/6.png'),
      texto: 'Paso 6: Se visita C.',
    },
    {
      imagen: require('../../assets/images/Profundidad/7.png'),
      texto: 'Paso 7: Se visita E.',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#120B8F" /> 
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/tema4/testArbol')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema IV: Estructuras no lineales</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardContenedor}>
          <Text style={styles.etiqueta}>Grafo</Text>
          <Text style={styles.textoJustificado}>
          Un grafo G es un conjunto V de vértices y un conjunto A de arcos. Donde, los elementos
          de V son las entidades de un problema y los elementos de A indican la existencia de alguna
          relación entre entidades del conjunto V.

          </Text>
          <Image
            source={require('../../assets/images/Ejemplografo.png')}
            style={styles.imagenGrande}
            accessibilityLabel="Ejemplo de árbol"
          />
        </View>

         {/* Terminología del grafo */}
      <View style={styles.cardContenedor}>
        <Text style={styles.etiqueta}>Terminología</Text>
        <Image
          source={require('../../assets/images/TerminologiaG.png')}
          style={styles.imagenGrande}
          accessibilityLabel="Terminología del grafo"
        />
        <View style={styles.textoViñetas}>
          <Text style={styles.viñeta}>• Al número de nodos del grafo se le llama orden del grafo.</Text>
          <Text style={styles.viñeta}>• Un grafo nulo es un grafo de orden 0 (cero).</Text>
          <Text style={styles.viñeta}>• Dos nodos son adyacentes si hay un arco que los une.</Text>
          <Text style={styles.viñeta}>• En un grafo dirigido, si A es adyacente de B, no necesariamente B es adyacente de A.</Text>
          <Text style={styles.viñeta}>• Camino es una secuencia de uno o más arcos que conectan dos nodos.</Text>
          <Text style={styles.viñeta}>• Un grafo es conectado cuando existe siempre un camino que une dos nodos cualesquiera y desconectado en caso contrario.</Text>
          <Text style={styles.viñeta}>• Un grafo es completo cuando cada nodo está conectado con todos y cada uno de los nodos restantes.</Text>
          <Text style={styles.viñeta}>• El camino de un nodo a sí mismo se llama ciclo.</Text>
        </View>
      </View>

        {/* Ejemplo gráfico */}
        <Text style={styles.subtitulo}>Ejemplo Gráfico</Text>
        <Text style={styles.subtitulo}>Recorrido en Profundidad (DFS).</Text>
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
        
          {/* Ejemplo 2: fuera de contenedor */}
        <Text style={styles.subtitulo}>Ejemplo de recorrido en preorden de un árbol binario en Java:</Text>
        <Text style={styles.codeBlock}>
          <Text style={styles.keyword}>public class </Text>
          <Text style={styles.codeText}>Nodo </Text>{'{' }{'\n'}
          {'  '}<Text style={styles.keyword}>char </Text>
          <Text style={styles.codeText}>valor;</Text>{'\n'}
          {'  '}<Text style={styles.keyword}>Nodo </Text>
          <Text style={styles.codeText}>izquierdo, derecho;</Text>{'\n\n'}
        
          {'  '}<Text style={styles.keyword}>public Nodo</Text>(<Text style={styles.codeText}>char item</Text>) {'{'}{'\n'}
          {'    '}<Text style={styles.codeText}>valor = item;</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>izquierdo = derecho = null;</Text>{'\n'}
          {'  '}{'}'}{'\n'}
          {'}'}{'\n\n'}
        
          <Text style={styles.keyword}>public class </Text>
          <Text style={styles.codeText}>ArbolBinario </Text>{'{' }{'\n'}
          {'  '}<Text style={styles.keyword}>Nodo </Text>
          <Text style={styles.codeText}>raiz;</Text>{'\n\n'}
        
          {'  '}<Text style={styles.keyword}>void </Text>
          <Text style={styles.codeText}>recorridoPreorden</Text>(<Text style={styles.keyword}>Nodo</Text> nodo) {'{'}{'\n'}
          {'    '}<Text style={styles.keyword}>if </Text>(nodo == null) {'{'}{'\n'}
          {'      '}<Text style={styles.codeText}>return;</Text>{'\n'}
          {'    '}{'}'}{'\n'}
          {'    '}<Text style={styles.codeText}>System.out.print(nodo.valor + " ");</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>recorridoPreorden(nodo.izquierdo);</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>recorridoPreorden(nodo.derecho);</Text>{'\n'}
          {'  '}{'}'}{'\n\n'}
        
          {'  '}<Text style={styles.keyword}>public static void </Text>
          <Text style={styles.codeText}>main</Text>(<Text style={styles.codeText}>String[] args</Text>) {'{'}{'\n'}
          {'    '}<Text style={styles.codeText}>ArbolBinario arbol = new ArbolBinario();</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>arbol.raiz = new Nodo('A');</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>arbol.raiz.izquierdo = new Nodo('B');</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>arbol.raiz.derecho = new Nodo('C');</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>arbol.raiz.izquierdo.izquierdo = new Nodo('D');</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>arbol.raiz.izquierdo.derecho = new Nodo('E');</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>arbol.raiz.derecho.izquierdo = new Nodo('F');</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>arbol.raiz.derecho.derecho = new Nodo('G');</Text>{'\n\n'}
          
          {'    '}<Text style={styles.codeText}>System.out.println("Recorrido en preorden del árbol binario:");</Text>{'\n'}
          {'    '}<Text style={styles.codeText}>arbol.recorridoPreorden(arbol.raiz);</Text>{'\n'}
          {'  '}{'}'}{'\n'}
          {'}'}
        </Text>

        <View style={{ height: 40 }} /> 
        
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => router.push('/tema4/SimuladorGrafos')}
        >
          <Text style={styles.buttonText}>Simulador</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Grafos;

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
    height: 200,
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
    height: 250,
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
