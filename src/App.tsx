import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Projects} from "./projects/Projects";
import {ContactForm} from './contactForm/ContactForm';
import {Footer} from "./footer/Footer";
import {Nav} from "./nav/Nav";
import {Skills} from './skills/Skills';
import {AboutMe} from "./aboutMe/AboutMe";


function App() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 500)
    }, [])
    return (
        <div className={'app'} id='project'>
            <Nav/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
