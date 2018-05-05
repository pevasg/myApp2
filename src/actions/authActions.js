import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from '../config/firebase';
import {apiUrl} from "../config/constants";



export const signIn = ({email, password}) => {
    if (email === '') {
        return Promise.reject('enter email')
    }
    if (password === '') {
        return Promise.reject('enter password')
    }


    return firebase.auth()
        .signInWithEmailAndPassword(email, password);


    // return axios.post(apiUrl + '/api/session', {email, password})
    //     .then((response)=>{
    //
    //         return new Promise ((resolve, reject) => {
    //             AsyncStorage.multiSet(
    //             [['apiToken', response.data.apiToken],
    //                 ['refreshToken', response.data.refreshToken]],
    //                 (err, result) => {
    //                 //console.log(err, result, response.data.apiToken, response.data.refreshToken);
    //                 if (err) return reject(err);
    //                 resolve(result);
    //                 });
    //         });
    //         console.log(response);
    //         return Promise.resolve(response)
    //         })
    //     .catch((error)=>{
    //         if (error.response.status===403) {
    //             return Promise.reject('Login or password is incorrect')
    //         }
    //     });
};



export const signUp = ({name, email, password}) => {
    if (name === '') {
        return Promise.reject('enter user name')
    }
    if (email === '') {
        return Promise.reject('enter email')
    }
    if (password === '') {
        return Promise.reject('enter password')
    }

    return firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then( () => {
            const curUser = firebase.auth().currentUser;
            return curUser.sendEmailVerification({})
                .then(()=>{
                firebase.database().ref('users/${curUser.uid}')
                    .set ({
                        name,
                        email
                    });
                });
            //console.log(data);
            //return Promise.resolve(data)
        }).catch(error=>{
            //console.log(error);
            return Promise.reject(error);
        })

    // return axios.post(apiUrl + '/api/users', {name, email, password})
    //     .catch((error)=>{
    //         //if (error.response.status===403) {
    //             return Promise.reject('Something was wrong')
    //
    //     });
};


export const checkAuth = () => {
    AsyncStorage.clear();
    Actions.login();


    // AsyncStorage.getItem('apiToken', (err, apiToken) =>{
    //     if (apiToken){
    //         return Actions.taskList();
    //     }
    //     //console.log(apiToken);
    //     Actions.login();
    //
    // })
};