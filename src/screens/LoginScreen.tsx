import { Form, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Keyboard, StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux"
import { ILoginModel } from "../models/Login/ILoginModel";
import { login } from "../store/Auth/authActions";
import FormInput from "../components/forms/FormInput";
import SubmitButton from "../components/shared/SubmitButton";

const LoginScreen = () => {

    const dispatch = useDispatch();

    const { formState, ...methods } = useForm<ILoginModel>({ mode: "onChange", defaultValues: { email: "", password: "" } })

    const { isValid } = formState;

    const onSubmit: SubmitHandler<ILoginModel> = (data: ILoginModel) => {
        Keyboard.dismiss();
        dispatch(login(data))
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Text style={styles.title}>Tıkla Gelsin</Text>
            </View>
            <View style={styles.formSection}>
                <FormProvider
                    {...methods}
                    formState={formState}
                >
                    <FormInput
                        name="email"
                        rules={{
                            required: "Email alanı boş bırakılamaz",
                            validate: (val: string) => {
                                let newVal = val;
                                if (val.endsWith(' ')) {
                                    newVal = newVal.substring(0, newVal.length - 1);
                                }

                                if (emailRegex.test(newVal)) {
                                    return true;
                                } else {
                                    return "Geçersiz e-mail";
                                }
                            }
                        }}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        disabled={false}
                    />
                    <FormInput
                        name="password"
                        rules={{
                            required: "Şifre alanı boş bırakılamaz",
                            validate: (val: string) => {
                                if (val.length < 7) {
                                    return "Şifre en az 7 karakter olmalıdır"
                                } else {
                                    return true
                                }
                            }
                        }}
                        disabled={false}
                        placeholder="Şifre"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </FormProvider>
            </View>
            <View style={styles.submitSection}>
                <SubmitButton
                    label="Giriş Yap"
                    backgroundColor="#e91d34"
                    labelColor="#fff"
                    onSubmit={methods.handleSubmit(onSubmit)}
                    disabled={!isValid}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerSection: {
        flex: 2,
        backgroundColor: "#e91d34",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 30
    },
    title: {
        fontSize: 40,
        color: "#fff"
    },
    formSection: {
        flex: 5,
        alignItems: "center",
    },
    submitSection: {
        flex: 3,
        alignItems: "center"
    }
})

export default LoginScreen