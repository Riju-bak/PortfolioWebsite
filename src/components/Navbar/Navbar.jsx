import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="rk__navbar">
            <div className="rk__navbar-links">
                <div className="rk__navbar-links_logo">
                    <img src={logo} alt={"rijubak"}/>
                </div>
                <div className="rk__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#about">About</a></p>
                    <p><a href="#work">Work</a></p>
                    <p><a href="#skills">Skills</a></p>
                    <p><a href="#contact">Contact</a></p>
                </div>
            </div>
            <div className="rk__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="rk__navbar-menu_container scale-up-center">
                        <div className="rk__navbar-menu_container-links">
                            <p><a href="#home" onClick={() => {setToggleMenu(false)}}>Home</a></p>
                            <p><a href="#about" onClick={() => {setToggleMenu(false)}}>About</a></p>
                            <p><a href="#work" onClick={() => {setToggleMenu(false)}}>Work</a></p>
                            <p><a href="#skills" onClick={() => {setToggleMenu(false)}}>Skills</a></p>
                            <p><a href="#contact" onClick={() => {setToggleMenu(false)}}>Contact</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;