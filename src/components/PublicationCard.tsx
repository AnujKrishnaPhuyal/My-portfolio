import { BookOpen, Copy, ExternalLink } from 'lucide-react';
import type { Publication } from '../types';
export function PublicationCard({ publication }: { publication: Publication }) {
  const cite = () => navigator.clipboard?.writeText(`${publication.authors}. “${publication.title}.” ${publication.venue}, ${publication.year}.`);
  return <article className="publication"><div className="pub-icon"><BookOpen/></div><div><span className={`pub-status ${publication.status === 'Research in Progress' ? 'progress' : ''}`}>{publication.status}</span><h3>{publication.title}</h3><p className="pub-meta">{publication.authors} <b>·</b> {publication.venue} <b>·</b> {publication.year}</p><p>{publication.abstract}</p><div className="tags">{publication.keywords.map(k => <span key={k}>{k}</span>)}</div><div className="pub-actions"><button onClick={cite}><Copy size={15}/> Copy citation</button>{publication.pdf && <a href={publication.pdf}>PDF <ExternalLink size={15}/></a>}{publication.doi && <a href={publication.doi}>DOI <ExternalLink size={15}/></a>}{publication.scholar && <a href={publication.scholar}>Scholar <ExternalLink size={15}/></a>}</div></div></article>;
}
