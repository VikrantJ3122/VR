import React, { useEffect } from 'react';
import { FiX, FiDownload, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1100 }}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 900,
          width: '95vw',
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 28px',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
          paddingBottom: 14,
          borderBottom: '1px solid var(--border-subtle)',
          flexWrap: 'wrap',
          gap: 12
        }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)' }}>
              {personalInfo.name} — Curriculum Vitae
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Official Resume (PDF) • Ready for Download
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            >
              <FiDownload size={15} />
              <span>Download PDF</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.88rem' }}
              title="Open in new tab"
            >
              <FiExternalLink size={15} />
            </a>

            <button
              className="modal-close"
              onClick={onClose}
              style={{ position: 'static' }}
              aria-label="Close resume viewer"
            >
              <FiX />
            </button>
          </div>
        </div>

        {/* Embedded PDF iframe */}
        <div style={{ flex: 1, width: '100%', borderRadius: 12, overflow: 'hidden', background: '#0b0f19' }}>
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=1`}
            title={`${personalInfo.name} Resume`}
            width="100%"
            height="100%"
            style={{ border: 'none', minHeight: '65vh' }}
          />
        </div>
      </div>
    </div>
  );
};
