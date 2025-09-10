import home from "../../../assets/home.png";
import "./StyleSideTabBar.css"
const SideTabBar = () => {
    const tabs = [
        {
            src: home,
        },
        {
            src: home,
        },
        {
            src: home,
        },
    ]
    return (
        <div className={"container justify-center sticky z-20 content-center h-screen grid w-14 top-0 gap-40"}>
            {tabs.map (tab => (
                <button>
                    <img src={tab.src} className={"button text-blue-100"} alt="home-button"/>
                </button>
            ))}
        </div>
    )
}

export default SideTabBar;

