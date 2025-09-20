import {useLocation, useNavigate} from "react-router-dom";
import leftArrow from "../../../assets/left-arrow.png"
import rightArrow from "../../../assets/right-arrow.png"
import "./StyleProjectDetails.css"
import "../../../assets/tailwind-logo.png"
import {FlatListTech} from "../../components/FlatlistTech.tsx";

const ProjectDetails = () => {
    const { state: project } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div className={"py-20 px-40"}>
                <div data-aos={"fade-right"} className={"flex flex-row gap-3"}>
                    <button
                        onClick={() => {
                            navigate(-1)
                        }}
                        className={"go-back-button flex flex-row justify-center gap-3 p-4"}>
                        <img className={"button-arrow ms-3"} src={leftArrow} alt="left-arrow"/>
                        Go back
                    </button>
                    <div className={"header-text-container flex flex-row gap-3 ms-5"}>
                        <p>Projects</p>
                        <img className={"button-arrow"} src={rightArrow} alt="right-arrow"/>
                        <p className={"text-white brightness-150 font-bold"}>{project.name}</p>
                    </div>
                </div>
                <div className={"flex flex-row gap-20 justify-center"}>
                    <div data-aos={"fade-left"} className={"pt-10 gap-4 w-1/2"}>
                        <h2 className={"subtitle"}>{project.name}</h2>
                        <p className={"text mt-7 pe-10"}>{project.description}</p>
                        {project.long_description && (
                            <p className={"text mt-7 pe-10"}>{project.long_description}</p>
                        )}
                        <div className={"py-10"}>
                            <FlatListTech techStack={project.technologies}/>
                        </div>
                    </div>
                    <div data-aos={"fade-up"} className={"mt-10"}>
                        <img className={"project-details-img"} src={project.img} alt="project-photo"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails;