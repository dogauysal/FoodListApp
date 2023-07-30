import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import LoginScreen from "../screens/LoginScreen";
import MenuListScreen from "../screens/MenuListScreen";
import CartScreen from "../screens/CartScreen";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import MenuListHeader from "../components/Menus/MenuListHeader";

const RootStack = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>()

    const isAuthenticated = useSelector<RootState, boolean>(state => state.Auth.isAuthenticated)

    return (
        <Stack.Navigator
            initialRouteName={isAuthenticated ? "MenuList" : "Login"}
        >
            {!isAuthenticated ?
                (<Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />)
                :
                (
                    <Stack.Group>
                        <Stack.Screen
                            name="MenuList"
                            component={MenuListScreen}
                            options={({ navigation, route }) => ({
                                header: () => <MenuListHeader navigation={navigation} route={route} />,
                            })}
                        />
                        <Stack.Screen
                            name="Cart"
                            component={CartScreen}
                        />
                    </Stack.Group>
                )
            }


        </Stack.Navigator>
    )
}

export default RootStack;