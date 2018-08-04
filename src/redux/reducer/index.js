import { combineReducers } from 'redux'

import {
    CLICK_ONE,
    CLICK_TWO,
    CLICK_THREE,
    CLICK_FOUR,
    CLICK_FIVE,
    CLICK_SIX,
    CLICK_SEVEN,
    CLICK_EIGHT,
    CLICK_NINE,
    CLICK_ZERO,
    CLICK_DOT,

    SAVE_RESULT,
    SHOW_RESULT,
    CLEAR_DATA,
    SHOW_HISTORY

 } from '../../config';


const initialState = {text:'0', result:0, historyShow:false, history:''}

const cal = (state = initialState, action) => {
    
    switch (action.type) {
        case CLICK_ONE:
            if(state.text === '0'){
                return {
                    ...state,
                    text : '1',
                    historyShow:false
                }
            }
            return{
                ...state,
                text : state.text+'1',
                historyShow:false
            }
        
        case CLICK_TWO:
            if(state.text === '0'){
                return {
                    ...state,
                    text : '2',
                    historyShow:false
                }
            }
            return{
                ...state,
                text : state.text+'2',
                historyShow:false
            }

        case CLICK_THREE:
            if(state.text === '0'){
                return {
                    ...state,
                    text : '3',
                    historyShow:false
                }
            }
            return{
                ...state,
                text : state.text+'3',
                historyShow:false
            }
        
        case CLICK_FOUR:
            if(state.text === '0'){
                return {
                    ...state,
                    text : '4',
                    historyShow:false
                }
            }
            return{
                ...state,
                text : state.text+'4',
                historyShow:false
            }

        case CLICK_FIVE:
            if(state.text === '0'){
                return {
                    ...state,
                    text : '5',
                    historyShow:false
                }
            }
            return{
                ...state,
                text : state.text+'5',
                historyShow:false
            }

        case CLICK_SIX:
            if(state.text === '0'){
                return {
                    ...state,
                    text : '6',
                    historyShow:false
                }
            }
            return{
                ...state,
                text : state.text+'6',
                historyShow:false
            }

        case CLICK_SEVEN:
            if(state.text === '0'){
                return {
                    ...state,
                    text : '7',
                    historyShow:false
                }
            }
            return{
                ...state,
                text : state.text+'7',
                historyShow:false
            }
        
        case CLICK_EIGHT:
            if(state.text === '0'){
                return {
                    ...state,
                    text : '8',
                    historyShow:false
                }
            }
            return{
                ...state,
                text : state.text+'8',
                historyShow:false
            }

        case CLICK_NINE:
            if(state.text === '0'){
                return {
                    ...state,
                    text : '9',
                    historyShow:false
                }
            }
            return{
                ...state,
                text : state.text+'9',
                historyShow:false
            }
        
        case CLICK_ZERO:
            if(state.text === '0'){
                return state
            }
            return{
                ...state,
                text : state.text+'0',
                historyShow:false
            }
        
        case CLICK_DOT:
            if(state.text.indexOf('.') > 0){
                return state
            }
            return{
                ...state,
                text : state.text+'.',
                historyShow:false
            }

        case SAVE_RESULT:
            return{
                ...state,
                result : action.value,
                text: '0',
                opr: action.opr,
                history: state.history+state.text+action.opr,
                historyShow:false
            }

        
        case SHOW_RESULT:
    
            return{
                ...state,
                text : action.value,
                result: 0,
                opr: undefined,
                history:state.history+state.text,
                historyShow:false
            }
        case CLEAR_DATA:
    
            return initialState
        
        case SHOW_HISTORY:
    
            return {
                ...state,
                historyShow:true,
            }

        default:
            return state
    }
}

export default combineReducers({
    cal
}) 