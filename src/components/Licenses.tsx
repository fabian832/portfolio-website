import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";

export default function Licenses() {
  const licenseList = ["Laravel Certified Developer", "Docker Associate", "AWS Solutions Architect"];

  return (
    // MATCHING BACKGROUND: Exact same classes as Projects
    <section id="licenses" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Licenses & Certifications</h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {licenseList.map((l, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center p-6 rounded-2xl text-center font-medium
                bg-slate-50 dark:bg-slate-900/40 
                text-slate-700 dark:text-slate-200
                border border-slate-200 dark:border-slate-800/50
                shadow-sm transition-all"
            >
              <svg className="w-6 h-6 mr-3 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {l}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}