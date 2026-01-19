import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Línea de diseño superior*/}
      <View style={styles.topIndicator} />

      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        
        <View style={styles.headerTextContainer}>
          <Text style={styles.mainTitle}>EDD</Text>
          <View style={styles.titleBadge}>
            <Text style={styles.badgeText}>TECMINA</Text>
          </View>
        </View>

        <View style={styles.animationWrapper}>
          <LottieView
            source={require('../../assets/images/robot.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.welcomeText}>¡Bienvenido!</Text>
          <Text style={styles.description}>
            Aprende estructuras de datos de una manera visual y efectiva.
          </Text>
        </View>

        <Pressable 
          style={({ pressed }) => [
            styles.mainButton,
            pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] }
          ]} 
          onPress={() => router.push('/menu')}
        >
          <Text style={styles.mainButtonText}>EMPEZAR</Text>
        </Pressable>
      </Animated.View>

      <View style={styles.bottomBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', 
  },
  topIndicator: {
    height: 6,
    width: width * 0.4,
    backgroundColor: '#120b8f',
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? 60 : 40,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  headerTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: '900',
    color: '#120b8f',
    letterSpacing: -2,
  },
  titleBadge: {
    backgroundColor: '#120b8f',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  animationWrapper: {
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5,
  },
  lottie: {
    width: '90%',
    height: '90%',
  },
  textBlock: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
  },
  mainButton: {
    backgroundColor: '#120b8f',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  bottomBar: {
    height: 4,
    width: width * 0.2,
    backgroundColor: '#CBD5E1',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
  }
});