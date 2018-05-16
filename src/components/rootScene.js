import React, {Component} from 'react';
import {View} from 'react-native';

import Toaster, {ToasterView} from './toaster';


export default class rootScene extends Component {

    constructor(){
        super();
        this.state = {
            showToaster: false,
            message: '',
        }
    }

    componentWillMount(){

        Toaster.registerShowListener(this.handlesShowToaster.bind(this));
        Toaster.registerHideListener(this.handlesHideToaster.bind(this));


        // this.handlesShowToaster('hello 123');
        // setTimeout(()=>{
        //     this.handlesHideToaster()
        //     },5000);
    }

    handlesShowToaster(message){
        this.setState({message, showToaster: true})
    }
    handlesHideToaster(){
        this.setState({showToaster: false})
    }


    render() {
        return <View style={{flex:1}}>
                {this.props.children}
                {this.state.showToaster?<ToasterView text={this.state.message} top={Toaster.marginTop}/>:null}
                </View>
    }
}

