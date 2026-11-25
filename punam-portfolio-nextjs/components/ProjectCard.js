import Link from 'next/link';

export default function ProjectCard({ p, featured }) {
  const cls = 'card' + (featured ? ' big' : '');
  const inner = (
    <>
      <div className="cover"><b>{p.title}</b>{p.chips && <ul className="chips">{p.chips.slice(0, 6).map((c) => <li key={c}>{c}</li>)}</ul>}</div>
      <div className="cbody">
        <span className="tag">{p.tag}</span>
        <h3>{p.title}</h3>
        <p>{p.card}</p>
        {p.highlights && <ul className="hl" aria-label="Project focus">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
        <span className="more">{p.cta || 'Read case study'}{p.url ? ' ↗' : ''}</span>
      </div>
    </>
  );
  // Cards with an external URL open that site in a new tab; others open the internal case study.
  return p.url ? (
    <a className={cls} href={p.url} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <Link className={cls} href={`/projects/${p.slug}`}>{inner}</Link>
  );
}
