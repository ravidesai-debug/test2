import React from 'react';

function Section({ id, eyebrow, title, subtitle, badge, compact = false, children }) {
  return (
    <section id={id} className={`section ${compact ? 'section--compact' : ''}`.trim()}>
      <div className="section__heading">
        {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
        <div className="section__title-row">
          <h2>{title}</h2>
          {badge ? <span className="section__badge">{badge}</span> : null}
        </div>
        {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}

export default Section;
