import { Avatar, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';

const LeftSide = () => {
    return (
        <div>
            <div className='header'>
                <h2>Message</h2>
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} placeholder='Search...' size='small' style={{ width: '80%', backgroundColor: '#f3f3f3', }} />
            </div>
            <div className='list-message'>
                <div className='avatar'>
                    <Avatar>H</Avatar>
                </div>

                <div className='info'>
                    <div className='message'>
                        <span>Name</span>
                        <span style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>Day la 1 tin nhan rat dai asdasd</span>
                    </div>
                    <div className='timestamp'>
                        <span className='time'>4:20 PM</span>
                    </div>
                </div>

            </div>
            <div className='list-message'>
                <div className='avatar'>
                    <Avatar>H</Avatar>
                </div>

                <div className='info'>
                    <div className='message'>
                        <span className='name'>Name</span>
                        <span style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}>Day la 1 tin nhan</span>
                    </div>
                    <div className='timestamp'>
                        <span className='time'>4:20 PM</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeftSide