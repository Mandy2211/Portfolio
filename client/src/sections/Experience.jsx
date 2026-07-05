import { useEffect, useRef, useMemo } from "react";
import ExperienceCard from "../components/ExperienceCard";
import experiences from "../data/experience";
import fairy1 from "../assets/fairy1.png";

import "../styles/experience.css";

// Pick 2 unique random indices to place the sitting fairy on
function pickRandomIndices(count, total) {
    const indices = Array.from({ length: total }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return new Set(indices.slice(0, count));
}

function Experience() {
    const titleRef = useRef(null);
    const cardRefs = useRef([]);

    // Stable random selection – computed once on mount
    const fairyCardIndices = useMemo(
        () => pickRandomIndices(2, experiences.length),
        [] // eslint-disable-line react-hooks/exhaustive-deps
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="experience">
            <h1 ref={titleRef}>My Journey</h1>

            <div className="timeline">
                {experiences.map((experience, index) => (
                    <div key={index} className="timeline-item-wrapper">
                        <div
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="card-container"
                        >
                            <ExperienceCard
                                experience={experience}
                                index={index}
                                hasFairy2={fairyCardIndices.has(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;