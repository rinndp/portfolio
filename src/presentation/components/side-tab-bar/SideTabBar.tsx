import home from "../../../assets/home.png";
import user from "../../../assets/user.png";
import pen from "../../../assets/pen.png";
import contact from "../../../assets/email-logo.png";
import "./StyleSideTabBar.css"
import { useState, useEffect } from "react";

const SideTabBar = () => {
    const [activeTab, setActiveTab] = useState("home");

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

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -80% 0px", 
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        tabs.forEach((tab) => {
            const element = document.getElementById(tab.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div data-aos="fade-right"
                 className={"side-tab-bar justify-center z-20 fixed content-center w-screen flex flex-row h-14 gap-20"}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`button w-7 transition-all duration-300 ${
                            activeTab === tab.id ? "opacity-100 scale-110" : "opacity-50"
                        }`}
                        onClick={() => {
                        const section = document.getElementById(tab.id)
                        if (section)
                            section.scrollIntoView({behavior: "smooth", block: "start"});
                    }}>
                        <img src={tab.src} className={"text-blue-100"} alt={`${tab.id}-button`}/>
                    </button>
                ))}
            </div>
        </>
    )
}

export default SideTabBar;