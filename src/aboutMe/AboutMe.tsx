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
import FileSaver from "file-saver";

export const AboutMe = () => {

    const svgBackColor = {
        fill: '#202020'
    }
    const onClickHandler = () => {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + "/resource/cv.pdf",
            "Sergei_Lovjagin_CV");
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
                        <ul>
                            <li>
                                Hard working and dedicated front-end developer currently based in Tartu, Estonia
                            </li>
                            <li>
                                Specialised in creating SPA using React (JS/TS), Redux
                            </li>
                            <li>
                                Ready to consider project work and full-time employment
                            </li>
                            <li>
                                Improving my skills and expanding them with new technologies
                            </li>
                        </ul>
                        {/*<p>A highly motivated Front-End Developer focused attitude to creating SPA, using React(JS/TS), Redux. Owning a business gave me time-management*/}
                        {/*    experience, the ability to build long-term partnerships and prioritize correctly.</p>*/}
                        {/*<p>Owning a business gave me time-management experience, the ability to build long-term partnerships and prioritize correctly.*/}
                        {/*    I would like to find project work and full-time employment in a company with a modern approach to development and a collaborative team. </p>*/}
                        <Button title={'download cv'} onClick={onClickHandler}/>
                    </div>
                </Fade>
            </div>
            <BottomScg style={svgBackColor}/>
        </div>
    )
}