import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{
                headerStyle: { backgroundColor: '#0a0a0c' },
                headerTintColor: '#fff',
                drawerStyle: { backgroundColor: '#0a0a0c', width: 250 },
                drawerActiveTintColor: '#00f2ff',
                drawerInactiveTintColor: '#888',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
                <Drawer.Screen name="home" options={{ drawerLabel: 'Inicio', title: 'Seda & Olivo', drawerIcon: ({ color, size }: { color: string; size: number }) => <Ionicons name="home" size={size} color={color} /> }} />
                <Drawer.Screen name="menu" options={{ drawerLabel: 'Carta', title: 'Nuestra Carta', drawerIcon: ({ color, size }: { color: string; size: number }) => <Ionicons name="restaurant" size={size} color={color} /> }} />
                <Drawer.Screen name="gallery" options={{ drawerLabel: 'Galería', title: 'Visuales', drawerIcon: ({ color, size }: { color: string; size: number }) => <Ionicons name="images" size={size} color={color} /> }} />
                <Drawer.Screen name="booking" options={{ drawerLabel: 'Reserva', title: 'Tu Mesa', drawerIcon: ({ color, size }: { color: string; size: number }) => <Ionicons name="calendar" size={size} color={color} /> }} />
            </Drawer>
        </GestureHandlerRootView>
    );
}
