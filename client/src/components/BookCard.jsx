import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// Roughly how many characters fit in the clamped quote before it starts
// getting cut off — tune if you change the card size or font.
const QUOTE_CLAMP_THRESHOLD = 160;

function BookCard({ book }) {
    if (!book) return null;

    const fixedImageName = book.coverImage ? book.coverImage.replace('.jpg', '.png') : '';
    const [flipped, setFlipped] = useState(false);
    const [showFullQuote, setShowFullQuote] = useState(false);

    const quote = book.favoriteQuote || "No favorite quote shared yet.";
    const isQuoteLong = quote.length > QUOTE_CLAMP_THRESHOLD;

    // Close the overlay on Escape
    useEffect(() => {
        if (!showFullQuote) return;
        function handleKey(e) {
            if (e.key === "Escape") setShowFullQuote(false);
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [showFullQuote]);

    return (
        <>
            <div
                className={`book-card-container ${flipped ? 'flipped' : ''}`}
                onClick={() => setFlipped(!flipped)}
            >
                <div className="book-card-inner">
                    {/* Front of the Card */}
                    <div className="book-card-front">
                        {fixedImageName ? (
                            <img
                                src={`${import.meta.env.BASE_URL}books/${fixedImageName}`}
                                alt={book.title || "Book Cover"}
                                className="book-cover"
                            />
                        ) : (
                            <div className="book-cover-placeholder">📖</div>
                        )}
                        <h3 className="book-title">{book.title || "Untitled"}</h3>
                        <p className="book-author">by {book.author || "Unknown Author"}</p>
                    </div>

                    {/* Back of the Card (Quote) */}
                    <div className="book-card-back">
                        <div className="quote-container">
                            <span className="quote-icon">“</span>
                            <p className="book-quote">{quote}</p>
                            {isQuoteLong && (
                                <button
                                    className="read-full-quote"
                                    onClick={(e) => {
                                        e.stopPropagation(); // don't flip the card back
                                        setShowFullQuote(true);
                                    }}
                                >
                                    Read full quote
                                </button>
                            )}
                            <span className="quote-author">— {book.author || "Unknown"}</span>
                        </div>
                    </div>
                </div>
            </div>

            {showFullQuote &&
                createPortal(
                    <div className="quote-overlay" onClick={() => setShowFullQuote(false)}>
                        <div
                            className="quote-page"
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                        >
                            <button
                                className="quote-page-close"
                                onClick={() => setShowFullQuote(false)}
                                aria-label="Close"
                            >
                                ✕
                            </button>
                            <span className="quote-page-icon">“</span>
                            <p className="quote-page-text">{quote}</p>
                            <div className="quote-page-author">— {book.author || "Unknown"}</div>
                            <div className="quote-page-title">from {book.title || "Untitled"}</div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}

export default BookCard;