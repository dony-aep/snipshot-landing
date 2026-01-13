import { Header, Footer } from "@/components/layout";
import { 
  Hero, 
  Features, 
  AnnotationTools, 
  TechStack, 
  DownloadCTA 
} from "@/components/sections";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <AnnotationTools />
        <TechStack />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
