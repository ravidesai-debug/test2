import React from 'react';

function SkillGrid({ skills }) {
  return (
    <div className="skill-grid">
      {skills.map((skill) => (
        <article key={skill.name} className="skill-tile">
          <h3>{skill.name}</h3>
          <p>{skill.details}</p>
        </article>
      ))}
    </div>
  );
}

export default SkillGrid;
