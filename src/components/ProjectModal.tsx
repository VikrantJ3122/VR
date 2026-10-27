import React, { useEffect } from 'react';
import type { Project } from '../data/projects';
import { FiX, FiCheck, FiAward, FiLayers } from 'react-icons/fi';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {project.category.map((cat) => (
            <span key={cat} className="tech-pill" style={{ color: 'var(--accent-glow)', borderColor: 'var(--border-glow)' }}>
              {cat}
            </span>
          ))}
          {project.caseStudy && (
            <span className="featured-pill" style={{ position: 'static' }}>
              Case Study
            </span>
          )}
        </div>

        <h2 style={{ fontSize: '1.75rem', color: 'var(--text-heading)', marginBottom: 12 }}>
          {project.fullTitle || project.title}
        </h2>

        {project.achievement && (
          <div className="achievement-highlight">
            <FiAward size={18} />
            <span>{project.achievement}</span>
          </div>
        )}

        <div style={{ marginBottom: 24 }}>
          <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: 8, letterSpacing: '0.05em' }}>
            Overview
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {project.description}
          </p>
        </div>

        {project.features && project.features.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: 12, letterSpacing: '0.05em' }}>
              Key Modules & Features
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 10
            }}>
              {project.features.map((feat, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 12px',
                  background: 'var(--bg-card-subtle)',
                  borderRadius: 8,
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)'
                }}>
                  <FiCheck style={{ color: 'var(--emerald-glow)', flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: 10, letterSpacing: '0.05em' }}>
            Tech Stack
          </h4>
          <div className="tech-tags">
            {project.technologies.map((t) => (
              <span key={t} className="tech-pill" style={{ background: 'var(--pill-bg)', color: 'var(--pill-text)' }}>
                <FiLayers style={{ marginRight: 5, verticalAlign: -2 }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
