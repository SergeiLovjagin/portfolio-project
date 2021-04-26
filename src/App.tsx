import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {ContactForm} from './contactForm/ContactForm';
import {Footer} from "./footer/Footer";
import {AboutMe} from './aboutMe/AboutMe';
import {HashRouter, Route} from "react-router-dom";

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
                        <Header/>
                        <Main/>
                        <AboutMe/>
                        <Skills/>
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
