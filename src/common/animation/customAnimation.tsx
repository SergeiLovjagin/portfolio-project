import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export function customAnimation<T>(Component: React.ComponentType<T>) {

    let AnimatedComponent = (props: { [x: string]: any; }) => {
        const {...restProps} = props
        const revealRefs = useRef([]);
        revealRefs.current = [];
        const addToRefs = (el: never) => {
            if (el && !revealRefs.current.includes(el)) {
                revealRefs.current.push(el);
            }
        };
        useEffect(() => {
                revealRefs.current.forEach((el, index) => {
                    gsap.fromTo(el, {
                        opacity: 0,
                        y: 20,
                    }, {
                        opacity: 1,
                        y: 0,
                        stagger: {
                            amount: 0.9
                        },
                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: '20px 90%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                });
        },[]);
        return <Component {...restProps as T} addToRefs={addToRefs}/>
    }
    return AnimatedComponent
}