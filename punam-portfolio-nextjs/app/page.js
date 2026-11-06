import ProjectCard from '../components/ProjectCard';
import ResumeSection from '../components/ResumeSection';
import { site } from '../content/site';

export default function Home() {
  const { hero, about } = site;
  return (
    <>
      <section className="hero"><div className="wrap hgrid">
        <div>
          <p className="avail">{hero.badge}</p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.text}</p>
          <div className="cta">
            <a className="btn p" href="/projects/scratchly-crm-dashboard">View Scratchly case study</a>
            <a className="btn s" href={site.resume.file} download={site.resume.downloadName}>Download resume</a>
          </div>
        </div>
        <aside className="ledger" aria-label="Internship summary">
          <h2>{hero.ledgerTitle}</h2><p>{hero.ledgerText}</p>
          <ul className="chips">{hero.ledger.map((c) => <li key={c}>{c}</li>)}</ul>
        </aside>
      </div></section>

      <section className="sec" id="work"><div className="wrap">
        <div className="head"><h2>Selected work</h2><p>One internship project and two self-initiated concepts.</p></div>
        <div className="grid">{site.projects.map((p, i) => <ProjectCard key={p.slug} p={p} featured={i === 0} />)}</div>
      </div></section>

      <section className="sec" id="experience"><div className="wrap exp">
        <h2>Experience</h2>
        <div>{site.experience.map((e) => (
          <article className="job" key={e.role}>
            <h3>{e.role}, {e.company}</h3><small>{e.dates}</small>
            <ul>{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <a className="btn s" href={e.link.href}>{e.link.label}</a>
          </article>))}
        </div>
      </div></section>

      <section className="sec" id="skills"><div className="wrap">
        <div className="head"><h2>Skills and tools</h2></div>
        <div className="skills">{site.skills.map((s) => (
          <div key={s.group}><h3>{s.group}</h3><ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul></div>))}
        </div>
      </div></section>

      <section className="sec" id="about"><div className="wrap about">
        <h2>{about.title}</h2>
        <div>{about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
      </div></section>

      <section className="sec" id="education"><div className="wrap">
        <div className="head"><h2>Education and certificates</h2></div>
        <div className="certs">
          {site.education.map((e) => <div key={e.name}><h3>{e.name}</h3><p>{e.by} · {e.when}</p></div>)}
          {site.certificates.map((c) => <div key={c.name}><h3>{c.name}</h3><p>{c.by} · {c.when}</p></div>)}
        </div>
      </div></section>

      <ResumeSection resume={site.resume} />

      <section className="sec contact" id="contact"><div className="wrap">
        <h2>{site.contact.title}</h2>
        <p style={{ marginTop: 18 }}>{site.contact.text}</p>
        <p className="loc">{site.location}</p>
        <div className="links">
          <a className="btn p" href={`mailto:${site.email}`}>{site.email}</a>
          <a className="btn s" href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a className="btn s" href={site.behance} target="_blank" rel="noopener">Behance</a>
        </div>
      </div></section>
    </>
  );
}
