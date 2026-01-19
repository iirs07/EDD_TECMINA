import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Step = { label: string; blocks: number[][] };

export default function MezclaDirectaSimulacionScreen() {
  const router = useRouter();

  // Asegúrate de que el arreglo esté desordenado inicialmente
  const [list, setList] = useState<number[]>([8, 4, 5, 3, 7, 6, 2, 1]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [stepIndex, setStepIndex] = useState<number>(0); // Comenzamos desde el paso 0

  useEffect(() => {
    // Precomputar los pasos del Merge Sort iterativo
    const computedSteps: Step[] = [];
    const n = list.length;
    let temp = [...list]; // Copia del arreglo original para trabajar en él

    // Incrementar el tamaño de los bloques a fusionar
    let size = 1;

    // Fusionar iterativamente bloques de tamaño creciente
    while (size < n) {
      let i = 0;
      const partitions: number[][] = [];
      const merges: number[][] = [];

      while (i < n) {
        const left = i;
        const mid = Math.min(i + size, n);
        const right = Math.min(i + 2 * size, n);

        // Guardar las particiones
        partitions.push(temp.slice(left, right));

        const merged: number[] = [];
        let l = left;
        let r = mid;

        // Fusión de dos bloques
        while (l < mid && r < right) {
          if (temp[l] < temp[r]) {
            merged.push(temp[l++]);
          } else {
            merged.push(temp[r++]);
          }
        }

        while (l < mid) merged.push(temp[l++]);
        while (r < right) merged.push(temp[r++]);

        merges.push(merged);
        for (let j = 0; j < merged.length; j++) {
          temp[left + j] = merged[j];
        }

        i += 2 * size;
      }

      // Agregar las particiones y fusiones de este paso
      computedSteps.push({ label: `Particiones (tamaño ${size})`, blocks: partitions });
      computedSteps.push({ label: `Fusiones (tamaño ${size})`, blocks: merges });

      size *= 2;  // Incrementar el tamaño del bloque (1, 2, 4, 8, etc.)
    }

    computedSteps.push({ label: "Final Ordenado", blocks: [temp] }); // Agregar el paso final
    setSteps(computedSteps); // Guardar los pasos computados
  }, []);

  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const resetSimulation = () => {
    setList([8, 4, 5, 3, 7, 6, 2, 1]); // Reiniciar el arreglo desordenado
    setStepIndex(0); // Reiniciar a paso 0
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Mezcla Directa - Simulación</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Mostrar el arreglo original desordenado */}
        <Text style={styles.title}>Arreglo Original Desordenado:</Text>
        <View style={styles.listContainer}>
          {list.map((num, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.itemText}>{num}</Text>
            </View>
          ))}
        </View>

        {/* Mostrar la información del paso */}
        <Text style={styles.title}>Paso {stepIndex} de {steps.length - 1}</Text>
        <Text style={styles.subtitle}>{steps[stepIndex]?.label}</Text>

        {/* Mostrar las particiones o fusiones */}
        <View style={styles.listContainer}>
          {steps[stepIndex]?.blocks.map((block, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.itemText}>
                {block.join(", ")}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
          <Text style={styles.nextButtonText}>Siguiente Paso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={resetSimulation}>
          <Text style={styles.resetButtonText}>Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.nextButton, { marginTop: 30 }]}
          onPress={() => router.push('/tema5/veinteuno')}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#120B8F',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 0,
    gap: 5,
  },
  item: {
    padding: 14,
    backgroundColor: '#E3E9FF',
    borderColor: '#120B8F',
    borderWidth: 2,
    borderRadius: 10,
    minWidth: 40,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#120B8F',
  },
  nextButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 70,
    backgroundColor: '#5087F7',
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  resetButton: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 60,
    backgroundColor: '#FF6F61',
    borderRadius: 30,
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
