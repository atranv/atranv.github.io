import { Rocket, TrendingUp, Award } from "lucide-react";

const StartupHighlight = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "Gamma AI → Palo Alto Networks",
      role: "Head of Business Development",
      description: "Led GTM strategy, driving $1M revenue pre-acquisition with $10M in pipeline.",
    },
    {
      icon: TrendingUp,
      title: "Unbound Security AI",
      role: "Advisor (YC-Backed)",
      description: "Advising on product innovation and GTM. Secured $2M+ in pipeline.",
    },
    {
      icon: Award,
      title: "CASB Product Growth",
      role: "Palo Alto Networks",
      description: "Drove product line growth from $50M to $100M annual revenue.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <p className="text-accent text-sm tracking-widest uppercase mb-2">
          Featured
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Startup Experience
        </h2>
        <div className="grid gap-8 md:gap-12">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="group flex gap-6 animate-slide-in-left opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-accent mb-2">{item.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupHighlight;
