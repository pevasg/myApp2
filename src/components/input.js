import { View, TextInput } from 'react-native';
import React from 'react';

//import Icon from 'react-native-vector-icons';
import style from '../themes/style';



const Input = (props) => {
    return(

            <View style={ style.inputWrapper}>
                <View style={style.iconInput}>

                </View>
                <View style={style.fieldInput}>
                    <TextInput
                        //style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        placeholder={props.placeholder}
                        placeholderTextColor={'#858491'}
                        textDecorationLine={'none'}
                        underlineColorAndroid={'transparent'}
                        //defaultValue={props.placeholder}
                        maxLength={30}
                        //onChangeText={(text) => this.setState({text})}
                        //value={ 'jhfrekm' }
                    />
                </View>
            </View>
    )
};



export default Input;

