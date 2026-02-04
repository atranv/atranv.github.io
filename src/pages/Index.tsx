import Hero from "@/components/Hero";
import StartupHighlight from "@/components/StartupHighlight";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <StartupHighlight />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
};

export default Index;
