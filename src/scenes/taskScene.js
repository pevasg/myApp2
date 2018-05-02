import { View, Text, Image } from 'react-native';
import React, {Component} from 'react';

import style, {taskSceneStyle} from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';
import {getCafe} from '../actions/cafeActions';
import Loader from "../components/loader";

class taskScene extends Component {

    constructor(){
        super();
        this.state={cafe:{}, loading:false}
    }

    componentWillMount(){
        this.setState({loading:true});
        getCafe({id:this.props.id})
            .then(cafe => {
                this.setState({cafe})
            })
            .finally(() => {
                this.setState({loading:false})
            })
    }


    renderCafe() {
        const {cafe} = this.state;
        return <View>
            <Image style={taskSceneStyle.mainImage} source={cafe.image} />
            <Text style={taskSceneStyle.title}>{cafe.name}</Text>
        </View>

    }


    render() {
        return (
            <View style={style.container}>
                <Header title={this.state.cafe.name}/>
                <Layout>
                    {this.state.loading?<Loader/>:this.renderCafe()}
                    <Text style={style.textInput}>cafe:{this.props.id} </Text>
                </Layout>
            </View>
        )
    }
}

export default taskScene;