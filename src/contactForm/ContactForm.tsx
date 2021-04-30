import React, {useEffect, useRef} from "react";
import style from "./ContactForm.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';


export const ContactForm = () => {
    console.log('contact')
    const content = useRef<HTMLDivElement>(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(
            content.current, {
                opacity: 0,
                x: -400,
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: content.current!,
                    start: 'top center+=200',
                    toggleActions: 'play none none reverse'
                }
            });
    },[]);


    return (
        <div className={style.contactForm} id={'CONTACTS'}>
            <div ref={content} className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Quick Contact Form</h2>
                <form className={style.form}>
                    <input className={style.name} placeholder='Name' id='id'/>
                    <input className={style.lastName} placeholder='Lastname' id='lastname'/>
                    <input className={style.email} placeholder='Email' id='email'/>
                    <textarea className={style.textarea} placeholder='Message' id='message'>

                    </textarea>
                    <button className={style.submit} type={"submit"}>Submit</button>
                </form>
            </div>
            <div className={style.whiteSvg}>
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
                </svg>
            </div>
        </div>
    )
}
