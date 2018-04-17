import { TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

import style from '../themes/style';



const navButton = (props) => (
    <TouchableOpacity
        style={ style.navButton }
        onPress={ props.click }
    >
        <Icon style={ style.navIcon } name={props.name} size={35} />
        <Text style={ style.navButtonText }> { props.title } </Text>
    </TouchableOpacity>
);

export default navButton;


