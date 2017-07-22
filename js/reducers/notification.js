/**
 * Created by proDev on 5/22/2017.
 */
import type { Action } from '../actions/types';
import {
    UPDATE_START
} from '../actions/notification';
import {
    UPDATE_FINISH
} from '../actions/user';

export type State = {
    notification:[]
}

const initialState = {
    notification:[]
}

export default function (state:State = initialState, action:Action): State {
    if (action.type === UPDATE_START){
        var temp = state.notification.splice();
        temp.push(action.notify);
        return{
            ...state,
            notification:temp
        }
    }

    if (action.type === UPDATE_FINISH){
        var temp = state.notification.splice();
        temp.splice(temp.indexOf(action.notify),1);
        return{
            ...state,
            notification:temp
        }
    }

    return state;
}