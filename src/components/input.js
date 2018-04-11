import { View, TextInput } from 'react-native';
import React from 'react';

//import Icon from 'react-native-vector-icons/EvilIcons';
import style from '../themes/style';



const Input = (props) => {
    return(

            <View style={ style.inputWrapper}>
                <View style={style.iconInput}>
                    <View style={ { width:20, height:20, backgroundColor:'#487eb0', alignSelf:'center' } }></View>
                </View>
                <View style={style.fieldInput}>
                    <TextInput
                        //style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        placeholder={props.placeholder}
                        placeholderTextColor={'#858491'}
                        textDecorationLine={'none'}
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

