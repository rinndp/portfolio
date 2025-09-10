import reactLogo from "../../../assets/react.svg";
import viteLogo from "../../../assets/vitejs-logo.png";
import tailwindLogo from "../../../assets/tailwind-logo.png";
import './StylesHeader.css';


const HeaderPortfolio = () => {
    return (
        <div className={"header-container grid text-center items-center justify-center px-60 gap-4"}>
            <div className={"techIconsContainer"}>
                <img src={reactLogo} className={"logo react"} alt="react-logo" />
                <img src={viteLogo} className={"logo vite "} alt="vite-log"/>
                <img src={tailwindLogo} className={"logo react h-7 mt-1"} alt="tailwind-logo"/>
            </div>
            <h1 className={"text-7xl font-bold"}>Axel Rojas</h1>
            <h1 className={"text-4xl"}>Junior Mobile Application Developer</h1>
            <p className={"description px-35"}>Specialized in <span className={"text-blue-200"}>React Native</span> and
                <span className={"text-green-100"}> Django</span>, with experience in building several mobile applications.
                I’m looking for new opportunities to
                keep growing and contribute my skills to the team.</p>
        </div>
    )
}

export default HeaderPortfolio;