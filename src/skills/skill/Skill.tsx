import React from "react";
import style from './Skill.module.css'

type SkillProps = {
    skills: {
        title: string
        description: string
    }[],
    addToRefs: () => void
}
export const Skill = (props: SkillProps) => {


    return (
        <>
            {props.skills.map((skill, index) =>
                <div ref={props.addToRefs} key={index} className={style.skill}>
                    <div className={style.icon}>
                        <div className={style.circle}>
                            <div className={style.dot}/>
                        </div>
                    </div>
                    <h3>{skill.title}</h3>
                    <p className={style.description}>{skill.description} </p>
                </div>
            )}
        </>
    )
}