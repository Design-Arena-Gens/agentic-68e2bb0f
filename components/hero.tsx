"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="section">
      <div className="container-max grid items-center gap-10 sm:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 mb-4 badge">
            <span className="h-2 w-2 rounded-full bg-accent" /> Available for work
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
            Building delightful, scalable products for the web
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            I?m a full?stack developer crafting modern experiences with Next.js, TypeScript, and cloud?native architectures.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="btn-primary rounded-xl">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-ghost rounded-xl">Get in touch</a>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-6 sm:p-8"
          >
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/40 via-white/5 to-accent/40 border border-white/10" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Years", value: "5+" },
                { label: "Projects", value: "24" },
                { label: "Clients", value: "12" },
              ].map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <div className="text-2xl font-semibold">{s.value}</div>
                  <div className="text-xs text-white/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
