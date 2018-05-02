import { View } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/EvilIcons';

import {cafeListStyle} from "../themes/style";



const Loader = (props) => (
<Icon style={cafeListStyle.loader} name={'spinner-3'} size={80} color='#858491'/>
);

export default Loader;


