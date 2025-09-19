import {useLocation, useNavigate} from "react-router-dom";
import leftArrow from "../../../assets/left-arrow.png"
import rightArrow from "../../../assets/right-arrow.png"
import "./StyleProjectDetails.css"

const ProjectDetails = () => {
    const { state: project } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div className={"py-20 px-40"}>
                <div className={"flex flex-row gap-3"}>
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

            </div>
        </>
    )
}

export default ProjectDetails;