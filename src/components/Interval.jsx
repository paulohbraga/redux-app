import React from 'react'
import { connect } from 'react-redux'

import { changeMinNumber, changeMaxNumber } from '../actions/numbers'

import './Interval.css'
import Card from './Card';

const Interval = props => {
    const { min, max } = props
    return (
        <Card title='Number interval' red>
            <div className='Interval'>
                <span>Minimun: <input type='number' value={min} onChange={e => props.setMin(+e.target.value)}></input></span>
                <span>Max: <input type='number' value={max} onChange={ e => props.setMax(+e.target.value)}></input> </span>
            </div>
        </Card>
    )
};

const mapStateToProps = state => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMin(newNumber) {
            const action = changeMinNumber(newNumber)
            dispatch(action)
        },
        setMax(newNumber) {
            const action = changeMaxNumber(newNumber)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);