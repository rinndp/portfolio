import img from "../../../assets/tailwind-logo.png"
import "./StyleProjects.css"

const Projects = () => {
    const projects = [
        {
            name: "Wimm",
            img: img,
            description: "ola",
        },
        {
            name: "GamingSwipe",
            img: img,
            description: "ola",
        },
        {
            name: "Calculator",
            img: img,
            description: "ola",
        },
    ]

    return (
        <>
            <div data-aos="zoom-in" id={"projects"}
                 className={"flex flex-col px-10 text-center gap-4 h-screen pt-20 px-30"}>
                <h2 className="subtitle">My projects</h2>
                <div className="flex flex-row justify-center ps-10 gap-5 mt-7">
                    {projects.map((project) => (
                        <div className={"project-card flex flex-col gap-3 p-8"}>
                            <img className={"project-img"} src={project.img} alt={project.name+" photo"}/>
                            <h2 className={"text-left text-xl font-bold mt-3"}>{project.name}</h2>
                            <p className={"description-project text-left"}>{project.description}</p>
                            <div className={"flex flex-row mt-3"}>
                                <p className={"w-1/2 text-left"}>ola</p>
                                <p className={"w-1/2 text-right"}>ola</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;