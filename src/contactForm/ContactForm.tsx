import React, {useEffect, useRef} from "react";
import style from "./ContactForm.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {BottomScg} from "../common/bottomSvg/BottomSvg";


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

    const svgBackColor = {
        fill: '#2a2a2a'
    };
    return (
        <div className={style.contactForm} id={'CONTACTS'}>
            <div ref={content} className={`${styleContainer.container} ${style.container}`}>
                <h2>Quick Contact Form</h2>
                <form className={style.form}>
                    <input className={style.name} placeholder='Name' id='id'/>
                    <input className={style.lastName} placeholder='Lastname' id='lastname'/>
                    <input className={style.email} placeholder='Email' id='email'/>
                    <textarea className={style.textarea} placeholder='Message' id='message'>

                    </textarea>
                    <button className={style.submit} type={"submit"}>Submit</button>
                </form>
            </div>
            <BottomScg style={svgBackColor}/>
        </div>
    )
}
