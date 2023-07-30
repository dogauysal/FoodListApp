import { StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/rootReducer"
import { IMenu } from "../models/Menu/IMenu"
import { GetAllMenus } from "../store/Menu/menuActions"
import { useEffect } from "react"

const MenuListScreen = () => {

    const dispatch = useDispatch()

    const menus = useSelector<RootState, IMenu[]>(state => state.Menu.menus);

    useEffect(() => {
        fetchMenus()
    }, [])

    const fetchMenus = async () => {
        await dispatch(GetAllMenus())
    }

    return (
        <View style={styles.container}>
            <Text>Menu List Screen</Text>
            {menus.map((menu) => (
                <Text key={menu.id}>{menu.name}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MenuListScreen