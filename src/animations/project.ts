import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function AnimateProject(cardContainer:HTMLDivElement) {
    requestAnimationFrame(() => {
        setTimeout(() => {
            const compactCards = cardContainer.querySelectorAll("[data-compactcard]")
            let cards = []

            gsap.set(compactCards, {
                x: (i) => i * -35,
               y: (i) => i * -24,
                opacity:0
            })

            const compactcardTl = gsap.timeline({
                scrollTrigger:cardContainer,
                start: "top bottom",
                end: "bottom bottom",
                toggleActions :"play pause reverse reset",

                markers: true
            })



            compactCards.forEach((card, index) => {
                // compactcardTl.set(card, {
                //     opacity:0,
                // })

                compactcardTl.to(card, {
                    opacity: 1
                })
            })

            ScrollTrigger.refresh()
        }, 100);
    })
}


function CardHoverEnter(Enter:HTMLDivElement) {
    gsap.to(Enter, {
        y:-100,
        // scale:1.5
    })
}
function CardHoverLeave(Leave:HTMLDivElement) {
    gsap.to(Leave,{
        y:0,
        // scale:1
    })
}
export {AnimateProject, CardHoverEnter, CardHoverLeave}
