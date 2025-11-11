import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I Help Businesses Grow with High-Performing Meta Ads.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            4+ Years Experience | 100+ Campaigns | ₹15L+ Ad Spend Managed
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="https://wa.me/917208292904"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-black font-semibold shadow-[0_0_50px_rgba(99,102,241,0.5)] hover:shadow-[0_0_70px_rgba(217,70,239,0.6)] transition-shadow"
            >
              Book a Strategy Call
            </a>
            <a
              href="#work"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 hover:text-white backdrop-blur-md bg-white/5 transition"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden lg:flex justify-end"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 max-w-sm">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30" />
            <div className="mt-4">
              <p className="text-white/80 text-sm">Atharva Rane</p>
              <p className="text-white/50 text-xs">Digital Marketing Expert, Founder @ Digital Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
