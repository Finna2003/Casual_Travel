import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {Link, router} from "expo-router";
import {useSession} from "../../auth/SessionProvider";
import React, {useState} from "react";
import {COLORS, FONT_SIZES} from "../../constants/theme";
import ProjectTextInput from "../../components/common/ProjectTextInput";
import ProjectButtonDark from "../../components/common/ProjectButtonDark";
import {RegisterRequestData} from "../../auth/dto";
import {err} from "react-native-svg/lib/typescript/xml";
import {AxiosError} from "axios";

export default function Register(){
    const {register} = useSession();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<AxiosError | null>(null)

    const handleRegister = () => {
        if (!userName || !email || !password){
            return
        }
        const data: RegisterRequestData = {
            username: userName,
            email: email,
            password: password
        }

        register(data)
            .then(() => router.replace('/'))
            .catch(err => setError(err));
    }

    return (
           <View style={{flex: 0.5}}>
               <View style={styles.contentContainer}>
                   <Text style={styles.title}>
                       Заповніть основну{'\n'}
                         інформацію
                   </Text>
                   <ProjectTextInput
                       onChangeText={text => setUserName(text)}
                       value={userName}
                       placeholder={"Ім'я"}/>
                   <ProjectTextInput
                       onChangeText={text => setEmail(text)}
                       value={email}
                       placeholder={"Електронна пошта"}/>
                   <ProjectTextInput
                       onChangeText={text => setPassword(text)}
                       value={password}
                       placeholder={"Пароль"}/>
                   <ProjectButtonDark
                       text={"Зареєструватися"}
                       onPress={() => handleRegister()}
                   />
                   {error && (
                       <View style={{alignSelf: "center"}}>
                           <Text style={{ fontSize: FONT_SIZES.sectionTitle }}>{error.message}</Text>
                       </View>
                   )}
                   <Link href={'/login'} style={styles.resetLogin}>
                       Вже маєте обліковий запис?
                   </Link>
               </View>
           </View>
     )
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        marginBottom: 40,
        justifyContent: "space-between"
    },
    resetLogin: {
        alignSelf: "center",
        borderBottomWidth: 0.6,
        borderBottomColor: COLORS.grey,
        color: COLORS.grey
    },
    title: {
        fontSize: 20,
        marginTop: 55,
        marginBottom: 35,
        alignSelf: "center",
        textAlign: 'center'
    }
})
