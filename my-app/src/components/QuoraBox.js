import React from 'react'
import './css/QuoraBox.css';
import {Avatar} from '@material-ui/core';


export function QuoraBox() {
    return (
        <div className='quorabox'>
           <div className='quorabox__info'>
                <Avatar/>
            </div>
            <div className='quorabox__quora'>
                <h5>What do you want to ask or share</h5>
            </div>
        </div>
    )
}