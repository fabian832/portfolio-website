import {motion} from "framer-motion";
import {educations} from "../data/educations";


export default function Education(){
    return(
        <section className="py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {educations.map((e,i)=>(
                    <motion.div
                    key={i}
                    whileHover={{y:-5,scale:1.02}}
                    className="bg-slate-800 p-6 rounded-xl flex justify-between items-center"
                    >
                        <div>
                            <h3 className="font-semibold">{e.school}</h3>
                            <p className="text-slate-400">{e.desc}</p>
                        </div>
                        <span className="text-slate-400">{e.year}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}