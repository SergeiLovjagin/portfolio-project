import React from "react";
import style from "./ContactForm.module.css"
import styleContainer from "./../common/styles/Container.module.css"

export const ContactForm = () => {
    return (
        <div className={style.contactForm} id={'contact'}>
            <div className={`${styleContainer.container} ${style.container}`}>
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