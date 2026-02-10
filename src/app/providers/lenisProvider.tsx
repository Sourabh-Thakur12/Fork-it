"use client"
import ReactLenis, { LenisRef } from "lenis/react";
import  { PropsWithChildren, useRef, useEffect } from "react";
import gsap from 'gsap'


const LenisProvider = ({children}:PropsWithChildren) =>{

    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() =>{
        function update(time:number) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () =>{gsap.ticker.remove(update)}
    }, [])

    return(
        <ReactLenis ref={lenisRef} root
        options={{lerp: 0.1, smoothWheel: true, duration:1.5, autoRaf: false}}
        >
            {children}
        </ReactLenis>
    )
}

export default LenisProvider;
