import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-950 via-black to-red-900 text-white min-h-screen"> 
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
