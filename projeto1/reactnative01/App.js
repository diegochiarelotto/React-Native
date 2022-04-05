import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MeuComponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.texto}>Meu | APP</Text>      
    <ScrollView>
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    paddingTop: 10,
  },
  texto: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 24,
  },
});
