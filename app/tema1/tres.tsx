import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

const question = {
    text: '¿Cómo se clasifican las estructuras de datos según el contenido?',
    options: [
        { label: 'A) Estáticas y dinámicas', correct: true },
        { label: 'B) Por velocidad y estética', correct: false },
        { label: 'C) Locales y globales', correct: false },
        { label: 'D) Abiertas y cerradas', correct: false },
    ],
};

export default function Pregunta3Screen() {
    const router = useRouter();
    const { width, height } = useWindowDimensions(); // Obtenemos ancho y alto dinámicos
    const [selected, setSelected] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleSelect = (index: number) => {
        setSelected(index);
        setIsCorrect(question.options[index].correct);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Cabecera superior fija */}
            <View style={styles.blueBar}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.barTitle}>🧠 Pregunta 3</Text>
            </View>

            {/* Contenido deslizable para adaptabilidad */}
            <ScrollView 
                contentContainerStyle={[styles.scrollContainer, { minHeight: height - 120 }]}
                showsVerticalScrollIndicator={false}
            >
                {/* Margen superior proporcional al alto del dispositivo (5%) */}
                <Text style={[styles.question, { marginTop: height * 0.05 }]}>
                    {question.text}
                </Text>

                <View style={styles.optionsContainer}>
                    {question.options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                { width: width * 0.85 }, // El botón siempre ocupa el 85% del ancho disponible
                                selected === index && {
                                    backgroundColor: option.correct ? '#A7E9AF' : '#F8B4B4',
                                },
                            ]}
                            onPress={() => handleSelect(index)}
                        >
                            <Text style={styles.optionText}>{option.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {isCorrect === false && (
                    <Text style={styles.feedback}>❌ Incorrecto. Intenta de nuevo.</Text>
                )}

                {isCorrect && (
                    <TouchableOpacity
                        style={[styles.nextButton, { width: width * 0.7 }]}
                        onPress={() => router.push('/tema1/cuatro')}
                    >
                        <Text style={styles.buttonText}>✅ Correcto. Siguiente</Text>
                    </TouchableOpacity>
                )}
                
                {/* Espaciado extra al final para evitar recortes */}
                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
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
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        flex: 1,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    question: {
        fontSize: 19,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    optionsContainer: {
        width: '100%',
        alignItems: 'center',
    },
    option: {
        backgroundColor: '#E0ECF8',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 12,
        elevation: 2, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    optionText: {
        fontSize: 16,
        color: '#120B8F',
        fontWeight: '600',
        textAlign: 'center',
    },
    feedback: {
        color: '#D32F2F',
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nextButton: {
        backgroundColor: '#120B8F',
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});