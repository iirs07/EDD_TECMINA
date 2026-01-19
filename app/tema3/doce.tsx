import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView, // Añadido para mejor manejo de teclado
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';

export default function ColaSimulada() {
  const [queue, setQueue] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { width, height } = useWindowDimensions();
  const router = useRouter();

  const handleEnqueue = () => {
    const number = parseInt(inputValue);
    if (!isNaN(number)) {
      setQueue([...queue, number]); 
      setInputValue('');
    } else {
      Alert.alert('Entrada inválida', 'Por favor ingresa un número válido.');
    }
  };

  const handleDequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1)); 
    } else {
      Alert.alert('Cola vacía', 'No hay elementos para atender.');
    }
  };

  const handleNext = () => {
    // Asegúrate de que la ruta /tema3/trece exista en tu carpeta app
    router.push('/tema3/trece');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Usamos KeyboardAvoidingView para que el teclado no tape los botones */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.blueBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.blueBarText}>Colas - Simulación</Text>
        </View>

        <ScrollView 
          contentContainerStyle={[styles.scrollContainer, { minHeight: height - 100 }]}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Simulación FIFO</Text>

          {/* Diagrama de referencia visual */}
          

          <View style={[styles.queueWrapper, { width: width * 0.9 }]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.queueInner}>
              {queue.length === 0 ? (
                <Text style={styles.emptyText}>La cola está vacía.</Text>
              ) : (
                queue.map((number, index) => (
                  <View key={index} style={[styles.rectangle, index === 0 && styles.frontItem]}>
                    <Text style={styles.numberText}>{number}</Text>
                    {index === 0 && <Text style={styles.labelInside}>FRENTE</Text>}
                    {index === queue.length - 1 && queue.length > 1 && <Text style={styles.labelInside}>FINAL</Text>}
                  </View>
                ))
              )}
            </ScrollView>
          </View>

          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>Primero en salir: {queue.length > 0 ? queue[0] : 'N/A'}</Text>
            <Text style={styles.statsText}>Elementos en espera: {queue.length}</Text>
          </View>

          <View style={[styles.inputWrapper, { width: width * 0.7 }]}>
            <TextInput
              style={styles.input}
              placeholder="Valor a encolar..."
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.actionButton, styles.enqueueBtn]} onPress={handleEnqueue}>
              <Text style={styles.btnLabel}>ENQUEUE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.dequeueBtn]} onPress={handleDequeue}>
              <Text style={styles.btnLabel}>DEQUEUE</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={[styles.nextButton, { width: width * 0.7 }]} 
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>Continuar ▶</Text>
          </TouchableOpacity>

          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
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
  blueBarText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  scrollContainer: { alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#120B8F', marginBottom: 20 },
  queueWrapper: {
    height: 120,
    borderWidth: 2,
    borderColor: '#120B8F',
    borderStyle: 'dashed',
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  queueInner: { alignItems: 'center', paddingHorizontal: 10 },
  rectangle: {
    width: 70,
    height: 60,
    backgroundColor: '#5087F7',
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  frontItem: { backgroundColor: '#120B8F', borderWidth: 2, borderColor: '#FFD700' },
  numberText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  labelInside: { fontSize: 9, color: '#FFD700', fontWeight: 'bold', position: 'absolute', bottom: 5 },
  emptyText: { color: '#999', fontSize: 16, width: '100%', textAlign: 'center' },
  statsContainer: { marginVertical: 20 },
  statsText: { fontSize: 16, color: '#333', textAlign: 'center', fontWeight: '500' },
  inputWrapper: { marginBottom: 20 },
  input: { borderBottomWidth: 2, borderColor: '#120B8F', padding: 10, fontSize: 18, textAlign: 'center' },
  buttonRow: { flexDirection: 'row', gap: 15, marginBottom: 30 },
  actionButton: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10, minWidth: 120, alignItems: 'center' },
  enqueueBtn: { backgroundColor: '#4CAF50' },
  dequeueBtn: { backgroundColor: '#F44336' },
  btnLabel: { color: '#fff', fontWeight: 'bold' },
  nextButton: { backgroundColor: '#120B8F', paddingVertical: 15, borderRadius: 30, alignItems: 'center' },
  nextButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});