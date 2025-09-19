import "./StyleAboutMe.css"
import github from "../../../assets/github-logo.png"
import linkdin from "../../../assets/linkdin-logo.png"

const AboutMe = () => {
    const techStack = [
        {
            name: "React Native",
        },
        {
            name: "React",
        },
        {
            name: "Android Studio",
        },
        {
            name: "Expo",
        },
        {
            name: "Vite",
        },
        {
            name: "TailwindCSS",
        },
        {
            name: "Django",
        },
        {
            name: "TypeScript",
        },
        {
            name: "Python",
        },
        {
            name: "Java",
        },
        {
            name: "PosgreSQL",
        },
        {
            name: "MySQL",
        },
        {
            name: "JSON",
        },
        {
            name: "Git",
        },
        {
            name: "GitHub",
        },
        {
            name: "Postman",
        },
        {
            name: "Figma",
        },

    ]

    return(
        <>
            <div data-aos="zoom-in" id={"about-me"} className={"flex flex-col px-10 text-center gap-4 h-screen pt-20 px-30"}>
                <h2 className="subtitle">About me</h2>
                <div className={"flex flex-row justify-center mt-5 gap-7 ps-10"}>
                    <div className={"flex-1"}>
                        <h2 data-aos={"fade-right"} className="text-2xl font-bold text-left">Know more about me</h2>
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
                        <div className={"flex flex-row mt-4 gap-4"}>
                            <a href={"https://github.com/rinndp"}><img className={"button"} src={github}
                                                                       alt={"github-logo"}/></a>
                            <a href={"https://www.linkedin.com/in/axelrojas3/"}><img className={"button"} src={linkdin}
                                                                       alt={"linkedin-logo"}/></a>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h2 data-aos={"fade-left"} className="text-2xl font-bold text-center">Tech stack</h2><br/>
                        <div className="flex flex-wrap gap-3 h-20">
                            {techStack.map((tech, index) => (
                                <div data-aos={"fade-left"}
                                    key={index}
                                    className="tech-card-container h-10 text-white px-4 py-2 rounded-xl shadow-md"
                                >
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}

export default AboutMe;