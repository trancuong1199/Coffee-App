import { Text } from 'react-native';

type TitleCustomProps = {
    label?: string;
    color?: string;
    fontSize?: number;
    width?: number;
};

const Title = ({ label, color, fontSize, width }: TitleCustomProps) => {
    return (
        <Text style={{ color: color, fontSize: fontSize, width: width, textAlign: 'center', lineHeight: 40 }}>
            {label}
        </Text>
    );
};

export default Title;
