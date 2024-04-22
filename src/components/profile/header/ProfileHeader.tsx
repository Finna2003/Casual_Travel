import {StyleSheet, Text, View} from "react-native";
import {COLORS, FONT, FONT_SIZES} from "../../../constants/theme";
import CircularProgressImage from "../../common/circular_progress_image/CircularProgressImage";
import {moderateAdaptive, verticalAdaptive} from "../../../utility/metrics";

export default function ProfileHeader(){

    return (
        <View style={styles.profile}>
            <View style={styles.profile_header_top}>
                <View style={styles.profile_header_img_cont}>
                    <CircularProgressImage
                        img={require("../../../assets/images/inna_2.jpg")}
                        imgRadius={moderateAdaptive(57)}
                        strokeRadius={moderateAdaptive(62)}
                        strokeWidth={moderateAdaptive(8)}
                        strokeColor={"#1E90FF"}
                        strokeProgressValue={75}
                        infoStrokeRadius={moderateAdaptive(15)}
                        infoStrokeWidth={moderateAdaptive(3)}
                        infoStrokeColor={"#1E90FF"}
                        infoFontColor={COLORS.white}
                        infoBackgroundColor={COLORS.black}
                        infoText={'2'}
                        infoFontSize={moderateAdaptive(21)}
                        infoFontFamily={FONT.bold}
                    />
                </View>
                <View style={styles.profile_header_info_cont}>
                    <View style={styles.profile_header_info_name_cont}>
                        <Text style={styles.profile_header_info_name}>
                            Інна
                        </Text>
                    </View>
                    <View style={styles.profile_header_info_username_cont}>
                        <Text style={styles.profile_header_info_username}>
                            @InnaFysiuk
                        </Text>
                    </View>
                    <View style={styles.profile_header_info_description_cont}>
                        <Text style={styles.profile_header_info_description}>
                            IT Recruiter, 20
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        marginTop: 15
    },
    profile_header_top:{
        alignSelf: "center",
        alignItems: "center"
    },
    profile_header_img_cont: {

    },
    profile_header_info_cont: {
        alignItems: "center",
    },
    profile_header_info_name_cont: {
        marginTop: 5,
    },
    profile_header_info_name: {
        color: COLORS.white,
        fontFamily: FONT.bold,
        fontSize: moderateAdaptive(FONT_SIZES.pageTitle),
    },
    profile_header_info_username_cont: {
        marginTop: verticalAdaptive(2.5)
    },
    profile_header_info_username: {
        fontSize: moderateAdaptive(FONT_SIZES.medium),
        fontFamily: FONT.regular,
        color: COLORS.white
    },
    profile_header_info_description_cont: {
        marginTop: verticalAdaptive(20)
    },
    profile_header_info_description: {
        color: COLORS.white,
        fontFamily: FONT.regular,
        fontSize: moderateAdaptive(FONT_SIZES.medium),
    },

})
