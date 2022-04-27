import { IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { commentAdded } from './postSlice';

export const Comment = ({ post }) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState("")

  const handleComment = () => {
    const data = {
      postId: post.id,
      comment: comment,
      author: 'Viet'
    }
    dispatch(commentAdded(data))
    setComment("")
  }

  return (
    <div>
      Comments:
      {post?.comments.map((val, i) => (
        <div style={{ color: 'red' }}>
          <span>{val.author}: {val.comment}</span>
        </div>

      ))}
      <div style={{ display: 'flex' }}>
        <TextField onKeyPress={(e) => {
          if (comment.length > 0 && e.key === 'Enter') {
            handleComment()
          }
        }} value={comment} onChange={(e) => setComment(e.target.value)} size="small" fullWidth />
        <IconButton onClick={handleComment} disabled={comment.length > 0 ? false : true}><SendIcon color={comment.length > 0 ? 'primary' : 'inherit'} /></IconButton>
      </div>

    </div>
  )
}
