import { ArrowUpRight, GitFork as Github, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
export function ProjectCard({ project }: { project: Project }) {
  return <motion.article className={`project-card ${project.research ? 'research-card' : ''}`} whileHover={{ y: -6 }} transition={{ duration: .2 }}>
    <div className={`project-visual ${project.visual}`} aria-hidden="true">{project.image ? <img src={project.image} alt=""/> : <><div className="visual-orb"/><span>{project.visual === 'code' ? '</>' : project.title.slice(0, 2).toUpperCase()}</span></>}</div>
    <div className="project-body"><div className="card-top"><span className="status">{project.status}</span>{project.research && <FlaskConical size={18}/>}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div>
    {(project.url || project.github || project.githubFrontend || project.githubBackend || project.demo || project.paper) && <div className="card-links">{project.url && <a href={project.url} target="_blank" rel="noreferrer">Project<ArrowUpRight size={16}/></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16}/>Code</a>}{project.githubFrontend && <a href={project.githubFrontend} target="_blank" rel="noreferrer"><Github size={16}/>Frontend</a>}{project.githubBackend && <a href={project.githubBackend} target="_blank" rel="noreferrer"><Github size={16}/>Backend</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo<ArrowUpRight size={16}/></a>}{project.paper && <a href={project.paper} target="_blank" rel="noreferrer">Paper<ArrowUpRight size={16}/></a>}</div>}</div>
  </motion.article>;
}
