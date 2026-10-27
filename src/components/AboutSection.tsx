import React from 'react';
import { personalInfo } from '../data/profile';
import { FiBookOpen, FiAward, FiDownload, FiFileText } from 'react-icons/fi';

interface AboutSectionProps {
  onViewResumeClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onViewResumeClick }) => {
  return (
    <section id="about" className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Background & Highlights</span>
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-desc">
            Academic milestones, hackathon achievements, and proven leadership impact.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28, marginBottom: 40 }}>
          {/* Education Card */}
          <div className="skill-category-card">
            <h3 className="skill-cat-title">
              <FiBookOpen style={{ color: 'var(--accent-glow)' }} />
              <span>Education</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {personalInfo.education.map((edu, idx) => (
                <div key={idx} style={{
                  padding: '14px 16px',
                  background: 'var(--bg-card-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 12
                }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.98rem', marginBottom: 4 }}>
                    {edu.degree}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: 6 }}>
                    {edu.institution}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span>{edu.period}</span>
                    <span style={{ color: 'var(--cyan-glow)', fontWeight: 600 }}>{edu.status || edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements Card */}
          <div className="skill-category-card">
            <h3 className="skill-cat-title">
              <FiAward style={{ color: '#fbbf24' }} />
              <span>Key Achievements</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {personalInfo.achievements.map((ach, idx) => (
                <div key={idx} style={{
                  padding: '12px 14px',
                  background: 'var(--bg-card-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 12
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.92rem' }}>
                      {ach.title}
                    </span>
                    <span style={{
                      fontSize: '0.72rem',
                      padding: '2px 8px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      color: '#fbbf24',
                      borderRadius: 999
                    }}>
                      {ach.badge}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', margin: 0, lineHeight: 1.5 }}>
                    {ach.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Download Feature Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
          border: '1px solid var(--border-glow)',
          borderRadius: 20,
          padding: '28px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20
        }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: 6 }}>
              Looking for full credentials & resume?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
              Download the official ATS-ready Curriculum Vitae of {personalInfo.name} (PDF format).
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onViewResumeClick}
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <FiFileText size={16} />
              <span>Quick Preview</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)'
              }}
            >
              <FiDownload size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
