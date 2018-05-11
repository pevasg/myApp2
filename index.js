// import { AppRegistry } from 'react-native';
// //import App from './src/scenes/welcomeScene';
// //import App from './src/scenes/loginScene';
// //import App from './src/scenes/taskListScene';
// //import App from './src/scenes/calendarScene';
// //import App from './src/scenes/setupAppScene';
// //import App from './src/scenes/addTaskScene';
// import App from './src/Router';
//
//
// AppRegistry.registerComponent('myApp2', () => App);


import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
//import ReduxThunk from 'react-thunk'; - то була помилка, достатньо тупа і..
import ReduxThunk from 'redux-thunk';

import './src/test';
import Router from './src/Router';
import reducers from './src/reducers';

//import App from './src/Router';

const store = createStore (reducers, {}, applyMiddleware(ReduxThunk));

const App = () =>
    <Provider store={store}>
        <Router/>
    </Provider>;

AppRegistry.registerComponent('myApp2', () => App);




//
//
// // import { AppRegistry } from 'react-native';
// // //import App from './src/scenes/welcomeScene';
// // //import App from './src/scenes/loginScene';
// // //import App from './src/scenes/taskListScene';
// // //import App from './src/scenes/calendarScene';
// // //import App from './src/scenes/setupAppScene';
// // //import App from './src/scenes/addTaskScene';
// // import App from './src/Router';
// //
// //
// // AppRegistry.registerComponent('myApp2', () => App);
//
//
// import React from 'react';
// import { AppRegistry, View, Text } from 'react-native';
// import { createStore, applyMiddleware } from 'redux';
// import {Provider} from 'react-redux';
// //import ReduxThunk from 'react-thunk'; - то була помилка, достатньо тупа і..
// import ReduxThunk from 'redux-thunk';
//
// import './src/test';
// import Router from './src/Router';
// import reducers from './src/reducers';
//
// //import App from './src/Router';
//
// const store = createStore (reducers, {}, applyMiddleware(ReduxThunk));
//
//
//
// class App extends Component {
//
//     constructor(){
//         super();
//         this.state = {
//             showToaster: false,
//             message: ''
//         }
//     }
//
//     componentWillMount(){
//         this.handlesShowToaster('hello');
//         setTimeout()
//     }
//     render() {
//         return
//         <Provider store={store}>
//             <View>
//                 <Router/>
//                 <View style={{position: 'absolute', background: 'red'}}>
//                     <Text>123</Text>
//                 </View>
//             </View>
//         </Provider>
//     }
// }
//
// AppRegistry.registerComponent('myApp2', () => App);

