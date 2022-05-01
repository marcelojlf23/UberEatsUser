import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, View, Pressable } from 'react-native';

const OrderListItem = ({order}) => {
    const navigation = useNavigation();

    return (
        <Pressable 
            onPress={ () => navigation.navigate('Order', { id: order.id }) } 
            style={styles.container}>
            <Image 
                source={{uri: order.Restaurant.image}} 
                style={{ width: 75, height: 75, marginRight: 5 }}
            />

            <View>
                <Text style={{fontWeight: '600', fontSize: 16}}>{order.Restaurant.name}</Text>
                <Text style={{marginVertical: 5}}>3 items &#8226; $38.45</Text>
                <Text>2 days ago &#8226; {order.status}</Text>
            </View>
        </Pressable>
    )
} 
        
export default OrderListItem;

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    }
});