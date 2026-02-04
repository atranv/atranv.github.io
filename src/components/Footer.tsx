import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
          Let's connect
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg">
          Always interested in discussing security, startups, or new opportunities.
        </p>
        <a
          href="mailto:alextranvt@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-colors"
        >
          <Mail className="w-4 h-4" />
          Get in touch
        </a>
        <p className="text-xs text-muted-foreground mt-12">
          © {new Date().getFullYear()} Alex Tran
        </p>
      </div>
    </footer>
  );
};

export default Footer;
