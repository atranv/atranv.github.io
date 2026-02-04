import { Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 animate-fade-in opacity-0">
          Security Engineer & Startup Advisor
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-6 animate-fade-in opacity-0 animation-delay-100">
          Alex Tran
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 animate-fade-in opacity-0 animation-delay-200">
          Building secure systems at PNC Bank. Previously helped scale a cybersecurity startup from $0 to acquisition by Palo Alto Networks.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-fade-in opacity-0 animation-delay-300">
          <a 
            href="mailto:alextranvt@gmail.com" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            alextranvt@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Pittsburgh, PA
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
