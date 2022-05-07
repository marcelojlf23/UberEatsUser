import { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models';

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]); 

  useEffect( () => {
    DataStore.query(Restaurant).then(setRestaurants);
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
