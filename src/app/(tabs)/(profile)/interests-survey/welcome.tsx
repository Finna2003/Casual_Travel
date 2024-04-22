import {Image, StyleSheet, Text, View} from "react-native";
import ProjectButtonDark from "../../../../components/common/ProjectButtonDark";
import {router} from "expo-router";
import {COLORS} from "../../../../constants/theme";
import React from "react";

export default function Welcome(){
    return (
        <View style={styles.contentContainer}>
            <View>
                <Image
                    source={require("../../../../assets/images/photo2.jpg")}
                    style={styles.img}
                    resizeMode={"cover"}
                />
            </View>
            <Text style={styles.title}>
                Пройдіть інтерактивне опитування, {'\n'}
                щоб створити персоналізований {'\n'}
                маршрут
            </Text>
            <ProjectButtonDark text={"Розпочати"} onPress={() => {
                router.push("/interests-survey/artOfTravel");
            }}/>
        </View>
    )
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 0.75,
        marginBottom: 40,
        backgroundColor: COLORS.white,
        justifyContent: "space-between"
    },
    img: {
        marginTop: 120,
        width: 333,
        alignSelf: "center",
        height: 234
    },
    title: {
        fontSize: 20,
        alignSelf: "center",
        textAlign: 'center'
    }
})
