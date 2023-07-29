import React from 'react';
import {motion} from "framer-motion";
import ReactTooltip from 'react-tooltip';
import './Work.css';
import {workrobo} from "../../assets";

function Work() {
    const experiences = [
        {
            year: "2022",
            works: [{
                name: "Software Developer(Intern)",
                company: "Taktys",
                url: "",
                desc: "Working on both the front-end and backend of their data management tool"
            }]
        },

        {
            year: "2020",
            works: [{
                name: "Software Engineer(Intern)",
                company: "Rapyuta Robotics",
                url: "https://www.rapyuta-robotics.com/",
                desc: "Built the backend of an internal web app from scratch. Also wrote software that helps warehouse robots communicate with each other"
            }]
        }
    ];
    return (
        <div id="work" className={"rk__work section__padding"}>
            <h2 className="work__head-text">Work Experience</h2>
            <div className={"work__container"}>
                <div className="rk__work-image">
                    <img src={workrobo} alt={"workrobo"}/>
                </div>
                <div className="work__exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="work__exp-item"
                            key={experience.year}
                        >
                            <div className="work__exp-year">
                                <p className="work__bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="work__exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{opacity: [0, 1]}}
                                            transition={{duration: 0.5}}
                                            className={"work__exp-work"}
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="work__bold-text gradient__text">{work.name}</h4>
                                            <motion.div
                                                whileHover={{scale: 1.1}}>
                                                <p className={"work__p-text"} onClick={() => {window.open(work.url, '_blank', 'noopener, noreferrer');}}>{work.company}</p>
                                            </motion.div>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#042c54"
                                            className="work__tooltip"
                                        >
                                        {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>

    );
}

export default Work;