import { StyleSheet, Text, View, FlatList } from 'react-native';

const BasketDishItem = ({ basketDish }) => {
    return (
        <View style={styles.row} >
            <View style={styles.quantityContainer}>
                <Text>{basketDish.quantity}</Text>
            </View>
            <Text style={{fontWeight: 'bold'}}>{basketDish.Dish.name}</Text>
            <Text style={{marginLeft: "auto"}}>${basketDish.Dish.price}</Text>
        </View>
    )
}

export default BasketDishItem;


const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    
    quantityContainer: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
});