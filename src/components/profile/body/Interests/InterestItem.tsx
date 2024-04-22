import {ColorValue, Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import ProgressLine from "../../../common/ProgressLine";
import {moderateAdaptive} from "../../../../utility/metrics";
import {COLORS, FONT, FONT_SIZES} from "../../../../constants/theme";

type InterestItemOptions = {
    img: ImageSourcePropType,
    name: string,
    points: number,
    color: ColorValue
}

export default function InterestItem(props: InterestItemOptions){

    const styles = createStyles(props.color);

    return (
        <View style={styles.cont}>
            <View style={styles.img_cont}>
                <View style={styles.img_back}/>
                <Image source={props.img} style={styles.img}/>
            </View>
            <View style={styles.info_cont}>
                <View style={styles.info_top_cont}>
                    <View style={styles.info_top_left_cont}>
                        <Text style={styles.info_top_name}>
                            {props.name}
                        </Text>
                    </View>
                    <View style={styles.info_top_right_cont}>
                        <Text style={styles.info_top_currentPoints}>
                            {props.points}
                        </Text>
                        <Text style={styles.info_top_pointsDivider}>
                            /
                        </Text>
                        <Text style={styles.info_top_totalPoints}>
                            100
                        </Text>
                    </View>
                </View>
                <View style={styles.info_bottom_cont}>
                    <ProgressLine
                        color={props.color}
                        progress={props.points}/>
                </View>
            </View>
        </View>
    )
}

const createStyles = (color: ColorValue) => StyleSheet.create({
    cont: {
        height: moderateAdaptive(50),
        width: "100%",
        flexDirection: "row",
    },
    img_cont: {
        overflow: "hidden",
        borderRadius: 100,
        height: "100%",
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    img_back: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: color,
        opacity: 0.2,
    },
    img: {
        height: "65%",
        aspectRatio: 1
    },
    info_cont: {
        marginLeft: moderateAdaptive(15),
        alignSelf: "center",
        flex: 1
    },
    info_top_cont: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    info_top_left_cont: {
        marginBottom: moderateAdaptive(5)
    },
    info_top_name: {
        fontFamily: FONT.regular,
        fontSize: moderateAdaptive(FONT_SIZES.small)
    },
    info_top_right_cont: {
        flexDirection: "row"
    },
    info_top_currentPoints: {
        fontFamily: FONT.regular,
        fontSize: moderateAdaptive(FONT_SIZES.small)
    },
    info_top_pointsDivider: {
        color: COLORS.grey,
        marginHorizontal: moderateAdaptive(4),
        fontFamily: FONT.regular,
        fontSize: moderateAdaptive(FONT_SIZES.small)
    },
    info_top_totalPoints: {
        color: COLORS.grey,
        fontFamily: FONT.regular,
        fontSize: moderateAdaptive(FONT_SIZES.small)
    },
    info_bottom_cont: {
        width: "100%",
        height: moderateAdaptive(12),
        overflow: "hidden",
        borderRadius: 25
    }
});
