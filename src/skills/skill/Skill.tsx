import React from "react";
import style from './Skill.module.scss'
//@ts-ignore
import Fade from 'react-reveal/Fade';

type SkillProps = {
    title: string
    description: string
    style: { backgroundImage: string; }
}
export const Skill = (props: SkillProps) => {
    return (
        <>
            <div className={style.skill}>
                <Fade bottom>
                    <div className={style.iconBox}>
                        <div className={style.circle}>
                            <div className={style.dot}/>
                        </div>
                        <div className={style.image} style={props.style}/>
                    </div>
                    <h3>{props.title}</h3>
                    <p className={style.description}>{props.description} </p>
                </Fade>
            </div>
        </>
    )
}