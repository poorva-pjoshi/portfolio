import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default HomePage
