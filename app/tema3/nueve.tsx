import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';

export default function PilaSimulada() {
  const [stack, setStack] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { width, height } = useWindowDimensions();
  const router = useRouter();

  const handlePush = () => {
    const number = parseInt(inputValue);
    if (!isNaN(number)) {
      // El nuevo número va al inicio para que aparezca arriba visualmente
      setStack([number, ...stack]);
      setInputValue('');
    } else {
      Alert.alert('Entrada inválida', 'Por favor ingresa un número válido.');
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(1));
    } else {
      Alert.alert('Pila vacía', 'No hay elementos para eliminar.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior fija */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.blueBarText}>Pilas - Simulación</Text>
      </View>

      <ScrollView 
        contentContainerStyle={[styles.scrollContainer, { minHeight: height - 100 }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Simulación LIFO</Text>

        {/* Contenedor Visual de la Pila */}
        <View style={[styles.stackView, { width: width * 0.8 }]}>
          {stack.length === 0 ? (
            <Text style={styles.emptyText}>La pila está vacía.</Text>
          ) : (
            stack.map((number, index) => (
              <View 
                key={index} 
                style={[
                  styles.rectangle, 
                  index === 0 && styles.topRectangle // Resaltar el tope
                ]}
              >
                <Text style={styles.numberText}>{number}</Text>
                {index === 0 && <Text style={styles.topLabel}>TOPE</Text>}
              </View>
            ))
          )}
        </View>

        {/* Información de estado */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Tamaño actual: {stack.length}</Text>
          <Text style={styles.infoText}>
            Tope: {stack.length > 0 ? stack[0] : 'N/A'}
          </Text>
        </View>

        {/* Controles */}
        <View style={[styles.inputWrapper, { width: width * 0.7 }]}>
          <TextInput
            style={styles.input}
            placeholder="Escribe un número..."
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.pushButton]} 
            onPress={handlePush}
          >
            <Text style={styles.buttonLabel}>PUSH</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionButton, styles.popButton]} 
            onPress={handlePop}
          >
            <Text style={styles.buttonLabel}>POP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.nextButton, { width: width * 0.7 }]}
          onPress={() => router.push('/tema3/diez')}
        >
          <Text style={styles.nextButtonText}>Siguiente tema ▶</Text>
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
  blueBarText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  scrollContainer: { alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#120B8F', marginBottom: 20 },
  stackView: {
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: '#120B8F',
    padding: 10,
    minHeight: 200,
    justifyContent: 'flex-end', // Los elementos se apilan desde abajo
    borderRadius: 5,
  },
  rectangle: {
    height: 50,
    backgroundColor: '#5087F7',
    marginVertical: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topRectangle: {
    backgroundColor: '#120B8F',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  numberText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  topLabel: { color: '#FFD700', fontSize: 10, position: 'absolute', right: 10, fontWeight: 'bold' },
  emptyText: { textAlign: 'center', color: '#999', fontSize: 16, marginTop: 80 },
  infoBox: { marginVertical: 20, alignItems: 'center' },
  infoText: { fontSize: 16, color: '#333', fontWeight: '500' },
  inputWrapper: { marginBottom: 20 },
  input: {
    borderBottomWidth: 2,
    borderColor: '#120B8F',
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonRow: { flexDirection: 'row', gap: 20, marginBottom: 30 },
  actionButton: { paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, elevation: 3 },
  pushButton: { backgroundColor: '#4CAF50' },
  popButton: { backgroundColor: '#F44336' },
  buttonLabel: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  nextButton: {
    backgroundColor: '#120B8F',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});