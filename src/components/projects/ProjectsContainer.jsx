import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
