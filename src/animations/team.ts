import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)


const AnimateTeam = (textContainer: HTMLDivElement) => {
    requestAnimationFrame(() => {
        setTimeout(() => {
            const team = textContainer.querySelectorAll("[data-team]");
            let member = []

            team.forEach((el, i) => {
                member.push(el);
                console.log(`element at index ${i} added`, el)
            })


            const wrapperTl = gsap.timeline({
                scrollTrigger: {
                    trigger: textContainer,
                    start: "top 90%",
                    end: "bottom bottom",

                    toggleActions: "play none resume reset",
                    onEnter: () => console.log("triger Enter"),

                    markers: true
                }
            })

            wrapperTl.set(textContainer,{
                rotateY:20,
                translateY:1000,
                onUpdate: ()=>console.log("value updated"),

            })




            wrapperTl
            .to(textContainer,{
                translateY:0,
                duration:1,
                rotateY:12,
                ease:"power1.out",

                onStart: () => console.log("anime started"),
             })
             .fromTo("[data-team]",{
                rotateY:30,
                opacity:0
             },
             {
                rotateY:15,
                stagger:0.1,
                duration:1,
                opacity:1,
                ease: "power3.out"
             },"-=0.5"
            )


            member.forEach(element => {
                const hoverTl = gsap.timeline({
                    paused:true
                })

                hoverTl
                .to(element,{
                    rotateY:5,
                    duration:0.3
                })

                element.addEventListener("mouseenter", () => {
                    element.classList.add("hoverable-text-stroke")
                    hoverTl.play()
                    console.log(`hoverd ${element.innerText}`);
                });
                element.addEventListener("mouseleave", () => hoverTl.reverse())
            });

                ScrollTrigger.refresh();
        }, 100);
    })
}

export default AnimateTeam
