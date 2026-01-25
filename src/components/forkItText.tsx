
function ForkItText() {
  return (
    <div className='inline-block relative z-1 rotate-90 sm:rotate-0
    '>
        <span className='font-body text-2xl absolute uppercase tracking-widest left-11 bottom-10 z-1'>WE</span>
        <span className='font-title text-6xl font-bold tracking-light inline-block  glow-medium '>F
            <span className='text-5xl '>O</span>
            RK IT</span>
        <span className='font-body text-1xl -rotate-90 absolute  top-9 -right-5'>better</span>
    </div>
  )
}

 function RForkItText () {
    return(
    <div className="relative inline-flex flex-col items-start  z-10">

  <span className="font-body text-1xl translate-x-13 sm:translate-x-24 translate-y-10 sm:text-5xl uppercase tracking-widest mb-5 sm:mb-1 z-10">
    WE
  </span>

  <div className="flex items-end gap-2 relative">

    <span className="font-title font-bold tracking-light glow-medium leading-none text-6xl sm:text-9xl">
      F<span className="text-5xl sm:text-8xl">O</span>RK IT
    </span>

    <span className="font-body text-1xl -translate-x-2 translate-y-2 sm:text-3xl -rotate-90 origin-bottom-left ml-1">
      better
    </span>

  </div>

</div>

    )
}

export {ForkItText, RForkItText}
// export default ForkItText
