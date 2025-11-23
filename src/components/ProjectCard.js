import React from '../lib/mini-react.js';

const h = React.createElement;

function ProjectCard({ name, description, stack, status }) {
  return h(
    'article',
    { className: 'project-card' },
    h('div', { className: 'project-card__glow' }),
    h('div', { className: 'project-card__content' },
      h('div', { className: 'project-card__header' },
        h('h3', null, name),
        h('span', { className: 'project-card__status' }, status)
      ),
      h('p', null, description),
      h(
        'ul',
        { className: 'project-card__stack' },
        ...stack.map((item) => h('li', null, item))
      )
    )
  );
}

export default ProjectCard;
