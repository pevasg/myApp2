import { View, Text, Image } from 'react-native';
import React from 'react';

import style from '../themes/style';

const welcomeScene = () => (
    <View style={ style.container } >
        <View style={style.logo}>
            <Image
                style={ {
                    height: 100,
                    width: 100,
                    margin: 10} }
                //sourсe={ require('../themes/galLuxY.png') }
                //sourсe={ require('./check.png') }
                source={ {uri: 'https://image.flaticon.com/icons/png/512/128/128384.png'} }
            />
        </View>
        <View>
            <Text style={ style.largeText }>
                Will do
            </Text>
            <Text style={ style.smallText }>
                your favorite task
            </Text>
        </View>
    </View>
);


export default welcomeScene;

