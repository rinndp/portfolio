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
                        <p data-aos={"fade-up"} className={"text max-w-2xl justify mt-5"}>My name is Axel, and I am a junior mobile app
                            developer with a <b>Associate Degree in Cross-platform Application
                                Development</b> (equivalent to a Higher Vocational Training degree in Spain). After
                            completing my studies and a three-month internship, I am now looking for my first full-time
                            opportunity to grow as a developer and contribute to a team.

                            I specialize in building mobile applications with <b>React Native and Expo</b>, and I also
                            have backend experience using <b>Django with PostgreSQL databases</b>. <br/><br/>This
                            background allows me to work confidently across both front-end and back-end development.

                            I am highly motivated, detail-oriented, and <b>eager to continue learning</b>. In addition
                            to my academic and internship experience, I actively work on personal projects, which you
                            can find on my GitHub</p>
                    </div>
                    <div className="md:w-1/2">
                        <h2 data-aos={"fade-left"} className="fs-7 font-bold text-left pt-5 md:text-center md:pt-0">Tech stack</h2><br/>
                        <FlatListTech techStack={techStack}/>
                    </div>
                </div>
            </div>
        </>
    )}

export default AboutMe;