import React from "react";
import style from "./Footer.module.css"
import styleContainer from "./../common/styles/Container.module.css"

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h4 className={style.title}>Sergei Lovjagin</h4>
                <div className={style.socialMedia}>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
                <span> © Copyright since 2021 </span>
            </div>
        </div>
    )
}