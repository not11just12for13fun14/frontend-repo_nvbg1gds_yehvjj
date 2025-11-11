import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            I’m Atharva Rane, a Digital Marketing Specialist with a focus on Meta Ads, performance marketing, and building conversion-focused lead generation systems. Over the last 4+ years, I’ve planned, executed, and optimized 100+ campaigns across industries — helping businesses drive measurable growth.
          </p>
          <p className="text-white/70 text-lg">
            With a strong grasp of creative strategy, audience segmentation, and analytics, I turn ad spend into revenue with data-backed decisions and relentless optimization.
          </p>
          <div className="pt-2">
            <p className="text-2xl italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300">— Atharva Rane</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(99,102,241,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30" />
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328d13bf?q=80&w=1200&auto=format&fit=crop"
              alt="Atharva Rane"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
