import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <DishDetailsScreen />
      {/* <RestaurantDetailsScreen /> */}
      {/* <HomeScreekn /> */}

      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // marginVertical: 20,
  },
});
