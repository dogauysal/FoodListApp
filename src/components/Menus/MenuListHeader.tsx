import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../../routes/types"
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { TIKLAGELSINCOLOR } from "../../constants";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { logout } from "../../store/Auth/authActions";

type MenuListScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "MenuList">;

interface IProps extends MenuListScreenNavigationProp {

}

const MenuListHeader: React.FC<IProps> = ({
    navigation
}) => {

    const insets = useSafeAreaInsets()

    const dispatch = useDispatch()

    return (
        <View style={[styles.container, {
            height: Platform.OS === "ios" ? 40 + insets.top : 40
        }]}>
            <TouchableOpacity style={styles.leftSection} onPress={() => dispatch(logout())}>
                <Icon name="logout" size={24} color={TIKLAGELSINCOLOR} />
            </TouchableOpacity>
            <View style={styles.titleSection}>
                <Text style={styles.titleText}>Ürün Listesi</Text>
            </View>
            <TouchableOpacity style={styles.rightSection} onPress={() => navigation.navigate("Cart")}>
                <Icon name="cart" size={24} color={TIKLAGELSINCOLOR} />
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    leftSection: {
        flex: 1,
        alignItems: "flex-start"
    },
    titleSection: {
        flex: 5,
        alignItems: "center"
    },
    titleText: {
        fontSize: 24,
        color: TIKLAGELSINCOLOR
    },
    rightSection: {
        flex: 1,
        alignItems: "flex-end"
    }
})

export default MenuListHeader;