import { View, Text, ScrollView, TouchableOpacity, Image, Animated } from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Actions} from 'react-native-router-flux';


import style from '../themes/style';
import {cafeListStyle} from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';
import Nav from '../components/nav';
import {getCafes} from '../actions/cafeActions';
import Loader from "../components/loader";


class taskListScene extends Component {

    constructor(){
        super();
    this.state={ cafes:[], loading: false }
}

componentWillMount(){

   //     const prom = new Promise((resolve, reject) =>{
   //         setTimeout(()=>{
   //             resolve(Math.random());
   //         }, 1000);
   //         setTimeout(()=>{
   //             reject('regeCt');
   //         }, 900);
  //      });

   //     prom
   //         .then((val)=>{
   //             console.log(val);
   //         })
   //         .catch((val)=>{
   //             console.log(val);
   //         });

        this.setState({loading:true});
        getCafes()
            .then(cafes=>{
                this.setState( {cafes} );
        })
            .catch(error => {
                console.log(error)
        })
            .finally(()=>{
                this.setState({loading:false});
            })
}


    taskPress(id) {
        Actions.task({id})
    }


    renderCafes(){
        return this.state.cafes.map(cafe => (
            <TouchableOpacity onPress={this.taskPress.bind(this, cafe.id)} style={cafeListStyle.cafeWrap} key={cafe.id}>
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

    //const AnimatedIcon = Animated.createAnimatedComponent(Icon); - для анімації іконок, ще поки не розбрався

    render() {
        return (
            <View style={style.container}>
                <Header title={'Tasks:'}>
                </Header>
                <Layout>
                    <ScrollView>

                        {this.state.loading ? <Loader/> : null}
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

