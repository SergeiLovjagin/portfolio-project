import React from "react";
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {customAnimation} from '../common/animation/customAnimation'
import {BottomScg} from "../common/bottomSvg/BottomSvg";
import reactImage from '../common/images/reactJs.svg'
import jsImage from '../common/images/js.svg'
import storyBookImage from '../common/images/storyBook.svg'
import reduxImage from '../common/images/redux.svg'
import typeScriptImage from '../common/images/typeScript.svg'


type SkillsProps = {
    addToRefs: () => void
}

const Skills = ({addToRefs}: SkillsProps) => {
    const svgBackColor = {
        fill: '#2a2a2a'
    };
    const reactStyle = {
        backgroundImage: `url(${reactImage})`
    }
    const jsStyleStyle = {
        backgroundImage: `url(${jsImage})`
    }
    const storyBookStyle = {
        backgroundImage: `url(${storyBookImage})`
    }
    const reduxStyle = {
        backgroundImage: `url(${reduxImage})`
    }
    const typeScriptStyle = {
        backgroundImage: `url(${typeScriptImage})`
    }


    return (
        <div className={style.skillsBlock} id={'SKILLS'}>
            <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
                <span ref={addToRefs}>What I am Expert In</span>
                <h2 ref={addToRefs} className={style.title}>Digital Skills</h2>
                <div ref={addToRefs} className={style.skills}>
                    <Skill style={reactStyle} addToRefs={addToRefs} title='React' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                    <Skill style={reduxStyle} addToRefs={addToRefs} title='Redux' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                    <Skill style={jsStyleStyle} addToRefs={addToRefs} title='Javascript' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                    <Skill style={storyBookStyle} addToRefs={addToRefs} title='Storybook' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                    <Skill style={typeScriptStyle} addToRefs={addToRefs} title='TypeScript' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                </div>
            </div>
            <BottomScg style={svgBackColor}/>
        </div>
    )
}
const SkillsWithAnimation = customAnimation(Skills)

export default SkillsWithAnimation

