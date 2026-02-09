import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";
import { licenses } from "../data/licenses"; // Import the new object array

export default function Licenses() {
  return (
    <section id="licenses" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
          Licenses & <span className="text-sky-600 dark:text-sky-400">Certifications</span>
        </h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {licenses.map((l, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="flex flex-col p-8 rounded-2xl text-left
                bg-slate-50 dark:bg-slate-900/40 
                border border-slate-200 dark:border-slate-800/50
                shadow-sm hover:shadow-md transition-all min-h-[200px] group relative overflow-hidden"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Header: Issuer and Year */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 dark:text-sky-400 px-2 py-1 bg-sky-100 dark:bg-sky-500/10 rounded">
                  {l.year}
                </span>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
                  {l.issuer}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {l.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {l.desc}
              </p>

              {/* Footer: Credential ID */}
              <div className="mt-auto pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  ID: <span className="text-slate-600 dark:text-slate-300 font-bold">{l.credentialId}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}