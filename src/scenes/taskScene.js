import { View, Text, Image } from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import style, {taskSceneStyle} from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';
import {getCafe, setCafe} from '../actions/cafeActions';
import Loader from "../components/loader";

class taskScene extends Component {

    // constructor(){
    //     super();
    //     this.state={cafe:{}, loading:false}
    // }
    //
    // componentWillMount(){
    //     this.setState({loading:true});
    //     getCafe({id:this.props.id})
    //         .then(cafe => {
    //             this.setState({cafe})
    //         })
    //         .finally(() => {
    //             this.setState({loading:false})
    //         })
    // } з діспатчами вилітає


    renderCafe() {
        const cafe = this.props.cafes.current;
        return <View>
            <Image style={taskSceneStyle.mainImage} source={cafe.image} />
            <Text style={taskSceneStyle.title}>{cafe.name}</Text>
        </View>

    }


    render() {
        return (
            <View style={style.container}>
                <Header title={this.props.cafes.current.name}/>
                <Layout>
                    {this.props.cafes?this.renderCafe():<Loader/>}
                    <Text style={style.textInput}>cafe:{this.props.cafes.current.id} </Text>
                </Layout>
            </View>
        )
    }
}

const mapStateToProps = ({cafes}) =>{
    return {cafes}
};

export default connect(mapStateToProps)(taskScene);