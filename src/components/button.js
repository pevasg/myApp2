import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

import style from '../themes/style';



const Button = (props) => (
        <TouchableOpacity
            style={ [style.myButton, { backgroundColor: props.color, width: props.width } ] }
            onPress={ props.click }
        >
            <Text style={ style.myButtonInside }> { props.text } </Text>
        </TouchableOpacity>
    );

export default Button;


