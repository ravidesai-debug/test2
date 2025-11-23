import React from 'react';

function ProjectCard({ name, description, stack, status }) {
  return (
    <article className="project-card">
      <div className="project-card__glow" />
      <div className="project-card__content">
        <div className="project-card__header">
          <h3>{name}</h3>
          <span className="project-card__status">{status}</span>
        </div>
        <p>{description}</p>
        <ul className="project-card__stack">
          {stack.map((item) => (
            <li key={`${name}-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
