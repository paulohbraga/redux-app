import React, { useState } from 'react'
import './Interval.css'
import Card from './Card';

export default props => {

    return (
        <Card title='Number interval' red>
            <div className='Interval'>
                <span>Minimun: <input type='number' value={0}></input></span>
                <span>Max: <input type='number' value={1} ></input> </span>
            </div>
        </Card>
    )
};