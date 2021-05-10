import React from "react";
import style from './Main.module.scss'
import {Button} from "../common/buttons/Button";
import {BottomScg} from "../common/bottomSvg/BottomSvg";
import photo from "./../common/images/Untitled.jpg"
export const Main = () => {
    const svgBackColor = {
        fill: '#2a2a2a'
    };

    return (
        <div className={style.mainBlock} id={'MAIN'}>
            <div className={style.pageTransform}/>
            <div className={style.container}>
                <div className={style.greeting} id={'greeting'}>
                    <h4>I am Sergei Lovjagin</h4>
                    <h2>Frontend</h2>
                    <h2>Developer</h2>
                    <Button title={'contact me'}/>
                </div>
                <div className={style.sliderPhoto} >
                    <img src={photo} className={style.photo} alt='photo'/>
                </div>
            </div>
            <BottomScg style={svgBackColor} />

        </div>
    )
}