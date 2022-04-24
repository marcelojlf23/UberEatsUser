import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image 
        source={{ 
          uri: restaurant.image
        }} 
        style={styles.image}
      />
      <Text style={styles.title}>{ restaurant.name }</Text>
      <Text style={styles.subtitle}>${restaurant.deliveryFee} {restaurant.minDelivery} &#8226; {restaurant.maxDelivery} minutes</Text>
    </View>
  )
}

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer:  {
      width: '100%',
      marginVertical: 10,
    }, 
    image: {
      width: '100%',
      height: 200,
    },
    title: {
      fontWeight: "bold",
      fontSize: 18,
      marginVertical: 5,
    }, 
    subtitle: {
      color: 'gray',
    }
  });
  

