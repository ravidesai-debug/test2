import React from '../lib/mini-react.js';

const h = React.createElement;

function HighlightCard({ label, title, description, metric }) {
  return h(
    'article',
    { className: 'highlight-card' },
    h('p', { className: 'highlight-card__label' }, label),
    h('h3', { className: 'highlight-card__title' }, title),
    h('p', { className: 'highlight-card__description' }, description),
    h('span', { className: 'highlight-card__metric' }, metric)
  );
}

export default HighlightCard;
