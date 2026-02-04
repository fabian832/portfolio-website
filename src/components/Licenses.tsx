import {motion} from "framer-motion";


export default function Licenses(){
    return(
        <section className="py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Licenses</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                {["Laravel Cert","Docker","AWS"].map((l,i)=>(
                    <motion.div key={i} whileHover={{y:-6}} className="bg-slate-800 p-6 rounded-xl">
                        {l}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}