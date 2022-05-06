import { Avatar, createStyles, IconButton, InputAdornment, TextField } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react'
import ScrollToBottom from "react-scroll-to-bottom";

import './style.css'
import SendIcon from '@mui/icons-material/Send';
const Chat = () => {
    const [currentMessage, setCurrentMessage] = useState()
    const sendMessage = () => {
        console.log("HIHI");
    }



    return (
        <div className='container-chat'>
            <div className='header-chat'>
                <div className='info-user'>
                    <Avatar>H</Avatar>
                    <div className='room'>
                        <p>Name</p>
                    </div>
                </div>
                <div className='action'>
                    <IconButton>
                        <CallIcon fontSize='small' />
                    </IconButton>
                    <IconButton>
                        <VideocamIcon fontSize='small' />
                    </IconButton>
                    <IconButton>
                        <InfoIcon fontSize='small' />
                    </IconButton>
                </div>

            </div>

            <div className='container-chat-form' >
                <div className='chat-form'>
                    <ScrollToBottom className="message-container">
                        <div
                            className="list-user-message"
                            id={"other"}
                        >
                            <div className='messages'>
                                <div className="message-meta">
                                    <Avatar>H</Avatar>
                                </div>
                                <div className="message-content">
                                    <div className='author'>
                                        <span>Viet Ne</span>
                                        <br />
                                        <span style={{ padding: '0 5px 0 5px', fontSize: '12px', fontWeight: 300 }}>10:25PM</span>
                                    </div>
                                    <div className='mess'>
                                        Day la 1 tin nhan
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            className="list-user-message"
                            id={"you"}
                        >
                            <div className='messages'>
                                <div className="message-meta">
                                    <Avatar>H</Avatar>
                                </div>
                                <div className="message-content">
                                    <div className='author'>
                                        <span>You</span>
                                        <br />
                                        <span style={{ padding: '0 5px 0 5px', fontSize: '12px', fontWeight: 300 }}>10:25PM</span>
                                    </div>
                                    <div className='mess'>
                                        Day la 1 tin nhan
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ScrollToBottom>

                </div>

                <div className='footer-chat'>
                    <TextField size='small' style={{ width: '90%' }} placeholder="Your message..."
                        sx={{
                            fieldset: {
                                borderRadius: '20px',
                                display: "flex",
                                flexDirection: 'row',
                                flexFlow: 'row wrap',
                                alignItems: 'center',
                            }
                        }} InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SendIcon color='success' fontSize='small' style={{ transform: 'rotate(-25deg)' }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        multiline={true}
                    />
                </div>
            </div>

        </div>
    )
}

export default Chat