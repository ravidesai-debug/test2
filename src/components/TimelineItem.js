import React from 'react';

function TimelineItem({ title, period, description }) {
  return (
    <li className="timeline-item">
      <div className="timeline-item__marker" />
      <div className="timeline-item__content">
        <p className="timeline-item__period">{period}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default TimelineItem;
