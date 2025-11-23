import React from './lib/mini-react.js';
import Section from './components/Section.js';
import HighlightCard from './components/HighlightCard.js';
import ProjectCard from './components/ProjectCard.js';
import SkillGrid from './components/SkillGrid.js';
import TimelineItem from './components/TimelineItem.js';
import ContactPanel from './components/ContactPanel.js';
import NavBar from './components/NavBar.js';
import { highlights, projects, skills, timeline, contact } from '../data/content.js';

function Hero() {
  const stats = [
    { label: 'Missions launched', value: '25+' },
    { label: 'Collaborators', value: '40 teams' },
    { label: 'Avg. impact', value: '↑32% engagement' },
  ];

  return (
    <section className="hero" id="top">
      <div className="hero__orbital-glow" />
      <div className="hero__content">
        <p className="hero__eyebrow">Product Engineer · Story-driven Creator</p>
        <h1>Space themed portfolio for bold collaborations</h1>
        <p className="hero__lede">
          I build cinematic digital experiences that feel like stepping onto the bridge of a spacecraft—calm, capable, and
          ready for the next adventure.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contact">
            Schedule a mission briefing
          </a>
          <a className="button button--ghost" href="#projects">
            View flagship work
          </a>
        </div>
        <ul className="hero__stats">
          {stats.map((item) => (
            <li key={item.label}>
              <span className="hero__stat-value">{item.value}</span>
              <span className="hero__stat-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <Section
      id="experience"
      eyebrow="Trajectory"
      title="Experience highlights"
      subtitle="Pairing curiosity with disciplined execution to keep ambitious missions on course."
    >
      <div className="highlight-grid">
        {highlights.map((card) => (
          <HighlightCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  );
}

function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Flagship work"
      title="Projects from the frontier"
      subtitle="Systems thinking meets visual storytelling across data platforms, commerce, and research."
    >
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Mission skillset"
      subtitle="A balanced toolkit for shaping end-to-end product journeys."
    >
      <SkillGrid skills={skills} />
    </Section>
  );
}

function TimelineSection() {
  return (
    <Section
      id="timeline"
      eyebrow="Orbit log"
      title="Flight path"
      subtitle="Roles that sharpened my craft."
      compact
    >
      <ul className="timeline">
        {timeline.map((entry) => (
          <TimelineItem key={`${entry.title}-${entry.period}`} {...entry} />
        ))}
      </ul>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Communications"
      title="Let's shape the next story"
      subtitle="Reach out for product leadership, prototyping sprints, or full mission builds."
      compact
    >
      <ContactPanel contact={contact} />
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Crafted in the void with intention and code.</p>
      <span>© {new Date().getFullYear()} Stellar Portfolio</span>
    </footer>
  );
}

function App() {
  return (
    <div className="app-shell">
      <div className="stars stars--one" />
      <div className="stars stars--two" />
      <div className="stars stars--three" />
      <NavBar />
      <main>
        <Hero />
        <HighlightsSection />
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
