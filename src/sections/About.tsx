import { BrainCircuit, Code2, GraduationCap, Microscope, Network, Sparkles } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle'; import { Reveal } from '../components/Reveal';
import { aboutContent } from '../data/about';
const icons={education:GraduationCap,research:Microscope,publication:Sparkles,ai:BrainCircuit,llm:Network,software:Code2};
export function About(){const c=aboutContent;return <section id="about" className="section"><div className="container"><Reveal><SectionTitle eyebrow={c.eyebrow} title={c.title} description={c.description}/></Reveal><div className="about-grid"><Reveal><div className="about-copy"><p className="lead">{c.lead}</p>{c.paragraphs.map(p=><p key={p}>{p}</p>)}</div></Reveal><Reveal className="stat-grid">{c.highlights.map(({icon,label})=>{const Icon=icons[icon];return <div className="stat" key={label}><Icon/><span>{label}</span></div>})}</Reveal></div></div></section>}
