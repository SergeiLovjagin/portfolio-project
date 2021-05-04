import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
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

SwiperCore.use([Navigation, Pagination]);

export const Projects = () => {
    const svgBackColor = {
        fill: '#202020'
    };
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

    return (
        <div className={style.projectsBlock} id={'PROJECTS'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <span>Portfolio</span>
                <h2>WORK I HAVE DONE</h2>
                <div className={style.projects}>

                    <Swiper
                        style={{width: '100%', margin: '0'}}
                        spaceBetween={50}
                        pagination={{
                            clickable: true
                        }}
                    >
                        <SwiperSlide><Project style={socialNetworkStyle} title={'Social Network'} description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/></SwiperSlide>
                        <SwiperSlide><Project style={todolistStyle} title={'Todolist'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/></SwiperSlide>
                        <SwiperSlide><Project style={calculationOfPartsStyle} title={'Calculation of parts'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/></SwiperSlide>
                        <SwiperSlide><Project style={CounterStyle} title={'Counter'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <BottomScg style={svgBackColor}/>
        </div>
    )
}