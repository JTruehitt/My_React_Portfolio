import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Project({ projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectHover = (projectName) => {
    setHoveredProject(projectName);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center projects-container">
      {projects.map((project) => (
        <div
          className="card project"
          key={project.name}
          style={{ backgroundImage: `url(${project.image})` }}
          onMouseEnter={() => handleProjectHover(project.name)}
          onMouseLeave={() => handleProjectLeave()}>
          <div className="card-body">
            <h3 className="card-title text-center">{project.name}</h3>
            {hoveredProject === project.name && (
              <>
              <p className="card-text">{project.description}</p>
              <div className="card-links">
                <a href={project.github}>
                  <FaGithub className="icon fs-1" />
                </a>
                <a href={project.deployed} className="btn">
                  Launch App
                </a>
              </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
