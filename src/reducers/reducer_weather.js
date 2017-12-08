import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

    switch(action.type) {
    case FETCH_WEATHER:
        //BAD: state.push(action.payload.data) //NEVER manipulate state directly!
        // return state.concat([action.payload.data]);
        return [ action.payload.data, ...state]; //Compact way to create a new array
    }

    return state;
}