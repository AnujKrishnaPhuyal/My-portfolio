import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, MapPin } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { education } from '../data/education';
import { experiences } from '../data/experience';

export function EducationExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section alt">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Background"
            title="Education & experience"
            description="A foundation in computer science, applied AI research, and hands-on experimentation."
          />
        </Reveal>

        <Reveal>
          <article className="education-card">
            <div className="edu-icon">
              <GraduationCap />
            </div>
            <div>
              <span className="kicker">Education</span>
              <h3>{education.degree}</h3>
              <h4>{education.school}</h4>
              <div className="muted-row">
                <span>{education.dates}</span>
                <span>{education.gpa}</span>
              </div>
              <p>{education.detail}</p>
              <div className="tags">
                {education.coursework.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="timeline">
          {experiences.map((e) => (
            <Reveal key={e.title}>
              <article className={`experience ${e.placeholder ? 'placeholder' : ''}`}>
                <span className="timeline-dot">
                  <BriefcaseBusiness size={17} />
                </span>
                <div className="experience-head">
                  <div>
                    <span className="kicker">{e.category}</span>
                    <h3>{e.title}</h3>
                    <h4>{e.organization}</h4>
                  </div>
                  <div className="experience-where">
                    <span>{e.dates}</span>
                    <span>
                      <MapPin size={14} />
                      {e.location}
                    </span>
                  </div>
                </div>
                <p>{e.description}</p>
                <ul className="achievement-list">
                  {e.achievements.map((achievement, index) => (
                    <motion.li
                      key={achievement}
                      initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                      whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
                      whileHover={reduceMotion ? {} : { x: 4 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
                <div className="tags">
                  {e.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
