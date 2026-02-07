import gsap from "gsap";

function AnimatePreloader(svgContainer : HTMLSpanElement, SvgComponentR : HTMLSpanElement, textContainer: HTMLDivElement, wrapper: HTMLDivElement, onComplete: () => void) {
    const Wrapper = wrapper;
    const paths = svgContainer.querySelectorAll<SVGPathElement>("path[data-branch]");
    const pathR = SvgComponentR.querySelector<SVGPathElement>("path[data-branchr]");
    const lengthR = pathR?.getTotalLength();
    if(pathR){
    pathR.style.strokeDasharray = `${lengthR}`;
    pathR.style.strokeDashoffset = `${lengthR}`;
}
    paths.forEach((path) => {
        const length = path.getTotalLength();
        console.log("path ", path);
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
    });

   const text = textContainer;
    text.style.opacity = "0";

    const tl = gsap.timeline({ease: "power1.inOut"});

    tl.to(paths, {
        strokeDashoffset: 0,
            duration: 2,
        // ease: "power1.inOut",
        stagger: 0.12,
    });

    tl.to(pathR,{
        strokeDashoffset: 0,
        duration: 2,
        // ease: "power1.inOut",

        }, "-=0.1");

 tl.to(text, {
        opacity: 1,
        duration: 1,
        // ease: "power1.inOut",
        // delay: 2
    }, "-=2.7");
    tl.to(Wrapper,{
        opacity:0,
        duration:0.5,
        // x: -window.innerWidth,
        pointerEvents:"none"
    }, "-=1.5");

    tl.eventCallback("onComplete", onComplete);
}

// function AnimateText(textContainer: HTMLDivElement) {
//     const text = textContainer;
//     text.style.opacity = "0";

//     gsap.to(text, {
//         opacity: 1,
//         duration: 1,
//         ease: "power1.inOut",
//         delay: 2
//     });
// }

export {AnimatePreloader};
