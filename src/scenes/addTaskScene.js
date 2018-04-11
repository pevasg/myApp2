import { View, Text } from 'react-native';
import React from 'react';

import style from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';

const addTaskScene = () => (
    <View style={ style.container } >
        <Header title={'Add new tasks'}/>
        <Layout>
            <Text> inputs </Text>
        </Layout>
    </View>
);


export default addTaskScene;

