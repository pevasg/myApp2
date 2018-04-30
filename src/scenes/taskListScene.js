import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';


import style from '../themes/style';
import {cafeListStyle} from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';
import Nav from '../components/nav';
import {getCafes} from '../actions/cafeActions';


class taskListScene extends Component {

    constructor(){
        super();
    this.state={ cafes:[] }
}

componentWillMount(){
        getCafes().
        then(cafes=>{
            this.setState( {cafes} );
            //console.log(cafes);
        })
        .catch(error => {
            console.log(error)
        })
}

    renderCafes(){
        return this.state.cafes.map(cafe => (
            <TouchableOpacity style={cafeListStyle.cafeWrap} key={cafe.id}>
                <View style={cafeListStyle.imageWrap}>
                    <Image style={cafeListStyle.image}
                           source={cafe.image}
                        //source={cafe.pictures[0] != undefined
                           // ? {url: '${apiUrl}/${cafe.pictures[0].url}'}
                           // : require('../themes/galochka.png')
                       // }
                    />
                </View>
                <View>
                    <Text style={cafeListStyle.title}>{cafe.id}. {cafe.name}     {cafe.description}</Text>
                </View>
            </TouchableOpacity>
            )
        );
}

    render() {
        return (
            <View style={style.container}>
                <Header title={'Tasks:'}>
                </Header>
                <Layout>
                    <ScrollView>
                        {this.renderCafes()}
                    </ScrollView>
                    <Text style={{fontSize: 10, color: '#fff'}}> fff </Text>
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

