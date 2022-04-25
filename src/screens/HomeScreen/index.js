import { StyleSheet, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
      <FlatList
        style={styles.flatList}
        data={restaurants} 
        renderItem={({ item }) => <RestaurantItem restaurant={ item }/>}
        showsVerticalScrollIndicator={false}
      />
  );
}

const styles = StyleSheet.create({

});
