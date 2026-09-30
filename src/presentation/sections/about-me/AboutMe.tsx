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

                        I'm a <b>Software Engineer</b> based in Madrid who loves turning ideas into products people actually use. I work mainly with <b>React, React Native and TypeScript</b> on the frontend and <b>Python and Django</b> on the backend, so I'm comfortable taking a feature from the first sketch all the way to production.<br/><br/>

                        Building my own projects has been one of my best teachers. Apps like <b>Wimm</b> and <b>GamingSwipe</b>, now live on Google Play, taught me to care about the details: clean code, smooth interfaces and APIs that just work.<br/><br/>

                        I do my best work in <b>collaborative teams</b> where ideas are shared openly. I'm <b>proactive and adaptable</b>, happy to take the lead on a task or jump in wherever the team needs a hand. Right now I'm looking for my next challenge: a place where I can keep growing and add real value from day one.

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