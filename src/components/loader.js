import { View, Animated, ActivityIndicator } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/EvilIcons';
const AnimatedIcon = Animated.createAnimatedComponent(Icon)
import {cafeListStyle} from "../themes/style";



// const Loader = (props) => (
// <AnimatedIcon style={cafeListStyle.loader} name={'spinner-3'} size={80} color='#858491'/>
// );
const Loader = (props) => (
    <View style={cafeListStyle.loader} >
        <ActivityIndicator size={75} color="#858491" />
    </View>
);

export default Loader;


