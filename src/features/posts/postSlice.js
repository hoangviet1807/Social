import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1',
        title: 'Viet',
        content: 'HIHI',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0
        },
        comments: [
            { "author": "Viet", "comment": "Qua Non" },
            { "author": "Han", "comment": "Qua Non" },
        ]
    },
    {
        id: '2',
        title: 'Han',
        content: 'Haha',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0
        },
        comments: [
            { "author": "Viet", "comment": "HiHI" },
            { "author": "Han", "comment": "Qua Non" },
        ]
    }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded: {
            reducer(state, action) {
                const { postId, reaction } = action.payload
                const existingPost = state.find(post => post.id === postId)
                if (existingPost) {
                    existingPost.reactions[reaction]++
                }
            }
        },
        commentAdded: {
            reducer(state, action) {
                const { postId, comment, author } = action.payload
                const existingPost = state.find(post => post.id === postId)
                if (existingPost) {
                    existingPost.comments.push({ author: author, comment: comment })
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded, reactionAdded, commentAdded } = postSlice.actions

export default postSlice.reducer