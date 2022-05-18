import { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import Header from './Header';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Restaurant, Dish } from "../../models";
import { useBasketContext } from '../../context/BasketContext';

function RestaurantDetailsScreen() {
    const [restaurant, setRestaurant] = useState(null);
    const [dishes, setDishes] = useState([]);


    const route = useRoute();
    const navigation = useNavigation();
 
    const id = route.params?.id;

    const {setRestaurant: setBasketRestaurant} = useBasketContext();

    useEffect(() => {
      if (!id) {
        return;
      }

      setBasketRestaurant(null);

      DataStore.query(Restaurant, id).then(setRestaurant);

      DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(setDishes);
    }, [id]);

    useEffect(() => {
      setBasketRestaurant(restaurant);
    }, [restaurant]);
    
    if (!restaurant) { 
      return (<ActivityIndicator size={"large"}  color="gray"/>);
    }
    
  
    return (
        <View styles={styles.page}>
            <FlatList 
              ListHeaderComponent={() => <Header restaurant={restaurant} />}
              data={ dishes }
              renderItem={({ item }) => <DishListItem dish={item} />}
              keyExtractor={item => item.name}
            />

            
            <Ionicons 
              onPress={() => navigation.goBack()}
              name="arrow-back-circle" 
              size={45} 
              color='white' 
              style={styles.iconContainer}
            />

        </View>
    )
}

export default RestaurantDetailsScreen;