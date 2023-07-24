import myResume from '../../assets/Old_Resume.pdf';
import { useState } from 'react';

const proficiencies = [
  'HTML',
  'CSS',
  'Git',
  'JavaScript',
  'Bootstrap',
  'The DOM',
  'APIs',
  'JQuery',
  'JSON',
  'AJAX',
  'Computer science fundamentals',
  'Team collaboration',
  'Agile development',
  'Project demonstration',
  'Node',
  'ES6',
  'Object-oriented programming',
  'Express',
  'MySQL',
  'MVC paradigm',
  'Sequelize',
  'Progressive Web Apps',
  'Handlebars',
  'MongoDB',
  'Mongoose',
  'RESTful APIs',
  'GraphQL',
  'Authentication',
  'IndexedDB',
  'Service workers',
  'React',
  'NoSQL',
  'MERN Stack',
];

export default function Resume() {
  const [hoveredProficiency, setHoveredProficiency] = useState(null);

  const handleProficiencyHover = (index) => {
    setHoveredProficiency(index);
  };

  const handleProficiencyLeave = () => {
    setHoveredProficiency(null);
  };

  return (
    <div className="text-center d-flex flex-column align-items-center">
      <h1 className="mb-3">Want Some More Background?</h1>
      <p>Grab a copy of my resume here:</p>
      <a href={myResume} download={myResume} className="btn">
        Download Jon's Resume
      </a>

      <h2 className="my-4">A Quick Look My Skills:</h2>
      <div className="mb-2 d-flex flex-wrap justify-content-center container proficiencyContainer">
        {proficiencies.map((proficiency, index) => (
          <li
            key={index}
            className={
              index % 2 === 0 ? 'list-group-item active' : 'list-group-item'
            }
            onMouseEnter={() => handleProficiencyHover(index)}
            onMouseLeave={handleProficiencyLeave}
            style={{
              transform:
                hoveredProficiency === index ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.15s ease',
              fontWeight: hoveredProficiency === index ? 'bold' : 'normal',
            }}>
            {proficiency}
          </li>
        ))}
      </div>
    </div>
  );
}
