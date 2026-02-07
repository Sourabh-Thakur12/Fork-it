// import PreLoader from "@/app/sections/preLoader";
import HomePage from "@/app/sections/home";
import Projects from "./sections/projects";
import About from "./sections/about";
import Team from "./sections/team";

export default function Home() {
    return (
        <>
        {/* <PreLoader /> */}
        <HomePage />
        <About />
        <Team />
        <Projects />
        </>
    );
}
