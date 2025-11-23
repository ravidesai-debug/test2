import React from 'react';

function HighlightCard({ label, title, description, metric }) {
  return (
    <article className="highlight-card">
      <p className="highlight-card__label">{label}</p>
      <h3 className="highlight-card__title">{title}</h3>
      <p className="highlight-card__description">{description}</p>
      <span className="highlight-card__metric">{metric}</span>
    </article>
  );
}

export default HighlightCard;
