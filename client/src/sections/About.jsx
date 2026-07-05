import "../styles/about.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import girl from "../assets/Girl.png";
import moon from "../assets/moon.png";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";

function About() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const throttleTimerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (throttleTimerRef.current) return;
        
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setPosition({ x, y });

        throttleTimerRef.current = setTimeout(() => {
            throttleTimerRef.current = null;
        }, 16);
    };

    useEffect(() => {
        return () => {
            if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current);
        };
    }, []);

    return (
        <section className="about" onMouseMove={handleMouseMove}>

            {/* Background Gradient */}
            <div className="gradient"></div>

            {/* Stars */}
            <div className="stars">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
            </div>

            {/* Moon and Clouds */}
            <motion.img src={moon} className="moon" alt="moon" animate={{ x: position.x * 25, y: position.y * 15 }} transition={{ type: "spring", stiffness: 40 }} />
            <motion.img src={cloud1} className="cloud cloud1" alt="" animate={{ x: position.x * 40 }} transition={{ type: "spring", stiffness: 25 }} />
            <motion.img src={cloud2} className="cloud cloud2" alt="" animate={{ x: position.x * -20 }} transition={{ type: "spring", stiffness: 25 }} />
            <motion.img src={cloud1} className="cloud cloud3" alt="" animate={{ x: position.x * 35 }} transition={{ type: "spring", stiffness: 25 }} />
            <motion.img src={cloud2} className="cloud cloud4" alt="" animate={{ x: position.x * -10 }} transition={{ type: "spring", stiffness: 25 }} />
            <motion.img src={cloud1} className="cloud cloud5" alt="" animate={{ x: position.x * 32 }} transition={{ type: "spring", stiffness: 25 }} />
            <motion.img src={cloud2} className="cloud cloud6" alt="" animate={{ x: position.x * 38 }} transition={{ type: "spring", stiffness: 25 }} />
            <motion.img src={cloud1} className="cloud cloud7" alt="" animate={{ x: position.x * 50 }} transition={{ type: "spring", stiffness: 25 }} />


            {/* Main Content */}
            <div className="hero">

                {/* Background Layer: Girl */}
                <div className="girlContainer">
                    <img src={girl} className="girl" alt="girl" />

                    {/* Foreground Layer: Text, Card, Buttons */}
                    <div className="intro-overlay">
                        {/* Stacked Title */}
                        <h1>Manini Rajbhar</h1>

                        <h3 className="subtitle">
                            CS Undergrad (2027) · ML Engineer · Full-Stack Developer ·<br />
                            Open to Internships & Full-Time Roles
                        </h3>

                    </div>
                </div>

                <div className="aboutCard">
                    <p>Hi! I'm Manini, architecting intelligent systems across RAG pipelines,
                        distributed backends, and scalable APIs. Currently at IIIT Vadodara.
                        Available for opportunities.
                    </p>
                </div>

                <div className="buttons">
                    <button
                        onClick={() => window.open("https://drive.google.com/file/d/1gKLUd4nue2tObrhV8PGvrdiw9QSuqG8h/view?usp=sharing", "_blank")}
                    >
                        <font color="Black">View Resume </font>
                    </button>
                    <button
                        onClick={() => window.open("https://www.linkedin.com/in/manini2205/", "_blank")}
                    >
                        <font color="Black">Connect</font>
                    </button>
                </div>

                {/* Bottom Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <div className="scroll-line"></div>
                    <span className="scroll-flower">✿</span>
                </motion.div>

            </div>
        </section>
    );
}

export default About;