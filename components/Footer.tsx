import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

type FooterProps = {
  onRefreshMotivational: () => void;
  onRefreshReligious: () => void;
};

function Footer({ onRefreshMotivational, onRefreshReligious }: FooterProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="refresh" size={32} onPress={onRefreshMotivational} />
      <Ionicons name="people" size={32} onPress={onRefreshReligious} />
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
  },
});