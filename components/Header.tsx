import { Image, StyleSheet, View } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});