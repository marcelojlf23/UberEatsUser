import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/Basket';
import ProfileScreen from '../screens/ProfileScreen';
import OrderDetails from '../screens/OrderDetails';
import OrdersScreen from '../screens/OrdersScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShow: false }}>
            <Stack.Screen name="HomeTabs" component={ HomeTabs } />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator 
            barStyle={{  backgroundColor: 'white'  }}
        >
            <Tab.Screen 
                name="Home" 
                component={ HomeStackNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={25} color={color} />
                    )
                }} 
            />
            <Tab.Screen 
                name="Orders" 
                component={ OrderStackNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="list-alt" size={25} color={color} />
                    )
                }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={ ProfileScreen }
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={25} color={color} />
                    )
                }} 
            />
        </Tab.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Restaurants" component={ HomeScreen } />
            <HomeStack.Screen name="Restaurant" component={ RestaurantDetailsScreen } />
            <HomeStack.Screen name="Dish" component={ DishDetailsScreen } />
            <HomeStack.Screen name="Basket" component={ Basket } />
        </HomeStack.Navigator>
    );
};

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen name="Orders" component={ OrdersScreen } />
            <OrderStack.Screen name="Order" component={ OrderDetails } />
        </OrderStack.Navigator>
    );
};

export default RootNavigator;