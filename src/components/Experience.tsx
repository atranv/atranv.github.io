const Experience = () => {
  const experiences = [
    {
      company: "PNC Bank",
      role: "Security Engineer",
      period: "2024 – Present",
      description: "Designing DLP policies across enterprise environments. Reduced unauthorized data exfiltration by 85%.",
    },
    {
      company: "Palo Alto Networks",
      role: "Lead Technical Marketing Engineer",
      period: "2021 – 2023",
      description: "Product management for CASB solutions. Technical training and demo systems for field sales.",
    },
    {
      company: "Couchbase",
      role: "BDR Manager",
      period: "2018 – 2020",
      description: "BDR Professional of the Year 2019. Drove market adoption of NoSQL solutions.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="group grid md:grid-cols-[200px_1fr] gap-4"
            >
              <div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
