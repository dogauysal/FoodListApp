import { Alert, FlatList, StyleSheet, Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/rootReducer"
import { ICartItem } from "../models/Cart/ICartItem"
import { useMemo } from "react"
import { IMenu } from "../models/Menu/IMenu"
import MenuItemRow from "../components/Menus/MenuItemRow"
import SubmitButton from "../components/shared/SubmitButton"
import useUtility from "../hooks/useUtility"
import PriceInfo from "../components/Cart/PriceInfo"
import { ClearCart } from "../store/Menu/menuActions"
import { RootStackParamList } from "../routes/types";

type CartScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Cart">

const CartScreen = ({
    navigation
}: CartScreenNavigationProp) => {

    const dispatch = useDispatch()

    const { calculateGrossTotal, calculateDiscount } = useUtility()

    const cart = useSelector<RootState, ICartItem[]>(state => state.Menu.cart)

    const selectedMenus: IMenu[] = useMemo(() => {
        return cart.map(c => c.menu)
    }, [cart])

    const gross = useMemo(() => {
        return calculateGrossTotal(cart)
    }, [cart])

    const discount = useMemo(() => {
        if (cart.length > 1) {
            return calculateDiscount(gross)
        }

        return 0
    }, [cart])

    const total = useMemo(() => { return gross - discount }, [gross, discount])

    const renderMenuItemRow = ({ item }: { item: IMenu }) => <MenuItemRow key={item.id} menu={item} />

    const onPurchase = () => {
        Alert.alert(
            "Satın Al",
            "Ürünleri satın almak istediğinize emin misiniz?",
            [
                { text: "Vazgeç", style: "cancel" },
                { text: "Satın Al", style: "default", onPress: confirmPurchase }
            ]
        )
    }

    const confirmPurchase = () => {
        dispatch(ClearCart())
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.menuSection}>
                <FlatList
                    data={selectedMenus}
                    renderItem={renderMenuItemRow}
                />
            </View>
            <View style={styles.totalPriceSection}>
                {total > 0 &&
                    <PriceInfo
                        gross={gross}
                        discount={discount}
                    />
                }

            </View>
            <View style={styles.actionSection}>
                <SubmitButton
                    label={`${total} TL Satın Al`}
                    backgroundColor="#e91d34"
                    labelColor="#fff"
                    onSubmit={onPurchase}
                    disabled={total === 0}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuSection: {
        flex: 3,
    },
    totalPriceSection: {
        flex: 2
    },
    actionSection: {
        flex: 1,
        alignItems: "center"
    }
})

export default CartScreen