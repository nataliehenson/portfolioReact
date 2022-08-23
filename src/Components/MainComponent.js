import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Routes, Route } from "react-router-dom";
import TechStack from "./TechStack";

//import { Switch, Route, Routes } from "react-router-dom";

function Main() {
    return (
        <>
            <Header />
            <Home />
            <TechStack />
            <About />

            <Projects />
            <Contact />
            {/* <Routes>
                <Route path="#projects" element={<Projects />} />
                <Route path="#contact" element={<Contact />} />
            </Routes> */}
            <Footer />
        </>
    );
}

export default Main;
