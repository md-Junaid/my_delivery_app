import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryStack from './pages/CategoryStack';
import AiPage from './pages/AiPage';
import UserPage from './pages/UserPage';
import Colors from './constants/colors';

const MapRoute = () => <Text>Map</Text>;

const CartRoute = () => <Text>Cart</Text>;

const UserRoute = () => <Text>User</Text>;

export default function App() {
  const Stack = createNativeStackNavigator();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'categories', title: 'Categories', focusedIcon: 'store-search', unfocusedIcon: 'store-search-outline'},
    { key: 'ai', title: 'AI', focusedIcon: 'robot-excited', unfocusedIcon: 'robot-happy-outline' },
    { key: 'map', title: 'Map', focusedIcon: 'map-search', unfocusedIcon: 'map-search-outline' },
    { key: 'cart', title: 'Cart', focusedIcon: 'cart', unfocusedIcon: 'cart-outline' },
    { key: 'user', title: 'User', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    categories: CategoryStack,
    ai: AiPage,
    map: MapRoute,
    cart: CartRoute,
    user: UserPage,
  });

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'green',
      secondary: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer theme={useTheme()}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          activeColor={Colors.primary600}
        />
      </NavigationContainer>
    </PaperProvider>
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
