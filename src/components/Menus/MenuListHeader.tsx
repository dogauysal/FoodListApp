import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../../routes/types"
import React, { useMemo } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { TIKLAGELSINCOLOR } from "../../constants";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/Auth/authActions";
import { RootState } from "../../store/rootReducer";
import { ICartItem } from "../../models/Cart/ICartItem";

type MenuListScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "MenuList">;

interface IProps extends MenuListScreenNavigationProp {

}

const MenuListHeader: React.FC<IProps> = ({
    navigation
}) => {

    const insets = useSafeAreaInsets()

    const dispatch = useDispatch()

    const cart = useSelector<RootState, ICartItem[]>(state => state.Menu.cart);

    const cartItemCount = useMemo(() => {
        if (cart) {
            return cart.length
        }

        return 0
    }, [cart])

    const onLogout = () => {
        Alert.alert(
            "Çıkış Yap",
            "Uygulamadan çıkmak istediğinize emin misiniz?",
            [
                { text: "Vazgeç", style: "cancel" },
                { text: "Çıkış Yap", style: "destructive", onPress: () => dispatch(logout()) }
            ]
        )
    }

    return (
        <View style={[styles.container, {
            height: Platform.OS === "ios" ? 40 + insets.top : 40
        }]}>
            <TouchableOpacity style={styles.leftSection} onPress={onLogout}>
                <Icon name="logout" size={24} color={TIKLAGELSINCOLOR} />
            </TouchableOpacity>
            <View style={styles.titleSection}>
                <Text style={styles.titleText}>Ürün Listesi</Text>
            </View>
            <TouchableOpacity style={styles.rightSection} onPress={() => navigation.navigate("Cart")}>
                <Text style={styles.badge}>{cartItemCount}</Text>
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
        alignItems: "flex-end",

    },
    badge: {
        fontSize: 14,
        fontWeight: "bold",
        color: TIKLAGELSINCOLOR,
        position: "absolute",
        top: -12,
        right: -3
    }
})

export default MenuListHeader;