import { Avatar } from '@material-ui/core'
import React, {forwardRef } from 'react'
import "./Post.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import InputOption from './InputOption';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Post = forwardRef (({ name, description, message, photoUrl}, ref) => {
    const user = useSelector(selectUser);

    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src = {photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon = {ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <InputOption Icon = {ChatBubbleOutlineOutlinedIcon} title="Comment" color="gray"/>
                <InputOption Icon = {ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon = {SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
})

export default Post


