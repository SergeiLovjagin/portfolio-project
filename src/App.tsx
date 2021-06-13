import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Projects} from "./projects/Projects";
import {ContactForm} from './contactForm/ContactForm';
import {Footer} from "./footer/Footer";
import {Nav} from "./nav/Nav";
import {Skills} from './skills/Skills';
import {AboutMe} from "./aboutMe/AboutMe";
import {positions, Provider as AlertProvider} from 'react-alert'
// @ts-ignore
import AlertTemplate from 'react-alert-template-basic'

function App() {

    useEffect(() => {
        const style = document.getElementById('__react-alert__')
        if (style) {
            style.style.position = 'fixed';
            style.style.zIndex = '999';
        }
    }, [])

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
            <AlertProvider template={AlertTemplate} position={positions.BOTTOM_CENTER} timeout={5000}>
                <ContactForm/>
            </AlertProvider>
            <Footer/>
        </div>
    );
}

export default App;
