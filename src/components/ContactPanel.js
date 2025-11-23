import React from 'react';

function ContactPanel({ contact }) {
  return (
    <div className="contact-panel">
      <div className="contact-panel__glow" />
      <div className="contact-panel__content">
        <p className="contact-panel__label">Ready for new missions</p>
        <h3>Let's build the next cosmic story</h3>
        <p>{contact.availability}</p>
        <div className="contact-panel__rows">
          <div className="contact-panel__row">
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="contact-panel__row">
            <span>Location</span>
            <p>{contact.location}</p>
          </div>
        </div>
        <a className="contact-panel__cta" href={`mailto:${contact.email}`}>
          Open communications
        </a>
      </div>
    </div>
  );
}

export default ContactPanel;
