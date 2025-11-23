import React from '../lib/mini-react.js';

const h = React.createElement;

function SkillGrid({ skills }) {
  return h(
    'div',
    { className: 'skill-grid' },
    ...skills.map((skill) =>
      h(
        'article',
        { className: 'skill-tile' },
        h('h3', null, skill.name),
        h('p', null, skill.details)
      )
    )
  );
}

export default SkillGrid;
