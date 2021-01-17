import React, { useState } from "react";
import "./MessageSender.css";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar } from "@material-ui/core";
// import db from "./firebase";
// import firebase from "firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput('')
    setImageUrl('')
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamOutlinedIcon />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoOutlinedIcon />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
