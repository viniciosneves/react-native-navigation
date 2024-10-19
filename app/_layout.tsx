import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen 
          name="index"
          options={{
            drawerLabel: 'Home'
          }}
        />
        <Drawer.Screen 
          name="about"
          options={{
            drawerLabel: 'Sobre'
          }}
        />
        <Drawer.Screen 
          name="contact/index"
          options={{
            drawerLabel: 'Contato'
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
