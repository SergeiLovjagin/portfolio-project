import React from "react";
import style from "./Button.module.css"

type ButtonProps = {
    title: string
    onClick?: () => void
}

export const Button = (props: ButtonProps) => {
    return (
        <>
            <a href={''} onClick={props.onClick} className={style.button}>{props.title}</a>
        </>
    )
}