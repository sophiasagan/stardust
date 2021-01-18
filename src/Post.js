import React, { forwardRef } from "react";
import "./Post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatTwoToneIcon from "@material-ui/icons/RepeatTwoTone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar } from "@material-ui/core";

const Post = forwardRef(
  ({ profilePic, image, username, timestamp, message }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__top">
          <MoreHorizIcon className="post__dots" />
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post__bottom">
          <p>{message}</p>
        </div>
        <div className="post__image">
          <img src={image} alt="" />
        </div>
        <div className="post__options">
          <div className="post__option">
            <FavoriteBorderIcon />
            <p>{Math.floor((Math.random() * 150) + 1)}</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutlineIcon />
            <p>{Math.floor((Math.random() * 150) + 1)}</p>
          </div>
          <div className="post__option">
            <RepeatTwoToneIcon />
            <p>{Math.floor((Math.random() * 150) + 1)}</p>
          </div>
          <div className="post__option">
            <AccountCircleIcon />
            <ExpandMoreOutlined />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
