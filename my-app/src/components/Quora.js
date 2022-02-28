import React from 'react'
import './css/Quora.css'
import { Feed } from './Feed'
import { Quoraheader } from './Quoraheader'
import { Sidebar } from './Sidebar'
import { Widget } from './Widget'

export function Quora() {
    return (
        <div classname = 'quora'>
            <Quoraheader/>
            <div className='quora__contents'>
                <div className='quora__content'>
                    <Sidebar />
                    <Feed />
                    <Widget />

                </div>
            </div>
        </div>
    )
}