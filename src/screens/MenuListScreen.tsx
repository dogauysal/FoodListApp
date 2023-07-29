import { StyleSheet, Text, View } from "react-native"

const MenuListScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Menu List Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MenuListScreen