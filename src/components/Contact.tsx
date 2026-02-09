import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-slate-950 text-center transition-colors duration-500 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
        >
          Get In <span className="text-sky-600 dark:text-sky-400">Touch</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 mb-12 max-w-md mx-auto text-sm md:text-base leading-relaxed"
        >
          I'm currently looking for new opportunities or just to connect. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        {/* Responsive Social Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {/* Email Button */}
          <a 
            href="mailto:fabianhie@gmail.com" 
            className="flex items-center gap-3 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl transition-all shadow-lg shadow-sky-500/20 font-medium text-sm md:text-base w-full sm:w-auto justify-center"
          >
            <Mail size={20} />
            Email Me
          </a>

          {/* LinkedIn Link */}
          <a 
            href="https://linkedin.com/in/fabian-fabian-60a580218" 
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all font-medium text-sm md:text-base w-full sm:w-auto justify-center border border-slate-200 dark:border-slate-700"
          >
            <Linkedin size={20} className="text-blue-600 dark:text-blue-400" />
            LinkedIn
          </a>

          {/* GitHub Link */}
          <a 
            href="https://github.com/fabian832" 
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all font-medium text-sm md:text-base w-full sm:w-auto justify-center border border-slate-200 dark:border-slate-700"
          >
            <Github size={20} />
            GitHub
          </a>
        </motion.div>

        {/* Footer Credit */}
        <p className="mt-24 text-xs text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">
          Designed & Built by Fabian &copy; 2024
        </p>
      </div>
    </section>
  );
}