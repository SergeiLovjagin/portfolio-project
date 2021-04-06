import style from "./Project.module.css";
import React from "react";

export const Project = (props: any) => {
    return (
        <div className={style.project}>
            <div className={style.picture}>
                <a href={''} className={style.button}>Click me</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description} </span>
        </div>
    )
}