
const initialState = {
    min: 1,
    max: 1
}

export default function (state = initialState, action) {

    switch (action.type) {
        case 'MIN_NUM_CHANGED':
            return {
                ...state,
                min: action.payload
            }
        case 'MAX_NUM_CHANGED':
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}