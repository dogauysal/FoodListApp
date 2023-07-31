import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { TIKLAGELSINCOLOR } from "../../constants"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useDispatch } from "react-redux"
import _ from "lodash"
import { SearchMenus } from "../../store/Menu/menuActions"
import { useRef } from "react"

const MenuSearchBar = () => {

    const dispatch = useDispatch();

    const searchInputRef = useRef<TextInput>(null)

    const debouncedSearch = _.debounce(onFilterMenus, 300)

    function onFilterMenus(text: string) {
        dispatch(SearchMenus(text))
    }

    const handleSearchBarChange = (text: string) => {
        debouncedSearch(text)
    }

    const clearInput = () => {
        searchInputRef.current?.clear()
        dispatch(SearchMenus(""))
    }

    return (
        <View style={styles.container}>
            <Icon name="magnify" size={24} color={TIKLAGELSINCOLOR} />
            <TextInput
                ref={searchInputRef}
                placeholder="Arama Yap"
                style={styles.input}
                onChangeText={handleSearchBarChange}
                autoComplete="off"
                autoCorrect={false}
            />
            <TouchableOpacity onPress={clearInput} style={styles.clearInput}>
                <Icon name="close-circle-outline" size={16} color={"grey"} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
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
        marginLeft: 10,
        marginRight: 25,
        paddingVertical: 4,
    },
    clearInput: {
        paddingRight: 5
    }
})

export default MenuSearchBar