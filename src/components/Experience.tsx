import {motion} from "framer-motion";
import {experiences} from "../data/experiences";


export default function Experience(){
    return(
    <section className="py-20 px-6">
        <h2 className="text-3xl text-center mb-12">Experience</h2>
        <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-slate-700 rounded"></div>
            <div className="space-y-12">
                {experiences.map((e,i)=> (
                    <motion.div
                    key={i}
                    initial={{opacity:0,x:40}}
                    whileInView={{opacity:1,x:0}}
                    viewport={{once:true}}
                    className="relative pl-14"
                    >
                        {/* Dot */}
                        <div className="absolute left-2 top-3 w-4 h-4 bg-sky-500 rounded-full"></div>

                        {/* Card */}
                        <div className="bg-slate-800 p-6 rounded-xl">
                            <h3 className="text-lg font-semibold">{e.company}</h3>
                            <p className="text-slate-400 mb-2">{e.year}</p>
                            <ul className="list-disc ml-5 text-slate-300">
                                {e.tasks.map((t,j)=>(<li key={j}>{t}</li>))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
    );
}