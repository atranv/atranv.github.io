import Hero from "@/components/Hero";
import StartupHighlight from "@/components/StartupHighlight";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <StartupHighlight />
      <Experience />
      <Footer />
    </main>
  );
};

export default Index;
