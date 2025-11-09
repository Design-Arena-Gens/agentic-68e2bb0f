export function Experience() {
  const timeline = [
    {
      role: "Senior Full?Stack Engineer",
      company: "Acme Corp",
      period: "2023 ? Present",
      details:
        "Leading the architecture of a multi?tenant platform. Drove performance and DX improvements.",
    },
    {
      role: "Full?Stack Developer",
      company: "Startup XYZ",
      period: "2021 ? 2023",
      details:
        "Built greenfield applications across the stack. Shipped revenue?impacting features.",
    },
    {
      role: "Frontend Engineer",
      company: "Studio Labs",
      period: "2019 ? 2021",
      details: "Delivered polished UI and design systems across multiple products.",
    },
  ];
  return (
    <section id="experience" className="section">
      <div className="container-max">
        <h2 className="section-title mb-8">Experience</h2>
        <ol className="relative border-s border-white/10 ps-6">
          {timeline.map((t) => (
            <li key={t.role} className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/30 border border-white/10" />
              <h3 className="font-semibold">
                {t.role} ? <span className="text-white/70">{t.company}</span>
              </h3>
              <div className="text-xs text-white/50">{t.period}</div>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{t.details}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
