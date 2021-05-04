import style from "./Project.module.css";
import React from "react";

export const Project = (props: any) => {
    return (
        <div className={style.project}>
            <div className={style.picture} style={props.style}>
                <a href={''} className={style.button}/>
            </div>
            <h2>{props.title}</h2>
            <span className={style.description}>{props.description} </span>
        </div>
    )
}