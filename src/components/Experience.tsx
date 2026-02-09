import { motion } from "framer-motion";
import {experiences} from "../data/experiences";

export default function Experience() {
  return (
    // UNIFIED BG: bg-white dark:bg-slate-950
    <section id="experience" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Experience</h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line - subtle contrast */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>

        <div className="space-y-12">
          {experiences.map((e, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* UNIFIED CARD: bg-slate-50 dark:bg-slate-900/40 */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 p-6 rounded-2xl transition-colors">
                  <span className="text-sky-600 dark:text-sky-400 font-mono font-bold uppercase text-xs">{e.year}</span>
                  <h3 className="text-xl font-bold mt-1 text-slate-900 dark:text-white">{e.company}</h3>
                  <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                    {e.tasks.map((t, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-sky-500">▹</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Dot */}
                <div className="z-20 absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-sky-500 border-4 border-white dark:border-slate-950 shadow-sm" />
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}