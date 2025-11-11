import { motion } from "framer-motion";

const projects = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `High-Converting Creative ${i + 1}`,
  img: `https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop`,
}));

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Portfolio / Projects
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <p className="font-semibold">{p.title}</p>
                <span className="text-sm text-indigo-300">View →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
