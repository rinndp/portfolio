import './App.css'
import Home from "./presentation/sections/home/Home.tsx";
import AboutMe from "./presentation/sections/about-me/AboutMe.tsx";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Projects from "./presentation/sections/projects/Projects.tsx";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./presentation/views/project-details/ProjectDetails.tsx";
import SideTabBar from "./presentation/components/side-tab-bar/SideTabBar.tsx";
import Contact from "./presentation/sections/contact/Contact.tsx";

function App() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false, mirror: true });
        window.addEventListener('resize', () => AOS.refresh());
        return () => window.removeEventListener('resize', () => AOS.refresh());
    }, []);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <SideTabBar />
                        <Home />
                        <AboutMe />
                        <Projects />
                        <Contact />
                    </>
                }
            />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
    )
}

export default App
