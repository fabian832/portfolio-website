import { motion } from "framer-motion";
import {educations} from "../data/educations";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Education</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {educations.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {/* Year */}
            <div className="w-32 text-sky-600 dark:text-sky-400 font-semibold text-sm md:text-base">
              {e.year}
            </div>

            {/* Card */}
            <div className="flex-1 bg-slate-50 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm transition-all hover:shadow-md">
              <h3 className="font-bold text-slate-800 dark:text-white">{e.school}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}