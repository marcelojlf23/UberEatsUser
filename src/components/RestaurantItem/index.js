import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image 
        source={{ 
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg"
        }} 
        style={styles.image}
      />
      <Text style={styles.title}>El Cabo Coffe Bar Tres Tres de May</Text>
      <Text style={styles.subtitle}>$ $1.99 15-30 minutes</Text>
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
  

