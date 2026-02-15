"use client"
import {AnimateProject, CardHoverEnter, CardHoverLeave} from "@/animations/project";
import { ProjectCardProps } from "@/components/cards";
import { Cards } from "@/components/Index";
import { projectData } from "@/data/projects";
import { useRef, useLayoutEffect, useState } from "react";

function Projects() {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [active, setIsActive] = useState<ProjectCardProps | null>(projectData[0])

    function handleEnter(e:React.MouseEvent<HTMLDivElement>) {
        const el = e.currentTarget
        CardHoverEnter(el)

    }

    function handleLeave(e:React.MouseEvent<HTMLDivElement>){
        const el = e.currentTarget
        CardHoverLeave(el)


    }

    useLayoutEffect(() => {
        if (cardRef.current)
            AnimateProject(cardRef.current)
    }, [])
    return (
        <>
            <div className="bg-primary min-h-dvh flex justify-center items-center ">
                <div className="flex flex-col gap-15 justify-between items-center">
                    <div>
                        <h1 className="text-6xl font-bold mb-4 text-center">Our Projects</h1>
                    </div>
                    <div className="flex justify-between items-center max-w-screen w-screen">
                        <div className="w-1/2 flex justify-center">
                            {active && (
                                <div>
                                    <Cards varient={"detailed"} {...active} />
                                </div>
                            )}
                        </div>
                        <div className="relative  w-1/2 h-62 flex justify-center" ref={cardRef}>
                            {projectData.map((project, index) => {
                                const z = projectData.length - index; // top card should have highest z-index
                                return (
                                    <div
                                        data-compactcard
                                        key={project.id}
                                        className={`absolute  `}
                                        style={{ zIndex: z }}
                                        onMouseEnter={(e) => {
                                            handleEnter(e)
                                            setIsActive(project)
                                        }}
                                        onMouseLeave={(e) => {
                                            handleLeave(e)
                                            setIsActive(project)
                                            }}>
                                        <Cards varient={"compact"} {...project} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <button type="button" className=" mt-4 border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-primary">View Our Work</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projects
