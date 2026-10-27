import React from 'react';
import { FiCode, FiDownload, FiSend, FiFileText } from 'react-icons/fi';
import { personalInfo } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onContactClick: () => void;
  onViewResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onViewResumeClick }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="brand-logo">
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.15rem'
          }}>
            <FiCode />
          </div>
          <span style={{ fontWeight: 800 }}>{personalInfo.name}</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li>
            <button
              onClick={onViewResumeClick}
              className="btn-secondary"
              style={{
                padding: '6px 14px',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                borderColor: 'var(--border-glow)',
                color: 'var(--accent-glow)'
              }}
              title="View & Download Resume"
            >
              <FiFileText size={14} />
              <span>Resume</span>
            </button>
          </li>
          <li>
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="btn-secondary"
              style={{
                padding: '6px 12px',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
              }}
              title="Direct Download Resume PDF"
            >
              <FiDownload size={14} />
              <span>Download</span>
            </a>
          </li>
          <li>
            <button
              onClick={onContactClick}
              className="nav-cta"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <FiSend size={14} />
              <span>Contact</span>
            </button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};
