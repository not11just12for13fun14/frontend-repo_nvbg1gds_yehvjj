import { motion } from "framer-motion";
import { Rocket, Target, LineChart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Meta Ads Campaign Management",
    desc: "Full-funnel strategy, audience building, creative testing, and scaling with precision.",
    price: "From ₹18,000/mo",
  },
  {
    icon: LineChart,
    title: "Performance Optimization",
    desc: "CRO, attribution, and continuous optimization to maximize ROAS and lower CAC.",
    price: "Custom",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    desc: "Landing pages, automated flows, and high-intent targeting that converts.",
    price: "From ₹25,000/project",
  },
  {
    icon: Sparkles,
    title: "Branding Strategy",
    desc: "Messaging, positioning, and creative direction for brand-led performance.",
    price: "Custom",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-black via-[#0b0b11] to-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Services
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, price }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/0 via-fuchsia-500/0 to-amber-400/0 group-hover:from-indigo-500/10 group-hover:via-fuchsia-500/10 group-hover:to-amber-400/10 rounded-2xl pointer-events-none" />
              <Icon className="h-8 w-8 text-indigo-300" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-white/80 text-sm">{price}</span>
                <a href="#contact" className="text-indigo-300 hover:text-indigo-200 text-sm">Get Started →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
