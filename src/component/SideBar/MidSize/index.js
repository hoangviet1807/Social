import { Avatar, IconButton, Input, InputAdornment, TextField } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import InfoIcon from '@mui/icons-material/Info';
import React, { useEffect, useState } from 'react'
import ScrollToBottom from "react-scroll-to-bottom";
import './style.css'
import SendIcon from '@mui/icons-material/Send';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getMessage, updateMessage } from '../../../services/services';
import { useSelector } from 'react-redux';
import { selectRoom } from '../../../redux/rooms';
import { socket } from '../../../config/socket';
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';

const Chat = () => {
    const queryClient = useQueryClient()
    const roomId = useSelector(selectRoom);
    const { data, isLoading, isFetching } = useQuery(['messages'], () => getMessage(roomId.groupSelected), { enabled: Boolean(roomId.groupSelected) })
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])
    const [file, setFile] = useState()
    const username = localStorage.getItem("username")

    const { mutate } = useMutation(updateMessage, {
        onSuccess: (data) => {
            queryClient.invalidateQueries('messages')
        },
        onError: () => {
            console.log("warning");
        }
    });

    const selectFile = (e) => {
        setFile(e.target.files[0])

    }



    const sendMessage = (e) => {
        // if (file) {
        //     const messageData = {
        //         roomId: roomId.groupSelected,
        //         sender: username,
        //         image: file.name,
        //         timestamps: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        //     };
        //     await socket.emit("send_message", messageData)
        //     setMessageList((list) => [...list, messageData])
        //     setCurrentMessage("")
        //     mutate(messageData)
        // }
        // else if (currentMessage !== "") {
        //     const messageData = {
        //         roomId: roomId.groupSelected,
        //         sender: username,
        //         message: currentMessage,
        //         timestamps: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        //     };
        //     await socket.emit("send_message", messageData)
        //     setMessageList((list) => [...list, messageData])
        //     setCurrentMessage("")
        //     mutate(messageData)
        // }
        // else {
        //     return false
        // }

        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', file)
        axios.post("http://localhost:8080/message/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })

    }

    useEffect(() => {
        if (!isLoading || !isFetching) {
            setMessageList(data?.messages)
        }
    }, [isLoading, isFetching])


    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data])
        });
    }, [])



    return (
        <>
            {!isLoading &&
                <div className='container-chat'>
                    <div className='header-chat'>
                        <div className='info-user'>
                            <Avatar>H</Avatar>
                            <div className='room'>
                                <p>{data?.roomName}</p>
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
                                {messageList?.map((val) => (
                                    <div
                                        key={val._id}
                                        className="list-user-message"
                                        id={val.sender === username ? "you" : "other"}
                                    >
                                        <div className='messages'>
                                            <div className="message-meta">
                                                <Avatar>{val.sender.charAt(0)}</Avatar>
                                            </div>

                                            <div className="message-content">
                                                <div className='author'>
                                                    <span>{val.sender}</span>
                                                    <br />
                                                    <span style={{ padding: '0 5px 0 5px', fontSize: '12px', fontWeight: 300 }}>{val.timestamps}</span>
                                                </div>
                                                <div className='mess'>
                                                    {val.message}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </ScrollToBottom>

                        </div>

                        <div className='footer-chat'>
                            {/* {file && <img src={preview} style={{ width: '100px' }} />} */}
                            <TextField
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        sendMessage()
                                    }
                                }}
                                value={currentMessage}
                                onChange={(e) => setCurrentMessage(e.target.value)}
                                size='small' style={{ width: '90%', alignSelf: 'center' }} placeholder="Your message..."
                                maxRows={5}
                                sx={{
                                    fieldset: {
                                        borderRadius: '20px',
                                        display: "flex",
                                        flexDirection: 'row',
                                        flexFlow: 'row wrap',
                                        alignItems: 'center',
                                    }
                                }}

                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <label htmlFor="icon-button-file">
                                                <Input style={{ display: 'none' }} accept="image/*" id="icon-button-file" type="file" onChange={selectFile} />
                                                <IconButton color='success' aria-label="upload picture" component="span">
                                                    <ImageIcon />
                                                </IconButton>
                                            </label>
                                            <IconButton onClick={sendMessage}>
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
            }
        </>

    )
}

export default Chat