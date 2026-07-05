import "../styles/projectCard.css";

function ProjectCard({ project }) {
    const title = project?.title || "Project";
    const description = project?.description || "No description available yet.";
    const github = project?.github || "#";
    const techStack = Array.isArray(project?.TechStack)
        ? project.TechStack
        : Array.isArray(project?.techStack)
            ? project.techStack
            : [];
    const learnings = project?.learnings || project?.Learnings || "";

    return (
        <div className="featuredCard">
            <span className="featuredTag">Featured Project</span>
            <h2>{title}</h2>
            <p>{description}</p>

            <h3>Tech Stack</h3>
            <div className="stack">
                {techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>

            {learnings && (
                <div className="learningsContainer">
                    <h4 className="learningsHeading">Key Learnings</h4>
                    <p className="learningsText">{learnings}</p>
                </div>
            )}

            <a href={github} target="_blank" rel="noreferrer" className="githubLink">
                View on GitHub →
            </a>
        </div>
    );
}

export default ProjectCard;