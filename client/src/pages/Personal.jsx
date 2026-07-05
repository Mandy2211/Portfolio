import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { getBooks } from "../services/api";
import "../styles/personal.css";

import butterfly1 from "../assets/butterfly1.png";
import butterfly2 from "../assets/butterfly2.png";

function Personal() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadBooks() {
            try {
                const data = await getBooks();
                if (Array.isArray(data)) {
                    setBooks(data);
                } else {
                    console.error("API did not return an array of books:", data);
                }
            } catch (error) {
                console.error("Error loading books:", error);
            } finally {
                setLoading(false);
            }
        }

        loadBooks();
    }, []);

    // Scattered interactive butterflies configuration spread all over the viewport height
    const butterflies = [
        { id: 1, src: butterfly1, className: "flutter-1 dodge-up-right", style: { top: "8%", left: "4%", width: "85px" } },
        { id: 2, src: butterfly2, className: "flutter-2 dodge-up-left", style: { top: "15%", right: "6%", width: "70px", animationDelay: "0.5s" } },
        { id: 3, src: butterfly1, className: "flutter-1 dodge-down-right", style: { top: "25%", left: "12%", width: "65px", animationDelay: "1s" } },
        { id: 4, src: butterfly2, className: "flutter-2 dodge-up-right", style: { top: "35%", right: "15%", width: "75px", animationDelay: "1.5s" } },
        { id: 5, src: butterfly1, className: "flutter-1 dodge-up-left", style: { top: "45%", left: "3%", width: "80px", animationDelay: "2s" } },
        { id: 6, src: butterfly2, className: "flutter-2 dodge-down-left", style: { top: "52%", right: "4%", width: "60px", animationDelay: "0.8s" } },
        { id: 7, src: butterfly1, className: "flutter-1 dodge-up-right", style: { top: "68%", left: "8%", width: "75px", animationDelay: "2.5s" } },
        { id: 8, src: butterfly2, className: "flutter-2 dodge-down-right", style: { top: "78%", right: "12%", width: "70px", animationDelay: "1.2s" } },
        { id: 9, src: butterfly1, className: "flutter-1 dodge-up-left", style: { top: "85%", left: "4%", width: "80px", animationDelay: "3s" } },
        { id: 10, src: butterfly2, className: "flutter-2 dodge-up-right", style: { top: "92%", right: "6%", width: "65px", animationDelay: "0.4s" } },
    ];

    return (
        <div className="personal-page">
            {/* Scattered interactive butterflies */}
            {butterflies.map((b) => (
                <img 
                    key={b.id}
                    src={b.src} 
                    alt="" 
                    aria-hidden="true" 
                    className={`decor-butterfly ${b.className}`} 
                    style={b.style} 
                />
            ))}

            <main className="personal-main">
                <h1 className="personal-title">My Personal Space 🌸</h1>
                <p className="personal-subtitle">
                    A curated collection of books that inspire me, quotes that stay with me, and little moments of comfort.
                </p>

                {loading ? (
                    <div className="loading-spinner" style={{ color: "#4a3a4e", fontSize: "1.2rem", fontWeight: 500 }}>
                        Unfolding pages... ✨
                    </div>
                ) : books.length > 0 ? (
                    <div className="books-grid">
                        {books.map((book) => (
                            <BookCard
                                key={book._id}
                                book={book}
                            />
                        ))}
                    </div>
                ) : (
                    <p style={{ color: "#7a6a7e" }}>No books found in the library yet.</p>
                )}
            </main>
        </div>
    );
}

export default Personal;