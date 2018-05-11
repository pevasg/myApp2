import { View, Text, ScrollView, TouchableOpacity, Image, Animated } from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import style from '../themes/style';
import {cafeListStyle} from '../themes/style';
import Layout from '../components/layout';
import Header from '../components/header';
import Loader from "../components/loader";
import Nav from '../components/nav';
import {getCafes, setCafe} from '../actions/cafeActions';

class taskListScene extends Component {

    // constructor(){
    //     super();
    //     //this.state={ cafes:[], loading: false }
    // }

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


        this.props.getCafes();
        // для ваєрбейз
        // this.setState({loading:true});
        // getCafes()
        //     .then(cafes=>{
        //         this.setState( {cafes} );
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(()=>{
        //         this.setState({loading:false});
        //     })
    }


    taskPress(cafe) {

        this.props.setCafe(cafe);
        Actions.task()
        //Actions.task({id})
    }


    renderCafes(){
        return this.props.cafes.list.map(cafe => (
                <TouchableOpacity onPress={this.taskPress.bind(this, cafe)} style={cafeListStyle.cafeWrap} key={cafe.id}>
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

                        {this.props.cafes.loading ? <Loader/> : null}
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

const mapStateToProps = ({cafes})=>{
    return {cafes}
};

const mapActionsToProps = {
    getCafes, setCafe
};

export default connect(mapStateToProps, mapActionsToProps)(taskListScene);