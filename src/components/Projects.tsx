import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../lib/animations";
import {projects} from "../data/projects";

export default function Projects() {
  return (
    // Unified Section BG: White for light mode, Slate-950 for dark mode
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white"
      >
        Featured <span className="text-sky-600 dark:text-sky-400">Projects</span>
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-2xl transition-all duration-300
              bg-slate-50 dark:bg-slate-900/40 
              border border-slate-200 dark:border-slate-800/50"
          >
            <div className="mb-4 text-sky-600 dark:text-sky-500 font-mono text-sm font-bold">0{i + 1}</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">{p.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-4">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}