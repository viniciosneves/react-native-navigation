import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página inicial</Text>
      <Link href="/about">Ir para About</Link>
      <Link href="/contact">Ir para Contact</Link>
    </View>
  );
}
