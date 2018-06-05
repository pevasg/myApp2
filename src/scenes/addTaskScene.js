import { View, Text, TextInput } from 'react-native';
import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';

import style from '../themes/style';
import Header from '../components/header';
import Layout from '../components/layout';
import Button from '../components/button';
import {Actions} from "react-native-router-flux/index";
import {isMoment} from 'moment/moment'

class addTaskScene extends Component {
    constructor() {
        super();
        this.state = {
            textTask: '',
            timeTask: '',
            dateTask: '',
            repeatTask: false,
            date: '',
            time: ''
        };
    };

    //  componentWillMount(){
    // //     //const time = Moment().format('MMM Do YY');
    // //     console.log(isMoment())
    //      console.log(this.state)
    //  }


    render() {
        return (
            <View style={style.container}>
                <Header title={'Add new tasks'}/>
                <Layout>
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

                    <View style={style.datePickerInput}>
                        <DatePicker
                            style={{width: 250}}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1986-01-01"
                            maxDate="2086-01-01"
                            customStyles={{
                                dateInput: {
                                    backgroundColor: '#41414a',
                                    borderColor: '#41414a',
                                    borderRadius: 5,
                                },
                                dateText: {
                                    color: '#858491',
                                    fontSize:25
                                },
                                placeholderText: {
                                    color: '#858491',
                                    fontSize:25
                                }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                    <View style={style.datePickerInput}>
                        <DatePicker
                            style={{width: 250}}
                            date={this.state.time}
                            mode="time"
                            placeholder="select time"
                            format="HH:mm"
                            minuteInterval={5}
                            //customStyles={style.datePicker}
                            customStyles={{
                                dateInput: {
                                    backgroundColor: '#41414a',
                                    borderColor: '#41414a',
                                    borderRadius: 5,
                                },
                                dateText: {
                                    color: '#858491',
                                    fontSize:25
                                },
                                placeholderText: {
                                    color: '#858491',
                                    fontSize:25
                                }
                            }}
                            onDateChange={(time) => {this.setState({time: time})}}
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

