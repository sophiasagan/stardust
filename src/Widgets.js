import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="side__wrapper contacts">
        <div className="side__title">YOUR TOP TEN</div>
        <div className="user">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            className="user__img"
            alt=""
          />
          <div className="username">
            Andrew Marin
            <div className="user__status"></div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50"
            className="user__img"
            alt=""
          />
          <div className="username">
            Amy Jacobs
            <div className="user__status offline"></div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1575084713138-342cae5f8d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
            className="user__img"
            alt=""
          />
          <div className="username">
            Carole Baskins
            <div className="user__status offline"></div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80"
            className="user__img"
            alt=""
          />
          <div className="username">
            Christina Miller
            <div className="user__status"></div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1608739307777-04053d3871d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            className="user__img"
            alt=""
          />
          <div className="username">
            Sebastian Kwang
            <div className="user__status"></div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1568054043324-86c349f926d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI1fHxibGFjayUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            className="user__img"
            alt=""
          />
          <div className="username">
            Naomi Alberta
            <div className="user__status"></div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=61eaea85f1aa3d065400179c78163f15"
            className="user__img"
            alt=""
          />
          <div className="username">
            Darleen Brand
            <div className="user__status"></div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjI4NDcyNjQxNl5BMl5BanBnXkFtZTgwMzI4OTM3NjM@._V1_UY256_CR13,0,172,256_AL_.jpg"
            className="user__img"
            alt=""
          />
          <div className="username">
            Sofia Anderson
            <div className="user__status idle"></div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJsYWNrJTIwd29tYW58ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
            className="user__img"
            alt=""
          />
          <div className="username">
            Basim Pitt
            <div className="user__status"></div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://pbs.twimg.com/profile_images/737221709267374081/sdwta9Oh.jpg"
            alt=""
            className="user__img"
          />
          <div className="username">
            Cezar Moss
            <div className="user__status idle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
