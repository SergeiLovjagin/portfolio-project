export const particlesOpt = {
    // fpsLimit: 60,
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 800
            }
        },
        opacity: {
            value: 0.05,
        },
        line_linked: {
            distance: 100,
            color: "#ffffff",
            opacity: 0.15,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 300,
            },
            repulse: {
                distance: 200
            },
        }
    },
}