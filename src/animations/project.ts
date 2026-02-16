import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const spacingX = 0.2
const spacingY = 0.06

function getCardPos(index: number, el: HTMLElement){
    return{
        x: index * -el.offsetWidth * spacingX,
        y: index * -el.offsetHeight * spacingY
    }
}


function AnimateProject(cardContainer:HTMLDivElement) {
    requestAnimationFrame(() => {
        setTimeout(() => {
            const compactCards = cardContainer.querySelectorAll("[data-compactcard]")
            // let cards = []

            compactCards.forEach((card: Element, index: number) => {
                const htmlCard = card as HTMLDivElement
                const pos = getCardPos(index, htmlCard)
                gsap.set(htmlCard, {
                    x: pos.x,
                    y: pos.y,
                    opacity: 0
                })
                // Store original position as data attribute
                htmlCard.dataset.originalX = `${pos.x}`
                htmlCard.dataset.originalY = `${pos.y}`
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
        x: "-=20",
        rotateZ:"-30",
        // yoyo:true,
        // repeat: 1
        // scale:1.5
    })
}
function CardHoverLeave(Leave:HTMLDivElement) {
    const originalX = parseFloat(Leave.dataset.originalX || "0")
    const originalY = parseFloat(Leave.dataset.originalY || "0")
    gsap.to(Leave, {
        x: originalX,
        // y: originalY,
        rotateZ:0,
        // scale:1
    })
}
export {AnimateProject, CardHoverEnter, CardHoverLeave}
