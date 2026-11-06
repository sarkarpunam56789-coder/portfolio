import './globals.css';
import Header from '../components/Header';
import { site } from '../content/site';

export const metadata = {
  title: site.title,
  description: site.description,
  openGraph: { title: site.title, description: site.description, type: 'website' },
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Hanken+Grotesk:wght@400;500;700&display=swap" />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header name={site.name} resume={site.resume.file} />
        <main id="main" tabIndex={-1}>{children}</main>
        <footer><div className="wrap">© {new Date().getFullYear()} {site.name}. UI/UX designer.</div></footer>
      </body>
    </html>
  );
}
