import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Basket from './src/screens/Basket';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderDetails from './src/screens/OrderDetails';
import OrdersScreen from './src/screens/OrdersScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import { withAuthenticator  } from 'aws-amplify-react-native';
import config from './src/aws-exports';
import AuthContextProvider from './src/context/AuthContext';
import BasketContextProvider from './src/context/BasketContext';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true
  }
});

function App() {
  return (
    <NavigationContainer>    
      <AuthContextProvider>
        <BasketContextProvider>
          <RootNavigator />
        </BasketContextProvider>
      </AuthContextProvider>
      
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // marginVertical: 20,
  },  
});
 