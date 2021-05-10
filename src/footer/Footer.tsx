import React from "react";
import style from "./Footer.module.scss"


export const Footer = () => {
    const links = [
        {className: style.linkedin, href: 'https://www.linkedin.com/in/sergei-lovjagin-b5b1111b1/'},
        {className: style.github, href: 'https://github.com/SergeiLovjagin'},
    ]

    return (
        <div className={style.footer}>
            <div className={style.container}>
                <ul className={style.socialLinks}>
                    {links.map((el, index) =>
                        <li key={index} className={el.className}>
                            <a rel="noreferrer" href={el.href} target="_blank"> </a>
                        </li>)}
                </ul>
                <span> © Copyright since 2021 </span>
            </div>
        </div>
    )
}