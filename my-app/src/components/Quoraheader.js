import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import {  AssignmentTurnedInOutlined,ExpandMore,NotificationsOutlined,PeopleAltOutlined, Search }from "@material-ui/icons";
import { Avatar, Button, Input, Tooltip } from '@material-ui/core';
import './css/QuoraHeader.css';
import { Modal } from 'react-responsive-modal';
import CloseIcon from "@material-ui/icons/Close";
import "react-responsive-modal/styles.css";
import axios from 'axios';

export function Quoraheader() {

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [inputUrl,setInputUrl] = useState("");
    const [question,setQuestion] = useState("");
    
    const Close = <CloseIcon />

    const handleSubmit = async() => {
        if(question !== ""){

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const body = {
                questionName: question,
                questionUrl: inputUrl
            };
            await axios
            .post('/api/questions',body,config)
            .then((res) => {
                console.log(res.data);
                alert(res.data.message)
            })
            .catch((e) => {
                console.log(e);
                alert('Error in adding question')
            });
        }
    };
    return (
        <div className='qHeader' >
            <div className='qHeader-content'>
                <div className='qHeader__logo'>
                    <a href='#'><strong>Quora</strong></a>
                </div>
                <div className='qHeader__icons'>
                    <div className='qHeader__icon'><Tooltip title="Home"><HomeIcon /></Tooltip> </div> 
                    <div className='qHeader__icon'><Tooltip title="Following"><FeaturedPlayListOutlinedIcon /></Tooltip></div>
                    <div className='qHeader__icon'> <Tooltip title="Answers"><AssignmentTurnedInOutlined /></Tooltip> </div>
                    <div className='qHeader__icon'><Tooltip title="Spaces"><PeopleAltOutlined /></Tooltip></div>
                    <div className='qHeader__icon'><Tooltip title="Notifications"><NotificationsOutlined /></Tooltip></div>
                 </div>
                        <div className='qHeader__input'>
                            <Search />
                            <input type= "text" placeholder='shoot your Question'/>
                        </div>
                         <div className='qHeader__Rem'>
                                < Avatar />
                        </div>
                        <Button onClick={()=> setIsModalOpen(true)} >Add Question</Button> 
                        <Modal 
                        open = {isModalOpen} 
                        closeIcon={Close} 
                        onClose = {() =>setIsModalOpen(false)} 
                        closeOnEsc
                        center 
                        closeOnOverlayClick={false}
                        styles={{
                            overlay:{
                                height:"auto"
                            }
                        }} >
                            
                            <div className='modal__title'>
                                <h5>Add Question</h5>
                                <h5>Share Link</h5>
                            </div>
                            <div className='modal__info'>
                                <Avatar className='avatar' />
                                <div className='modal__scope'>
                                    <PeopleAltOutlined />
                                    <p>Public</p>
                                    <ExpandMore />
                                </div>
                            </div>
                            <div className='modal__Field'>
                                <Input 
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                type='text' placeholder="Start your question with What, How, Why, etc."/>
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column',
                                }}>
                                    <input
                                    value={inputUrl}
                                    onChange={(e)=> setInputUrl(e.target.value)}
                                     style={{
                                        margin:'5px 0',
                                        border:'1px solid lightgrey',
                                        padding: '10px',
                                        outline:'2px solid #000',
                                    }} type='text' placeholder="Optional: include a link that gives context"></input>
                                    {
                                        inputUrl !== "" && <img style={{
                                            height:"40vh",
                                            objectFit:"contain",
                                        }} src={inputUrl} alt="displayimage" />
                                    }
                                    
                                </div>
                            </div>
                            <div className='modal__buttons'>
                                <button className='cancel' onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </button>
                                <button onClick={handleSubmit} className='add' type='submit' >
                                    Add Question
                                </button>
                            </div>
                        </Modal>
                        </div>
                    </div>       
    )
}