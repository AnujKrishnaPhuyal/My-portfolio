import { useEffect, useState } from 'react';
import { BriefcaseBusiness as Linkedin, GitFork as Github, Menu, X } from 'lucide-react';
import { navItems, personalInfo } from '../data/personal';
import { ThemeToggle } from './ThemeToggle';

export function Navbar({ theme, toggleTheme }: { theme: 'dark' | 'light'; toggleTheme: () => void }) {
  const [open, setOpen] = useState(false); const [active, setActive] = useState('home');
  useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-35% 0px -55%' }); document.querySelectorAll('main section[id]').forEach(s => observer.observe(s)); return () => observer.disconnect(); }, []);
  const go = (name: string) => { setOpen(false); document.getElementById(name.toLowerCase())?.scrollIntoView(); };
  return <header className="navbar"><div className="nav-inner"><button className="brand" onClick={() => go('Home')} aria-label="Go home"><span>{personalInfo.shortName}</span><strong>{personalInfo.name}</strong></button>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{navItems.map(item => <button className={active === item.toLowerCase() ? 'active' : ''} onClick={() => go(item)} key={item}>{item}</button>)}</nav>
    <div className="nav-actions">{personalInfo.github && <a className="nav-social" href={personalInfo.github} aria-label="GitHub"><Github size={18}/></a>}{personalInfo.linkedin && <a className="nav-social" href={personalInfo.linkedin} aria-label="LinkedIn"><Linkedin size={18}/></a>}<ThemeToggle theme={theme} toggle={toggleTheme}/><button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button></div>
  </div></header>;
}
