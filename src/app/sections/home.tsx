function HomePage() {
    return (
        <>
            <div className="bg-primary flex justify-center items-center min-h-dvh">
                <div className="">

                    <div className="flex justify-center items-center flex-wrap">
                        <div className="max-w-1/2">
                                {/* TODO: setup utility for clamping */}
                            <div className="text-[clamp(1.875rem,5vw,3.75rem)] font-body font-extrabold text-wrap mb-3">Where Code Meets Creativity </div>
                            <div className="text-[clamp(1.25rem,2.5vw,1.875rem)]">We help brands and startups turn ideas into powerful digital products.</div>

                        </div>
                        <div className="order-first">
                            <img src="images/home-right.png" alt="error loading image" />
                        </div>

                    </div>
                    <div className="flex justify-between mt-10 flex-wrap max-w-2/3 m-auto">
                        {/* placeholder untill btnComponent */}
                        <button type="button" className="border border-white rounded-full px-6 py-2 mb-4 text-white text-[clamp(1rem,1.5vw,1.875rem)] hover:bg-white hover:text-primary">View Our Work</button>
                        <button type="button" className="border border-white rounded-full px-6 py-2 mb-4 text-white text-[clamp(1rem,1.5vw,1.875rem)] hover:bg-white hover:text-primary">Lets Collaborate</button>
                    </div>
                </div>


            </div>
        </>
    )

}

export default HomePage;
