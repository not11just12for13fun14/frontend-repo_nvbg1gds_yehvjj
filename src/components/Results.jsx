import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="tabular-nums"
    >
      {isInView ? (
        <motion.span
          initial={{ counter: 0 }}
          animate={{ counter: to }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          {({ counter }) => `${Math.floor(counter)}${suffix}`}
        </motion.span>
      ) : (
        `0${suffix}`
      )}
    </motion.span>
  );
}

export default function Results() {
  const stats = [
    { label: "Leads Generated", value: 6000, suffix: "+" },
    { label: "Ad Spend Managed", value: 1500000, suffix: "+" },
    { label: "Campaigns Run", value: 100, suffix: "+" },
    { label: "Years Experience", value: 4, suffix: "+" },
  ];

  return (
    <section id="results" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Results & Case Studies
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-white/70 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20" />
              <h3 className="mt-4 font-semibold">E-commerce ROAS Growth</h3>
              <p className="text-white/70 text-sm mt-1">Scaled from 1.5x to 4.2x ROAS in 6 weeks with creative iteration and audience expansion.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
