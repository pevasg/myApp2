import { View, Text, KeyboardAvoidingView} from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import style from '../themes/style';
import Input from '../components/input';
import Button from '../components/button';
import {signIn, signUp, checkAuth} from "../actions/authActions";
import Loader from "../components/loader";

class loginScene extends Component {
    constructor(){
        super();
        this.state = {
            isShow:true,
            colorLogin:'#FFA040',
            colorRegister:'#41414a',
            name: '',
            email: '',
            password: '',
            loading: false
        };
    };

    componentWillMount(){
        //checkAuth();
        //console.log('props', this.props);
    }

    loginButtonPress() {
        if (this.state.colorLogin==='#FFA040') {
            //http
            //const {email, password} = this.state;
            this.setState({loading:true});
            signIn(this.state)
                .then(()=>{Actions.welcome();
                    setTimeout(Actions.taskList, 1000)})
                .catch((error)=>{alert(error)})
                .finally(()=>{
                    this.setState({loading:false})
                });

           // Actions.welcome();
            //setTimeout(Actions.taskList, 1000);
        }
        else if (this.state.colorLogin==='#41414a') {
            this.setState ( prevState =>{
                //console.log(prevState);
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
            this.setState({loading:true});
            signUp(this.state)
                .then(()=>{Actions.welcome();
                    setTimeout(Actions.taskList, 1000)})
                .catch((error)=>{alert(error)})
                .finally(()=>{
                    this.setState({loading:false})
                });
        }
        else if (this.state.colorRegister==='#41414a') {
            this.setState( prevState => {
                //console.log(prevState);
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
            <KeyboardAvoidingView behavior='padding' style={style.container}>
                {this.state.loading?<Loader/>:null}
                <View>
                    {this.state.isShow? <Input placeholder='Login With Google +'
                                               name='sc-google-plus'
                                               iconColor='#e84118'
                    />:null}
                </View>
                <View>
                    {this.state.isShow? <Input placeholder='Login With Facebook'
                                               name='sc-facebook'
                                               iconColor='#1e3799'
                    />:null}
                </View>
                <View>
                    {this.state.isShow? <View style={style.smallBlock}>
                                            <Text style={style.smallText}>OR</Text>
                                        </View>:null}
                </View>
                <View>
                    {this.state.isShow?null:
                    <Input
                        onChangeText={(name) => this.setState({name})}
                        value={ this.state.name }
                        placeholder='name'
                        name='user'
                    />}
                </View>
                <Input
                    onChangeText={(email) => this.setState({email})}
                    value={ this.state.email }
                    keyboardType='email-address'
                    placeholder='email'
                    name='envelope'
                />
                <Input
                    onChangeText={(password) => this.setState({password})}
                    value={ this.state.password }
                    secureTextEntry={true}
                    keyboardType='numeric'
                    placeholder='password'
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
            </KeyboardAvoidingView>

        );
    }
}


const mapStateToProps = (store) => {
    const {auth} = store;
    //console.log('store', store);
    return {auth}
};
export default connect(mapStateToProps)(loginScene);
// export default connect(({auth})=>{ return {auth}})(loginScene);

