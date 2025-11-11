import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, Teckify",
    avatar: "https://i.pravatar.cc/100?img=12",
    quote:
      "Atharva’s Meta ads strategy helped us 3x our lead volume while reducing CPL by 40%. Highly recommend!",
  },
  {
    name: "Ananya Singh",
    role: "Marketing Head, Bloom Spa",
    avatar: "https://i.pravatar.cc/100?img=45",
    quote:
      "Superb execution and consistent optimization. We saw a huge jump in quality leads within weeks.",
  },
  {
    name: "Vikram Shah",
    role: "COO, FurniCraft",
    avatar: "https://i.pravatar.cc/100?img=18",
    quote:
      "From strategy to creatives, everything was on point. Our ROAS improved from 1.8x to 4.1x.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          What Clients Say
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-white/70">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80 text-sm leading-relaxed">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
