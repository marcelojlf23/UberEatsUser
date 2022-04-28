import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json';
const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) => {
    return (
        <View style={styles.row} >
            <View s tyle={styles.quantityContainer}>
                <Text>1</Text>
            </View>
            <Text style={{fontWeight: 'bold'}}>{basketDish.name}</Text>
            <Text style={{marginLeft: "auto"}}>${basketDish.price}</Text>
        </View>
    )
}
        
const Basket = () => {
  return (
    <View style={styles.page}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 19}}>Your items</Text>

        <FlatList 
            data={restaurant.dishes}  
            renderItem={({item}) => <BasketDishItem basketDish={item} />} />
     
        <View style={styles.separator} />

         <View style={styles.button}>
            <Text style={styles.buttonText}>Create Order</Text>
        </View>
    </View>
  )
}

export default Basket;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 40,
        padding: 10,
    },
    name: {
        fontSize: 24 ,
        fontWeight: '600',
        marginVertical: 10,
    },
    description: {
        color: 'gray',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
    },
    quantityContainer: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
});