import reactLogo from "../../../assets/react.svg";
import viteLogo from "../../../assets/vitejs-logo.png";
import tailwindLogo from "../../../assets/tailwind-logo.png";
import './StylesHeader.css';

const HeaderPortfolio = () => {
    return (
        <div data-aos="zoom-in" id={"home"} className="header-container h-screen flex flex-col items-center justify-center px-10 text-center gap-4">
            <div className="flex flex-row gap-4 justify-center items-center">
                <img src={reactLogo} className="logo react h-10" alt="react-logo"/>
                <img src={viteLogo} className="logo vite h-10" alt="vite-logo"/>
                <img src={tailwindLogo} className="logo tailwind h-7 mt-1" alt="tailwind-logo"/>
            </div>
            <h1 className="title text-7xl font-bold">HI! I'M <span className={"name"}>Axel Rojas</span></h1>
            <p className="description max-w-2xl">
                Specialized in <span className="text-blue-200">React Native</span> and
                <span className="text-green-100"> Django</span>, with experience in building several mobile
                applications.
                I’m looking for new opportunities to keep growing.
            </p>
        </div>
    )
}

export default HeaderPortfolio;