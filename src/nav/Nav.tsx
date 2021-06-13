import React, {useEffect, useRef, useState} from "react";
import style from './Nav.module.scss'
import main from './../common/images/main.png'
import about from './../common/images/aboutMe.png'
import skills from './../common/images/skills.png'
import projects from './../common/images/projects.png'
import contact from './../common/images/contact.png'
// @ts-ignore
import {Link} from "react-scroll";


export const Nav = () => {
    const [open, setOpen] = useState(false)
    const pages = [
        {style: {backgroundImage: `url(${main})`}, id: 'MAIN'},
        {style: {backgroundImage: `url(${about})`}, id: 'ABOUT'},
        {style: {backgroundImage: `url(${skills})`}, id: 'SKILLS'},
        {style: {backgroundImage: `url(${projects})`}, id: 'PROJECTS'},
        {style: {backgroundImage: `url(${contact})`}, id: 'CONTACTS'},
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
        if (screen < 500) {
            setOpen(!open)
        }
    }

    return (
        <div className={style.header}>
            <div className={style.navbar} ref={domNode}>
                <button className={style.menuButton} onClick={() => setOpen(!open)}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <div className={` ${open ? style.menuButtonOpen : ''} ${style.navBlock}`}>
                    <button className={style.menuButtonClose} onClick={state => setOpen(!state)}>X</button>
                    <ul>
                        {pages.map((el, index) =>
                            <li onClick={closeNav} key={index} className={style.menuImageBox}>
                                <Link
                                    onClick={closeNav}
                                    key={index}
                                    data-foo={el.id}
                                    className={style.menuImage}
                                    to={el.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-25}
                                    style={el.style}
                                    duration={500}
                                >
                                    {/*<img className={style.currentImage} src={el.className} alt={''}/>*/}
                                </Link>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}