import {View, Text, Image, StyleSheet} from "react-native";
import {Link, router} from "expo-router";
import {useSession} from "../../auth/SessionProvider";
import {COLORS, FONT_SIZES} from "../../constants/theme";
import React, {useState} from "react";
import ProjectButtonLight from "../../components/common/ProjectButtonLight";
import ProjectButtonDark from "../../components/common/ProjectButtonDark";
import ProjectTextInput from "../../components/common/ProjectTextInput";
import {SignInRequestData} from "../../auth/dto";
import {err} from "react-native-svg/lib/typescript/xml";
import {AxiosError} from "axios";


export default function Login(){
    const {signIn} = useSession();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<AxiosError | null>(null)

    const handleLogin = () => {
        if (!email || !password) {
            return
        }

        const data: SignInRequestData = {
            email: email,
            password: password
        }

        signIn(data)
            .then(() => router.replace('/'))
            .catch(err => setError(err));
    }

    return (
        <View style={{flex: 1}}>
            <View>
                <Image
                    source={require("../../assets/images/main.jpg")}
                    style={styles.img}
                    resizeMode={"cover"}
                />
            </View>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.title}>
                        Cas
                        <Text style={{color: COLORS.primary}}>U</Text>
                        <Text style={{color: "#F2D601"}}>A</Text>
                        LTravel
                    </Text>
                    <ProjectTextInput
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder={"Електронна пошта"}/>
                    <ProjectTextInput
                        onChangeText={text => setPassword(text)}
                        value={password}
                        placeholder={"Пароль"}/>
                    <ProjectButtonDark
                        text={"Увійти"}
                        onPress={() => handleLogin()}
                    />

                    <Link href={'/register'} style={styles.resetPassword}>
                        Забули пароль?
                    </Link>
                    {error && (
                        <View style={{alignSelf: "center"}}>
                            <Text style={{ fontSize: FONT_SIZES.sectionTitle }}>{error.message}</Text>
                        </View>
                    )}
                </View>
                <View>
                    <Link href='/register' asChild>
                        <ProjectButtonLight
                            text={"Створити обліковий запис"}
                            onPress={() => {}}
                        />
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 350
    },
    contentContainer: {
        flex: 1,
        marginBottom: 40,
        justifyContent: "space-between"
    },
    resetPassword: {
        alignSelf: "center",
        borderBottomWidth: 0.6,
        borderBottomColor: COLORS.grey,
        color: COLORS.grey
    },
    title: {
        fontSize: 45,
        marginVertical: 15,
        alignSelf: "center"
    }
})
