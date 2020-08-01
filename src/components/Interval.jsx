import React, { useState } from 'react'

import './Interval.css'
import Card from './Card';



export default props => {

    const {min, max} = props

    return (
        <Card title='Number interval' red>
            <div className='Interval'>
                <span>Minimun: <input type='number' value={min} onChange={ e => props.onChangeMin(+e.target.value)}></input></span>
                <span>Max: <input type='number' value={max} onChange={ e => props.onChangeMax(+e.target.value)}></input> </span>
            </div>
        </Card>
    )
};