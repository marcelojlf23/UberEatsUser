import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';

const restaurant = restaurants[0];

function RestaurantDetailsScreen(){
    return (
        <View styles={styles.page}>
            <Image source={{uri: restaurant.image}} style={styles.image}/>

            <Ionicons 
              name="arrow-back-circle" 
              size={45} 
              color='white' 
              style={styles.iconContainer}
            />

            
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    ${restaurant.deliveryFee} &#8226; {restaurant.minDelivery} - 
                    {restaurant.maxDelivery} minutes
                </Text>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    page: {
      flex: 1,
    },  
    iconContainer: {
        position: 'absolute', 
        top: 40,
        left: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 5/3,
    },

    title: {
      fontWeight: 'bold',
      fontSize: 35,
    },
    subtitle: {
      color: 'gray',
      fontSize: 15,
      marginVertical: 10,
    },
    container: {
        margin: 10,
    }
  });
  

export default RestaurantDetailsScreen;