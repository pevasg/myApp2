import { View, TextInput } from 'react-native';
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/EvilIcons';
import style from '../themes/style';



class Input extends Component {

    render()
    {
        const {props} = this;
        //const { onChangeText, value, placeholder } = this.props;
        return (
            <View style={style.inputWrapper}>
                <View style={style.iconInput}>
                    <Icon name={props.name}
                          size={50}
                          color={props.iconColor ? props.iconColor : "#999"}
                    />
                </View>
                <View style={style.fieldInput}>
                    <TextInput
                        {...props}
                        //placeholder={props.placeholder}
                        //onChangeText={props.onChangeText}
                        //value={props.value}
                        placeholderTextColor={'#858491'}
                        //textDecorationLine={'none'}
                        underlineColorAndroid={'transparent'}
                        //defaultValue={props.placeholder}
                        fontSize={18}
                        maxLength={50}
                        //onChangeText={(text) => this.setState({text})}
                    />
                </View>
            </View>
        )
    }
}



export default Input;

