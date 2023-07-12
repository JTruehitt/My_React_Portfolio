import Project from "../Project";
import projects from "../../project_list";

export default function Portfolio() {
    return (
        <div>
        <h1>Portfolio</h1>
        <Project projects={projects} />
        </div>
    );
    }
