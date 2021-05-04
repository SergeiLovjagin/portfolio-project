import React from "react";
import style from "../bottomSvg/BottomSvg.module.css";


export const BottomScg = (props :any) => {
    return (
        <div className={style.whiteSvg}>
            <svg style={props.style} x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
            </svg>
        </div>
    )
}