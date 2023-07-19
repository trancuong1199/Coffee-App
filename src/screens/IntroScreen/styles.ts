import { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../constants';
import { Responsive } from '../../utils/Reponsive';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Responsive.height(50),
      paddingBottom: Responsive.height(50),
    },
    introMain : {
        position: "relative",
        height: "100%"
    },
    introHeader: {
        height: Responsive.height(323),
        width: widthScreen,
        backgroundColor: Color.mainColor,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Responsive.height(30),
        paddingBottom: Responsive.height(20),
    },
    imgIntroHeader: {
        height: Responsive.height(180),
        width: Responsive.width(150),
    },
    textIntroHeader: {
        color: Color.txtWhite,
        fontFamily: "Zeyada-Regular",
        fontSize: Responsive.height(60),
        textShadowColor: Color.txtBlack,
        textShadowOffset: { width: Responsive.width(5), height: Responsive.height(5) },
        textShadowRadius: 5,
    },
    titleIntro: {
        alignItems: "center",
        padding: Responsive.height(20)
    },
    introButton: {
        position: "absolute",
        bottom: 0,
        right: 0,
        marginRight: Responsive.width(35)
    }
});

export default styles;