import { BookOpen, ExternalLink, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/personal';
import type { Publication } from '../types';

export function PublicationCard({ publication }: { publication: Publication }) {
  const scholarLink = publication.scholar || personalInfo.googleScholar;

  return (
    <article className="publication">
      <div className="pub-icon">
        <BookOpen />
      </div>
      <div>
        <span
          className={`pub-status ${
            publication.status === 'Research in Progress' ? 'progress' : ''
          }`}
        >
          {publication.status}
        </span>
        <h3>{publication.title}</h3>
        <p className="pub-meta">
          {publication.authors} <b>·</b> {publication.venue} <b>·</b> {publication.year}
        </p>
        <p>{publication.abstract}</p>
        <div className="tags">
          {publication.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
        <div className="pub-actions">
          <a href={scholarLink} target="_blank" rel="noreferrer">
            <GraduationCap size={15} /> Google Scholar
          </a>
          {publication.pdf && (
            <a href={publication.pdf}>
              PDF <ExternalLink size={15} />
            </a>
          )}
          {publication.doi && (
            <a href={publication.doi}>
              DOI <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
