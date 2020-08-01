import React from 'react'

import Card from './Card';

export default props => {

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