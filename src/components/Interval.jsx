import React from 'react'
import { connect } from 'react-redux'

import './Interval.css'
import Card from './Card';

const Interval = props => {
    const {min, max} = props
    return (
        <Card title='Number interval' red>
            <div className='Interval'>
                <span>Minimun: <input type='number' value={min}></input></span>
                <span>Max: <input type='number' value={max}></input> </span>
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

export default connect(mapStateToProps)(Interval);