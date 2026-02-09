// src/components/Navbar.tsx
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2 
      bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl 
      border border-slate-200 dark:border-slate-700/50 
      rounded-full shadow-2xl flex items-center transition-colors duration-500">
      
      <ul className="flex gap-8 text-sm font-medium border-r border-slate-200 dark:border-slate-700 pr-6">
        {['About', 'Experience', 'Projects', 'Contact'].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} 
               className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors capitalize">
              {item}
            </a>
          </li>
        ))}
      </ul>
      
      <ThemeToggle />
    </nav>
  );
}