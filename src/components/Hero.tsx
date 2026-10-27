import React from 'react';
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiDownload,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';
import { personalInfo } from '../data/profile';

interface HeroProps {
  onContactClick: () => void;
  onViewResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onViewResumeClick }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 20 }}>
          <div className="hero-pill" style={{ marginBottom: 0 }}>
            <span className="pulse-dot"></span>
            <span>Final Year Computer Engineering Student • Open to Opportunities</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <FiMapPin style={{ color: '#818cf8' }} />
            <span>{personalInfo.location}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <FiPhone style={{ color: '#34d399' }} />
            <a href={`tel:${personalInfo.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {personalInfo.phone}
            </a>
          </div>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>.<br />
          {personalInfo.title}
        </h1>

        <p className="hero-subtitle">
          {personalInfo.summary}
        </p>

        <div className="hero-actions">
          {/* Direct Resume Download */}
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            className="btn-primary"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)',
            }}
          >
            <FiDownload size={18} />
            <span>Download Resume</span>
          </a>

          {/* Quick Preview Resume Modal */}
          <button onClick={onViewResumeClick} className="btn-secondary">
            <FiFileText size={18} />
            <span>Preview Resume</span>
          </button>

          <a href="#projects" className="btn-secondary">
            <span>Explore Projects</span>
            <FiArrowRight />
          </a>

          <button onClick={onContactClick} className="btn-secondary">
            <FiMail />
            <span>Contact</span>
          </button>

          {/* Direct Social Links */}
          <div style={{ display: 'flex', gap: 10, marginLeft: 6 }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '12px 14px' }}
              title="GitHub Profile"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '12px 14px' }}
              title="LinkedIn Profile"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-secondary"
              style={{ padding: '12px 14px' }}
              title="Send Direct Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>

        {/* Highlight Stats */}
        <div className="stats-banner">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
              <FiBriefcase />
            </div>
            <div>
              <div className="stat-number">Nexonica Systems</div>
              <div className="stat-label">Software Development Intern (Jan 2026 – Present)</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
              <FiAward />
            </div>
            <div>
              <div className="stat-number">Cloud Architecting</div>
              <div className="stat-label">Cognizant – ICT Academy Certified</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee' }}>
              <FiAward />
            </div>
            <div>
              <div className="stat-number">7.48 CGPA</div>
              <div className="stat-label">B.E. Computer Engineering (PVG's COE, Nashik)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
