import React from 'react'

import Card from './Card';

export default props => {

    const {min, max} = props

    return (
        <Card title='Average' green>
            <div>
                <span>Result: </span>
                <span>{(min + max) / 2}</span>
            </div>
        </Card>
    )
};