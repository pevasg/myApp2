import { View, Text } from 'react-native';
import React from 'react';

import style from '../themes/style';
import Header from '../components/header';
import Nav from '../components/nav';
import Calendar from "../components/calendar";

const calendarScene = () => (
    <View style={ style.container } >
        <Header title={'Calendar'}/>
        <Calendar>
            <Text> ff123f </Text>
        </Calendar>
        <Nav/>
    </View>
);


export default calendarScene;

