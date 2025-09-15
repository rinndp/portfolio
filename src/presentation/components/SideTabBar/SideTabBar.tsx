import home from "../../../assets/home.png";
import "./StyleSideTabBar.css"

const SideTabBar = () => {
    const tabs = [
        {
            src: home,
            id: "home",
        },
        {
            src: home,
            id: "about-me",
        },
        {
            src: home,
            id: "home",
        },
    ]
    return (
        <>
            <div data-aos="fade-right" className={"container h-screen justify-center sticky z-20 content-center h-screen grid w-14 top-0 gap-40"}>
            {tabs.map (tab => (
                <button onClick={() => {
                    const section = document.getElementById(tab.id)
                    if (section)
                        section.scrollIntoView({ behavior: "smooth"});
                }}>
                    <img src={tab.src} className={"button text-blue-100"} alt="home-button"/>
                </button>
            ))}
            </div>
        </>
    )
}

export default SideTabBar;

