import React from 'react'

import './Interval.css'
import Card from './Card';

export default props => {
    return (
        <Card title='Card Interno' red>
            <div className='Interval'>
                <span>Minimun: <input type='number' value={0} readOnly></input></span>
                <span>Max: <input type='number' value={10} readOnly></input> </span>
            </div>
        </Card>
    )
};