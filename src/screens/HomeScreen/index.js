import { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models';

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]); 

  const fetchRestaurants = async () => {
    const results = await DataStore.query(Restaurant);
    setRestaurants(results); 
  }

  useEffect( () => {
    fetchRestaurants();
  }, []);
  
  return (
    <View style={styles.page}>
      <FlatList
        style={styles.flatList}
        data={restaurants} 
        renderItem={({ item }) => <RestaurantItem restaurant={ item }/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },  
  flatList: {
    width: '100%',
    padding: 10,
  }
});
