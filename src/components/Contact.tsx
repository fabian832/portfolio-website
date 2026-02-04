import { Github, Linkedin, Mail } from "lucide-react";


export default function Contact() {
    return (
        <section className="py-20 px-6 text-center bg-slate-900">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <div className="flex justify-center gap-6">
            <Github />
            <Linkedin />
            <Mail />
            </div>
        </section>
    );
}