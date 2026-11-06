// Both buttons and the preview read the SAME file: public/resume.pdf
export default function ResumeSection({ resume }) {
  return (
    <section className="sec" id="resume">
      <div className="wrap">
        <div className="head"><h2>Resume</h2><p>One page. View it here, open it in a new tab, or download it.</p></div>
        <div className="cta">
          <a className="btn p" href={resume.file} target="_blank" rel="noopener">View resume</a>
          <a className="btn s" href={resume.file} download={resume.downloadName}>Download resume</a>
        </div>
        <object className="pdf" data={`${resume.file}#view=FitH`} type="application/pdf" aria-label="Resume preview">
          <p>Your browser can’t show the preview. Use the buttons above.</p>
        </object>
        <p className="pdfnote">The inline preview is hidden on small screens. Use the buttons above.</p>
      </div>
    </section>
  );
}
