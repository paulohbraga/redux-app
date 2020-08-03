import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function (state, action) {
        console.log(state, " ", action);
        return {
            min: 5,
            max: 10
        }
    },
    names: function(state, action) {
        console.log(state, " ", action);
        return [
            'Anne',
            'Joe',
            'Will'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig;