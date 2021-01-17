import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed({ id, profilePic, message, timestamp, username, image }) {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post />
      <Post
        key={id}
        profilePic={profilePic}
        message={message}
        timestamp={timestamp}
        username={username}
        image={image}
      />
      
    </div>
  );
}

export default Feed;
