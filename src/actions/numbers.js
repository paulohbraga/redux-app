export function changeMinNumber(newNumber) {
   // Action creater set min number
    return {
        type: 'MIN_NUM_CHANGED',
        payload: newNumber
    }
}
export function changeMaxNumber(newNumber) {
   // Action creater set max number
    return {
        type: 'MAX_NUM_CHANGED',
        payload: newNumber
    }
}

