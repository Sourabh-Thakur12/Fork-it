function HomePage() {
    return (
        <>
            <div className="bg-primary flex justify-center items-center min-h-dvh">
                <div className="">

                    <div className="flex justify-center items-center">
                        <div className="max-w-1/2">
                            <div className="text-6xl font-body font-extrabold text-wrap mb-3">Where Code Meets Creativity </div>
                            <div className="text-3xl">We help brands and startups turn ideas into powerful digital products.</div>

                        </div>
                        <div>
                            <img src="images/home-right.png" alt="error loading image" />
                        </div>

                    </div>
                    <div className="flex gap-44 justify-center mt-10">
                        {/* placeholder untill btnComponent */}
                        <button type="button" className="border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-primary">View Our Work</button>
                        <button type="button" className="border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-primary">Lets Collaborate</button>
                    </div>
                </div>


            </div>
        </>
    )

}

export default HomePage;
