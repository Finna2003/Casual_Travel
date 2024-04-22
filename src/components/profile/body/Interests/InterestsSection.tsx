import {StyleSheet, View, Text} from "react-native";
import {COLORS, FONT, FONT_SIZES} from "../../../../constants/theme";
import {moderateAdaptive} from "../../../../utility/metrics";
import InterestItem from "./InterestItem";
import {useInterestsProfile} from "../../../../contexts/InterestsProfileProvider";
import ProjectButtonDark from "../../../common/ProjectButtonDark";
import {router} from "expo-router";
import ProjectButtonLight from "../../../common/ProjectButtonLight";
import {BlurView} from "expo-blur";

export default function InterestsSection(){
    const {interests} = useInterestsProfile();

    const interestsInfo = [
        {
            id: 1,
            img: require('../../../../assets/images/history-icon.png'),
            name: 'Історія',
            points: 65,
            color: '#A0522D'
        },
        {
            id: 2,
            img: require('../../../../assets/images/art-icon.png'),
            name: 'Мистецтво',
            points: 30,
            color: '#DC143C'
        },
        {
            id: 3,
            img: require('../../../../assets/images/nature-icon.png'),
            name: 'Природа',
            points: 47,
            color: `#008000`
        },
        {
            id: 4,
            img: require('../../../../assets/images/entertainment-icon.png'),
            name: 'Розваги',
            points: 80,
            color: `#FFA500`
        },
    ]

    return (
        <View style={styles.cont}>
            <View style={styles.title_cont}>
                <Text style={styles.title}>
                    Аналіз інтересів
                </Text>
            </View>
            <View style={styles.body}>
                <View style={styles.interests_cont}>
                    {interestsInfo.map(item => (
                        <View key={item.id} style={styles.interest_cont}>
                            <InterestItem
                                img={item.img}
                                name={item.name}
                                points={item.points}
                                color={item.color}
                            />
                        </View>
                    ))}
                </View>
                {!interests && (
                    <View style={{
                        borderRadius: moderateAdaptive(25),
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        backgroundColor: "white",
                        height: moderateAdaptive(290),
                        width: moderateAdaptive(320),
                    }}>
                        <ProjectButtonLight
                            text={"Пройти опитування"}
                            onPress={() => router.push('/interests-survey/welcome')}
                            width={250}
                        />
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {

    },
    title_cont: {

    },
    title: {
        fontFamily: FONT.bold,
        fontSize: moderateAdaptive(FONT_SIZES.sectionTitle)
    },
    body: {
        marginTop: moderateAdaptive(20),
        paddingVertical: moderateAdaptive(15),
        paddingHorizontal: moderateAdaptive(10),
        backgroundColor: COLORS.white,
        borderRadius: moderateAdaptive(25),

    },
    interests_cont: {
        marginBottom: -moderateAdaptive(20)
    },
    interest_cont: {
        marginBottom: moderateAdaptive(20)
    },
})
