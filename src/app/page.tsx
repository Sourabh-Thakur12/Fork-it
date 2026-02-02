import Hero from "@/app/sections/hero";
import HomePage from "@/app/sections/home";
import Projects from "./sections/projects";
import About from "./sections/about";
import Team from "./sections/team";

export default function Home() {
    return (
        <>
        <Hero />
        <HomePage />
        <About />
        <Team />
        <Projects />
        </>
    );
}
