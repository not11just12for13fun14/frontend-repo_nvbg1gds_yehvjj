import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-black via-[#0b0b11] to-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Let’s Connect
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-semibold">Send a Message</h3>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-indigo-400" placeholder="Your Name" required />
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-indigo-400" placeholder="Your Email" required />
              <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-indigo-400" placeholder="Your Message" required />
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-black font-semibold hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] transition-shadow">Send</button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-semibold">Other Ways</h3>
            <div className="mt-6 space-y-4">
              <a href="https://wa.me/917208292904" target="_blank" rel="noreferrer" className="block px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition">WhatsApp: +91 7208292904</a>
              <a href="mailto:atharva@digitalsupport.in" className="flex items-center gap-2 text-white/80 hover:text-white"><Mail size={18}/> atharva@digitalsupport.in</a>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition"><Linkedin size={18}/></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition"><Instagram size={18}/></a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition"><Facebook size={18}/></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
