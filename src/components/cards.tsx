// TODO: split each section in individual sections if this grows too much

// types
export type ProjectCardProps = {
    id: number;
    title: string;
    discription?: string;
    projectManager: string;
    teamMembers?: string[];
    tags: string[];

    gitHubLink?: string;
    liveDemoLink?: string;
    image?: string;
}

export type CardsProp = ProjectCardProps & {
    varient?: "compact" | "detailed"
}


// varient 1

function DetailedCards({
    id,
    title,
    discription,
    projectManager: ProjectManager,
    teamMembers = [],
    tags,
    gitHubLink = "",
    liveDemoLink = "",
    image: Image,
}: ProjectCardProps) {
    return (
        <>
            <div className="border rounded-lg p-4 max-w-sm shadow-g hover:shadow-2xl transition-shadow duration-300 bg-[#E4CCFF]/20">
                {Image && <img src={Image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />}
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{discription}</p>
                <p className="text-sm text-white mb-2"><strong>Project Manager:</strong> {ProjectManager}</p>
                {teamMembers && (
                    <p className="text-sm text-gray-500 mb-2"><strong>Team Members:</strong> {teamMembers.join(", ")}</p>
                )}
                <p className="text-sm text-gray-500 mb-4"><strong>Tags:</strong> {tags.join(", ")}</p>
                <div className="flex space-x-4">
                    {gitHubLink && (
                        <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            GitHub
                        </a>
                    )}
                    {liveDemoLink && (
                        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}

// Varient 2

function CompactCard(props: ProjectCardProps) {
    return (
        <>
            <div className="w-[12vw] h-[24vw] bg-red-800 m-2 skew-x-12 border rounded-2xl">
                <div className="p-5 flex flex-col w-full h-full justify-evenly items-center font-body">
                    <div className="text-3xl">{props.title}</div>
                    <div className="flex flex-wrap overflow-hidden max-h-1/5">
                        {props.tags.map((ele) => (
                            <div key={ele} className="bg-blue-500/20 m-1 py-1 px-2 border rounded-2xl text-center grow"> {ele} </div>
                        ))}
                    </div>
                    <div className="self-start "> Lead By: <div>{props.projectManager}</div></div>

                </div>

            </div>

        </>
    )

}

// Varient Switcher

function Cards({ varient = "compact", ...props }: CardsProp) {
    return varient === "compact"
        ? <CompactCard {...props} />
        : <DetailedCards {...props} />
}

export default Cards;
