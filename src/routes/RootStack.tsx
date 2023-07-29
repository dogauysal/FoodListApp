import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import LoginScreen from "../screens/LoginScreen";
import MenuListScreen from "../screens/MenuListScreen";
import CartScreen from "../screens/CartScreen";

const RootStack = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="MenuList"
                component={MenuListScreen}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
            />
        </Stack.Navigator>
    )
}

export default RootStack;