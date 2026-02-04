import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn } from "../lib/animations";
import {projects} from "../data/projects";

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-slate-400 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
