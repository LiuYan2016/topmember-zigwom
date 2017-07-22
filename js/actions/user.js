
import type { Action } from './types';

export const SET_USER = 'SET_USER';
export const UPDATE_FINISH = 'UPDATE_FINISH';

export function setUser(user:string):Action {
  return {
    type: SET_USER,
    payload: user,
  };
}
export function update_finish(notify){
    return {
        type:UPDATE_FINISH,
        notify
    }
}