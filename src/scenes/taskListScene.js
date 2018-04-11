import { View, Text } from 'react-native';
import React from 'react';

import style from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';
import Nav from '../components/nav';

const taskListScene = () => (
    <View style={ style.container } >
        <Header title={'Tasks:'}/>
        <Layout>
            <Text> fff </Text>
        </Layout>
        <Nav/>
    </View>
);


export default taskListScene;

