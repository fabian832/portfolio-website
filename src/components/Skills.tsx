import { motion } from "framer-motion";
import {skills} from "../data/skills";

export default function Skills() {
  return (
    // UNIFIED BG: bg-white dark:bg-slate-950
    <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            // UNIFIED CARD CONTAINER: Same as Experience and Projects
            <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 rounded-2xl group">
              <div className="flex justify-between mb-3">
                <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-sky-500 transition-colors">
                  {s.name}
                </span>
                <span className="text-slate-400 font-mono text-sm">{s.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-sky-500 dark:bg-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.3)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}