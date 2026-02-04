import {motion} from "framer-motion";
import {experiences} from "../data/experiences";


export default function Experience(){
    return(
        <section className="py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {experiences.map((e,i)=>(
                    <motion.div key={i} whileHover={{y:-5,scale:1.02}} className="bg-slate-800 p-6 rounded-xl">
                        <h3 className="font-semibold">{e.company}</h3>
                        <p className="text-slate-400">{e.year}</p>
                        <ul className="list-disc ml-5 mt-2 text-slate-400">
                            {e.tasks.map((t,j)=><li key={j}>{t}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}