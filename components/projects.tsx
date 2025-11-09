"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Server, Smartphone } from "lucide-react";

const PROJECTS = [
  {
    title: "Realtime Collaboration Suite",
    description:
      "End?to?end collaboration platform with live presence, CRDT syncing, and role?based access.",
    tags: ["Next.js", "WebSocket", "PostgreSQL", "Redis"],
    icon: Globe,
  },
  {
    title: "Headless Commerce Platform",
    description:
      "Composable storefront with edge caching, payments, and analytics pipeline.",
    tags: ["Next.js", "Stripe", "Prisma", "Vercel"],
    icon: Server,
  },
  {
    title: "Cross?Platform Mobile App",
    description:
      "Offline?first mobile app with background sync and push notifications.",
    tags: ["React Native", "Expo", "SQLite", "GraphQL"],
    icon: Smartphone,
  },
];

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-max">
        <div className="flex items-end justify-between mb-8">
          <h2 className="section-title">Featured Projects</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white inline-flex items-center gap-1">
            View all <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-glow/50 transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center border border-white/10">
                  <p.icon size={20} />
                </div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
