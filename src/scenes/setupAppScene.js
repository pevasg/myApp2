import { View, Text } from 'react-native';
import React from 'react';

import style from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';
import Nav from '../components/nav';

const setupAppScene = () => (
    <View style={ style.container } >
        <Header title={'Setup:'}/>
        <Layout>
            <Text> setups input </Text>
        </Layout>
        <Nav/>
    </View>
);


export default setupAppScene;

