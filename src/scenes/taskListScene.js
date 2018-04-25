import { View, Text, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';


import style from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';
import Nav from '../components/nav';
//import {getCafes} from '../actions/cafeActions';

//constructor(){
//    this.state={ cafes:[] }
//}
//
//componentWillMount(){
//
//}
//
//renderCafes(){
//    render(
//        this.state.render.cafes
//    )
//}


class taskListScene extends Component {
    render() {
        return (
            <View style={style.container}>
                <Header title={'Tasks:'}>
                </Header>
                <Layout>
                    <Text> fff </Text>
                    <TouchableOpacity>
                        <Icon style={style.navIcon2} name={'plus'} size={65} />
                    </TouchableOpacity>
                </Layout>
                <Nav/>
            </View>
        );
    }
}

export default taskListScene;

