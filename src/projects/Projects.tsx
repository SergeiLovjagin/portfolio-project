import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project.";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

export const Projects = () => {
    return (
        <div className={style.projectsBlock} id={'PROJECTS'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>

                    <Swiper
                        style={{width: '100%', margin: '0'}}
                        spaceBetween={50}
                        pagination={{
                            clickable: true
                        }}

                    >
                        <SwiperSlide><Project title={'First'} description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/></SwiperSlide>
                        <SwiperSlide><Project title={'First'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/></SwiperSlide>
                        <SwiperSlide><Project title={'First'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/></SwiperSlide>
                    </Swiper>
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