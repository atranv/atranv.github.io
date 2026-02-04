const Skills = () => {
  const skillGroups = [
    {
      category: "Languages",
      skills: ["Python", "TypeScript", "PowerShell", "JavaScript"],
    },
    {
      category: "Security",
      skills: ["DLP", "Symantec", "Microsoft Purview", "Palo Alto"],
    },
    {
      category: "Cloud",
      skills: ["AWS", "Azure", "GCP"],
    },
    {
      category: "Tools",
      skills: ["Docker", "Kubernetes", "Git", "Power Automate"],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
