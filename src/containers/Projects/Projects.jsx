import './Projects.css';
import {robotproject} from "../../assets";
import {motion} from "framer-motion";


function Projects() {
    const projects = [
        {
            name: "Line Following Robot",
            desc: "Built a line following robot that uses PI control to maintain its course.",
            url: "https://drive.google.com/file/d/1QwMcDA6b_uWI-aPR-XQGIakxC_wZO5mD/view?usp=sharing"
        },
        {
            name: "Maze Solving Robot",
            desc: "Arduino controlled differential drive robot which navigates its way through a maze.",
            url: "https://drive.google.com/file/d/1Tt86yUvKT-FcsGsMTCPrw4bDoa-EWfkg/view?usp=sharing"
        },
        {
            name: "Solar Tracker",
            desc: "Built a solar tracker (with a solar panel) mounted on it which automatically aligns itself towards the direction of maximum light intensity.",
            url: ""
        }
    ]
    return (
        <div id="projects" className={"rk__projects section__padding"}>
            <h2 className="projects__head-text">Embedded/Robotics Projects</h2>
            <div className={"projects__container"}>
                <div className={"rk__projects-image"}>
                    <img src={robotproject} alt={"projects"}/>
                </div>
                <div className={"projects__exp"}>
                    {projects.map(project => (
                        <div
                            className={"projects__exp-item"}
                            onClick={() => {
                                window.open(project.url, '_blank', 'noopener', 'noreferrer')
                            }}
                        >
                            <motion.div
                                whileInView={{opacity: [0, 1]}}
                                whileHover={{scale: 1.2}}
                                transition={{duration: 0.5, type: 'tween'}}
                                className={"projects__exp-projects"}
                            >
                                <h4 className={"projects__bold-text gradient__text"}>{project.name}</h4>
                                <p className={"projects__p-text"}>{project.desc}</p>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;