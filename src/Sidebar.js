import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';


function Sidebar() {
    const user = useSelector(selectUser);

    const recentitem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
            <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,548</p>
            </div>
        </div>

        <div className="sidebar__bottom">
             <p>Recent</p>
             {recentitem('reactjs')}
             {recentitem('programming')}
             {recentitem('softwareengineering')}
             {recentitem('design')}
             {recentitem('developer')}
        </div>
    </div>
  );
}

export default Sidebar