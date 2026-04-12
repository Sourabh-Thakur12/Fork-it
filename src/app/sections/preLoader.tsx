"use client"
import { RForkItText, SvgComponent, SvgComponentR } from "@/components/Index";
// import { LoaderSvg } from "public/svgs";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import {AnimatePreloader} from "@/animations/preLoader";

function PreLoader() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const svgContainer = useRef<HTMLSpanElement | null>(null);
    const svgContainerR = useRef<HTMLSpanElement | null>(null);
    const textContainer = useRef<HTMLDivElement | null>(null);
    // console.log(svgContainer.current);

    const [isAnimated, setIsAnimated] = useState(false);
    const [isAppready, setIsAppReady] = useState(false);

    // Simulate app loading
    useEffect(() => {
      requestAnimationFrame(() =>{  // first raf used to request the dom paint
        requestAnimationFrame(() => { // the second raf ensures that the preloader animation has started before we check for app readiness
            setIsAppReady(true);
        });
      })
    }, [isAppready])


    // Animation logic
    useLayoutEffect(() => {
        if(svgContainer.current && textContainer.current && svgContainerR.current && wrapperRef.current){
            AnimatePreloader(svgContainer.current, svgContainerR.current, textContainer.current, wrapperRef.current, () => {
                setIsAnimated(true);
            });
            // AnimateText(textContainer.current);
            // setIsAnimated(true);
        }}, []);

        if (isAnimated && isAppready)  return null;


    return (
        <div className="fixed inset-0 z-50" ref= {wrapperRef}>
            <div className="bg-primary dark:bg-primary grid overflow-hidden min-h-dvh place-items-center">

                <div className="relative w-fit">
                    <div className=" absolute inset-0 z-10 flex justify-between items-center w-full scale-300 translate-y-20 ">
                        <span className="flex-3 translate-y-3 -translate-x-3" ref={svgContainer}>

                            < SvgComponent />
                            {/* < LoaderSvg /> */}



                        </span>
                        <span className="flex-1 ml-1 mt-1 overflow-hidden"  ref =  {svgContainerR}>
                            {/* <img className="w-full object-contain" src="images/land_page2.png" alt="error loading image" /> */}
                            < SvgComponentR />

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

export default PreLoader;
