import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Licenses from "../components/Licenses";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


export default function Portfolio() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Licenses />
            <Projects />
            <Contact />
        </div>
    );
}