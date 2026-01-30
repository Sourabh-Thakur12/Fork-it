import { RForkItText } from "@/components/forkItText"

function Hero() {
  return (
    <div>
        <div className="bg-primary dark:bg-primary grid overflow-hidden min-h-dvh place-items-center rotate-90 sm:rotate-0">

                <div className="relative w-fit">
                    <div className=" absolute inset-0 z-10 flex justify-between items-center w-full scale-300 translate-y-20 ">
                        <span className="flex-3">
                            <img className="w-full object-contain" src="images/land_page1.png" alt="error loading image" />
                        </span>
                        <span className="flex-1">
                            <img className="w-full object-contain" src="images/land_page2.png" alt="error loading image" />
                        </span>
                    </div>

                    <div className="relative flex flex-col items-start scale-200 z-20">
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

export default Hero
