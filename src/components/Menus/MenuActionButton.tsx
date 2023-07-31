import React, { useMemo } from "react"
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { DecreaseProductCount, IncreaseProductCount } from "../../store/Menu/menuActions";
import { RootState } from "../../store/rootReducer";
import { ICartItem } from "../../models/Cart/ICartItem";
import { IMenu } from "../../models/Menu/IMenu";

interface IProps {
    menuId: number
    backgroundColor: string;
    textColor: string;
}

const AddToCartButton: React.FC<IProps> = ({
    backgroundColor,
    textColor,
    menuId
}) => {

    const dispatch = useDispatch()

    const cart = useSelector<RootState, ICartItem[]>(state => state.Menu.cart)

    const itemCount = useMemo(() => {
        if (cart) {

            let item = cart.find(c => c.menuId === menuId)

            if (item) {
                return item.count
            }
        }


        return 0
    }, [cart])

    const addToCart = () => {
        dispatch(IncreaseProductCount(menuId))
    }

    const onPlusClick = () => {
        dispatch(IncreaseProductCount(menuId))
    }

    const onMinusClick = () => {
        dispatch(DecreaseProductCount(menuId))
    }




    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            {itemCount === 0 ? (
                <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
                    <Text style={[styles.addToCartButtonText, { color: textColor }]}>Sepete Ekle</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.countButtonContainer}>
                    <TouchableOpacity style={styles.minusButton} onPress={onMinusClick}><Text style={[styles.actionText, { color: textColor }]}>-</Text></TouchableOpacity>
                    <Text style={[styles.actionText, { color: textColor }]}>{itemCount}</Text>
                    <TouchableOpacity style={styles.plusButton} onPress={onPlusClick}><Text style={[styles.actionText, { color: textColor }]}>+</Text></TouchableOpacity>
                </View>
            )}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        paddingHorizontal: 4,
        borderRadius: 15,
        justifyContent: "center"
    },
    addToCartButton: {
        alignItems: "center",
        paddingVertical: 5
    },
    addToCartButtonText: {
        fontSize: 10,
        fontWeight: "bold"
    },
    countButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    actionText: {
        fontSize: 16,
        paddingHorizontal: 3
    },
    minusButton: {
        flex: 1,
        alignItems: "flex-start"
    },
    plusButton: {
        flex: 1,
        alignItems: "flex-end"
    }
})

export default AddToCartButton