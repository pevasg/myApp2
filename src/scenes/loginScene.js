import { View, Text} from 'react-native';
import React from 'react';

//import Icon from 'react-native-vector-icons';
import style from '../themes/style';
import Input from '../components/input';
import Button from '../components/button';


const loginScene = (props) => (
    <View style={ style.container }>
        <Input placeholder='Login With Google +'/>
        <Input placeholder='Login With Facebook'/>
        <View style={ style.smallBlock }>
            <Text style={ style.smallText }>OR</Text>
        </View>
            <Input placeholder='Username'/>
        <Input placeholder='Email'/>
        <Input placeholder='Password'/>
        <View>
        <Button
            text='REGISTER'
        />
        </View>
    </View>

);



export default loginScene;

