import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "../lib/animations";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden 
      bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Background Glows (Dynamic Opacity) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[120px]" />

      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <div>
          <motion.h1 variants={fadeUp} className="text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-500 dark:from-sky-400 dark:to-emerald-400">Fabian</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-2xl mt-4 font-medium text-slate-600 dark:text-slate-300">
            Fullstack Developer & Systems Architect
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex gap-4">
            <a href="#projects" className="px-8 py-3 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-500 transition-all shadow-lg shadow-sky-500/20">View My Work</a>
            <a href="#contact" className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full font-semibold transition-all">Let's Talk</a>
          </motion.div>
        </div>

        <motion.div variants={scaleIn} className="relative flex justify-center">
          <div className="absolute inset-0 border-2 border-sky-400/30 dark:border-sky-500/30 rounded-full animate-[ping_3s_linear_infinite]" />
          <img src="/profile.jpg" className="w-72 h-72 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-2xl z-10" />
        </motion.div>
      </motion.div>
    </section>
  );
}