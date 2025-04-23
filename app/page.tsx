import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section id="home" className="scroll-mt-20">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-20">
            <About />
          </section>
          <section id="experience" className="scroll-mt-20">
            <Experience />
          </section>
          <section id="education" className="scroll-mt-20">
            <Education />
          </section>
          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>
          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>
          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
