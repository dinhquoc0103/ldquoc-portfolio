import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Achievements from "./components/Achievements"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Achievements />
            <Projects />
            <Contact />
        </>
    );
}

export default Home