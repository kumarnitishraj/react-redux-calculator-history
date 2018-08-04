import {
    SHOW_RESULT,
    SAVE_RESULT,
    NOTHING_TODO

 } from '../../config';

 import { getOperation } from '../../utails'

export const clickPlus = (cal) => {
    if(!cal.opr){
        return dispatch => {
            dispatch({
                type : SAVE_RESULT,
                value : parseFloat(cal.text),
                opr : '+'
            })
        }
    } else {
        return dispatch => {
            dispatch({
                type : SAVE_RESULT,
                value : getOperation(cal.result, cal.text, cal.opr),
                opr : '+'
            })
        }
    }

}

export const clickMinus = (cal) => {
    if(!cal.opr){
        return dispatch => {
            dispatch({
                type : SAVE_RESULT,
                value : parseFloat(cal.text),
                opr : '-'
            })
        }
    } else {
        return dispatch => {
            dispatch({
                type : SAVE_RESULT,
                value : getOperation(cal.result, cal.text, cal.opr),
                opr : '-'
            })
        }
    }
    
}

export const clickMultiply = (cal) => {
    if(!cal.opr){
        return dispatch => {
            dispatch({
                type : SAVE_RESULT,
                value : parseFloat(cal.text),
                opr : '*'
            })
        }
    } else {
        return dispatch => {
            dispatch({
                type : SAVE_RESULT,
                value : getOperation(cal.result, cal.text, cal.opr),
                opr : '*'
            })
        }
    }
    
}

export const clickDivide = (cal) => {
    if(cal.text==='0'){
        alert(' Exception ------')
        return dispatch => {dispatch({type:NOTHING_TODO})}
    } else if(!cal.opr){
        return dispatch => {
            dispatch({
                type : SAVE_RESULT,
                value : parseFloat(cal.text),
                opr : '/'
            })
        }
    } else {
        console.log('------------- calculate ===========')
        return dispatch => {
            dispatch({
                type : SAVE_RESULT,
                value : getOperation(cal.result, cal.text, cal.opr),
                opr : '/'
            })
        }
    }
    
}

export const clickResult = (cal) => {
    if(!cal.opr){
        return dispatch => {dispatch({type:NOTHING_TODO})}
    } else {
        return dispatch => {
            dispatch({
                type : SHOW_RESULT,
                value : getOperation(cal.result, cal.text, cal.opr)
            })
        }
    }
    
}