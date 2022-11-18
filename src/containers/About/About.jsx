import React from 'react';
import './about.css';
import fe from '../../assets/fe.png'
import be from '../../assets/be.png'
import automation from '../../assets/automation.png'
import {motion} from 'framer-motion';


function About() {
    const abouts = [{
            title: "Frontend development",
            description: "I've built frontend for webapps using React. Infact, this website is built using react.",
            image: fe
        },
        {
            title: "Backend development",
            description: "I've built web backends using Django in the past. These days I use ASP .NET Core Web API.",
            image: be
        },
        {
            title: "Automation scripting",
            description: "I prefer to automate mundane tasks by writing either python or bash scripts.",
            image: automation
        }
        ]
    return (
        <div className={"rk__about section__padding"} id="about">
            <h2 className="head-text">I Know that <span className={"gradient__text"}>Good Apps</span> <br/>means <span
                className={"gradient__text"}>Good Business</span></h2>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.2}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={about.image} alt={about.title}/>
                        <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
                        <p className="p-text" style={{marginTop: 10}}>{about.description}</p>

                    </motion.div>
                ))}
            </div>
        </div>

    );
}

export default About;