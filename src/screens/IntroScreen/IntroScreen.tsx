import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import styles from './styles';
import { Title } from '../../components';
import { Color } from '../../constants';
import { Responsive } from '../../utils/Reponsive';
import ButtonCircle from '../../components/ButtonCircle';

function IntroScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.introMain}>
                <View style={styles.introHeader}>
                    <Image source={require('../../../assets/images/intro.png')} style={styles.imgIntroHeader} />
                    <Text style={styles.textIntroHeader}>Tree Coffee</Text>
                </View>
                <View style={styles.titleIntro}>
                    <Title
                        width={Responsive.width(236)}
                        label="Feel yourself like a barista!"
                        color={Color.txtBlack}
                        fontSize={Responsive.height(30)}
                    />
                    <Title
                        width={Responsive.width(256)}
                        label="Magic coffee on order"
                        color={Color.textSubTitle}
                        fontSize={Responsive.height(20)}
                    />
                </View>
                <View style={styles.introButton}>
                    <ButtonCircle nameIcon="arrow-right-thin" fontSize={Responsive.height(35)} />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default IntroScreen;
