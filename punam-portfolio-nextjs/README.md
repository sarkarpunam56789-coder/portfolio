# Punam Sarkar portfolio (Next.js)

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Replace the resume (no code change)
Replace `public/resume.pdf` with your new PDF and keep the same filename.
The View button, Download button and the preview all read that one file.
On GitHub: open `public/`, click Add file > Upload files, drop the new `resume.pdf`, commit. Vercel redeploys automatically.

## Edit text
All text is in `content/site.js`: hero, about, experience, skills, education, certificates, contact links and every project.
To add screenshots to a project, put images in `public/images/` and add them to that project's `images` list.

## Deploy
Push to GitHub, import the repo in Vercel (Framework: Next.js, defaults), click Deploy. No environment variables are needed.
