import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import SkillsAndEducation from "../sections/SkillsAndEducation";
import RandomPets from "../components/RandomPets";
import BackgroundStars from "../components/BackgroundStars";

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const targetId = location.state.scrollTo;
            // Wait slightly for the layout/elements to render
            const timer = setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }, 150);

            // Clean the state to avoid scrolling on subsequent refreshes
            window.history.replaceState({}, document.title);

            return () => clearTimeout(timer);
        }
    }, [location]);

    return (
        <div style={{ position: 'relative' }}>
            <BackgroundStars />
            <section id="about">
                <About />
            </section>
            <div className="transition"></div>

            <section id="skills-education">
                <SkillsAndEducation />
            </section>

            <section id="experience">
                <Experience />
            </section>

            <section id="projects">
                <Projects />
            </section>
            
            <div style={{ position: 'relative' }}>
                <RandomPets />
                <section id="contact">
                    <Contact />
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default Home;