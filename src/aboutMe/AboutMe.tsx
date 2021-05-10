import React from "react";
import style from "./AboutMe.module.scss"
import {Button} from "../common/buttons/Button";
import {BottomScg} from "../common/bottomSvg/BottomSvg";
import Particles from "react-particles-js";
import {particlesOpt} from "../common/animation/particleOpt";
// @ts-ignore
import Fade from "react-reveal/Fade";
//@ts-ignore
import Tilt from 'react-tilt'

export const AboutMe = () => {

    const svgBackColor = {
        fill: '#202020'
    }

    return (
        <div className={style.aboutMeBlock} id={'ABOUT'}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={style.centerLightBorder}/>
            <div className={style.container}>
                <Tilt className="Tilt" options={{max: 3}} speed={10} perspective={100} reset={true}>
                    <div className={style.imageBlock}>
                        <div className={style.imageBorder}/>
                        <div className={style.aboutImage}/>
                    </div>
                </Tilt>

                <Fade bottom cascade>
                    <div className={`${style.aboutContent}`}>
                        <h2>About Me</h2>
                        <p>A highly motivated Front-End Developer focused attitude to creating SPA, using React(JS/TS), Redux. Owning a business gave me time-management
                            experience, the ability to build long-term partnerships and prioritize correctly.</p>
                        <p>Owning a business gave me time-management experience, the ability to build long-term partnerships and prioritize correctly.
                            I would like to find project work and full-time employment in a company with a modern approach to development and a collaborative team. </p>
                        <Button title={'download resume'}/>
                    </div>
                </Fade>
            </div>
            <BottomScg style={svgBackColor}/>
        </div>
    )
}