import { Link, Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

function LogoTitle() {
    return (
        <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    );
}

export default function About() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Stack.Screen options={{
                title: 'Sobre a empresa',
                headerTitle: () => <LogoTitle />
            }}/>
            <Text>About</Text>
            <Link href="/">Ir para Home</Link>
            <Link href="/contact">Ir para Contact</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
});