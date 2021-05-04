import React from "react";
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Button} from "../common/buttons/Button";
import {BottomScg} from "../common/bottomSvg/BottomSvg";

export const Main = () => {
    const svgBackColor = {
        fill: '#2a2a2a'
    };
    return (
        <div className={style.mainBlock} id={'MAIN'}>
            <div className={`${style.pageTransform}`} id={'pageTransform'}>

            </div>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.greeting} id={'greeting'}>
                    <h4>I am Sergei Lovjagin</h4>
                    <h2>Frontend</h2>
                    <h2>Developer</h2>
                    <Button title={'contact me'}/>
                </div>
                <div className={style.photo}>
                </div>
            </div>
            <BottomScg style={svgBackColor} />

        </div>
    )
}