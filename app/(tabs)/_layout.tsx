import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
      {/* Esto asegura que la barra de estado sea visible */}
      <StatusBar barStyle="dark-content" />
      
      <Stack
        screenOptions={{
          headerShown: false, 
          animation: 'fade',  
        }}
      >
        {/* 'index'  */}
        <Stack.Screen name="index" />
        
        {/* */}
        <Stack.Screen name="menu" />

      </Stack>
    </>
  );
}