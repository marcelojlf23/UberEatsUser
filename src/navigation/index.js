import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/Basket';
import ProfileScreen from '../screens/ProfileScreen';
import OrderDetails from '../screens/OrderDetails';
import OrdersScreen from '../screens/OrdersScreen';
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useAuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    const { dbUser } = useAuthContext();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            { dbUser ? (
                <Stack.Screen name="HomeTabs" component={ HomeTabs } />
            ) : (
                <Stack.Screen name="Profile" component={ ProfileScreen } />
            )}
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}
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
            <HomeStack.Screen name="Restaurants"  component={ HomeScreen } />
            <HomeStack.Screen name="Restaurant" options={{headerShown: false}} component={ RestaurantDetailsScreen } />
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