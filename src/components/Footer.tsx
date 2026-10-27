import React from 'react';
import { FiArrowUp, FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} title="GitHub">
            <FiGithub size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} title="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-secondary)' }} title="Email">
            <FiMail size={18} />
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.85rem' }}>
            Built with <FiHeart style={{ color: '#ef4444' }} /> for 2026
          </span>

          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '8px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
