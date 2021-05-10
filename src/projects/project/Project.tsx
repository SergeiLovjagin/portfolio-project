import style from "./Project.module.scss";
import React from "react";

export const Project = (props: any) => {
    return (
        <div className={style.project}>
            <div className={style.picture} style={props.style}>
                <div className={style.projectDetails}>
                    <a href={''} className={style.button}>GitHub</a>
                    <a href={''} className={style.button}>Demo</a>
                </div>
            </div>
            <h3>{props.title}</h3>
        </div>
    )
}