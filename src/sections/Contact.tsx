import { BriefcaseBusiness as Linkedin, Mail, MapPin } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { SocialLinks } from '../components/SocialLinks';
import { contactContent } from '../data/contact';
import { personalInfo } from '../data/personal';

export function Contact() {
  const c = contactContent;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow={c.eyebrow} title={c.title} description={c.description} />
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-copy">
              <h3>{c.lead}</h3>
              <p>{c.body}</p>

              <a className="contact-detail" href={`mailto:${personalInfo.email}`}>
                <Mail />
                <div>
                  <span>Email</span>
                  <strong>{personalInfo.email}</strong>
                </div>
              </a>

              <a
                className="contact-detail"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
                <div>
                  <span>LinkedIn</span>
                  <strong>Anuj Krishna Phuyal</strong>
                </div>
              </a>

              <div className="contact-detail">
                <MapPin />
                <div>
                  <span>Location</span>
                  <strong>{personalInfo.location}</strong>
                </div>
              </div>

              <SocialLinks labeled />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
