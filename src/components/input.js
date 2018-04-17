import { View, TextInput } from 'react-native';
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/EvilIcons';
import style from '../themes/style';



const Input = (props) => {
    return(

            <View style={ style.inputWrapper}>
                <View style={ style.iconInput }>
                    <Icon name={props.name}
                          size={50}
                          color={props.color?props.color:"#999"}
                    />
                </View>
                <View style={style.fieldInput}>
                    <TextInput
                        placeholder={props.placeholder}
                        placeholderTextColor={'#858491'}
                        //textDecorationLine={'none'}
                        underlineColorAndroid={'transparent'}
                        //defaultValue={props.placeholder}
                        fontSize={ 18 }
                        maxLength={30}
                        //onChangeText={(text) => this.setState({text})}
                        //value={ 'jhfrekm' }
                    />
                </View>
            </View>
    )
};



export default Input;

