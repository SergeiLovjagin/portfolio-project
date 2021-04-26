import React from "react";
import style from "./Footer.module.css"
import styleContainer from "./../common/styles/Container.module.css"

export const Footer = () => {
    const links = [
        {className: style.linkedin, href: 'https://www.linkedin.com/in/sergei-lovjagin-b5b1111b1/'},
        {className: style.github, href: 'https://github.com/SergeiLovjagin'}
    ]

    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <ul className={style.socialMedia}>
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