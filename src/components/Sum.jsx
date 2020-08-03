import React from 'react'
import Card from './Card';

import { connect } from 'react-redux'

const Sum = props => {
    const {min, max} = props

    return (
        <Card title='Sum' blue>
            <div>
                <span>Result: </span>
                <span>{min + max}</span>
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

export default connect(mapStateToProps)(Sum);