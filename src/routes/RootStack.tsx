import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import LoginScreen from "../screens/LoginScreen";
import MenuListScreen from "../screens/MenuListScreen";
import CartScreen from "../screens/CartScreen";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const RootStack = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>()

    const isAuthenticated = useSelector<RootState, boolean>(state => state.Auth.isAuthenticated)

    return (
        <Stack.Navigator
            initialRouteName={isAuthenticated ? "MenuList" : "Login"}
        >
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