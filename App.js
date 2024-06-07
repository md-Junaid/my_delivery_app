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
import MapPage from './pages/MapPage';
import UserPage from './pages/UserPage';
import PromoGallery from './pages/PromoGallery';
import LoyaltyPage from './pages/LoyaltyPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './constants/colors';

const CartRoute = () => <Text>Cart</Text>;

const UserRoute = () => <Text>User</Text>;

export default function App() {
  const Stack = createNativeStackNavigator();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'categories', title: 'Categories', focusedIcon: 'store-search', unfocusedIcon: 'store-search'},
    { key: 'pg', title: 'Offers', focusedIcon: 'sale', unfocusedIcon: 'sale' },
    { key: 'map', title: 'Map', focusedIcon: 'map-search', unfocusedIcon: 'map-search' },
    { key: 'lp', title: 'Loyalty', focusedIcon: 'heart-box', unfocusedIcon: 'heart-box' },
    { key: 'user', title: 'User', focusedIcon: 'account', unfocusedIcon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    categories: CategoryStack,
    pg: PromoGallery,
    map: MapPage,
    lp: LoyaltyPage,
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
