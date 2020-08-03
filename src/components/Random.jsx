import React from 'react'
import Card from './Card';

import { connect } from 'react-redux'


const Random = props => {

    const { min, max } = props
    const randon = Math.floor(Math.random() * (max - min)) + min
    return (
        <Card title='Random number' purple>
            <div>
                <span>Result: </span>
                <span>{ randon }</span>
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

export default connect(mapStateToProps)(Random);