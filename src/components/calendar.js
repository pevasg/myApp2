import { View } from 'react-native';
import React from 'react';

import style from '../themes/style';


const calendarScene = (props) => (
    <View style={ style.container } >
        {props.children}
    </View>
);


export default calendarScene;

