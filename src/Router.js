import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import welcomeScene from './scenes/welcomeScene';
import loginScene from "./scenes/loginScene";
import taskListScene from "./scenes/taskListScene";
import setupAppScene from "./scenes/setupAppScene";
import addTaskScene from "./scenes/addTaskScene";
import calendarScene from "./scenes/calendarScene";
//import App from './scenes/taskListScene';
//import App from './scenes/calendarScene';
//import App from './scenes/setupAppScene';
//import App from './scenes/addTaskScene';

class Routerss extends React.Component {
    render() {
        return <Router>
            <Scene key="root">
                <Scene key="welcome"
                       component={welcomeScene}
                       title="LoGiN"
                       hideNavBar/>
                <Scene key="login"
                       component={loginScene}
                       title=""
                       initial
                       hideNavBar/>
                <Scene key="setup"
                       component={setupAppScene}
                       title=""
                       hideNavBar/>
                <Scene key="taskList"
                       component={taskListScene}
                       title=""
                       hideNavBar/>
                <Scene key="addTask"
                       component={addTaskScene}
                       title=""
                       hideNavBar/>
                <Scene key="calendar"
                       component={calendarScene}
                       title=""
                       hideNavBar/>
            </Scene>
        </Router>
    }
}

export default Routerss;