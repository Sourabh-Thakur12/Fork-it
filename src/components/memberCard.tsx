
type MemberCardProps = {
    imageSrc: string;
    role: string;
};

function MemberCard({
    imageSrc,
    role
}: MemberCardProps) {

    return (

        <div className=' skew-x-12 relative w-[20vw] h-[30vw]'>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='absolute z-5 object-contain mb-20'>
                    <img src={imageSrc} alt="image not rendered"/>
                </div>
                <div className='bg-linear-to-t from-secondary from-0% to-transparent to-40% absolute z-10 h-full w-full  '></div>
                <div className='absolute z-20 text-6xl self-end'>{role}</div>
            </div>

        </div>

    )
}

export default MemberCard
