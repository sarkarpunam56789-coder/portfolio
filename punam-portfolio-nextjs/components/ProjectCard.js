import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ p, featured }) {
  return (
    <Link className={'card' + (featured ? ' big' : '')} href={`/projects/${p.slug}`}>
      {p.cover ? (
        <div className="cover img"><Image src={p.cover.src} alt="" width={p.cover.w} height={p.cover.h} sizes="(max-width:720px) 100vw, 560px" /></div>
      ) : (
        <div className="cover"><b>{p.title}</b>{p.chips && <ul className="chips">{p.chips.slice(0, 6).map((c) => <li key={c}>{c}</li>)}</ul>}</div>
      )}
      <div className="cbody">
        <span className="tag">{p.tag}</span>
        <h3>{p.title}</h3>
        <p>{p.card}</p>
        <span className="more">Read case study</span>
      </div>
    </Link>
  );
}
