import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';

import welcomeScene from './scenes/welcomeScene';
import loginScene from "./scenes/loginScene";
import taskListScene from "./scenes/taskListScene";
import setupAppScene from "./scenes/setupAppScene";
import addTaskScene from "./scenes/addTaskScene";
import calendarScene from "./scenes/calendarScene";
import taskScene from "./scenes/taskScene";

const Routerss = () => <Router>

            <Scene key="root">

                    <Scene key="login"
                           component={loginScene}
                           title="login"
                           //initial
                           hideNavBar
                    />

                    <Scene key="welcome"
                           component={welcomeScene}
                           title="LoGiN"
                           //initial
                           hideNavBar
                    />
                    <Scene key="setup"
                           component={setupAppScene}
                           title=""
                           hideNavBar
                    />
                    <Scene key="taskList"
                           component={taskListScene}
                           title=""
                           initial
                           hideNavBar
                    />
                    <Scene key="addTask"
                           component={addTaskScene}
                           title=""
                           hideNavBar
                    />
                    <Scene key="task"
                           component={taskScene}
                           title=""
                           hideNavBar
                    />
                    <Scene key="calendar"
                           component={calendarScene}
                           title=""
                           hideNavBar
                    />

            </Scene>
        </Router>;

export default Routerss;