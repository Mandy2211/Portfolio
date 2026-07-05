import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";
import "../styles/allProjects.css";

// High-fidelity pixel-art paw SVG element matching the user's reference
function PawIcon({ style, className }) {
    return (
        <svg 
            className={className}
            style={style}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 28 24" 
            width="42" 
            height="36"
        >
            {/* Toe 1 (Leftmost) */}
            <rect x="2" y="8" width="4" height="6" fill="#D07598" rx="1"/>
            <rect x="3" y="9" width="2" height="4" fill="#F4C0D6" rx="0.5"/>
            
            {/* Toe 2 (Middle-Left) */}
            <rect x="8" y="3" width="5" height="7" fill="#D07598" rx="1"/>
            <rect x="9" y="4" width="3" height="5" fill="#F4C0D6" rx="0.5"/>
            <rect x="10" y="4" width="1" height="2" fill="#FAEAF1"/>
            
            {/* Toe 3 (Middle-Right) */}
            <rect x="15" y="3" width="5" height="7" fill="#D07598" rx="1"/>
            <rect x="16" y="4" width="3" height="5" fill="#F4C0D6" rx="0.5"/>
            <rect x="17" y="4" width="1" height="2" fill="#FAEAF1"/>
            
            {/* Toe 4 (Rightmost) */}
            <rect x="22" y="8" width="4" height="6" fill="#D07598" rx="1"/>
            <rect x="23" y="9" width="2" height="4" fill="#F4C0D6" rx="0.5"/>
            
            {/* Main pad outline */}
            <path d="M7 14 C7 11, 21 11, 21 14 C21 17, 21 21, 14 22 C7 21, 7 17, 7 14 Z" fill="#D07598" />
            
            {/* Main pad fill */}
            <path d="M8 15 C8 12.5, 20 12.5, 20 15 C20 17, 20 20, 14 21 C8 20, 8 17, 8 15 Z" fill="#F4C0D6" />
            
            {/* Main pad highlight */}
            <path d="M10 15 C10 13.5, 18 13.5, 18 15 C18 15.5, 15 16.5, 14 16.5 C13 16.5, 10 15.5, 10 15 Z" fill="#FAEAF1" />
        </svg>
    );
}

function AllProjects() {
    const [projects, setProjects] = useState([]);
    const [clickPaws, setClickPaws] = useState([]);
    const [bgPaws, setBgPaws] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch("http://localhost:3000/api/projects");
                const data = await response.json();
                setProjects(Array.isArray(data) ? data : []);
            } catch (error) {
                console.log(error);
                setProjects([]);
            }
        }

        fetchProjects();

        // Generate background floating paws once on component mount
        const generatedPaws = [];
        for (let i = 0; i < 12; i++) {
            generatedPaws.push({
                id: i,
                left: `${Math.random() * 100}%`,
                // Stagger animations with negative delays so they are already on screen
                delay: `${Math.random() * -12}s`, 
                duration: `${9 + Math.random() * 6}s`,
                scale: 0.5 + Math.random() * 0.7,
                rotation: `${Math.random() * 360}deg`
            });
        }
        setBgPaws(generatedPaws);
    }, []);

    // Handle clicks to stamp a temporary animated paw print
    const handlePageClick = (e) => {
        // Avoid spawning stamps when user clicks interactive buttons/links
        if (e.target.closest("a") || e.target.closest("button") || e.target.closest("input")) {
            return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now() + Math.random();

        setClickPaws((prev) => [...prev, { id, x, y }]);

        // Remove stamp after its animation completes (800ms)
        setTimeout(() => {
            setClickPaws((prev) => prev.filter((p) => p.id !== id));
        }, 800);
    };

    return (
        <section className="allProjects" onClick={handlePageClick} style={{ position: "relative" }}>
            {/* Floating and Interactive Paw Animations */}
            <div className="paw-container">
                {/* Floating Background Elements */}
                {bgPaws.map((paw) => (
                    <PawIcon 
                        key={paw.id}
                        className="floating-paw"
                        style={{
                            left: paw.left,
                            animationDelay: paw.delay,
                            animationDuration: paw.duration,
                            transform: `scale(${paw.scale}) rotate(${paw.rotation})`
                        }}
                    />
                ))}

                {/* Interactive Click Stamp Elements */}
                {clickPaws.map((paw) => (
                    <PawIcon
                        key={paw.id}
                        className="click-paw"
                        style={{
                            left: `${paw.x}px`,
                            top: `${paw.y}px`
                        }}
                    />
                ))}
            </div>

            <div className="topBar" style={{ position: "relative", zIndex: 10 }}>
                <Link to="/" className="backButton">← Back</Link>
                <h1>All Projects</h1>
            </div>

            <div className="allProjectsGrid" style={{ position: "relative", zIndex: 10 }}>
                {projects.map((project, index) => (
                    <ProjectCard key={project?._id || index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default AllProjects;