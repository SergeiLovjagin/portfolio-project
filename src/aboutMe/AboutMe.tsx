import React from "react";
import style from "./AboutMe.module.css"
import styleContainer from './../common/styles/Container.module.css'
import {Button} from "../common/buttons/Button";
import {customAnimation} from "../common/animation/customAnimation";
import {BottomScg} from "../common/bottomSvg/BottomSvg";

type AboutMeProps = {
    addToRefs: () => void
}

const AboutMe = ({addToRefs}: AboutMeProps) => {

    const svgBackColor = {
        fill: '#202020'
    };


    return (
        <div className={style.aboutMe} id={'ABOUT'}>
            <div className={style.border}/>
            <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                {/*<div className={style.aboutItem}>*/}
                    <div className={style.imageBlock}>
                        <div className={style.imageBorder}/>
                        <div className={style.aboutImage}/>
                    </div>

                    <div className={`${style.aboutContent}`}>
                        <h2 ref={addToRefs}>About Me</h2>
                        <p ref={addToRefs}>A highly-motivated Junior Web Developer is looking for a position of Front-end Web Developer.</p>
                        <p ref={addToRefs}>Owning a business gave me time-management experience, the ability to build long-term partnerships and prioritize correctly. </p>
                        <Button title={'download resume'}/>
                    </div>
                {/*</div>*/}
            </div>
            <BottomScg style={svgBackColor}/>
        </div>
    )
}


const AboutMeAnimation = customAnimation(AboutMe)

export default AboutMeAnimation