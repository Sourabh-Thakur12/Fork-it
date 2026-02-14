import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// ============================================================================
// GSAP BEST PRACTICES & DOS/DON'TS
// ============================================================================
// DO:
//   ✓ Always register plugins before using: gsap.registerPlugin(ScrollTrigger, SplitText)
//   ✓ Use ScrollTrigger.refresh() after DOM changes (character splitting)
//   ✓ Always set BOTH start AND end positions for ScrollTrigger
//   ✓ Use display: "block" for text elements before splitting chars
//   ✓ Trigger on the actual animated element, not parent containers
//   ✓ Use requestAnimationFrame + setTimeout for layout calculations
//   ✓ Set initial state with gsap.set() BEFORE creating timeline
//
// DON'T:
//   ✗ Don't call SplitText.create() twice on same element (DOM gets corrupted)
//   ✗ Don't use overflow: hidden on element containing text to split
//   ✗ Don't skip ScrollTrigger.refresh() after manual DOM modifications
//   ✗ Don't use display: "inline" for text splitting
//   ✗ Don't forget scrub value (0.1-1 for smoothness, true = instant)
//   ✗ Don't trigger ScrollTrigger on absolutely positioned elements directly
//   ✗ Don't animate before checking element.offsetHeight = scrollHeight
// ============================================================================

gsap.registerPlugin(ScrollTrigger, SplitText)


function splitTextIntoChars(element: HTMLElement): HTMLElement[] {
    const text = element.textContent || "";
    element.innerHTML = ""; // Clear existing content
    const chars: HTMLElement[] = [];

    for (let char of text) {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = char;
        element.appendChild(span);
        chars.push(span);
    }

    return chars;
}

function AnimateAbout(textContainer: HTMLDivElement, bottomContainer: HTMLDivElement) {

    // IMPORTANT: Use requestAnimationFrame to wait for DOM layout, then setTimeout for safety
    requestAnimationFrame(() => {
        setTimeout(() => {
            // Target actual text elements (not parents with overflow: hidden)
            const para = textContainer.querySelectorAll("[data-line] .split-text");
            const bottomPara = bottomContainer.querySelectorAll(" .text")
            console.log("para ", para);
            console.log("bottomPara", bottomPara);
            console.log("Container width:", textContainer.offsetWidth);
            console.log("Container height:", textContainer.offsetHeight);
            const lineSplit: any[] = [];

            para.forEach((el, index) => {
                const element = el as HTMLElement;

                // DEBUG: Check element layout is ready
                const computedStyle = window.getComputedStyle(element);
                console.log(`Element ${index} computed:`, {
                    display: computedStyle.display,
                    visibility: computedStyle.visibility,
                    fontSize: computedStyle.fontSize,
                    fontWeight: computedStyle.fontWeight,
                    offsetWidth: element.offsetWidth,
                    offsetHeight: element.offsetHeight,
                    scrollHeight: element.scrollHeight,
                });

                if (element.textContent && element.textContent.trim()) {
                    console.log(`Manually splitting text for element ${index}...`);

                    // Manual split works better than SplitText when SplitText fails
                    // (e.g., with Lenis, overflow: hidden interference, etc.)
                    const chars = splitTextIntoChars(element);
                    console.log(`after split chars ${index}:`, chars.length, "chars");

                    lineSplit.push({ chars })
                } else {
                    console.warn(`Element ${index} has no text content`);
                }
            });

        // STEP 1: Set initial state BEFORE timeline creation
        // This is critical - animations only animate FROM this state TO target state
        gsap.set(".char", { y: 0, opacity: 0, filter: "blur(50px)" })
        gsap.set(" .text", {y: 20 , opacity: 0, filter: "blur(20px)"})

        // STEP 2: Create timeline with ScrollTrigger
        // IMPORTANT: trigger should be textContainer (animated element), not parent
        // start/end MUST both be set for ScrollTrigger to work properly
        const lineTl = gsap.timeline({
            scrollTrigger: {
                trigger: textContainer,  // Trigger on animated element
                start: "top 80%",         // When element top hits 80% of viewport
                end: "center 40%",        // When element center hits 40% of viewport
                scrub: 0.6,               // 0.6s smoothing between scroll and animation
                toggleActions: "play pause resume reset",
                markers: true,            // Remove in production
                onEnter: () => console.log("trigger entered"),
                onLeave: () => console.log("trigger left"),
            },
        });

        const paraTl = gsap.timeline(
            {
            scrollTrigger: {
                trigger: bottomContainer,  // Trigger on animated element
                start: "top 110%",         // When element top hits 80% of viewport
                end: "bottom 90%",        // When element center hits 40% of viewport
                scrub: 0.6,               // 0.6s smoothing between scroll and animation
                toggleActions: "play pause resume reset",
                markers: true,            // Remove in production
                onEnter: () => console.log("trigger entered"),
                onLeave: () => console.log("trigger left"),
            },
        })


        // STEP 3: Define animation
        lineTl
            .to(".char", {
                y: -20,           // Move up by 20px
                opacity: 1,       // Fade in
                filter: "blur(0px)",  // Remove blur
                stagger: 0.1      // Stagger characters by 0.1s each
            })

        paraTl
        .to(" .text", {
            opacity:1,
            y:0,
            filter:"blur(0px)",
            // duration: 1
        }, "<")

        // CRITICAL: Refresh ScrollTrigger after DOM modifications
        // Without this, ScrollTrigger calculates measurements on stale DOM
        ScrollTrigger.refresh();
        }, 100);  // 100ms delay ensures all fonts loaded and layout computed
    });
}

export default AnimateAbout;
