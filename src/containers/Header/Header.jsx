import React from 'react';
import './header.css';
import robot from '../../assets/robot.png'

function Header(props) {
    return (
        <div className="rk__header section__padding" id="home">
            <div className="rk__header-content">
                <h1 className="gradient__text">Hello, I am Rijubak</h1>
                <p>A 4th year Computer Science student, looking for a full-time software engineering roles including internships.</p>
                <p>Please hire me, or this robot will take over our world.</p>
            </div>
            <div className="rk__header-image">
                <img src={robot} />
            </div>
        </div>
    );
}

export default Header;