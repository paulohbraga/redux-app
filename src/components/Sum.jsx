import React from 'react'
import Card from './Card';

export default props => {

    return (
        <Card title='Sum' blue>
            <div>
                <span>Result: </span>
                <span>{10}</span>
            </div>
        </Card>
    )
};