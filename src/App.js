import React from './lib/mini-react.js';
import Section from './components/Section.js';
import HighlightCard from './components/HighlightCard.js';
import ProjectCard from './components/ProjectCard.js';
import SkillGrid from './components/SkillGrid.js';
import TimelineItem from './components/TimelineItem.js';
import ContactPanel from './components/ContactPanel.js';
import NavBar from './components/NavBar.js';
import { highlights, projects, skills, timeline, contact } from '../data/content.js';

const h = React.createElement;

function Hero() {
  const stats = [
    { label: 'Missions launched', value: '25+' },
    { label: 'Collaborators', value: '40 teams' },
    { label: 'Avg. impact', value: '↑32% engagement' },
  ];
  return h(
    'section',
    { className: 'hero', id: 'top' },
    h('div', { className: 'hero__orbital-glow' }),
    h(
      'div',
      { className: 'hero__content' },
      h('p', { className: 'hero__eyebrow' }, 'Product Engineer · Story-driven Creator'),
      h('h1', null, 'Space themed portfolio for bold collaborations'),
      h(
        'p',
        { className: 'hero__lede' },
        'I build cinematic digital experiences that feel like stepping onto the bridge of a spacecraft—calm, capable, and ready for the next adventure.'
      ),
      h(
        'div',
        { className: 'hero__actions' },
        h('a', { className: 'button button--primary', href: '#contact' }, 'Schedule a mission briefing'),
        h('a', { className: 'button button--ghost', href: '#projects' }, 'View flagship work')
      ),
      h(
        'ul',
        { className: 'hero__stats' },
        ...stats.map((item) =>
          h(
            'li',
            null,
            h('span', { className: 'hero__stat-value' }, item.value),
            h('span', { className: 'hero__stat-label' }, item.label)
          )
        )
      )
    )
  );
}

function HighlightsSection() {
  return h(
    Section,
    {
      id: 'experience',
      eyebrow: 'Trajectory',
      title: 'Experience highlights',
      subtitle: 'Pairing curiosity with disciplined execution to keep ambitious missions on course.',
    },
    h(
      'div',
      { className: 'highlight-grid' },
      ...highlights.map((card) => h(HighlightCard, card))
    )
  );
}

function ProjectsSection() {
  return h(
    Section,
    {
      id: 'projects',
      eyebrow: 'Flagship work',
      title: 'Projects from the frontier',
      subtitle: 'Systems thinking meets visual storytelling across data platforms, commerce, and research.',
    },
    h(
      'div',
      { className: 'project-grid' },
      ...projects.map((project) => h(ProjectCard, project))
    )
  );
}

function SkillsSection() {
  return h(
    Section,
    {
      id: 'skills',
      eyebrow: 'Capabilities',
      title: 'Mission skillset',
      subtitle: 'A balanced toolkit for shaping end-to-end product journeys.',
    },
    h(SkillGrid, { skills })
  );
}

function TimelineSection() {
  return h(
    Section,
    {
      id: 'timeline',
      eyebrow: 'Orbit log',
      title: 'Flight path',
      subtitle: 'Roles that sharpened my craft.',
      compact: true,
    },
    h(
      'ul',
      { className: 'timeline' },
      ...timeline.map((entry) => h(TimelineItem, entry))
    )
  );
}

function ContactSection() {
  return h(
    Section,
    {
      id: 'contact',
      eyebrow: 'Communications',
      title: 'Let\'s shape the next story',
      subtitle: 'Reach out for product leadership, prototyping sprints, or full mission builds.',
      compact: true,
    },
    h(ContactPanel, { contact })
  );
}

function Footer() {
  return h(
    'footer',
    { className: 'footer' },
    h('p', null, 'Crafted in the void with intention and code.'),
    h('span', null, '© ' + new Date().getFullYear() + ' Stellar Portfolio')
  );
}

function App() {
  return h(
    'div',
    { className: 'app-shell' },
    h('div', { className: 'stars stars--one' }),
    h('div', { className: 'stars stars--two' }),
    h('div', { className: 'stars stars--three' }),
    h(NavBar),
    h('main', null, h(Hero), h(HighlightsSection), h(ProjectsSection), h(SkillsSection), h(TimelineSection), h(ContactSection)),
    h(Footer)
  );
}

export default App;
