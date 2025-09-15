import './App.css'
import SideTabBar from "./presentation/components/SideTabBar/SideTabBar.tsx";
import HeaderPortfolio from "./presentation/sections/header/Header.tsx";
import AboutMe from "./presentation/sections/about-me/AboutMe.tsx";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false, mirror: true });
        window.addEventListener('resize', () => AOS.refresh());

        return () => window.removeEventListener('resize', () => AOS.refresh());
    }, []);
  return (
    <>
        <SideTabBar/>
        <HeaderPortfolio/>
        <AboutMe/>
    </>
  )
}

export default App
