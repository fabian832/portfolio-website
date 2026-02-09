import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit px-4 md:px-6 py-2 
      bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl 
      border border-slate-200 dark:border-slate-700/50 
      rounded-full shadow-2xl flex items-center justify-between transition-colors duration-500">
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium border-r border-slate-200 dark:border-slate-700 pr-6">
        {navLinks.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} 
               className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors capitalize">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Icon */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-600 dark:text-slate-400 focus:outline-none"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={`h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 left-0 right-0 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-xl flex flex-col gap-4 text-center md:hidden"
          >
            {navLinks.map(item => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}