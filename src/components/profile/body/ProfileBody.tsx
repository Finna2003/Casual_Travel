import {Platform, StyleSheet, View} from "react-native";
import {Link, router} from "expo-router";
import AchievementSection from "./AchievementSection";
import {moderateAdaptive} from "../../../utility/metrics";
import InterestsSection from "./Interests/InterestsSection";
import ProjectButtonDark from "../../common/ProjectButtonDark";
import {useSession} from "../../../auth/SessionProvider";

export default function ProfileBody(){
    const {signOut} = useSession();

    return (
        <View style={styles.body}>
            <View>
                <View style={styles.achievement_list_cont}>
                    <AchievementSection itemRadius={moderateAdaptive(38)}/>
                </View>
            </View>
            <View style={styles.withPadding}>
                <View style={styles.interests_cont}>
                    <InterestsSection/>
                </View>
                <View style={styles.signOut_cont}>
                    <Link href={'/login'} asChild>
                        <ProjectButtonDark
                            text={'Вийти'}
                            width={150}
                            onPress={() => signOut()}
                        />
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {

    },
    achievement_list_cont: {
        marginTop: moderateAdaptive(25)
    },
    interests_cont: {
        marginTop: moderateAdaptive(65),
    },
    withPadding: {
        paddingHorizontal: moderateAdaptive(25),

    },
    signOut_cont: {
        marginTop: 25,
        alignSelf: "center"
    }
})
