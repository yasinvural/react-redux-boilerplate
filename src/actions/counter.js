import {INCREMENT, DECREMENT} from "../const/index";

export function incrementCounter(){
    // go to service and get data
    // send the data as payload
    return (dispatch) =>{
        dispatch({
            type: INCREMENT,
            payload:null
        });
    }
}

export function decrementCounter(){
    // go to service and get data
    // send the data as payload
    return (dispatch) =>{
        dispatch({
            type: DECREMENT,
            payload:null
        });
    }
}