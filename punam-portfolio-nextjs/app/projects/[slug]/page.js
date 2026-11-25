import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '../../../content/site';

export function generateStaticParams() {
  return site.projects.filter((p) => !p.external).map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }) {
  const p = site.projects.find((x) => x.slug === params.slug);
  return p ? { title: `${p.title} — ${site.name}`, description: p.card } : {};
}

function PN({ p, dir }) {
  const label = dir === 'prev' ? `← ${p.title}` : `${p.title} →`;
  return p.external
    ? <a className="btn s" href={p.url} target="_blank" rel="noopener noreferrer">{label}</a>
    : <Link className="btn s" href={`/projects/${p.slug}`}>{label}</Link>;
}

export default function ProjectPage({ params }) {
  const list = site.projects;
  const k = list.findIndex((x) => x.slug === params.slug);
  if (k < 0 || list[k].external) notFound();
  const p = list[k], prev = list[k - 1], next = list[k + 1];
  return (
    <article className="study"><div className="wrap">
      <Link className="crumb" href="/#work">← All work</Link>
      <span className="tag" style={{ display: 'block', marginBottom: 12 }}>{p.tag}</span>
      <h1>{p.title}</h1>
      <p className="lead">{p.intro}</p>
      {p.url && <p style={{ margin: '28px 0 0' }}><a className="btn p" href={p.url} target="_blank" rel="noopener noreferrer">{p.cta || 'Open project'} ↗</a></p>}
      <dl className="meta">{p.meta.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl>
      {p.chips && <><h2 className="mini">What I worked on</h2><ul className="chips">{p.chips.map((c) => <li key={c}>{c}</li>)}</ul></>}
      {p.embed && (
        <div className="embed">
          <h2 className="mini">{p.embed.heading}</h2>
          <p>{p.embed.text}</p>
          <a className="btn p" href={p.embed.src} target="_blank" rel="noopener">Open full screen</a>
          <iframe src={p.embed.src} title={p.embed.title} loading="lazy" />
        </div>
      )}
      {p.images.length > 0 && (
        <div className="shots">{p.images.map((im) => (
          <figure key={im.src}><Image src={im.src} alt={im.alt} width={im.w} height={im.h} sizes="(max-width:1120px) 100vw, 1040px" /><figcaption>{im.caption}</figcaption></figure>))}
        </div>
      )}
      <div className="body">{p.sections.map(([h, b]) => (
        <section key={h} className="row"><h2>{h}</h2>
          <div>{Array.isArray(b) ? <ul>{b.map((x) => <li key={x}>{x}</li>)}</ul> : <p>{b}</p>}</div></section>))}
      </div>
      <div className="pn">
        {prev ? <PN p={prev} dir="prev" /> : <span />}
        {next ? <PN p={next} dir="next" /> : <Link className="btn p" href="/#contact">Get in touch</Link>}
      </div>
    </div></article>
  );
}
