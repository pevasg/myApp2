import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';

import style from '../themes/style';



const navButton = (props) => (
    <TouchableOpacity
        style={ style.navButton }>
        //View style=  width:20, height:20, backgroundColor:'#487eb0', alignSelf:'center'
        //View
        onPress={ props.click }
        <Text style={ style.navButtonText}> { props.title } </Text>
    </TouchableOpacity>
);

export default navButton;


