import React from "react";
import style from './Main.module.scss'
import {BottomScg} from "../common/bottomSvg/BottomSvg";
import photo from "./../common/images/Untitled.jpg";
// @ts-ignore
import {Link} from "react-scroll";

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
                    <Link to={'CONTACTS'} style={{cursor: 'pointer'}}
                          smooth={true}
                    >Contact me
                    </Link>
                </div>
                <div className={style.sliderPhoto}>
                    <img src={photo} className={style.photo} alt='photoImage'/>
                </div>
            </div>
            <BottomScg style={svgBackColor}/>

        </div>
    )
}