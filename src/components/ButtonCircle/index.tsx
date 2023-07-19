import { View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Responsive } from '../../utils/Reponsive';
import { Color } from '../../constants';

type ButtonCircleProps = {
    nameIcon: string;
    fontSize?: number;
};

const ButtonCircle = ({ nameIcon, fontSize }: ButtonCircleProps) => {
    return (
        <View
            style={{
                backgroundColor: Color.mainColor,
                width: Responsive.width(60),
                height: Responsive.height(60),
                alignItems: 'center',
                justifyContent: "center",
                borderRadius: 50,
            }}
        >
            <Icons name={nameIcon} size={fontSize} color={Color.txtWhite} />
        </View>
    );
};

export default ButtonCircle;
