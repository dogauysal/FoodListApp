import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native"

interface IProps {
    gross: number;
    discount: number;
}

const PriceInfo: React.FC<IProps> = ({
    gross,
    discount
}) => {

    const total = useMemo(() => { return gross - discount }, [gross, discount])

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.price}>Fiyat</Text>
                <Text style={styles.price}>{gross} TL</Text>
                {discount > 0 && <View style={styles.crossLine} />}
            </View>
            {discount > 0 && (
                <View style={styles.row}>
                    <Text style={styles.price}>İndirim</Text>
                    <Text style={styles.price}>{discount} TL</Text>
                </View>
            )}

            <View style={styles.divider}></View>
            <View style={styles.row}>
                <Text style={styles.price}>Toplam</Text>
                <Text style={styles.price}> {total} TL</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        // width: "50%"
    },
    row: {
        marginVertical: 10,
        paddingHorizontal: 2,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    price: {
        fontSize: 24
    },
    divider: {
        borderWidth: 1,
        marginHorizontal: -5
    },
    crossLine: {
        width: 48,
        height: 4,
        backgroundColor: 'black',
        transform: [{ rotate: '-45deg' }],
        position: "absolute",
        right: 24,
        bottom: 16
    },
})

export default PriceInfo;