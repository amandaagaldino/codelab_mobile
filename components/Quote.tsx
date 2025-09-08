import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface QuoteProps {
  text: string;
  author: string;
  type?: string;
}

const Quote = ({ text, author, type }: QuoteProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>{text}</Text>
      <Text style={styles.author}>
        - {author}
        {type ? ` (${type})` : ""}
      </Text>
      <Ionicons name="bookmark-outline" size={24} />
    </View>
  );
};

export default Quote;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    padding: 20,
    borderRadius: 25,
    marginVertical: 20,
  },
  quoteText: {
    fontSize: 18,
    marginVertical: 80,
  },
  author: {
    fontSize: 14,
    marginTop: 4,
    textAlign: "right",
  },
});