import { StyleSheet, Text, View, FlatList } from 'react-native';
import OrderListItem from '../../components/OrderListItem';
import orders from '../../../assets/data/orders.json';
import { useOrderContext } from '../../context/OrderContext';

const OrdersScreen = () => {
  const { orders } = useOrderContext();

  return (
    <View style={{flex:1, width: '100%' }}>
        <FlatList 
          data={orders} 
          renderItem={({ item }) => <OrderListItem order={item} />} 
        />
    </View>
  )
}

export default OrdersScreen;

const styles = StyleSheet.create({
});