import "../styles/projectGridCard.css";

function ProjectGridCard({project}){

    return(

        <div className="gridCard">

            <h2>

                {project.title}

            </h2>

            <p>

                {

                    project.description

                    .substring(0,180)

                }...

            </p>

            <div className="chips">

                {

                    project.TechStack.map((tech,index)=>(

                        <span key={index}>

                            {tech}

                        </span>

                    ))

                }

            </div>

            <a

                href={project.github}

                target="_blank"

                rel="noreferrer"

            >

                View Repository →

            </a>

        </div>

    )

}

export default ProjectGridCard;