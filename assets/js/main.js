document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
});
tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: { color: { value: "#0d1117" } },
    fpsLimit: 60,
    particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: ["#06b6d4", "#0ea5e9", "#22d3ee"] },
        shape: {
            type: ["circle", "triangle", "square", "polygon"],
            options: {
                polygon: { sides: 5 }
            }
        },
        opacity: { value: 0.6 },
        size: { value: { min: 3, max: 6 }, random: true },
        rotate: { value: { min: 0, max: 360 }, animation: { enable: true, speed: 5 } },
        links: {
            enable: true,
            distance: 120,
            color: "#a78bfa",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" }
        }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 150, links: { opacity: 0.7 } },
            push: { quantity: 2 }
        }
    },
    detectRetina: true
});