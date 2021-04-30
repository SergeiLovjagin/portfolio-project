import React from "react";
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Button} from "../common/buttons/Button";

export const Main = () => {
    return (
        <div className={style.mainBlock} id={'MAIN'}>
            <div className={`${style.pageTransform}`} id={'pageTransform'}>

            </div>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.greeting} id={'greeting'}>
                    <h2>I am Sergei Lovjagin</h2>
                    <p>Frontend</p>
                    <p>Developer</p>
                    <Button title={'contact me'}/>
                </div>
                <div className={style.photo}>
                </div>
            </div>
            <div className={style.whiteSvg}>
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
                </svg>
            </div>

        </div>
    )
}