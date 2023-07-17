// export default function Project({ projects }) {
    
//     return (
//         <ul className="d-flex flex-wrap">
//             {projects.map((project) => (
//                 <li className="list-group-item project" key={project.name}>
//                     <h3>{project.name}</h3>
//                     <p>{project.description}</p>
//                     <img src={project.image} alt={project.name} />
//                     <a href={project.github}>GitHub</a>
//                     <a href={project.deployed}>Deployed</a>
//                 </li>
//             ))}
//         </ul>
//     );
// }


export default function Project({ projects }) {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project) => (
          <div className="card project" key={project.name} style={{ backgroundImage: `url(${project.image})` }}>
            <div className="card-body">
              <h3 className="card-title">{project.name}</h3>
              <p className="card-text">{project.description}</p>
              <div className="card-links">
                <a href={project.github} className="btn btn-primary">GitHub</a>
                <a href={project.deployed} className="btn btn-primary">Deployed</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }