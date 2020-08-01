import React from 'react'

import Card from './Card';

export default props => {

    const {min, max} = props
    const randon = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title='Random number' purple>
            <div>
                <span>Result: </span>
                <span>{ randon }</span>
            </div>
        </Card>
    )
};