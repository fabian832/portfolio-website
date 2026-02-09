import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Licenses from "../components/Licenses";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";


export default function Portofolio() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            <Navbar />
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