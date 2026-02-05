import gsap from "gsap";

function AnimatePreloader(svgContainer : HTMLSpanElement) {
    const paths = svgContainer.querySelectorAll<SVGPathElement>("path[data-branch]");
    paths.forEach((path) => {
        const length = path.getTotalLength();
        console.log("path ", path);

        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
    });

    gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.1,
    });
}

function AnimateText(textContainer: HTMLDivElement) {
    const text = textContainer;
    text.style.opacity = "0";

    gsap.to(text, {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: 2
    });
}

export { AnimatePreloader, AnimateText };
