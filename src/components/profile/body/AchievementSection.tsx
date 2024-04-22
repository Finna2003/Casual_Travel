import {Image, Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS, FONT, FONT_SIZES} from "../../../constants/theme";
import {moderateAdaptive} from "../../../utility/metrics";

type AchievementListOptions = {
    itemRadius: number
}

export default function AchievementSection(props: AchievementListOptions){

    const images = [
        {id: '1', img: require("../../../assets/images/ach1.png"), name: "Дослідник"},
        {id: '2', img: require("../../../assets/images/ach2.png"), name: "Історик"},
        {id: '3', img: require("../../../assets/images/ach3.png"), name: "Мандрівник"},
        {id: '4', img: require("../../../assets/images/q.png"), name: "Скаутер"},
        {id: '5', img: require("../../../assets/images/q.png"), name: "Спортсмен"},
    ]

    const styles = createStyles(props)

    return (
        <View style={styles.cont}>
            <View style={styles.header}>
                <View style={styles.header_left}>
                    <View style={styles.header_left_title_cont}>
                        <Text style={styles.header_left_title}>
                            Досягнення
                        </Text>
                    </View>
                    <View style={styles.header_left_collectInfo_cont}>
                        <Text style={styles.header_left_collectInfo}>
                            3 з 75 зібрано
                        </Text>
                    </View>
                </View>
                <View style={styles.header_right}>
                    <View style={styles.header_right_img_cont}>
                        <Image style={styles.header_right_img} source={require('../../../assets/images/arrow_next.png')}/>
                    </View>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={styles.item_list_cont}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                {images.map(item => (
                    <View key={item.id} style={styles.item_cont}>
                        <View style={styles.img_cont}>
                            <Image style={styles.img} source={item.img}/>
                        </View>
                        <View style={styles.name_cont}>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

function createStyles(props: AchievementListOptions){
    return StyleSheet.create({
        cont: {

        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: moderateAdaptive(25)
        },
        header_left: {

        },
        header_left_title_cont: {

        },
        header_left_title: {
            fontSize: moderateAdaptive(FONT_SIZES.sectionTitle),
            fontFamily: FONT.bold
        },
        header_left_collectInfo_cont: {
            marginTop: moderateAdaptive(3)
        },
        header_left_collectInfo: {
            fontSize: moderateAdaptive(FONT_SIZES.medium),
            fontFamily: FONT.regular,
            color: COLORS.grey
        },
        header_right: {

        },
        header_right_img_cont: {
            height: moderateAdaptive(24),
            width: moderateAdaptive(24)
        },
        header_right_img: {
            width: "100%",
            height: "100%"
        },
        item_list_cont: {
            left: moderateAdaptive(20),
            marginTop: moderateAdaptive(20),
            overflow: "visible",
            justifyContent: "flex-start",
            flexDirection: "row",
            zIndex: 1
        },
        item_cont: {
            marginRight: moderateAdaptive(19),
            alignItems: "center",
            width: moderateAdaptive(91)
        },
        img_cont: {
            borderRadius: props.itemRadius,
            overflow: "hidden",
            borderWidth: 5,
            borderColor: COLORS.black,
            width: props.itemRadius * 2,
            height: props.itemRadius * 2,
        },
        img: {
            height: "100%",
            width: "100%"
        },
        name_cont: {
            marginTop: 5,
        },
        name: {
            fontSize: FONT_SIZES.medium,
            fontFamily: FONT.regular,
            color: COLORS.black,
            alignSelf: "center",
        }
    })
}
