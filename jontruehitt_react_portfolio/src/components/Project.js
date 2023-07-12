export default function Project({ projects }) {
    
    return (
        <ul className="list-group">
            {projects.map((project) => (
                <li className="list-group-item" key={project.name}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <img src={project.image} alt={project.name} />
                    <a href={project.github}>GitHub</a>
                    <a href={project.deployed}>Deployed</a>
                </li>
            ))}
        </ul>
    );
}


