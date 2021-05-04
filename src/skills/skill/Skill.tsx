import React from "react";
import style from './Skill.module.css'

type SkillProps = {
    title: string
    description: string
    addToRefs: () => void
    style: { backgroundImage: string; }
}
export const Skill = (props: SkillProps) => {
    return (
        <>
            <div ref={props.addToRefs} className={style.skill}>
                <div className={style.iconBox}>
                    <div className={style.circle}>
                        <div className={style.dot}/>
                    </div>
                    <div className={style.image} style={props.style}/>
                </div>
                <h2>{props.title}</h2>
                <p className={style.description}>{props.description} </p>
            </div>
        </>
    )
}