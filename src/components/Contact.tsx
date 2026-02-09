// import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-slate-950 text-center transition-colors duration-500">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Get In Touch</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
        I'm currently looking for new opportunities. My inbox is always open.
      </p>
      <a 
        href="mailto:fabian@email.com" 
        className="text-2xl font-bold text-sky-600 dark:text-sky-400 hover:underline underline-offset-8"
      >
        fabian@email.com
      </a>
    </section>
  );
}