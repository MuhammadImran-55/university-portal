import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="topbar">
            <ul>
                <li><a href="">750k followers</a></li>
                <li><a href="">+92 301 1574440</a></li>
                <li><a href="">mimran11600@gmail.com</a></li>
            </ul>
            <ul className='right-ul'>
                <li><a href="">Campus</a></li>
                <li><a href="">Students</a></li>
                <li><a href="">Staffs</a></li>
                <li><a href="">Alumni</a></li>
                <li><a href="">Help Desk</a></li>
            </ul>
        </div>
    );
};

export default TopBar;