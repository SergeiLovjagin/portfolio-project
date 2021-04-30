import React from "react";
import style from "./AboutMe.module.css"
import styleContainer from './../common/styles/Container.module.css'
import {Button} from "../common/buttons/Button";
import {customAnimation} from "../common/animation/customAnimation";

type AboutMeProps = {
    addToRefs: () => void
}

const AboutMe = ({addToRefs}: AboutMeProps) => {

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
            <div className={style.whiteSvg}>
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
                </svg>
            </div>
        </div>
    )
}


const AboutMeAnimation = customAnimation(AboutMe)

export default AboutMeAnimation