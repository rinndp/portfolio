import img from "../../../assets/tailwind-logo.png"
import "./StyleProjects.css"
import {useNavigate} from "react-router-dom";

const Projects = () => {
    const projects = [
        {
            name: "Wimm",
            slug: "wimm",
            img: img,
            description: "Managing your debtors and creditors has never been so easy",
        },
        {
            name: "GamingSwipe",
            slug: "gaming-swipe",
            img: img,
            description: "Discover new games through swipes, manage your game library and see other people's libraries",
        },
        {
            name: "Calculator",
            slug: "calculator",
            img: img,
            description: "Basic calculator made with Android Studio",
        },
    ]

    const navigate = useNavigate();

    return (
        <>
            <div data-aos="zoom-in" id={"projects"}
                 className={"flex flex-col px-10 text-center gap-4 h-screen pt-20 px-30"}>
                <h2 className="subtitle">My projects</h2>
                <div className="flex flex-row justify-center ps-10 gap-5 mt-7">
                    {projects.map((project) => (
                        <div data-aos={"fade-left"} className={"project-card flex flex-col gap-3 p-8"}>
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