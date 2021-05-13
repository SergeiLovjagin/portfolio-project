import React from "react";
import style from "./ContactForm.module.scss"
import {BottomScg} from "../common/bottomSvg/BottomSvg";
// @ts-ignore
import Slide from 'react-reveal/Slide';

export const ContactForm = () => {
    const svgBackColor = {
        fill: '#2a2a2a'
    };
    return (
        <div className={style.contactForm} id={'CONTACTS'}>
            <Slide left>
                <div className={style.container}>
                    <h2>Contact Form</h2>
                    <form className={style.form}>
                        <input placeholder='Name' id='id'/>
                        <input placeholder='Surname' id='lastname'/>
                        <input placeholder='Email' id='email'/>
                        <textarea placeholder='Message' id='message'/>
                        <button className={style.submitBtn} type={"submit"}>Submit</button>
                    </form>
                </div>
            </Slide>
            <BottomScg style={svgBackColor}/>
        </div>
    )
}
