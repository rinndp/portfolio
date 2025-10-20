import {useLocation, useNavigate} from "react-router-dom";
import leftArrow from "../../../assets/left-arrow.png"
import rightArrow from "../../../assets/right-arrow.png"
import "./StyleProjectDetails.css"
import "../../../assets/tailwind-logo.png"
import {FlatListTech} from "../../components/FlatlistTech.tsx";
import {useEffect} from "react";
import type {Url} from "../../../domain/interfaces/Url.ts";

const ProjectDetails = () => {
    const { state: project } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <div className={"pt-10 md:pt-10 md:h-screen px-10 pb-30 md:px-40"}>
                <div data-aos={"fade-right"} className={"flex flex-row gap-3"}>
                    <button
                        onClick={() => {
                            navigate(-1)
                        }}
                        className={"go-back-button flex flex-row justify-center gap-3 p-4"}>
                        <img className={"button-arrow ms-3"} src={leftArrow} alt="left-arrow"/>
                        Go back
                    </button>
                    <div className={"header-text-container flex flex-row gap-3 ms-2"}>
                        <p data-aos="fade-up">Projects</p>
                        <img className={"button-arrow"} src={rightArrow} alt="right-arrow"/>
                        <p data-aos="fade-down" className={"text-white brightness-150 font-bold"}>{project.name}</p>
                    </div>
                </div>
                <div className={"project-details-info-container flex flex-row gap-20 justify-center"}>
                    <div data-aos={"fade-left"} className={"project-text-container pt-10 gap-4"}>
                        <h2 className={"subtitle"}>{project.name}</h2>
                        <p className={"text mt-7 pe-10"}>{project.description}</p>
                        {project.long_description && (
                            <p className={"text mt-7"}>{project.long_description}</p>
                        )}
                        {project.urls && (
                            <>
                                <p className={"my-4"}>Sources</p>
                                <div className={"flex flex-col gap-3"}>
                                {project.urls.map((url: Url, index: number) => (
                                        <a className={"project-url"}
                                            href={url.url}
                                            key={index}>
                                            {url.label}
                                        </a>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className={"py-10"}>
                            <FlatListTech techStack={project.technologies} animation={false}/>
                        </div>
                    </div>
                    <div data-aos={"fade-up"} className={"mt-25 md:mt:10"}>
                        <img className={"project-details-img"} src={project.img} alt="project-photo"/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProjectDetails;