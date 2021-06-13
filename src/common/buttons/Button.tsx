import React from "react";
import style from "./Button.module.css"

type ButtonProps = {
    title: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: ButtonProps) => {

    return (
        <>
            <button onClick={event => props.onClick(event)} className={style.button}>{props.title}</button>
        </>
    )
}