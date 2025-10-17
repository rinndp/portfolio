import home from "../../../assets/home.png";
import user from "../../../assets/user.png";
import pen from "../../../assets/pen.png";
import contact from "../../../assets/email-logo.png";
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
        {
            src: contact,
            id: "contact",
        },
    ]
    return (
        <>
            <div data-aos="fade-right"
                 className={"side-tab-bar justify-center z-20 fixed content-center w-screen flex flex-row h-14 gap-20"}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={"button w-7"}
                        onClick={() => {
                        const section = document.getElementById(tab.id)
                        if (section)
                            section.scrollIntoView({behavior: "smooth", block: "start"});
                    }}>
                        <img src={tab.src} className={"text-blue-100"} alt="home-button"/>
                    </button>
                ))}
            </div>
        </>
    )
}

export default SideTabBar;

