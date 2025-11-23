import React from '../lib/mini-react.js';

const h = React.createElement;

function ContactPanel({ contact }) {
  return h(
    'div',
    { className: 'contact-panel' },
    h('div', { className: 'contact-panel__glow' }),
    h('div', { className: 'contact-panel__content' },
      h('p', { className: 'contact-panel__label' }, 'Ready for new missions'),
      h('h3', null, 'Let\'s build the next cosmic story'),
      h('p', null, contact.availability),
      h('div', { className: 'contact-panel__rows' },
        h('div', { className: 'contact-panel__row' },
          h('span', null, 'Email'),
          h('a', { href: `mailto:${contact.email}` }, contact.email)
        ),
        h('div', { className: 'contact-panel__row' },
          h('span', null, 'Location'),
          h('p', null, contact.location)
        )
      ),
      h('a', { className: 'contact-panel__cta', href: `mailto:${contact.email}` }, 'Open communications')
    )
  );
}

export default ContactPanel;
