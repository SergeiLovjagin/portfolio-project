import style from "./Project.module.scss";
import React from "react";

export const Project = (props: any) => {
    return (
        <div className={style.project}>
            <div className={style.picture} style={props.style}>
                <div className={style.projectDetails}>
                    <a href={props.github} className={style.button} target="_blank">GitHub</a>
                    <a href={props.demo} className={style.button} target="_blank">Demo</a>
                </div>
            </div>
            <h3>{props.title}</h3>
        </div>
    )
}