import style from './Projects.module.scss'
import './customBulletsStyle.scss'
import {Project} from "./project/Project";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import React from "react";
import {BottomScg} from "../common/bottomSvg/BottomSvg";
import socialNetwork from "../common/images/socialNetwork.svg";
import todolist from "../common/images/todolist.svg";
import calculationOfParts from "../common/images/calculationOfParts.svg";
import counter from "../common/images/counter.svg";
import Particles from "react-particles-js";
import {particlesOpt} from "../common/animation/particleOpt";
//@ts-ignore
import ReactTypingEffect from 'react-typing-effect';
SwiperCore.use([Navigation, Pagination]);

export const Projects = () => {
    const socialNetworkStyle = {
        backgroundImage: `url(${socialNetwork})`
    }
    const todolistStyle = {
        backgroundImage: `url(${todolist})`
    }
    const calculationOfPartsStyle = {
        backgroundImage: `url(${calculationOfParts})`
    }
    const CounterStyle = {
        backgroundImage: `url(${counter})`
    }

    const projects = [
        {
            id: 1,
            title: 'Todolist',
            style: todolistStyle,
            demo: 'https://sergeilovjagin.github.io/to-do-list-project/',
            gitHub: 'https://github.com/SergeiLovjagin/to-do-list-project'
        },
        {
            id: 2,
            title: 'Social Network',
            style: socialNetworkStyle,
            demo: 'https://sergeilovjagin.github.io/react-typescript-social/',
            gitHub: 'https://github.com/SergeiLovjagin/react-typescript-social'
        },
        {
            id: 3,
            title: 'Calculation of parts',
            style: calculationOfPartsStyle,
            demo: 'https://sergeilovjagin.github.io/dream-peegel-project/',
            gitHub: 'https://github.com/SergeiLovjagin/dream-peegel-project'
        },
        {
            id: 4,
            title: 'Counter',
            style: CounterStyle,
            demo: 'https://sergeilovjagin.github.io/counter-second-project/',
            gitHub: 'https://github.com/SergeiLovjagin/counter-project'
        },
    ]

    const svgBackColor = {
        fill: '#202020'
    };
    return (
        <div className={style.projectsBlock} id={'PROJECTS'}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={style.container}>
                <span>Have a look at my daily updated business portfolio</span>
                <h2><ReactTypingEffect
                    text={["Portfolio | My projects"]}
                    eraseSpeed={50}
                    eraseDelay={4000}
                    typingDelay={100}
                    cursor={' '}
                /></h2>

                <div className={style.projects}>
                    <Swiper
                        style={{width: '100%', margin: '0',}}
                        spaceBetween={50}
                        pagination={{
                            clickable: true
                        }}>
                        {
                            projects.map((pr, index) => {
                                return <SwiperSlide key={index}><Project
                                    style={pr.style}
                                    title={pr.title}
                                    demo={pr.demo}
                                    github={pr.gitHub}
                                /></SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <BottomScg style={svgBackColor}/>
        </div>
    )
}