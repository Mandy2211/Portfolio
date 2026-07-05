import fairy2 from "../assets/fairy2.png";

function ExperienceCard({ experience, index, hasFairy2 }) {

    const { year, title, place, badge, bullets, tags } = experience;

    return (

        <div
            className={`experienceCard ${index % 2 === 0 ? "left" : "right"}`}
        >

            {/* Fairy sits on the top edge of the card */}
            {hasFairy2 && (
                <div className="fairy2-wrapper">
                    <img src={fairy2} alt="fairy sitting on card" className="fairy2-img" />
                </div>
            )}

            <div className="card-header-row">
                <span className="year">{year}</span>
                {badge && <span className="card-badge">{badge}</span>}
            </div>

            <h2>{title}</h2>

            <h4>{place}</h4>

            {bullets && bullets.length > 0 && (
                <ul className="card-bullets">
                    {bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            )}

            {tags && tags.length > 0 && (
                <div className="card-tags">
                    {tags.map((tag, i) => (
                        <span key={i} className="card-tag">{tag}</span>
                    ))}
                </div>
            )}

        </div>

    );

}

export default ExperienceCard;