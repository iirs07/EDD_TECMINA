import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity, // Añadido
  useWindowDimensions,
  View,
} from 'react-native';

const question = {
    text: '¿Qué son las estructuras de datos?',
    options: [
        { label: 'A) Lenguajes de programación usados para el backend', correct: false },
        { label: 'B) Tipos de errores comunes en programación', correct: false },
        { label: 'C) Formas organizadas de almacenar y manipular datos ', correct: true },
        { label: 'D) Aplicaciones móviles para visualizar datos', correct: false },
    ],
};
// ... (mismos imports y constante question)

export default function PreguntaScreen() {
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    const [selected, setSelected] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleSelect = (index: number) => {
        setSelected(index);
        setIsCorrect(question.options[index].correct);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.blueBar}>
                <TouchableOpacity 
                    onPress={() => router.back()} 
                    style={styles.backButton}
                    accessibilityLabel="Volver atrás"
                >
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.barTitle}>🧠 Pregunta 1</Text>
            </View>

            <ScrollView 
                contentContainerStyle={[styles.scrollContainer, { minHeight: height - 120 }]}
                showsVerticalScrollIndicator={false}
            >
                <Text style={[styles.question, { marginTop: height * 0.05 }]}>
                    {question.text}
                </Text>

                <View style={styles.optionsContainer}>
                    {question.options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.7} // Mejora el feedback visual al tocar
                            style={[
                                styles.option,
                                { width: width * 0.85 },
                                selected === index && {
                                    backgroundColor: option.correct ? '#A7E9AF' : '#F8B4B4',
                                    borderWidth: 1,
                                    borderColor: option.correct ? '#4CAF50' : '#D32F2F',
                                },
                            ]}
                            onPress={() => handleSelect(index)}
                        >
                            <Text style={styles.optionText}>{option.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Contenedor de feedback para evitar saltos bruscos */}
                <View style={{ minHeight: 100, alignItems: 'center', justifyContent: 'center' }}>
                    {isCorrect === false && (
                        <Text style={styles.feedback}>❌ Incorrecto. Intenta de nuevo.</Text>
                    )}

                    {isCorrect && (
                        <TouchableOpacity
                            style={[styles.nextButton, { width: width * 0.7 }]}
                            onPress={() => router.push('/tema1/dos')}
                        >
                            <Text style={styles.buttonText}>✅ Correcto. Siguiente</Text>
                        </TouchableOpacity>
                    )}
                </View>
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
        paddingBottom: 40,
    },
    question: {
        fontSize: 20,
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
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
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