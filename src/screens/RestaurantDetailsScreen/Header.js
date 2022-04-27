import { View, Text, Image,  } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
const restaurant = restaurants[0];
import styles from './styles';


const RestaurantHeader = ({restaurant}) =>{
    return (
        <View styles={styles.page}>
            <Image source={{uri: restaurant.image}} style={styles.image}/>

            <View style={styles.containerRestaurantDetail}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    ${restaurant.deliveryFee} &#8226; {restaurant.minDelivery} - 
                    {restaurant.maxDelivery} minutes
                </Text>
                
            </View>
                <Text style={styles.menuTitle}>Menu</Text>
        </View>
    )
} 

export default RestaurantHeader;