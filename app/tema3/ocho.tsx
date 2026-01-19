import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity, // 1. Importamos ScrollView
  useWindowDimensions // 2. Para manejar el ancho de la imagen
  ,

  View
} from 'react-native';

export default function Tema2Screen() {
    const router = useRouter();
    const { width, height } = useWindowDimensions(); // Obtenemos dimensiones dinámicas

    return (
        <SafeAreaView style={styles.container}>
            {/* Barra superior fija */}
            <View style={styles.blueBar}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.barTitle}>Pilas - Operaciones</Text>
            </View>

            {/* 3. ScrollView para que quepa todo el contenido en pantallas pequeñas */}
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Operaciones Principales */}
                <View style={styles.contentBoxConcept}>
                    <Text style={styles.heading}>Operaciones Principales</Text>
                    <Text style={styles.paragraph}>
                        Las pilas realizan principalmente dos operaciones:
                    </Text>
                    <Text style={styles.paragraph}>
                        1. <Text style={{ fontWeight: 'bold', color: '#120B8F' }}>Push</Text>: Inserta un elemento en la parte superior.
                    </Text>
                    <Text style={styles.paragraph}>
                        2. <Text style={{ fontWeight: 'bold', color: '#120B8F' }}>Pop</Text>: Elimina el elemento superior.
                    </Text>
                    <Text style={styles.paragraph}>
                        El <Text style={{ fontWeight: 'bold', color: '#120B8F' }}>Peek</Text> (tope) es el último elemento insertado, y es el único accesible para consulta.
                    </Text>
                </View>

                {/* Imagen ilustrativa de operaciones responsiva */}
                <View style={styles.rowContainer}>
                    <Image
                        source={require('../../assets/images/pila2.png')}
                        style={[styles.sideImageRight, { width: width * 0.9, height: height * 0.25 }]}
                    />
                </View>
                

                {/* Ejemplo de Pila */}
                <View style={styles.contentBoxConcept}>
                    <Text style={styles.heading}>Ejemplo de Pila</Text>
                    <Text style={styles.paragraph}>
                        Imagina una pila de platos. Si agregas uno, se coloca arriba (**Push**). 
                        Si necesitas uno, tomas el de arriba (**Pop**), siguiendo el principio <Text style={{ fontWeight: 'bold', color: '#120B8F' }}>LIFO</Text>.
                    </Text>
                </View>

                {/* Botón de navegación responsivo */}
                <TouchableOpacity
                    style={[styles.toggleButton, { width: width * 0.7 }]}
                    onPress={() => router.push('/tema3/nueve')}
                >
                    <Text style={styles.toggleButtonText}>Siguiente</Text>
                </TouchableOpacity>

                <View style={{ height: 40 }} />
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
        flexShrink: 1,
    },
    scrollContent: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    contentBoxConcept: {
        backgroundColor: '#E0ECF8',
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        width: '90%',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#120B8F',
        marginBottom: 10,
        textAlign: 'center'
    },
    paragraph: {
        fontSize: 14,
        color: '#333',
        lineHeight: 24,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    sideImageRight: {
        borderRadius: 10,
        resizeMode: 'contain', // Cambiado de 'cover' a 'contain' para no cortar la explicación gráfica
    },
    toggleButton: {
        marginTop: 30,
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