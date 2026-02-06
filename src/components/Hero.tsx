/* ================= Hero.tsx ================= */
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl font-bold"
          >
            Fabian Hie
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 text-sky-400 text-lg"
          >
            Fullstack Developer
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-slate-400 leading-relaxed"
          >
            {/* I am a passionate Fullstack Developer experienced in building web
            applications, REST APIs, and system architectures using modern
            technologies such as React, Laravel, Node.js, and Go. */}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex gap-4"
          >
            <a
              href="#projects"
              className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-slate-600 hover:border-sky-500 px-6 py-3 rounded-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover border-4 border-sky-500 shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
