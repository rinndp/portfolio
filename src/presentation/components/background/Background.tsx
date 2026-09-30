import "./StyleBackground.css";
import { useEffect } from "react";

// Fixed site-wide backdrop (grid floor, glowing orbs, cursor spotlight).
// Also publishes the cursor position as --mx / --my on <html> for any parallax effect.
const Background = () => {
    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        const root = document.documentElement;
        let frame = 0;
        let x = 0.5;
        let y = 0.5;

        const apply = () => {
            frame = 0;
            root.style.setProperty("--mx", x.toFixed(3));
            root.style.setProperty("--my", y.toFixed(3));
        };
        const onMove = (e: PointerEvent) => {
            x = e.clientX / window.innerWidth;
            y = e.clientY / window.innerHeight;
            if (!frame) frame = requestAnimationFrame(apply);
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("pointermove", onMove);
        };
    }, []);

    return (
        <div className="site-bg" aria-hidden="true">
            <div className="site-bg-grid"/>
            <div className="site-bg-orb site-bg-orb--1"/>
            <div className="site-bg-orb site-bg-orb--2"/>
            <div className="site-bg-orb site-bg-orb--3"/>
            <div className="site-bg-spotlight"/>
            <div className="site-bg-vignette"/>
        </div>
    )
}

export default Background;
