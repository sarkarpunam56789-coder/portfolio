'use client';
import Link from 'next/link';
import { useState } from 'react';

const LINKS = [['Work', '/#work'], ['Experience', '/#experience'], ['About', '/#about'], ['Resume', '/#resume'], ['Contact', '/#contact']];

export default function Header({ name, resume }) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap bar">
        <Link className="brand" href="/">{name}</Link>
        <nav aria-label="Main">
          <button className="menu" aria-expanded={open} aria-controls="nav-list" onClick={() => setOpen(!open)}>Menu</button>
          <ul id="nav-list" className={open ? 'open' : ''}>
            {LINKS.map(([t, h]) => <li key={h}><Link href={h} onClick={() => setOpen(false)}>{t}</Link></li>)}
            <li><a className="btn p" href={resume} target="_blank" rel="noopener">View resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
