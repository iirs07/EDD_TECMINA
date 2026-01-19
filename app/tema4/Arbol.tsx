import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const ArbolScreen: React.FC = () => {
  const router = useRouter();

  const slides = [
    {
      imagen: require('../../assets/images/RecorridoOrden/1.png'),
      texto: 'Paso 1: Se inicia en el nodo raíz: A',
    },
    {
      imagen: require('../../assets/images/RecorridoOrden/2.png'),
      texto: 'Paso 2: Se visita el subárbol izquierdo: Se visita B (hijo izquierdo de A).',
    },
    {
      imagen: require('../../assets/images/RecorridoOrden/3.png'),
      texto: 'Paso 3: Se visita D (hijo izquierdo de B)',
    },
    {
      imagen: require('../../assets/images/RecorridoOrden/4.png'),
      texto: 'Paso 4: Se visita E (hijo derecho de B).',
    },
    {
      imagen: require('../../assets/images/RecorridoOrden/5.png'),
      texto: 'Paso 5: Se pasa al subárbol derecho: Se visita C (hijo derecho de A).',
    },
    {
      imagen: require('../../assets/images/RecorridoOrden/6.png'),
      texto: 'Paso 6: Se visita F (hijo izquierdo de C).',
    },
    {
      imagen: require('../../assets/images/RecorridoOrden/7.png'),
      texto: 'Paso 7: Se visita G (hijo derecho de C).',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#120B8F" /> 
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.push('/menu')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Tema IV: Estructuras no lineales</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardContenedor}>
          <Text style={styles.etiqueta}>Árbol</Text>
          <Text style={styles.textoJustificado}>
            Un árbol es una estructura de datos jerárquica compuesta por nodos, donde uno de ellos es la raíz y los demás son hijos conectados en niveles.
          </Text>
          <Image
            source={require('../../assets/images/Ejemploarbol.png')}
            style={styles.imagenGrande}
            accessibilityLabel="Ejemplo de árbol"
          />
        </View>

        <View style={styles.cardContenedor}>
          <Text style={styles.etiqueta}>Terminología</Text>
          <Image
            source={require('../../assets/images/Terminologia.png')}
            style={styles.imagenGrande}
            accessibilityLabel="Terminología de árbol"
          />
          <View style={styles.textoJustificado}>
            <Text style={styles.viñeta}>• <Text style={styles.boldText}>Nodo padre:</Text> Un nodo es padre si tiene sucesores</Text>
            <Text style={styles.viñeta}>• <Text style={styles.boldText}>Nodo hijo:</Text> Son los sucesores de un nodo padre.</Text>
            <Text style={styles.viñeta}>• <Text style={styles.boldText}>Nodos descendientes:</Text> Los hijos de un nodo y los hijos de éste se llaman descendientes.</Text>
            <Text style={styles.viñeta}>• <Text style={styles.boldText}>Nodos ascendientes:</Text> El padre y los abuelos de un nodo son los ascendientes.</Text>
            <Text style={styles.viñeta}>• <Text style={styles.boldText}>Nodos hermanos:</Text> Dos o más nodos con el mismo padre se llaman hermanos.</Text>
            <Text style={styles.viñeta}>• <Text style={styles.boldText}>Nodo hoja:</Text> Es un nodo sin descendientes (Nodo terminal). Ej. Nodos E–F–C y D.</Text>
            <Text style={styles.viñeta}>• <Text style={styles.boldText}>Nodo interior:</Text> Es un nodo que no es hoja. Ej. Nodos A y B.</Text>
            <Text style={styles.viñeta}>• <Text style={styles.boldText}>Nivel de un nodo:</Text> Es la distancia al nodo raíz. La raíz tiene una distancia de cero de sí misma, por eso se dice que está en el nivel cero. Los hijos del nodo raíz están en el nivel 1, sus hijos están en el nivel 2, y así sucesivamente. Los hermanos están siempre en el mismo nivel, pero no todos los nodos de un mismo nivel son necesariamente hermanos.</Text>
          </View>
        </View>

        {/* Ejemplo gráfico */}
        <Text style={styles.subtitulo}>Ejemplo Gráfico</Text>
        <Text style={styles.subtitulo}>Recorrido en preorden.</Text>
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
          onPress={() => router.push('/tema4/SimuladorArbol')}
        >
          <Text style={styles.buttonText}>Simulador</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArbolScreen;

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
    height: 250,
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

