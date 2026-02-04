import {motion} from "framer-motion";
import {educations} from "../data/educations";


export default function Education(){
    return(
        <section className="py-20 px-6">
            <h2 className="text-3xl text-center mb-12">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
            {educations.map((e,i)=> (
                <motion.div
                key={i}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                className="flex items-center gap-6"
                >
                    {/* Year */}
                    <div className="w-32 text-sky-400 font-semibold">
                       {e.year}
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-slate-800 p-6 rounded-xl">
                        <h3 className="font-semibold">{e.school}</h3>
                        <p className="text-slate-400">{e.desc}</p>
                    </div>
                </motion.div>
            ))}


            </div>
        </section>
    );
}