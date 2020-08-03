import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function (state, action) {
       // console.log(state, " ", action);

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
                return {
                    min: 0,
                    max: 0
                }
        }
    },
    names: function (state, action) {
        console.log(state, " ", action);
        return [
            'Anne',
            'Joe',
            'Will'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;