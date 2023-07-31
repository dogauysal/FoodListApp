import { FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/rootReducer"
import { IMenu } from "../models/Menu/IMenu"
import { GetAllMenus } from "../store/Menu/menuActions"
import { useEffect } from "react"
import MenuItemRow from "../components/Menus/MenuItemRow"
import MenuSearchBar from "../components/Menus/MenuSearchBar"

const MenuListScreen = () => {

    const dispatch = useDispatch()

    const filteredMenus = useSelector<RootState, IMenu[]>(state => state.Menu.filteredMenus);

    useEffect(() => {
        fetchMenus()
    }, [])

    const fetchMenus = async () => {
        await dispatch(GetAllMenus())
    }

    const renderMenuItemRow = ({ item }: { item: IMenu }) => <MenuItemRow key={item.id} menu={item} />

    return (
        <View style={styles.container}>
            <MenuSearchBar />
            <FlatList
                data={filteredMenus}
                renderItem={renderMenuItemRow}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

export default MenuListScreen