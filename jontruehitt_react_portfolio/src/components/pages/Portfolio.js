import Project from '../Project';
import projects from '../../project_list';

export default function Portfolio() {
  return (
    <div className="container mb-4">
      <h1 className="text-center">Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
}
