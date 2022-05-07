import { View, Text, Image,  } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
const restaurant = restaurants[0];
import styles from './styles';
const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

const RestaurantHeader = ({restaurant}) =>{
    return (
        <View styles={styles.page}>
            <Image source={{uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE}} style={styles.image}/>

            <View style={styles.containerRestaurantDetail}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    ${restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDelivery} - 
                    {restaurant.maxDelivery} minutes
                </Text>
                
            </View>
                <Text style={styles.menuTitle}>Menu</Text>
        </View>
    )
} 

export default RestaurantHeader;