import { View, Text } from 'react-native';
import React from 'react';

import style from '../themes/style';
import NavButton from '../components/navButton'



const Nav = () => (
    <View style={ style.nav }>
        <NavButton title='list'/>
        <NavButton title='calendar'/>
        <NavButton title='menu'/>
    </View>
);

export default Nav;


