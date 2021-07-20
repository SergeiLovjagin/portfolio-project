import React, {useState} from "react";
import style from "./ContactForm.module.scss"
import {BottomScg} from "../common/bottomSvg/BottomSvg";
// @ts-ignore
import Slide from 'react-reveal/Slide';
// @ts-ignore
import {useAlert} from "react-alert";
import axios from "axios";


export const ContactForm = React.memo(() => {
    const [disableBtn, setDisableBtn] = useState(false)

    const alert = useAlert();
    const svgBackColor = {
        fill: '#2a2a2a'
    };

    function validate(email: string) {
        let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!emailRegex.test(email)) {
            return false;
        }
        return true;
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        setDisableBtn(true)
        const {name, lastname, email, message} = e.currentTarget.elements
        if (validate(email.value)) {
            const response = axios.post('https://portfoliosmtp.herokuapp.com/sendEmail', {
                name: name.value,
                lastname: lastname.value,
                email: email.value,
                message: message.value,
            })
            response.then(() => alert.show("Email sent successfully"))
            response.catch(() => alert.error('Server error'))
            response.finally(() => {
                e.target.reset()
                setDisableBtn(false)
            })
        } else {
            alert.error('Incorrect email')
            e.target.reset()
        }
    }

    return (
        <div className={style.contactForm} id={'CONTACTS'}>
            <Slide left>
                <div className={style.container}>
                    <h2>Contact Form</h2>
                    <form className={style.form} id='contact-form' onSubmit={handleSubmit}>
                        <input required placeholder='Name' name='name'/>
                        <input required placeholder='Surname' name='lastname'/>
                        <input required placeholder='Email' name='email'/>
                        <textarea required placeholder='Message' name='message'/>
                        <button className={style.submitBtn} disabled={disableBtn}>Submit</button>
                    </form>
                </div>
            </Slide>
            <BottomScg style={svgBackColor}/>
        </div>
    )
})
