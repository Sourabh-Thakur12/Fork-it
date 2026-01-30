import {Cards} from "@/components/Index";
import { projectData } from "@/data/projects";

function Projects() {
    return(
        <>
        <div className="bg-primary min-h-dvh flex justify-center items-center">
            <div className="flex flex-col gap-15 justify-between items-center">
                <div>
                <h1 className="text-6xl font-bold mb-4 text-center">Our Projects</h1>
                </div>
                <div className="flex justify-center items-center ">
        {projectData.map((project) => (
            <Cards key={project.id} {...project} />
        ))}
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
