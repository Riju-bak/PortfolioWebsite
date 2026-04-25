import React from 'react';
import './header.css';
import robot from '../../assets/robot.png'

function Header(props) {
    return (
        <div className="rk__header section__padding" id="home">
            <div className="rk__header-content">
                <h1 className="gradient__text">Hello, I am Rijubak</h1>
                <p>I'm an Embedded Systems Engineer building cool robots for a Robotics Company</p>
                <p>The robot on the right is perhaps something I'll build in the future :)</p>
            </div>
            <div className="rk__header-image">
                <img src={robot} />
            </div>
        </div>
    );
}

export default Header;