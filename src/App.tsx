import './App.css'
import SideTabBar from "./presentation/components/side-tab-bar/SideTabBar.tsx";
import HeaderPortfolio from "./presentation/sections/home/Home.tsx";
import AboutMe from "./presentation/sections/about-me/AboutMe.tsx";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Projects from "./presentation/sections/projects/Projects.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectDetails from "./presentation/views/project-details/ProjectDetails.tsx";


function App() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false, mirror: true });
        window.addEventListener('resize', () => AOS.refresh());

        return () => window.removeEventListener('resize', () => AOS.refresh());
    }, []);
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/"
                    element={
                    <>
                        <SideTabBar/>
                        <HeaderPortfolio/>
                        <AboutMe/>
                        <Projects/>
                    </>
                   }/>
            <Route path={"/projects/:slug"} element={<ProjectDetails/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
