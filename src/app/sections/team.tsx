"use client"
import { MemberCard } from "@/components/Index";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import AnimateTeam from "@/animations/team";
import CoreTeamImage from "@/data/Devs";

function Team() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null > (null);
    type CoreTeamName = keyof typeof CoreTeamImage
    const [activeDev, setActiveDev] = useState<CoreTeamName | null>(null)

    useLayoutEffect(() => {
        if (containerRef.current && titleRef.current) {
            AnimateTeam(containerRef.current, titleRef.current);
        }
    }, [])


    return (
        <>
            <div className="bg-primary flex flex-col text-9xl font-bold pr-20 overflow-hidden">
                <div className="text-[20vh] font-title self-end mt-5 mb-4" ref={titleRef}>THE TEAM</div>
                <div className="perspective-distant perspective-origin-left mt-20 ml-20 flex justify-between items-center">
                    <div className="ml-5 perspective-distant perspective-origin-left mb-5" ref={containerRef}>
                        {/* <div data-team className="text-stroke-1" >ALOK</div>
                    <div data-team className="text-stroke-1" >SURAJ</div>
                    <div data-team className="text-stroke-1" >MANAVI</div>
                    <div data-team className="text-stroke-1" >AAKASH</div>
                    <div data-team className="text-stroke-1" >SOURABH</div>
                    <div data-team className="text-stroke-1" >PRASHANT</div> */}
                        {Object.keys(CoreTeamImage).map((name) => (
                            <div data-team key={name} className="text-stroke-1"
                                onMouseEnter={() => setActiveDev(name as CoreTeamName)}
                                onMouseLeave={() => setActiveDev(null)} >
                                {name}
                            </div>

                        ))}
                    </div>
                    <div className="mr-5 pr-5 -translate-x-25"><MemberCard
                    imageSrc={activeDev? CoreTeamImage[activeDev].image : "images/ideal_alok.png"}
                    role = {activeDev? CoreTeamImage[activeDev].role : 'DEVELOPER'}
                      /></div>
                </div>

            </div>
        </>
    )
}
export default Team;
