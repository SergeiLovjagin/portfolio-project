import React from "react";
import style from "./Button.module.css"

type ButtonProps = {
    title: string
}

export const Button = (props: ButtonProps) => {
    return (
        <>
            <a href="" className={style.button}>{props.title}</a>
        </>
    )
}