import axios from 'axios';
import {apiUrl} from "../config/constants";

// не відображає зображення з api cafes  ???
export const getCafes = (params) =>
    axios.get(apiUrl + '/api/cafes').then(response=> {
    return response.data.map(cafe =>{
        cafe.image = cafe.pictures[0] !== undefined
            ? {url:'${apiUrl}/${cafe.pictures[0].url}'}
            : require('../themes/galochka.png');
        return cafe;
    });
});

export const getCafe = (params) => {
    const {id} = params;

    return axios.get(apiUrl+'/api/cafes/'+id)
        .then(response => {
        //`${apiUrl}/api/cafes/${id}` так не хоче чомусь ??
        const cafe = response.data;
        console.log(response.data);
        console.log(response);
        cafe.image = cafe.pictures[0] != undefined
            ? {url: `${apiUrl}/${cafe.pictures[0].url}`}
            : require('../themes/galochka.png');

        cafe.images = cafe.pictures.map(picture => {
            return {url: `${apiUrl}/${picture.url}`, id:picture.id}
            });
            return cafe
        })
        .catch(error => {
            console.log(error)
        });
};
