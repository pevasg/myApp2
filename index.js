import React, {Component} from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
//import ReduxThunk from 'react-thunk'; - то була помилка, достатньо тупа і..
import ReduxThunk from 'redux-thunk';

import './src/test';
import Router from './src/Router';
import reducers from './src/reducers';
import RootScene from './src/components/rootScene';

//import App from './src/Router';

const store = createStore (reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {


    render() {
        return<Provider store={store}>
                <RootScene>
                <Router/>
                </RootScene>
        </Provider>
    }
}

AppRegistry.registerComponent('myApp2', () => App);

