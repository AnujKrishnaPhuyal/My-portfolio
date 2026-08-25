import { BriefcaseBusiness as Linkedin, GitFork as Github, GraduationCap, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';
const links = [
  { label: 'GitHub', href: personalInfo.github, icon: Github }, { label: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin },
  { label: 'Google Scholar', href: personalInfo.googleScholar, icon: GraduationCap }, { label: 'Email', href: personalInfo.email ? `mailto:${personalInfo.email}` : '', icon: Mail }
];
export function SocialLinks({ labeled = false }: { labeled?: boolean }) {
  return <div className={`socials ${labeled ? 'labeled' : ''}`}>{links.map(({ label, href, icon: Icon }) => href ? <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}><Icon size={18}/>{labeled && <span>{label}</span>}</a> : <span key={label} className="social-disabled" title={`Add ${label} in src/data/personal.ts`} aria-label={`${label} link not configured`}><Icon size={18}/>{labeled && <span>{label}</span>}</span>)}</div>;
}
