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

export default function MezclaNaturalSimulacionScreen() {
  const router = useRouter();

  const [list] = useState<number[]>([3, 8, 12, 1, 5, 9, 2, 6]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [stepIndex, setStepIndex] = useState<number>(0);

  useEffect(() => {
    const original = [...list];
    const computedSteps: Step[] = [];

    let temp = [...original];
    let pass = 1;

    while (true) {
      const runs: number[][] = [];
      let i = 0;

      // Detectar secuencias naturales
      while (i < temp.length) {
        let run = [temp[i]];
        i++;
        while (i < temp.length && temp[i - 1] <= temp[i]) {
          run.push(temp[i]);
          i++;
        }
        runs.push(run);
      }

      // Agregar paso de secuencias naturales
      computedSteps.push({
        label: `Secuencias naturales detectadas - Paso ${pass}`,
        blocks: runs,
      });

      // Si solo hay una secuencia, termina
      if (runs.length <= 1) break;

      // Realizar fusiones solo si hay más de una secuencia
      const mergedRuns: number[][] = [];
      for (let j = 0; j < runs.length; j += 2) {
        if (j + 1 < runs.length) {
          mergedRuns.push(merge(runs[j], runs[j + 1]));
        } else {
          mergedRuns.push(runs[j]);
        }
      }

      // Agregar paso de fusiones
      computedSteps.push({
        label: `Fusiones - Paso ${pass}`,
        blocks: mergedRuns,
      });

      temp = mergedRuns.flat();

      // Si se tiene más de 4 bloques, hacer otra fusión para llegar a 4
      if (temp.length > 4) {
        const extraMergedRuns: number[][] = [];
        for (let i = 0; i < temp.length; i += 2) {
          if (i + 1 < temp.length) {
            extraMergedRuns.push(merge([temp[i]], [temp[i + 1]]));
          } else {
            extraMergedRuns.push([temp[i]]);
          }
        }

        temp = extraMergedRuns.flat();
      }

      pass++;
    }

    // Agregar paso final
    computedSteps.push({ label: "Final Ordenado", blocks: [temp] });
    setSteps(computedSteps);
  }, []);

  const merge = (left: number[], right: number[]): number[] => {
    const result: number[] = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  };

  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const resetSimulation = () => {
    setStepIndex(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.barTitle}>Mezcla Natural</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Números iniciales*/}
        <View style={styles.initialListContainer}>
          <Text style={styles.subtitleList}>{list.join(', ')}</Text>
        </View>

        {/* Mostrar información del paso */}
        <Text style={styles.title}>Paso {stepIndex} de {steps.length - 1}</Text>
        <Text style={styles.subtitle}>{steps[stepIndex]?.label}</Text>

        {/* Mostrar particiones o fusiones */}
        <View style={styles.listContainer}>
          {steps[stepIndex]?.blocks.map((block, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.itemText}>{block.join(', ')}</Text>
            </View>
          ))}
        </View>

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
            <Text style={styles.nextButtonText}>Siguiente Paso</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetSimulation} style={styles.refreshButton}>
            <Ionicons name="refresh" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.nextButton, { backgroundColor: '#5087F7', marginTop: 30 }]}
          onPress={() => router.push('/tema5/p1')}
        >
          <Text style={styles.nextButtonText}>Preguntas</Text>
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
    paddingHorizontal: 15,
    paddingBottom: 40,
    alignItems: 'center',
  },
  initialListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitleList: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#120B8F',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#120B8F',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  item: {
    padding: 14,
    backgroundColor: '#E3E9FF',
    borderColor: '#120B8F',
    borderWidth: 2,
    borderRadius: 10,
    minWidth: '90%',
    alignItems: 'center',
    marginBottom: 10,
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
    backgroundColor: '#28A745', // Verde
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  refreshButton: {
    backgroundColor: '#5087F7',
    borderRadius: 10,
    padding: 8,
    marginTop: 20, 
  },
});
