import { View, Text, TextInput } from 'react-native';
import React, {Component} from 'react';

import style from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';
import Button from '../components/button';
import {Actions} from "react-native-router-flux/index";

class addTaskScene extends Component {
    constructor() {
        super();
        this.state = {
            textTask: '',
            timeTask: '',
            dateTask: '',
            repeatTask: false
        };
    };


    render() {
        return (
            <View style={style.container}>
                <Header title={'Add new tasks'}/>
                <Layout>
                    {/*<Input*/}
                        {/*onChangeText={(nameTask) => this.setState({nameTask})}*/}
                        {/*value={this.state.text}*/}
                        {/*placeholder='Remind about'*/}
                        {/*//name='envelope'*/}
                    {/*/>*/}
                    <View style={style.fieldAddInput}>
                        <TextInput
                            style={{color: '#858491'}}
                            placeholder='Need to do..'
                            placeholderTextColor={'#858491'}
                            underlineColorAndroid={'transparent'}
                            multiline={true}
                            fontSize={20}
                            maxLength={160}
                        />
                    </View>
                    <View style={style.fieldAddInput}>
                        <TextInput
                            style={{color: '#858491'}}
                            placeholder='Date'
                            placeholderTextColor={'#858491'}
                            underlineColorAndroid={'transparent'}
                            fontSize={20}
                            maxLength={160}
                        />
                    </View>
                    <View style={style.fieldAddInput}>
                        <TextInput
                            style={{color: '#858491'}}
                            placeholder='Time'
                            placeholderTextColor={'#858491'}
                            underlineColorAndroid={'transparent'}
                            fontSize={20}
                            maxLength={160}
                        />
                    </View>
                    <View style={style.buttonSaveTask}>
                        <Button
                            text='Add'
                            click={()=>Actions.taskList()}
                            color={ '#FFA040' }
                            width={100}
                        />
                    </View>
                </Layout>
            </View>
        );
    }
}


export default addTaskScene;

