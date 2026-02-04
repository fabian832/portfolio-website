import { motion } from "framer-motion";
import {skills} from "../data/skills";
import { fadeUp } from "../lib/animations";

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-slate-900">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-bold text-center mb-10"
      >
        Skills
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-5">
        {skills.map((s, i) => (
          <div key={i}>
            <p className="mb-1">{s.name}</p>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-sky-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
