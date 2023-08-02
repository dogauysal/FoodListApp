import { Image, StyleSheet, Text, View } from "react-native"
import { TIKLAGELSINCOLOR } from "../../constants"
import { IMenu } from "../../models/Menu/IMenu"
import React from "react"
import AddToCartButton from "./AddToCartButton"


interface IProps {
    menu: IMenu
}

const MenuItemRow: React.FC<IProps> = ({
    menu
}) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: menu.url
                    }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.detailContainer}>
                <View>
                    <Text style={styles.menuTitle}>{menu.name}</Text>
                </View>
                <View>
                    <Text style={styles.menuIngredients}>İçindekiler: {menu.ingredients.map(item => item.name).join(", ")}</Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.price}>{`${menu.price}TL`}</Text>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <AddToCartButton
                    menuId={menu.id}
                    backgroundColor="#fff"
                    textColor="#000"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: TIKLAGELSINCOLOR,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        alignItems: "center"
    },
    imageContainer: {
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 40
    },
    detailContainer: {
        flex: 5,
        paddingLeft: 10,
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        lineHeight: 20
    },
    menuIngredients: {
        fontSize: 12,
        color: "#fff",
        lineHeight: 20
    },
    price: {
        color: "#fff",
        fontWeight: "bold"
    },
    actionContainer: {
        flex: 2,
    }
})

export default MenuItemRow