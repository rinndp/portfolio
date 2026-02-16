import "./StyleAboutMe.css"
import {FlatListTech} from "../../components/FlatlistTech.tsx";
import {techStack} from "./TechStack.ts";

const AboutMe = () => {

    return(
        <>
            <p id={"about-me"}></p>
            <div data-aos="zoom-in" className={"flex flex-col h-auto px-10 text-center gap-4 pt-15 md:px-30"}>
                <h2 className="subtitle">About me</h2>
                <div className={"flex flex-col md:flex-row justify-center mt-20 gap-7 pb-20 md:ps-10"}>
                    <div className={"flex-1"}>
                        <h2 data-aos={"fade-right"} className="fs-7 font-bold text-left">Know more about me</h2>
                        <p data-aos={"fade-up"} className={"text max-w-2xl justify mt-5"}>

                        I am a <b>passionate software developer</b> who genuinely enjoys building digital products that solve real problems. Technology is not just something I study or work with — it is something I constantly explore and improve at. I am driven by curiosity, a strong desire to learn, and the motivation to turn ideas into functional, well-crafted applications.<br/><br/>

                        I thrive in <b>dynamic and collaborative environments</b>, where communication, teamwork, and shared goals push projects forward. I consider myself highly <b>adaptable and proactive</b>, comfortable taking initiative or supporting the team wherever needed. My focus is not only on writing code, but on contributing positively to the team, continuously improving, and growing as a professional in every project I am part of.

                            </p>
                    </div>
                    <div className="md:w-1/2">
                        <h2 data-aos={"fade-left"} className="fs-7 font-bold text-left pt-5 md:text-center md:pt-0">Tech stack</h2><br/>
                        <FlatListTech techStack={techStack} animation={true}/>
                    </div>
                </div>
            </div>
        </>
    )}

export default AboutMe;