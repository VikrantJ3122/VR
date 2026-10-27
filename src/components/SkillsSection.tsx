import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { FiCode, FiDatabase, FiServer, FiCpu, FiTool, FiCloud, FiSearch } from 'react-icons/fi';

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <FiCode style={{ color: '#818cf8' }} />,
  'Web & Backend': <FiServer style={{ color: '#38bdf8' }} />,
  Database: <FiDatabase style={{ color: '#34d399' }} />,
  'Computer Science': <FiCpu style={{ color: '#fbbf24' }} />,
  Tools: <FiTool style={{ color: '#f472b6' }} />,
  Cloud: <FiCloud style={{ color: '#a78bfa' }} />,
};

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competencies</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-desc">
            A comprehensive overview of programming languages, frameworks, cloud foundations, and computer science fundamentals.
          </p>

          <div style={{ maxWidth: 360, margin: '24px auto 0 auto', position: 'relative' }}>
            <FiSearch style={{ position: 'absolute', left: 14, top: 14, color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search skills (e.g. Java, OpenCV)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ width: '100%', paddingLeft: 42 }}
            />
          </div>
        </div>

        <div className="skills-container">
          {skillCategories.map((category) => {
            const filteredSkills = category.skills.filter(
              (s) =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.descriptor.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div key={category.title} className="skill-category-card">
                <h3 className="skill-cat-title">
                  {categoryIcons[category.title] || <FiCode />}
                  <span>{category.title}</span>
                </h3>

                <div className="skill-items">
                  {filteredSkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div>
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-desc">{skill.descriptor}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
