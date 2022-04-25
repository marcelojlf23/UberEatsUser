import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  flatList: {
    width: '100%',
    padding: 10,
  }
});
