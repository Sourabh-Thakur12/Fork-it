type ProjectCardProps = {
    id: number;
    title: string;
    discription: string;
    projectManager:string;
    teamMembers?:string[];
    tags:string[];

    gitHubLink?:string;
    liveDemoLink?:string;
    image:string;
}

function Cards({
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
    return(
        <>l
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

export default Cards;
