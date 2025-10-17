import reactLogo from "../../../assets/react.svg";
import viteLogo from "../../../assets/vitejs-logo.png";
import tailwindLogo from "../../../assets/tailwind-logo.png";
import './StyleHome.css';
import file from "../../../assets/file.png";
import github from "../../../assets/github-logo.png";
import linkdin from "../../../assets/linkdin-logo.png";

const Home = () => {

    const handleCVDownload = () => {
        const link = document.createElement("a");
        link.href = "../../../../public/cv-axel-rojas-en.pdf";
        link.download = "cv-axel-rojas.pdf";
        link.click();
    }

    return (
        <>
            <p id={"home"} className={"mb-3"}>-</p>
            <div data-aos="zoom-in"
                 className="home-container md:mt-0 flex flex-col items-center justify-center px-20 text-center gap-4">
                <div data-aos="fade-right" className="flex flex-row gap-4 justify-center items-center">
                    <img src={reactLogo} className="logo react h-10" alt="react-logo"/>
                    <img src={viteLogo} className="logo vite h-10" alt="vite-logo"/>
                    <img src={tailwindLogo} className="logo react h-7 mt-1" alt="tailwind-logo"/>
                </div>
                <h1 data-aos="fade-left" className="title md:text-7xl text-6xl font-bold">HI! I'M <span
                    className={"name"}>Axel Rojas</span></h1>
                <p data-aos="fade-right" className="description max-w-2xl">
                    Junior Mobile App Developer specialized in <span className="text-blue-200">React Native</span> and
                    <span className="text-green-100"> Django</span>. <br/>I’m looking for new opportunities to keep
                    growing.
                </p>
                <div>
                    <button className={"download-cv-button shadow-2xl flex flex-row justify-center p-3 gap-2"}
                            onClick={handleCVDownload}>
                        <img src={file} alt={"file-logo"} className={"download-cv-logo"}/>
                        <p className={""}>Download CV</p>
                    </button>
                </div>
                <div className={"flex flex-row mt-2 gap-4"}>
                    <a href={"https://github.com/rinndp"}><img className={"button shadow-2xl w-10"} src={github}
                                                               alt={"github-logo"}/></a>
                    <a href={"https://www.linkedin.com/in/axelrojas3/"}><img className={"button shadow-2xl w-10"} src={linkdin}
                                                                             alt={"linkedin-logo"}/></a>
                </div>
            </div>
        </>
    )
}

export default Home;