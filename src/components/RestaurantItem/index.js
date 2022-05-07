import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation  } from '@react-navigation/native';

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Restaurant', { id: restaurant.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image 
        source={{ 
          uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE,
        }} 
        style={styles.image}
      />
      <View>
        <View> 
          <Text style={styles.title}>{ restaurant.name }</Text>
          <Text style={styles.subtitle}>${restaurant.deliveryFee} {restaurant.minDelivery} &#8226; {restaurant.maxDelivery} minutes</Text>
        </View>
        <View> 
          <Text style={styles.rating}>{ restaurant.rating }</Text>
        </View>
      </View>
    </Pressable>
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
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      marginLeft: 'auto',
      backgroundColor: 'lightgray',
      width: 25,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    }
  });