import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import quotesData from "./data/quotes.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { getRandomItem } from "./utils/random";
import Quote from "./components/Quote";

const motivationalQuotes = quotesData.quotes.filter(
  (q) => q.category !== "religious"
);
const religiousQuotes = quotesData.quotes.filter(
  (q) => q.category === "religious"
);

export default function App() {
  const [motivational, setMotivational] = useState(
    getRandomItem(motivationalQuotes)
  );
  const [religious, setReligious] = useState(getRandomItem(religiousQuotes));

  function handleMotivationalRefresh() {}
  function handleReligiousRefresh() {}

  return (
    <View style={styles.container}>
      <Header />
      <Quote text={motivational.text} author={motivational.author} />
      <Quote
        text={religious.text}
        author={religious.author}
        type={religious.category}
      />
      <Footer
        onRefreshMotivational={handleMotivationalRefresh}
        onRefreshReligious={handleReligiousRefresh}
      />
      <StatusBar style="auto" />
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
