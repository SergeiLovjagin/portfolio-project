import React, {useEffect, useRef, useState} from "react";
import style from './Nav.module.css'
import main from './../common/images/main.png'
import aboutMe from './../common/images/aboutMe.png'
import skills from './../common/images/skills.png'
import projects from './../common/images/projects.png'
import contact from './../common/images/contact.png'
import {NavHashLink} from "react-router-hash-link";

export const Nav = () => {
    const [open, setOpen] = useState(false)
    const pages = [
        {className: main, id: 'main'},
        {className: aboutMe, id: 'about'},
        {className: skills, id: 'skills'},
        {className: projects, id: 'projects'},
        {className: contact, id: 'contact'},
    ]
    let domNode = useRef<any>()
    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (domNode) {
                if (!domNode.current.contains(event.target)) {
                    setOpen(false)
                }
            }
        })
    })
    return (
        <div className={style.navbar} ref={domNode}>
            <button className={style.button} onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={` ${open ? style.navBlockOpen : ''} ${style.navBlock}`}>
                {/*<button onClick={state => setOpen(!state)}>X</button>*/}
                <ul className={style.navPages}>
                    {pages.map((el, index) =>
                        <li key={index} className={style.imgList}>
                            <NavHashLink smooth to={`#${el.id}`}>
                                <img className={style.img} src={el.className} alt={''}/>
                            </NavHashLink>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}