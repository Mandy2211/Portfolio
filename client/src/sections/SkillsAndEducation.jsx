import { useEffect, useRef } from "react";
import { FaGraduationCap, FaAward, FaCode, FaDatabase, FaBrain } from "react-icons/fa";
import "../styles/skillsAndEducation.css";

function SkillsAndEducation() {
    const eduRef = useRef(null);
    const certRef = useRef(null);
    const stepRefs = useRef([]);

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

        if (eduRef.current) observer.observe(eduRef.current);
        if (certRef.current) observer.observe(certRef.current);
        stepRefs.current.forEach((el) => { if (el) observer.observe(el); });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="skills-edu-container">
            {/* Top Sub-section: Education & Certifications */}
            <div className="edu-cert-section">
                {/* Left Card: Education */}
                <div className="edu-card" ref={eduRef}>
                    <div className="card-header">
                        <FaGraduationCap className="header-icon" />
                        <h2>Education</h2>
                    </div>

                    <div className="edu-item">
                        <div className="edu-title-row">
                            <h3>B.Tech in Computer Science &amp; Engineering</h3>
                            <span className="edu-meta-right">CGPA: 8.07 / 10.0</span>
                        </div>
                        <p className="edu-subtitle">Indian Institute of Information Technology, Vadodara</p>
                        <div className="edu-footer-row">
                            <span className="edu-date-badge">2023 – 2027</span>
                            <span className="edu-location">Diu, India</span>
                        </div>
                    </div>

                    <div className="edu-divider" />

                    <div className="edu-item">
                        <div className="edu-title-row">
                            <h3>Class 12th (CBSE Board)</h3>
                            <span className="edu-meta-right">90%</span>
                        </div>
                        <p className="edu-subtitle">Central Hindu Girls School, Varanasi</p>
                        <div className="edu-footer-row">
                            <span className="edu-date-badge">2020 – 2022</span>
                            <span className="edu-location">Varanasi, India</span>
                        </div>
                    </div>
                </div>

                {/* Right Card: Certifications */}
                <div className="cert-card" ref={certRef}>
                    <div className="card-header">
                        <FaAward className="header-icon" />
                        <h2>Top Certifications &amp; Achievements</h2>
                    </div>

                    <ul className="cert-list">
                        <li>
                            <span className="cert-bullet">✿</span>
                            <div className="cert-content">
                                <strong>Hackathon Winner:</strong> 1st Place, Hack-IIITV 2024 – Quantum Molecule Simulation (Team Lead)
                            </div>
                        </li>
                        <li>
                            <span className="cert-bullet">✿</span>
                            <div className="cert-content">
                                <strong>NVIDIA Deep Learning Institute:</strong> Fundamentals of Deep Learning Certification
                            </div>
                        </li>
                        <li>
                            <span className="cert-bullet">✿</span>
                            <div className="cert-content">
                                <strong>Mathematics of Machine Learning:</strong> Bayesian Inference &amp; Statistical Learning (Columbia University)
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Sub-section: Skills & Expertise */}
            <div className="skills-section">
                <h1 className="skills-title">Skills &amp; Expertise</h1>
                <p className="skills-subtitle">
                    The pipeline of engineering: from core languages and database foundations, through web architectures, to scalable machine learning models.
                </p>

                <div className="skills-pipeline">
                    {/* Step 1: Foundations & Core */}
                    <div
                        className="pipeline-step"
                        ref={(el) => (stepRefs.current[0] = el)}
                        style={{ "--step-delay": "0ms" }}
                    >
                        <div className="step-icon-wrapper">
                            <FaDatabase className="step-icon" />
                        </div>
                        <h3>Data &amp; Languages</h3>
                        <p className="step-desc">Core Foundations</p>

                        <div className="skill-tags">
                            <span>Python</span>
                            <span>SQL</span>
                            <span>C++</span>
                            <span>C</span>
                            <span>MongoDB</span>
                            <span>MySQL</span>
                            <span>Supabase</span>
                            <span>FAISS</span>
                        </div>
                    </div>

                    <div className="pipeline-divider">
                        <span className="divider-dot">✿</span>
                    </div>

                    {/* Step 2: Development & Web */}
                    <div
                        className="pipeline-step"
                        ref={(el) => (stepRefs.current[1] = el)}
                        style={{ "--step-delay": "120ms" }}
                    >
                        <div className="step-icon-wrapper">
                            <FaCode className="step-icon" />
                        </div>
                        <h3>Web &amp; Architecture</h3>
                        <p className="step-desc">Scalable Development</p>

                        <div className="skill-tags">
                            <span>React</span>
                            <span>FastAPI</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>Django</span>
                            <span>WebSocket</span>
                            <span>Swagger</span>
                            <span>JavaScript</span>
                            <span>Shell Scripting</span>
                        </div>
                    </div>

                    <div className="pipeline-divider">
                        <span className="divider-dot">✿</span>
                    </div>

                    {/* Step 3: Model & AI Intelligence */}
                    <div
                        className="pipeline-step"
                        ref={(el) => (stepRefs.current[2] = el)}
                        style={{ "--step-delay": "240ms" }}
                    >
                        <div className="step-icon-wrapper">
                            <FaBrain className="step-icon" />
                        </div>
                        <h3>AI &amp; ML Systems</h3>
                        <p className="step-desc">Model Intelligence</p>

                        <div className="skill-tags">
                            <span>PyTorch</span>
                            <span>scikit-learn</span>
                            <span>LangChain</span>
                            <span>RAG Pipelines</span>
                            <span>Embeddings</span>
                            <span>Gen AI</span>
                            <span>NLP</span>
                            <span>Machine Learning</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsAndEducation;
