import home from "../../../assets/home.png";
import user from "../../../assets/user.png";
import pen from "../../../assets/pen.png";
import "./StyleSideTabBar.css"

const SideTabBar = () => {
    const tabs = [
        {
            src: home,
            id: "home",
        },
        {
            src: user,
            id: "about-me",
        },
        {
            src: pen,
            id: "projects",
        },
    ]
    return (
        <>
            <div data-aos="fade-right"
                 className={"side-tab-bar justify-center z-20 p-4 fixed content-center w-screen flex flex-row h-14 top-0 gap-20 md:h-screen md:fixed md:grid md:w-14 md:top-0 md:gap-40"}>
                {tabs.map(tab => (
                    <button onClick={() => {
                        const section = document.getElementById(tab.id)
                        if (section)
                            section.scrollIntoView({behavior: "smooth", block: "start"});
                    }}>
                        <img src={tab.src} className={"button text-blue-100"} alt="home-button"/>
                    </button>
                ))}
            </div>
        </>
    )
}

export default SideTabBar;

