import { View, Text} from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';


import style from '../themes/style';
import Input from '../components/input';
import Button from '../components/button';

class loginScene extends Component {
    constructor(){
        super();
        this.state = {
            isShow:true,
            colorLogin:'#FFA040',
            colorRegister:'#41414a'
        };
    };
    loginButtonPress() {
        if (this.state.colorLogin==='#FFA040') {
            //http
            Actions.welcome();
            setTimeout(Actions.taskList, 1000);
        }
        else if (this.state.colorLogin==='#41414a') {
            this.setState ( prevState =>{
                return { isShow: true,
                    colorLogin:'#FFA040',
                    colorRegister:'#41414a'
                }
            })
        }
    };

    registerButtonPress() {
        if (this.state.colorRegister==='#FFA040') {
            //http
        }
        else if (this.state.colorRegister==='#41414a') {
            this.setState( prevState => {
                return {
                    isShow: false,
                    colorLogin: '#41414a',
                    colorRegister: '#FFA040'
                }
            })
        }
    };

    render() {
        return (
            <View style={style.container}>
                <View>
                    {this.state.isShow? <Input placeholder='Login With Google +'
                                               name='sc-google-plus'
                                               color='#e84118'
                    />:null}
                </View>
                <View>
                    {this.state.isShow? <Input placeholder='Login With Facebook'
                                               name='sc-facebook'
                                               color='#1e3799'
                    />:null}
                </View>
                <View>
                    {this.state.isShow? <View style={style.smallBlock}>
                                            <Text style={style.smallText}>OR</Text>
                                        </View>:null}
                </View>
                <View>
                    {this.state.isShow?null:
                    <Input placeholder='Username'
                           name='user'
                    />}
                </View>
                <Input placeholder='Email'
                       name='envelope'
                />
                <Input placeholder='Password'
                       name='lock'
                />
                <View style={style.inputWrapper}>
                    <Button
                        text='Login'
                        click={ this.loginButtonPress.bind(this) }
                        color={ this.state.colorLogin }
                        width={145}
                    />
                    <Button
                        text='REGISTER'
                        click={ this.registerButtonPress.bind(this) }
                        color={ this.state.colorRegister }
                        width={145}
                    />
                </View>
            </View>

        );
    }
}



export default loginScene;

