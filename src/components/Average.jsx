import React from 'react'
import Card from './Card';

import { connect } from 'react-redux'


const Media = (props) => {
    const { min, max } = props
    return (
        <Card title='Average' green>
            <div>
                <span>Result: </span>
                <span>{(min + max) / 2}</span>
            </div>
        </Card>
    )
};

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Media);