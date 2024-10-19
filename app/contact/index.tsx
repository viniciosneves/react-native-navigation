import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Contact() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Contact</Text>
      <Link href="/">Ir para Home</Link>
      <Link href="/about">Ir para About</Link>
    </View>
  );
}
