import React from 'react';
import { experiences } from '../data/experience';
import { FiCheckCircle, FiBriefcase } from 'react-icons/fi';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-desc">
            Hands-on software development and project leadership track record in fast-paced environments.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div className="exp-period">
                  <FiBriefcase style={{ marginRight: 6, verticalAlign: -1 }} />
                  {exp.period}
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.description.map((bullet, idx) => (
                  <li key={idx}>
                    <FiCheckCircle className="bullet-dot" size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
