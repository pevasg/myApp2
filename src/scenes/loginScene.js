import { View, Text, Image } from 'react-native';
import React from 'react';

//import Icon from 'react-native-vector-icons';
import style from '../themes/style';
import Input from '../components/input';
//import Button from '../components/button';


const loginScene = (props) => (
    <View style={ style.container }>
        <Input placeholder='Login With Google +'/>
        <Input placeholder='Login With Facebook'/>
        <View style={ style.smallBlock }>
            <Text style={ style.smallText }>OR</Text>
        </View>
        <Image
            style={ {
                height: 100,
                width: 100,
                margin: 10} }
            sourсe={ require('../themes/check.png') }
            //source={ {uri: 'https://image.flaticon.com/icons/png/512/128/128384.png'} }
        />
        <Input placeholder='Username'/>
        <Input placeholder='Email'/>
        <Input placeholder='Password'/>
    </View>





   // <View style={ style.container } >
     //   <View style={[style.inputWrapper, props.additionalStyle]}>
       //     <View style={ style.iconWrapper }>
         //       <Icon name={ props.icon } size={20} color="#fcfcfd" style={style.inputIcon}/>
   //         </View>
   //         <TextInput placeholder={ props.placeholder } placeholderTextColor={"#fff"}/>
    //    </View>
   // </View>
);



export default loginScene;

