import React from "react"
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface IProps {
    backgroundColor: string
    label: string
    labelColor: string
    onSubmit: () => void
    disabled: boolean
}

const SubmitButton: React.FC<IProps> = ({
    backgroundColor,
    label,
    labelColor,
    onSubmit,
    disabled
}) => {

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: backgroundColor }, disabled ? styles.disabled : {}]}
            onPress={onSubmit}
            disabled={disabled}
        >
            <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 25,
        marginVertical: 10,
        width: Dimensions.get("screen").width / 1.3,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: 20,
        fontWeight: "bold"
    },
    disabled: {
        opacity: 0.5
    }
})

export default SubmitButton;