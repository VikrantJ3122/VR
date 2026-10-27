import React, { useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiLinkedin, FiGithub, FiPhone, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Communication</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-desc">
            Have an open role, an exciting project proposal, or want to discuss technology? I'd love to connect.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: 16 }}>
              Let's build something impactful together.
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 28, fontSize: '0.98rem', lineHeight: '1.7' }}>
              I am actively seeking software engineering and developer opportunities. Feel free to reach out directly via email, phone, or LinkedIn.
            </p>

            <div className="contact-method">
              <div className="contact-icon-box">
                <FiMail />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Email</div>
                <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-heading)', textDecoration: 'none', fontWeight: 600 }}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon-box" style={{ color: '#34d399', background: 'rgba(52, 211, 153, 0.15)' }}>
                <FiPhone />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Phone</div>
                <a href={`tel:${personalInfo.phone}`} style={{ color: 'var(--text-heading)', textDecoration: 'none', fontWeight: 600 }}>
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon-box" style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)' }}>
                <FiMapPin />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Location</div>
                <div style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{personalInfo.location}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '10px 16px', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <FiGithub />
                <span>riddhigodse</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '10px 16px', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="btn-secondary"
                style={{
                  padding: '10px 16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  borderColor: 'rgba(16, 185, 129, 0.4)',
                  color: '#34d399'
                }}
              >
                <FiDownload />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                required
                placeholder="Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                required
                placeholder="alex@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your role or project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-textarea"
              />
            </div>

            {status === 'success' && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 16px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: 10,
                color: '#34d399',
                fontSize: '0.9rem'
              }}>
                <FiCheckCircle size={18} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary"
              style={{ justifyContent: 'center' }}
            >
              <FiSend size={16} />
              <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
