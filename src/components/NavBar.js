import React from '../lib/mini-react.js';

const h = React.createElement;

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function NavBar() {
  return h(
    'header',
    { className: 'nav' },
    h('div', { className: 'nav__logo' }, 'Stellar Portfolio'),
    h(
      'nav',
      null,
      h(
        'ul',
        null,
        ...links.map((link) => h('li', null, h('a', { href: link.href }, link.label)))
      )
    )
  );
}

export default NavBar;
