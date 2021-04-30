import React from "react";
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {customAnimation} from '../common/animation/customAnimation'


type SkillsProps = {
    addToRefs : () => void
}

const Skills = ({addToRefs}: SkillsProps) => {
    const skills = [
        {title: 'React', description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {title: 'Redux', description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {title: 'Javascript', description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {title: 'Storybook' , description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {title: 'Rest Api' , description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {title: 'Git' , description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    ]

    return (
        <div className={style.skillsBlock} id={'SKILLS'}>
            <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
                <h2 ref={addToRefs} className={style.title}>Digital Skills</h2>
                <div ref={addToRefs} className={style.skills}>
                    <Skill addToRefs={addToRefs} skills={skills}/>
                </div>
            </div>
            <div className={style.whiteSvg}>
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
                </svg>
            </div>
        </div>
    )
}
const SkillsWithAnimation = customAnimation(Skills)

export default SkillsWithAnimation

