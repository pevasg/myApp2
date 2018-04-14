import { View, Text} from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';


import style from '../themes/style';
import Input from '../components/input';
import Button from '../components/button';

class loginScene extends Component {
    loginButtonPress() {
        //http
        Actions.welcome();
        setTimeout(Actions.taskList(), 10000);
    }

//const loginScene = (props) => (
    render() {
        return (
            <View style={style.container}>
                <Input placeholder='Login With Google +'
                       name='sc-google-plus'
                       color='#e84118'
                />
                <Input placeholder='Login With Facebook'
                       name='sc-facebook'
                       color='#1e3799'
                />
                <View style={style.smallBlock}>
                    <Text style={style.smallText}>OR</Text>
                </View>
                <Input placeholder='Username'
                       name='user'
                />
                <Input placeholder='Email'
                       name='envelope'
                />
                <Input placeholder='Password'
                       name='lock'
                />
                <View>
                    <Button
                        text='REGISTER'
                        click={ this.loginButtonPress.bind(this) }
                    />
                </View>
            </View>

        );
    }
}



export default loginScene;

