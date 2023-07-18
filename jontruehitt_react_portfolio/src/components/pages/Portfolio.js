import Project from '../Project';
import projects from '../../assets/project_list.js';


export default function Portfolio() {
  return (
    <div className="mb-4">
      <h1 className="text-center">Portfolio Pieces</h1>
      <Project projects={projects} />
    </div>
  );
}
