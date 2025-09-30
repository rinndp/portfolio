import "./StyleProjects.css"
import {useNavigate} from "react-router-dom";
import projects from "./ArrayProjects.ts";

const Projects = () => {
    const navigate = useNavigate();

    return (
        <>
            <p className={"mt-20 md:mb-1"} id={"projects"}></p>
            <div data-aos="zoom-in"
                 className={"flex flex-col h-auto text-center justify-center items-center gap-4 md:pt-5 md:px-30 pb-24"}>
                <h2 className="subtitle">My projects</h2>
                <div className="projects-container md:flex md:flex-row justify-center items-center gap-8 mt-7">
                    {projects.map((project) => (
                        <div data-aos={"fade-left"} className={"project-card shadow-2xl mx-auto flex flex-col gap-3 p-8 my-5"}>
                            <img className={"project-img"} src={project.img} alt={project.name + " photo"}/>
                            <h2 className={"text-left text-xl font-bold mt-3"}>{project.name}</h2>
                            <p className={"description-project text-justify"}>{project.description}</p>
                            <div data-aos="fade-left" className={"text-left"}>
                                <button key={project.slug}
                                        onClick={() => {
                                            navigate(`/projects/${project.slug}`, {state: project})
                                        }}
                                        className={"details-button p-2"}>More details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;