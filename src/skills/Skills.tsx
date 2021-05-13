import React from "react";
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {BottomScg} from "../common/bottomSvg/BottomSvg";
import reactImage from '../common/images/reactJs.svg'
import jsImage from '../common/images/js.svg'
import storyBookImage from '../common/images/storyBook.svg'
import reduxImage from '../common/images/redux.svg'
import typeScriptImage from '../common/images/typeScript.svg'
//@ts-ignore
import ReactTypingEffect from 'react-typing-effect';

export const Skills = () => {
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
            <div className={style.container}>

                <h2><ReactTypingEffect
                    text={["I am Expert In"]}
                    eraseSpeed={50}
                    eraseDelay={4000}
                    typingDelay={100}
                    cursor={' '}
                /></h2>
                <div className={style.skills}>
                    <Skill style={reactStyle} title='React / Redux / JavaScript '
                           description='Developed Redux State applications and architecture (DAL, BLL, UI layers)'/>
                    <Skill style={reduxStyle} title='TypeScript' description='Successfully used Typescript in all my projects'/>
                    <Skill style={jsStyleStyle} title='Axios / REST API'
                           description='Added new functionality in accordance with the new endpoints (REST) on the back-end'/>
                    <Skill style={storyBookStyle} title='Material UI / Ant Design'
                           description='Experience in cross-browser, adaptive, responsive development, CSS-preprocessors'/>
                    <Skill style={typeScriptStyle} title='Unit Tests/StoryBook'
                           description='Created Unit tests, Snapshot tests, component views in Storybook'/>
                </div>
            </div>
            <BottomScg style={svgBackColor}/>
        </div>
    )
}


