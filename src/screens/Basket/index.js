import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import BasketDishItem from '../../components/BasketDishItem';
import { useBasketContext } from '../../context/BasketContext';
import { useOrderContext } from '../../context/OrderContext';


const Basket = () => {
  const { restaurant, basketDishes, totalPrice } = useBasketContext();
  const { createOrder } = useOrderContext();

  return (
    <View style={styles.page}>
        <Text style={styles.name}>{restaurant?.name}</Text>
        
        <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 19}}>
            Your items
        </Text>

        <FlatList 
            data={basketDishes}  
            renderItem={({item}) => <BasketDishItem basketDish={item} />} />
     
        <View style={styles.separator} />

         <Pressable onPress={createOrder} style={styles.button}>
            <Text style={styles.buttonText}>Create Order ${totalPrice.toFixed(2)}</Text>
        </Pressable>
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