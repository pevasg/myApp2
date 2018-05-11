import {cafeTypes} from '../reducers/types'

const INITIAL_STATE = {
    list: [],
    current: {},
    loading: false
};

export default function reducer(state = INITIAL_STATE, action) {
    switch  (action.type){
        case cafeTypes.loaderStart:
            return {...state, loading: true};
        case cafeTypes.loaderEnd:
            return {...state, loading: false};
        case cafeTypes.listReceive:
            return {...state, list: action.payload, loading: false};
        case cafeTypes.itemReceive:
            return {...state, current: action.payload };
        default:
            return state;
    }
}