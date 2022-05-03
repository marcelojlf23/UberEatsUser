import { StyleSheet, Text, View, FlatList } from 'react-native';

const BasketDishItem = ({ basketDish }) => {
    return (
        <View style={styles.row} >
            <View style={styles.quantityContainer}>
                <Text>1</Text>
            </View>
            <Text style={{fontWeight: 'bold'}}>{basketDish.name}</Text>
            <Text style={{marginLeft: "auto"}}>${basketDish.price}</Text>
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