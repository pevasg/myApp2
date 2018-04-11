import { View, Text } from 'react-native';
import React from 'react';

import style from '../themes/style';



const Header = (props) => (
    <View style={ style.header }>
        <Text style={ style.headerText }> { props.title } </Text>
    </View>
);

export default Header;


