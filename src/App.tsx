import { AboutMe } from "./components/AboutMe";
import { CallToAction } from "./components/CallToAction";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";

export function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <CallToAction />
      <Footer />
    </>
  )
}