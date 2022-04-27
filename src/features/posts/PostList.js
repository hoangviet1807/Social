import { useSelector } from "react-redux";
import React from 'react'
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import Reaction from "./Reaction";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Comment } from "./Comment";

const PostList = () => {
  let navigate = useNavigate();
  const posts = useSelector(selectAllPosts)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  const renderPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <Reaction post={post} />
        <Comment post={post} />
      </div>
    </article>
  ))
  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>POST</h2>
        <Button onClick={() => navigate('/addPost')} variant="outlined" size="small">Add Post</Button>
      </div>

      {renderPosts}
    </section>
  )
}

export default PostList