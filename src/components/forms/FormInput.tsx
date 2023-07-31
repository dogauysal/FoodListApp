import React from "react";
import { UseControllerProps, useController, useFormContext } from "react-hook-form";
import { Dimensions, StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { TIKLAGELSINCOLOR } from "../../constants";

interface IProps extends TextInputProps, UseControllerProps {
    placeholder: string;
    disabled: boolean;
    defaultValue?: string
}

const FormInput = React.forwardRef<TextInput, IProps>(
    ({ name, rules, placeholder, disabled, defaultValue, ...inputProps }: IProps, ref: React.ForwardedRef<TextInput>) => {

        const formContext = useFormContext();
        const { formState } = formContext;

        const { field } = useController({ name, rules, defaultValue })

        const hasError = Boolean(formState.errors[name])

        return (
            <View style={styles.container}>
                <TextInput
                    ref={ref}
                    style={[styles.input, hasError ? styles.error : {}]}
                    onChangeText={field.onChange}
                    value={field.value}
                    placeholder={placeholder}
                    {...inputProps}
                />
                {hasError && <Text style={styles.errorText}>{`${formState.errors[name]?.message}`}</Text>}
            </View>
        )
    }
)

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    input: {
        borderWidth: 2,
        borderColor: TIKLAGELSINCOLOR,
        height: 50,
        borderRadius: 25,
        paddingLeft: 25,
        fontSize: 20,
        width: Dimensions.get("screen").width / 1.3
    },
    error: {
        borderColor: "red"
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
        paddingLeft: 25
    }
})

export default FormInput;