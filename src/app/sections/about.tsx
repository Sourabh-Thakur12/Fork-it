function About() {
    return (
        <>
            <div className="bg-primary flex min-w-h-dvh justify-around">
                <div className="max-w-1/2 m-10 h-4/5 bg-secondary -skew-x-12">
                    <div  ><img src="images/team_pic_ph.png" alt="error loading image" /></div>
                    <div className="text-7xl font-body font-bold">About Us</div>
                </div>
                <div className="max-w-1/3 ">
                    <div><img src="images/about_right.png" alt="" /></div>
                    <div className="text-wrap"><div>We’re Fork It,</div>
                        <div>a team of technophiles and problem solvers driven by open-source thinking, building bold, meaningful tech that challenges convention and creates real impact.</div></div>
                </div>

            </div>
        </>
    )
}

export default About;
