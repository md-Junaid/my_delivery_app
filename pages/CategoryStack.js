import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import {Row} from 'react-native-paper-grid';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getHeaderTitle } from '@react-navigation/elements';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductOverviewScreen from '../screens/ProductOverviewScreen';


const Header = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header mode="center-aligned">
      {back ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
        />
      ) : null}
      <Appbar.Content
        title={
          back ? title : <Row><MaterialCommunityIcons name="storefront" size={40} color={'purple'} /><Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 5 }}>Profindo</Text></Row>
        }
      />
    </Appbar.Header>
  );
};

function CategoryStack () {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator 
      initialRouteName="Categories"
      headerMode="screen"
      screenOptions={{
        header: (props) => (
          <Header {...props} />
        ),
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ headerTitle: 'App Name' }}
      />
      <Stack.Screen
        name="Products"
        component={ProductOverviewScreen}
        options={{ headerTitle: 'Products' }}
      />
    </Stack.Navigator>
  );
};

export default CategoryStack;
