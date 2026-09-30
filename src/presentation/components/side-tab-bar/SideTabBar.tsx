import home from "../../../assets/home.png";
import user from "../../../assets/user.png";
import pen from "../../../assets/pen.png";
import contact from "../../../assets/email-logo.png";
import "./StyleSideTabBar.css"
import { useState, useEffect, useRef, type CSSProperties } from "react";

const tabs = [
    {
        src: home,
        id: "home",
        label: "Home",
    },
    {
        src: user,
        id: "about-me",
        label: "About me",
    },
    {
        src: pen,
        id: "projects",
        label: "Projects",
    },
    {
        src: contact,
        id: "contact",
        label: "Contact",
    },
]

const SideTabBar = () => {
    const [activeTab, setActiveTab] = useState("home");
    const navRef = useRef<HTMLElement>(null);

    // Active section + page progress. The hero is pinned and very tall, so we use
    // scroll position instead of an IntersectionObserver on zero-height anchors.
    useEffect(() => {
        let frame = 0;

        const update = () => {
            frame = 0;
            const line = window.innerHeight * 0.35;
            let current = tabs[0].id;
            for (const tab of tabs) {
                const element = document.getElementById(tab.id);
                if (element && element.getBoundingClientRect().top <= line)
                    current = tab.id;
            }
            // At the very bottom the last section may never reach the line
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollable > 0 && window.scrollY >= scrollable - 4)
                current = tabs[tabs.length - 1].id;
            setActiveTab(current);

            const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
            navRef.current?.style.setProperty("--progress", progress.toFixed(4));
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    const activeIndex = tabs.findIndex(tab => tab.id === activeTab);

    return (
        <nav ref={navRef} className="side-tab-bar" aria-label="Sections"
             style={{ "--index": activeIndex } as CSSProperties}>
            <span className="stb-progress" aria-hidden="true"/>
            <span className="stb-indicator" aria-hidden="true"/>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    className={`stb-item ${activeTab === tab.id ? "stb-item--active" : ""}`}
                    aria-label={tab.label}
                    aria-current={activeTab === tab.id ? "true" : undefined}
                    onClick={() => {
                        const section = document.getElementById(tab.id)
                        if (section)
                            section.scrollIntoView({behavior: "smooth", block: "start"});
                    }}>
                    <img src={tab.src} alt=""/>
                    <span className="stb-label">{tab.label}</span>
                </button>
            ))}
        </nav>
    )
}

export default SideTabBar;
