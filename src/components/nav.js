import { View } from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';

import style from '../themes/style';
import NavButton from '../components/navButton'

class Nav extends Component{


listButtonPress(){
    Actions.taskList()
}
calendarButtonPress() {
    Actions.calendar()
}
menuButtonPress(){
    Actions.setup()
}

render(){
    return(
    //const Nav = () => (
    <View style={ style.nav }>
        <NavButton
            title='list'
            name='pointer'
            click={ this.listButtonPress.bind(this) }
        />
        <NavButton
            title='calendar'
            name='calendar'
            click={ this.calendarButtonPress.bind(this) }
        />
        <NavButton
            title='menu'
            name='gear'
            click={ this.menuButtonPress.bind(this) }
        />
    </View>
);
}
}

export default Nav;


