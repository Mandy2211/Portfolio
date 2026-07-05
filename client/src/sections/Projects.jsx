import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../services/api";
import ProjectCard from "../components/ProjectCard";
import flowerCompact from "../assets/flower_compact.png";
import flowerStem from "../assets/flower_stem.png";
import "../styles/projects.css";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        async function loadProjects() {

            try {

                const data = await getProjects();

                const featuredTitles = [

                    "GuardAI – Explainable ML-Powered Financial Fraud Detection Portal",

                    "Mission-Critical Incident Management System",

                    "EGFL – Smart Contract Vulnerability Detection"

                ];

                const featured = Array.isArray(data)
                    ? data.filter(project => featuredTitles.includes(project.title))
                    : [];

                setProjects(featured);
                setError(null);

            }

            catch (err) {

                console.error(err);
                setError("Unable to load featured projects. Please try again later.");

            } finally {
                setLoading(false);
            }

        }

        loadProjects();

    }, []);

    function nextProject() {
        if (projects.length === 0) return;
        setCurrent((current + 1) % projects.length);
    }

    function previousProject() {
        if (projects.length === 0) return;
        setCurrent(
            current === 0
                ? projects.length - 1
                : current - 1
        );
    }

    if (loading) {
        return (
            <section className="projects">
                <h2 className="projectHeading">Featured Work</h2>
                <p className="counter">Loading projects…</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="projects">
                <h2 className="projectHeading">Featured Work</h2>
                <p className="counter">{error}</p>
                <button className="exploreButton" onClick={() => navigate("/projects")}>Retry</button>
            </section>
        );
    }

    if (projects.length === 0) {
        return (
            <section className="projects">
                <h2 className="projectHeading">Featured Work</h2>
                <p className="counter">No featured projects found yet.</p>
                <button className="exploreButton" onClick={() => navigate("/projects")}>Refresh</button>
            </section>
        );
    }

    return (

        <section className="projects">

            {/* Gap flowers */}
            <div className="gap-flowers">
                {[0, 1, 2, 3].map(i => (
                    <div key={i} className="gap-flower">
                        <img src={flowerCompact} alt="" className="flower-default" />
                        <img src={flowerStem} alt="" className="flower-hover" />
                    </div>
                ))}
            </div>

            <h2 className="projectHeading">

                Featured Work

            </h2>

            <p className="counter">

                {current + 1} / {projects.length}

            </p>

            <div className="navigation">

                <button onClick={previousProject}>

                    ←

                </button>

                <button onClick={nextProject}>

                    →

                </button>

            </div>

            <ProjectCard

                project={projects[current]}

            />

            <div className="dots">

                {

                    projects.map((_, index) => (

                        <span

                            key={index}

                            className={

                                current === index

                                    ? "dot active"

                                    : "dot"

                            }

                        />

                    ))

                }

            </div>

            <button

                className="exploreButton"

                onClick={() => navigate("/projects")}

            >

                Explore More Projects →

            </button>

        </section>

    );

}

export default Projects;