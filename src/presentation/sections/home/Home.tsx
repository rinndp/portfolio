import reactLogo from "../../../assets/react.svg";
import viteLogo from "../../../assets/vitejs-logo.png";
import tailwindLogo from "../../../assets/tailwind-logo.png";
import './StyleHome.css';
import file from "../../../assets/file.png";
import github from "../../../assets/github-logo.png";
import linkdin from "../../../assets/linkdin-logo.png";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const roles = ["React", "Python", "TypeScript", "React Native"];

const orbitLogos = [
    { src: reactLogo, alt: "react-logo", className: "orbit-logo--react" },
    { src: viteLogo, alt: "vite-logo", className: "orbit-logo--vite" },
    { src: tailwindLogo, alt: "tailwind-logo", className: "orbit-logo--tailwind" },
];

const SplitLetters = ({ text, delay }: { text: string, delay: number }) => (
    <>
        {text.split("").map((letter, i) => (
            <span key={i} className="hero-letter" style={{ "--d": `${delay + i * 0.06}s` } as CSSProperties}>
                {letter}
            </span>
        ))}
    </>
)

const Home = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [roleIndex, setRoleIndex] = useState(0);

    const handleCVDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv-axel-rojas-en-s.pdf";
        link.download = "cv-axel-rojas-en-s.pdf";
        link.click();
    }

    // Scroll progress of the pinned hero (0 → 1) exposed as --p, no re-renders
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        let frame = 0;

        const update = () => {
            frame = 0;
            const rect = section.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
            section.style.setProperty("--p", progress.toFixed(4));
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

    useEffect(() => {
        const interval = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2400);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" ref={sectionRef} className="hero">
            <div className="hero-stage">
                <div className="hero-orbit" aria-hidden="true">
                    <div className="hero-orbit-ring"/>
                    {orbitLogos.map((logo, i) => (
                        <div key={logo.alt} className="orbit-slot" style={{ "--i": i } as CSSProperties}>
                            <div className={`orbit-logo ${logo.className}`}>
                                <img src={logo.src} alt={logo.alt}/>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hero-content">
                    <span className="hero-badge">
                        <span className="hero-badge-dot"/>
                        Open to new opportunities
                    </span>

                    <h1 className="hero-title">
                        <span className="hero-hi">Hi! I'm</span>
                        <span className="hero-name hero-name--first">
                            <SplitLetters text="AXEL" delay={0.35}/>
                        </span>
                        <span className="hero-name hero-name--last">
                            <SplitLetters text="ROJAS" delay={0.6}/>
                        </span>
                    </h1>

                    <p className="hero-role">
                        Software Engineer specialized in
                        <span className="hero-role-word-wrapper">
                            <span key={roleIndex} className="hero-role-word">{roles[roleIndex]}</span>
                        </span>
                    </p>

                    <div className="hero-actions">
                        <button className="hero-cv-button" onClick={handleCVDownload}>
                            <img src={file} alt="file-logo"/>
                            <span>Download CV</span>
                        </button>
                        <a className="hero-social" href="https://github.com/rinndp" aria-label="GitHub">
                            <img src={github} alt="github-logo"/>
                        </a>
                        <a className="hero-social" href="https://www.linkedin.com/in/axelrojas3/" aria-label="LinkedIn">
                            <img src={linkdin} alt="linkedin-logo"/>
                        </a>
                    </div>

                    <div className="hero-scroll-hint" aria-hidden="true">
                        <span className="hero-mouse"><span className="hero-mouse-wheel"/></span>
                        <span>Scroll</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
