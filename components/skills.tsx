const SKILLS: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "Prisma", "tRPC", "GraphQL", "REST"] },
  { group: "Data & Infra", items: ["PostgreSQL", "Redis", "S3", "Vercel", "Docker"] },
  { group: "Quality", items: ["Testing", "E2E", "CI/CD", "Monitoring", "A11y"] },
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-max">
        <h2 className="section-title mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((s) => (
            <div key={s.group} className="card p-6">
              <h3 className="font-semibold mb-3">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="badge">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
