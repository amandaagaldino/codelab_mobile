import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import quotesData from "./data/quotes.json";

const motivationalQuotes = quotesData.quotes.filter(
  (q) => q.category !== "religious"
);
const religiousQuotes = quotesData.quotes.filter(
  (q) => q.category === "religious"
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Frases Motivacionais</Text>
      <FlatList
        data={motivationalQuotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
      <Text>Frases Religiosas</Text>
      <FlatList
        data={religiousQuotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
