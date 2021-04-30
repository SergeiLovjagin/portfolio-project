import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Projects} from "./projects/Projects";
import {ContactForm} from './contactForm/ContactForm';
import {Footer} from "./footer/Footer";
// import {AboutMe} from './aboutMe/AboutMe';
import {HashRouter, Route} from "react-router-dom";
import {Nav} from "./nav/Nav";
import SkillsWithAnimation from './skills/Skills';
import AboutMeAnimation from "./aboutMe/AboutMe";


function App() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 500)
    }, [])
    return (
        <HashRouter>
            <div className={'br-app'} id='project'>
                <Route exact path={'/'} render={() => (
                    <>
                        <Nav/>
                        <Main/>
                        <AboutMeAnimation/>
                        <SkillsWithAnimation/>
                        <Projects/>
                        <ContactForm/>
                        <Footer/>
                    </>
                )}/>
            </div>
        </HashRouter>
    );
}

export default App;
