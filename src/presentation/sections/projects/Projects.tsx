import "./StyleProjects.css"
import {useNavigate} from "react-router-dom";
import projects from "./ArrayProjects.ts";

const Projects = () => {
    const navigate = useNavigate();

    return (
        <>
            <div data-aos="zoom-in" id={"projects"}
                 className={"flex flex-col px-10 text-center gap-4 pt-40 md:pt-20 px-30 pb-20"}>
                <h2 className="subtitle">My projects</h2>
                <div className="projects-container flex flex-row justify-center gap-8 mt-7">
                    {projects.map((project) => (
                        <div data-aos={"fade-left"} className={"project-card flex flex-col gap-3 p-8 my-5"}>
                            <img className={"project-img"} src={project.img} alt={project.name+" photo"}/>
                            <h2 className={"text-left text-xl font-bold mt-3"}>{project.name}</h2>
                            <p className={"description-project text-justify"}>{project.description}</p>
                            <button data-aos={"zoom-in-left"}
                                key={project.slug}
                                onClick={() => {navigate(`/projects/${project.slug}`, { state: project})}}
                                className={"details-button bg-white w-32 p-2"}>More details →</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;