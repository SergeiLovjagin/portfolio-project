import React from "react";
import style from "./ContactForm.module.css"
import styleContainer from "./../common/styles/Container.module.css"

export const ContactForm = () => {
    return (
        <div className={style.contactForm}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.form}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <button>Submit</button>
            </div>
        </div>
    )
}