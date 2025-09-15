import "./StyleAboutMe.css"

const AboutMe = () => {
    return(
        <>
            <div data-aos="zoom-in" id={"about-me"} className={"flex flex-col px-10 text-center gap-4 h-screen pt-20"}>
                <h2 className="subtitle">ABOUT ME</h2>
                <div className={"flex flex-row justify-center mt-5 ps-10"}>
                    <div>
                        <h2 className="text-2xl font-bold text-left">Know more about me</h2>
                        <p className={"text max-w-2xl justify mt-3"}>My name is Axel, and I am a junior mobile app developer with a Associate Degree in Multiplatform Application Development (equivalent to a Higher Vocational Training degree in Spain). After completing my studies and a three-month internship, I am now looking for my first full-time opportunity to grow as a developer and contribute to a team.

                            I specialize in building mobile applications with React Native and Expo, and I also have backend experience using Django with PostgreSQL databases. <br/><br/>This
                            background allows me to work confidently across both front-end and back-end development.

                            I am highly motivated, detail-oriented, and eager to continue learning. In addition to my academic and internship experience, I actively work on personal projects, which you can find on my GitHub</p>
                    </div>
                    <div>
                        <p className={"w-150"}>ola</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutMe;