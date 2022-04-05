import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function MeuComponente() {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitulo01}>React Native</Text>
        <Text style={styles.cardTitulo02}>Criando aplicações para android e IOS</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FFF',
      padding: 12,
      borderRadius: 3,
      marginVertical: 7,
    },
    cardTitulo01: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'red',
    },
    cardTitulo02: {
      color: '#999',
    },
});