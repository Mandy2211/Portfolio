import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaKaggle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// Import your assets
import i1 from "../assets/i1.png"; 
import i2 from "../assets/i2.png";
import "../styles/footer.css";

function KittyFooter() {
    const navigate = useNavigate();
    const [isHappy, setIsHappy] = useState(false);

    // Animation for the kitty
    useEffect(() => {
        const interval = setInterval(() => setIsHappy((prev) => !prev), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="kitty-footer">
            <div className="footer-content">
                {/* Left Side: Your Professional Info */}
                <div className="footer-left">
                    <h2>Manini Rajbhar</h2>
                    <p className="role">ML Engineer • Full Stack Developer</p>
                    <a href="mailto:maninirajbhar28@gmail.com" className="footer-email">
                        <SiGmail className="email-icon" />
                        <span>maninirajbhar28@gmail.com</span>
                    </a>
                    <div className="social-links">
                        <a href="https://github.com/Mandy2211" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://www.kaggle.com/" target="_blank" rel="noreferrer"><FaKaggle /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                </div>

                {/* Right Side: The Kitty Portal */}
                <div className="footer-right" onClick={() => navigate("/personal")}>
                    <div className="kitty-wrapper">
                        <img src={isHappy ? i2 : i1} alt="kitty" className="kitty-img" />
                        <span className="caption">Little Corner ♡</span>
                    </div>
                </div>
            </div>
            
            <p className="copyright">© 2026 Manini Rajbhar</p>
        </footer>
    );
}

export default KittyFooter;