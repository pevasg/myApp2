import axios from 'axios';
import {apiUrl} from "../config/constants";
import {cafeTypes} from "../reducers/types";


export const getCafes = (params) => (dispatch) => {
    dispatch({type: cafeTypes.loaderStart});
    axios.get(apiUrl + '/api/cafes').then(response => {
        const payload = response.data.map(cafe => {
            cafe.image = cafe.pictures[0] !== undefined
                ? {uri: `${apiUrl}/${cafe.pictures[0].url}`}
                : require('../themes/galochka.png');
            return cafe;
        });
        dispatch({type: cafeTypes.listReceive, payload});
    }).finally(() => {
        dispatch({type: cafeTypes.loaderEnd});
    })
};

export const setCafe = cafe => dispatch =>
    dispatch({type: cafeTypes.itemReceive, payload: cafe});

export const getCafe = (params) => {
    const {id} = params;

    return axios.get(apiUrl+'/api/cafes/'+id)
        .then(response => {
        const cafe = response.data;
        cafe.image = cafe.pictures[0] != undefined
            ? {uri: `${apiUrl}/${cafe.pictures[0].url}`}
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
