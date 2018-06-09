import axios from 'axios';
import {apiUrl} from "../config/constants";
import {cafeTypes} from "../reducers/types";
import firebase from "../config/firebase";
import {Actions} from 'react-native-router-flux';



export const addTask = ({textTask, repeatTask, date, time}) =>{
    if (textTask==='') {alert('enter task'); return Promise.reject('enter task1')} ///???
    if (date==='') { return Promise.reject('enter date')}
    if (time==='') { return Promise.reject('enter time')}
    const curUser = firebase.auth().currentUser;


    //зчитування довжини масиву задач
    const ref = firebase.database().ref('users/' + curUser.uid + '/tasksList');
    ref.on('value', function (snapshot) {
    let arrayLength = (snapshot.val()) ? (snapshot.val()).length : 0;
    this.idTask = arrayLength;
    });


    //додавання події в масив
    setTimeout(() => {
        firebase.database().ref('users/' + curUser.uid + '/tasksList/' + idTask)
            .set({
                textTask: textTask,
                repeatTask: repeatTask,
                date: date,
                time: time
            })
            .then(()=>Actions.taskList())
    },500)
};

export const getTask = () => {

    const userId = firebase.auth().currentUser.uid;
    const ref = firebase.database().ref('users/' + userId + '/tasksList');
    ref.on('value', function (snapshot) {
        console.log(snapshot.val())
    });

};




// export const getCafes = (params) => (dispatch) => {
//     dispatch({type: cafeTypes.loaderStart});
//     axios.get(apiUrl + '/api/cafes').then(response => {
//         const payload = response.data.map(cafe => {
//             cafe.image = cafe.pictures[0] !== undefined
//                 ? {uri: `${apiUrl}/${cafe.pictures[0].url}`}
//                 : require('../themes/galochka.png');
//             return cafe;
//         });
//         dispatch({type: cafeTypes.listReceive, payload});
//     }).finally(() => {
//         dispatch({type: cafeTypes.loaderEnd});
//     })
// };
