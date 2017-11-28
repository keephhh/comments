import { handleActions } from 'redux-actions';

import {
    SHOW_FLAG,
} from '../Action/AppAction';


const initialState = {
    isOrder: '订单管理',
};


export default handleActions({
    [SHOW_FLAG]: (state, action) => {
        return {...state, isOrder:action.payload};
    },
}, initialState);