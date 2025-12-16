import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white">

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
