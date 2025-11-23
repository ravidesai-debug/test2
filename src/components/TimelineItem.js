import React from '../lib/mini-react.js';

const h = React.createElement;

function TimelineItem({ title, period, description }) {
  return h(
    'li',
    { className: 'timeline-item' },
    h('div', { className: 'timeline-item__marker' }),
    h('div', { className: 'timeline-item__content' },
      h('p', { className: 'timeline-item__period' }, period),
      h('h3', null, title),
      h('p', null, description)
    )
  );
}

export default TimelineItem;
