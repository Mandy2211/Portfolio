import { useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const scroll = (id) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <nav className="navbar">
            <div
                className="logo"
                onClick={() => scroll("about")}
                style={{ cursor: "pointer" }}
            >
                Manini ♡
            </div>

            <ul>
                <li onClick={() => scroll("about")}>About</li>
                <li onClick={() => scroll("experience")}>Experience</li>
                <li onClick={() => scroll("projects")}>Projects</li>
                <li onClick={() => scroll("contact")}>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;