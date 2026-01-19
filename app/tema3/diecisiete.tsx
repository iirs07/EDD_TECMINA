import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';
import LinkedList from './LinkedList'; // Asegúrate de que display() devuelva number[]

const App = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  // Inicializamos la lista una sola vez
  const [linkedList] = useState(new LinkedList());
  const [listData, setListData] = useState<number[]>([]);

  const handleAdd = () => {
    if (!inputValue) {
      setMessage('Por favor ingresa un valor.');
      return;
    }
    const value = parseInt(inputValue, 10);
    linkedList.append(value);
    setListData([...linkedList.display()]); // Forzamos nueva referencia para que FlatList reaccione
    setMessage(`Valor ${value} agregado.`);
    setInputValue('');
  };

  const handleRemove = () => {
    if (!inputValue) {
      setMessage('Ingresa un valor para eliminar.');
      return;
    }
    const value = parseInt(inputValue, 10);
    const resultMessage = linkedList.remove(value);
    setListData([...linkedList.display()]);
    setMessage(resultMessage);
    setInputValue('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
        style={{ flex: 1 }}
      >
        <View style={styles.blueBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.barTitle}>Simulación: Listas Enlazadas</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.simulationTitle}>Visualizador de Nodos</Text>

          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Ej: 10"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.actionButton, styles.addBtn]} 
              onPress={handleAdd}
            >
              <Text style={styles.btnText}>Agregar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.actionButton, styles.removeBtn]} 
              onPress={handleRemove}
            >
              <Text style={styles.btnText}>Eliminar</Text>
            </TouchableOpacity>
          </View>

          {message ? <Text style={styles.message}>{message}</Text> : null}

          <View style={styles.listWrapper}>
            
            <FlatList
              data={listData}
              keyExtractor={(_, index) => index.toString()}
              horizontal={true} // Visualización horizontal para ver los punteros
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent}
              renderItem={({ item, index }) => (
                <View style={styles.nodeGroup}>
                  <View style={styles.node}>
                    <Text style={styles.nodeText}>{item}</Text>
                  </View>
                  {index < listData.length - 1 && (
                    <Ionicons name="arrow-forward" size={24} color="#120B8F" style={styles.arrow} />
                  )}
                  {index === listData.length - 1 && (
                    <Text style={styles.nullText}>NULL</Text>
                  )}
                </View>
              )}
              ListEmptyComponent={
                <Text style={styles.emptyText}>La lista está vacía. Agrega un nodo.</Text>
              }
            />
          </View>

          <TouchableOpacity 
            style={[styles.nextButton, { width: width * 0.8 }]} 
            onPress={() => router.push('/tema3/dieciocho')}
          >
            <Text style={styles.nextButtonText}>Ir a Preguntas ▶</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  blueBar: {
    backgroundColor: '#120B8F',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 12 },
  barTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  content: { padding: 20, flex: 1, alignItems: 'center' },
  simulationTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#120B8F',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#120B8F',
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  actionButton: {
    flex: 0.48,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  addBtn: { backgroundColor: '#120B8F' },
  removeBtn: { backgroundColor: '#F44336' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  message: {
    marginBottom: 20,
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
  },
  listWrapper: {
    height: 120,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 15,
    padding: 10,
  },
  flatListContent: {
    alignItems: 'center',
  },
  nodeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  node: {
    width: 60,
    height: 60,
    backgroundColor: '#5087F7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#120B8F',
  },
  nodeText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  arrow: { marginHorizontal: 5 },
  nullText: { marginLeft: 10, fontWeight: 'bold', color: '#888' },
  emptyText: { textAlign: 'center', width: '100%', color: '#888' },
  nextButton: {
    marginTop: 'auto',
    paddingVertical: 15,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
});

export default App;