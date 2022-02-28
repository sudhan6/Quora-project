import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './css/Feed.css';
import { Post } from './Post';
import { QuoraBox } from './QuoraBox';

export function Feed() {
    const  [posts ,setPosts] = useState([])
    useEffect(() => {
        axios.get("/api/questions").then((res) => {
            console.log(res.data);
            setPosts(res.data)
        }).catch((e)=> {
            console.log(e);
        });
    },[]);
    return (
        <div className='feed'>
            <QuoraBox />
            
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}