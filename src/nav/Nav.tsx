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
        {className: main, id: 'MAIN'},
        {className: aboutMe, id: 'ABOUT'},
        {className: skills, id: 'SKILLS'},
        {className: projects, id: 'PROJECTS'},
        {className: contact, id: 'CONTACTS'},
    ]
    let domNode: React.MutableRefObject<any>;
    domNode = useRef<any>();
    useEffect(() => {
        document.addEventListener('click', (event) => {
            if (!domNode.current.contains(event.target)) {
                setOpen(false)
            }
        })
    })
    const closeNav = () => {
        const screen = window.screen.width
        if(screen < 500) {
            setOpen(!open)
        }
    }

    return (
        <div className={style.header}>
            <div className={style.navbar} ref={domNode}>
                <button className={style.button} onClick={() => setOpen(!open)}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <div className={` ${open ? style.navBlockOpen : ''} ${style.navBlock}`}>
                    <button className={style.closeButton} onClick={state => setOpen(!state)}>X</button>
                    <ul className={style.navPages}>
                        {pages.map((el, index) =>
                            <li onClick={closeNav} key={index} className={style.imgList}>
                                <NavHashLink smooth to={`#${el.id}`} data-foo={el.id}>
                                    <img className={style.img} src={el.className} alt={''}/>
                                </NavHashLink>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}