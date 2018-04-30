import axios from 'axios';

export const apiUrl = 'http://coffee-points.dev2.devloop.pro';
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