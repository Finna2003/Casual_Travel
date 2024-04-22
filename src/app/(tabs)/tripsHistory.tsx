import {ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import React from "react";
import TripHistoryField from "../../components/common/TripHistoryField";


export default function TripsHistory (){
    return (
        <ScrollView style={styles.contentContainer}
                    showsVerticalScrollIndicator={false}>
            <TripHistoryField
                text="Парк імені Тараса Шевченка"
                btnStyles={styles.container}
                date="10.10.2023"
                btnTextStyles={styles.btnText}
                btnTextStyles2={styles.btnText2}
                imagePath={require("../../assets/images/park.jpg")}/>
            <TripHistoryField
                text="Парк Феофанія"
                btnStyles={styles.container}
                date="12.11.2023"
                btnTextStyles={styles.btnText}
                btnTextStyles2={styles.btnText2}
                imagePath={require("../../assets/images/park_feofanija.jpg")}/>
            <TripHistoryField
                text="Золоті Ворота"
                btnStyles={styles.container}
                date="23.12.2023"
                btnTextStyles={styles.btnText}
                btnTextStyles2={styles.btnText2}
                imagePath={require("../../assets/images/Golden_Gates.jpg")}/>
            <TripHistoryField
                text="Андріївський узвіз"
                btnStyles={styles.container}
                date="01.01.2023"
                btnTextStyles={styles.btnText}
                btnTextStyles2={styles.btnText2}
                imagePath={require("../../assets/images/And_Ch.jpg")}/>
            <TripHistoryField
                text="Костел Святого Миколая"
                btnStyles={styles.container}
                date="03.02.2024"
                btnTextStyles={styles.btnText}
                btnTextStyles2={styles.btnText2}
                imagePath={require("../../assets/images/kostel.jpg")}/>
            <TripHistoryField
                text="Батьківщина-Мати"
                btnStyles={styles.container}
                date="25.02.2024"
                btnTextStyles={styles.btnText}
                btnTextStyles2={styles.btnText2}
                imagePath={require("../../assets/images/main.jpg")}/>
            <TripHistoryField
                text="Будинок з химерами"
                btnStyles={styles.container}
                date="30.03.2024"
                btnTextStyles={styles.btnText}
                btnTextStyles2={styles.btnText2}
                imagePath={require("../../assets/images/House.jpg")}/>


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {},
    btnText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    btnText2: {
    },
    contentContainer: {
        alignSelf: "center",
        marginTop: SIZES.pressable.defaultMargin,
        backgroundColor: COLORS.light_grey
    },
    container2: {
        width: "100%",
        height: 80,
        backgroundColor: COLORS.white
    },
    title: {
        fontSize: 22,
        marginTop: 60,
        alignSelf: "center",
        textAlign: 'center',
        fontWeight: 'bold',
    }
})