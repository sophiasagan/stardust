import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1610649333217-31ea4ea0df1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://randomuser.me/api/portraits/men/1.jpg"
        title="Andrew Marin"
      />
      <Story
        image="https://images.unsplash.com/photo-1559818454-1b46997bfe30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YmVlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://pbs.twimg.com/profile_images/737221709267374081/sdwta9Oh.jpg"
        title="Cezar Moss"
      />
      <Story
        image="https://images.unsplash.com/photo-1610594857840-b77f822cfcc0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=61eaea85f1aa3d065400179c78163f15"
        title="Darleen Brand"
      />
      <Story
        image="https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cHVwcHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80"
        title="Christina Miller"
      />
      <Story
        image="https://images.unsplash.com/photo-1550245890-7192911894f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHlvZ2ElMjBtYW58ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://images.unsplash.com/photo-1608739307777-04053d3871d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        title="Sebastian Kwang"
      />
    </div>
  );
}

export default StoryReel;
