import { StyleSheet, TextInput, View } from "react-native"
import { TIKLAGELSINCOLOR } from "../../constants"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useDispatch } from "react-redux"
import _ from "lodash"
import { SearchMenus } from "../../store/Menu/menuActions"

const MenuSearchBar = () => {

    const dispatch = useDispatch();

    const debouncedSearch = _.debounce(onFilterMenus, 300)

    function onFilterMenus(text: string) {
        dispatch(SearchMenus(text))
    }

    const handleSearchBarChange = (text: string) => {
        debouncedSearch(text)
    }

    return (
        <View style={styles.container}>
            <Icon name="magnify" size={24} color={TIKLAGELSINCOLOR} />
            <TextInput
                placeholder="Arama Yap"
                style={styles.input}
                onChangeText={handleSearchBarChange}
                autoComplete="off"
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        paddingLeft: 10,
        paddingVertical: 5
    },
    input: {
        flex: 1,
        marginHorizontal: 10
    }
})

export default MenuSearchBar