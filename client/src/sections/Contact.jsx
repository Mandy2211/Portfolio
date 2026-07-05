import { useState, useEffect } from "react";
import { sendMessage } from "../services/api";
import "../styles/contact.css";
import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState("idle");
    const [stars, setStars] = useState([]);
    const [leftToggle, setLeftToggle] = useState(false);
    const [rightToggle, setRightToggle] = useState(false);

    useEffect(() => {
        // Generate random placements for glittering stars
        const generated = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${2 + Math.random() * 3}px`,
            delay: `${Math.random() * 4}s`,
            duration: `${1.5 + Math.random() * 2}s`
        }));
        setStars(generated);
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");

        try {
            await sendMessage(form);
            setStatus("sent");
            setForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <section className="contact">
            {/* Glittering background stars */}
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className="glitter-star" 
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.delay,
                        animationDuration: star.duration
                    }}
                />
            ))}

            <div className="contactGlow glowOne" />
            <div className="contactGlow glowTwo" />

            <div style={{ position: 'relative', width: '100%', maxWidth: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                    src={leftToggle ? k2 : k1} 
                    onClick={() => setLeftToggle(!leftToggle)}
                    alt="Kitty"
                    style={{ 
                        position: 'absolute', 
                        left: '8vw', 
                        width: '140px', 
                        cursor: 'pointer', 
                        transition: 'transform 0.3s ease',
                        zIndex: 1 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                <div style={{ textAlign: 'center', padding: '0 40px', zIndex: 2, maxWidth: '800px' }}>
                    <p className="contactNote">My inbox is always open.</p>
                    <h1 style={{ color: 'white' }}>Let&apos;s Create Something Beautiful</h1>
                    <p className="contactIntro">
                        Whether you&apos;re hiring, collaborating, or just saying hello,
                        I&apos;d love to hear from you.
                    </p>
                </div>

                <img 
                    src={rightToggle ? cat2 : cat1} 
                    onClick={() => {
                        setRightToggle(true);
                        setTimeout(() => {
                            setRightToggle(false);
                        }, 1000);
                    }}
                    alt="Cat"
                    style={{ 
                        position: 'absolute', 
                        right: '8vw', 
                        width: '100px', 
                        cursor: 'pointer', 
                        transition: 'transform 0.3s ease',
                        zIndex: 1 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <input
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Message"
                    rows="7"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                />
                <button type="submit" disabled={status === "sending"}>
                    {status === "sending"
                        ? "Sending..."
                        : status === "sent"
                            ? "Message Sent 💌"
                            : "Send Message ♡"}
                </button>
            </form>

            <div className="socials">
                <a href="https://github.com/Mandy2211" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.kaggle.com/mandy3883" target="_blank" rel="noreferrer">Kaggle</a>
                <a href="https://www.instagram.com/m_x.core" target="_blank" rel="noreferrer">Instagram</a>
            </div>
        </section>
    );
}

export default Contact;
