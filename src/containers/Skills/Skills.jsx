import React from 'react';
import './Skills.css';
import {motion} from "framer-motion";
import {react, dotnetcore, python, git, sql, cs, robotics, embeddedskill, cpp} from "../../assets";
import '../../App.css';

function Skills() {
    const skills = [
        {name: "C#", icon: cs},
        {name: "Dot Net Core", icon: dotnetcore},
        {name: "SQL", icon: sql},
        {name: "Embedded Software", icon: embeddedskill},
        {name: "Robotics", icon: robotics},
        {name: "C++", icon: cpp},
        {name: "Python", icon: python},
        {name: "React", icon: react},
        {name: "Git", icon: git}
    ];
    return (
        <div className={"rk__skills section__padding"} id="skills">
            <h2 className="skills__head-text">Skills</h2>
            <div className="skills__profiles">
                {skills.map((skill, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.0}}   //Set hover scale to 1.2 if motion is required
                        transition={{duration: 0.5, type: 'tween'}}
                        className="skills__profile-item"
                        key={skill.name + index}
                    >
                            <img src={skill.icon} alt={skill.name}/>
                            <p className="skills__p-text" style={{marginTop: 10}}>{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;