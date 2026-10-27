import React, { useState } from 'react';
import { projects, projectCategories, type Project } from '../data/projects';
import { FiArrowRight, FiAward, FiEye } from 'react-icons/fi';

interface ProjectsSectionProps {
  onSelectProject: (p: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(selectedCategory));

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-desc">
            Explore recent AI algorithms, computer vision pipelines, full-stack systems, and cybersecurity utilities.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="filter-tabs">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured-card' : ''}`}
            >
              {project.featured && <span className="featured-pill">Featured</span>}

              <div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                  {project.category.map((c) => (
                    <span key={c} style={{ fontSize: '0.75rem', color: '#818cf8', fontWeight: 600 }}>
                      #{c}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>

                {project.achievement && (
                  <div className="achievement-highlight">
                    <FiAward size={16} />
                    <span>{project.achievement}</span>
                  </div>
                )}

                <p className="project-desc">{project.shortDescription}</p>
              </div>

              <div>
                <div className="tech-tags">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-pill" style={{ color: '#818cf8' }}>
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                <div className="project-footer">
                  <button
                    className="btn-details"
                    onClick={() => onSelectProject(project)}
                  >
                    <FiEye size={16} />
                    <span>{project.caseStudy ? 'Read Case Study' : 'View Architecture'}</span>
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
