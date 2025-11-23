import React from '../lib/mini-react.js';

const h = React.createElement;

function Section(props) {
  const children = Array.isArray(props.children) ? props.children : [props.children];
  return h(
    'section',
    { id: props.id, className: `section ${props.compact ? 'section--compact' : ''}`.trim() },
    h(
      'div',
      { className: 'section__heading' },
      props.eyebrow
        ? h('p', { className: 'section__eyebrow' }, props.eyebrow)
        : null,
      h('div', { className: 'section__title-row' },
        h('h2', null, props.title),
        props.badge ? h('span', { className: 'section__badge' }, props.badge) : null
      ),
      props.subtitle ? h('p', { className: 'section__subtitle' }, props.subtitle) : null
    ),
    h('div', { className: 'section__body' }, ...children)
  );
}

export default Section;
