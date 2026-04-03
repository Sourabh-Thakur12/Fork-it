"use client"
import { useRef, useLayoutEffect } from "react";
import AnimateAbout from "@/animations/about";

function About() {
    const textContainerRef = useRef<HTMLDivElement | null>(null);
    const bottomTextRef = useRef<HTMLDivElement | null>(null);


    useLayoutEffect(() => {
        if (textContainerRef.current && bottomTextRef.current) {

            console.log("text container ", textContainerRef.current);

            console.log(" bottom text container ", bottomTextRef.current);

            AnimateAbout(textContainerRef.current, bottomTextRef.current);

        }
    }, [])

    return (
        <>
            <div className="bg-primary min-h-dvh relative" >
                <div className="text-[clamp(1.775rem,5vw,3.75rem)]/tight font-bold font-body absolute z-20 flex flex-col ml-20 mr-20" ref={textContainerRef} >
                    <div data-line className="overflow-hidden">
                        <p><span className="split-text block">As a team of technophiles and problem-solvers, we build meaningful digital systems that challenge convention,</span></p>
                    </div>
                    <div className="self-end w-1/2">
                        <div data-line className="overflow-hidden">
                            <p><span className="split-text block">turn bold ideas into reality, and create technology that truly matters.</span></p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-[70vh] pt-10 translate-y-20">
                    <div className="max-w-1/2 w-1/3 h-full m-10  -skew-x-9 flex justify-end items-center flex-col relative">
                        <div className="mb-10 relative"><img src="images/team_pic_ph.png" alt="error loading image" /></div>
                        <div className="text-9xl text-clamp font-body font-bold fixed z-10 ">About Us</div>
                        <div className="absolute h-full w-full bg-linear-to-b from-secondary to-primary -z-1 blur-xs"></div>
                    </div>
                    <div className="max-w-1/3 relative">
                        <div><img src="images/about_right.png" alt="" /></div>
                        <div className="text-wrap text-xl absolute z-10 -translate-y-50" ref ={bottomTextRef}><div data-para className="text" >We’re Fork It,</div>
                            <div data-para className="text" >a team of technophiles and problem solvers driven by open-source thinking, building bold, meaningful tech that challenges convention and creates real impact.</div></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;
