import { View } from 'react-native';
import React from 'react';

import style from '../themes/style';



const Layout = (props) => (
    <View style={ style.layout }>
        {props.children}
    </View>
);

export default Layout;


