"use client"
import { RForkItText, SvgComponent } from "@/components/Index";
// import { LoaderSvg } from "public/svgs";
import { useRef, useLayoutEffect} from "react";
import {AnimatePreloader, AnimateText} from "@/animations/preLoader";

function Hero() {
    const svgContainer = useRef<HTMLSpanElement | null>(null);
    const textContainer = useRef<HTMLDivElement | null>(null);
    // console.log(svgContainer.current);

    useLayoutEffect(() => {
        if(svgContainer.current && textContainer.current){
            AnimatePreloader(svgContainer.current);
            AnimateText(textContainer.current);
        }}, [svgContainer, textContainer]);


    return (
        <div>
            <div className="bg-primary dark:bg-primary grid overflow-hidden min-h-dvh place-items-center rotate-90 sm:rotate-0">

                <div className="relative w-fit">
                    <div className=" absolute inset-0 z-10 flex justify-between items-center w-full scale-300 translate-y-20 ">
                        <span className="flex-3 translate-y-3 -translate-x-3" ref={svgContainer}>
                           
                            < SvgComponent />
                            {/* < LoaderSvg /> */}



                        </span>
                        <span className="flex-1">
                            <img className="w-full object-contain" src="images/land_page2.png" alt="error loading image" />
                        </span>
                    </div>

                    <div data-text className="relative flex flex-col items-start scale-200 z-20 " ref= {textContainer}>
                        <RForkItText />

                        <div className="text-2xl mt-6 translate-x-30 text-right self-end">
                            <div>
                                Smart systems, Custom tech
                            </div>
                            <div>
                                Built to solve real problems.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
