const CtaBand = () => (
  <section id="contact" data-screen-label="Home — Contact CTA" style={{
    background: 'var(--hl-saddle-300)',
    padding: '88px 32px',
    borderTop: '1px solid rgba(139,94,60,.2)',
    borderBottom: '1px solid rgba(139,94,60,.2)',
    scrollMarginTop: 'var(--nav-height)',
  }}>
    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
      <div>
        <div className="hl-eyebrow" style={{ marginBottom: 12, color: 'var(--hl-saddle-900)' }}>
          FREE CONSULTATION
        </div>
        <h2 style={{ fontSize: 38, margin: 0, maxWidth: 560 }}>
          Tell us about your business.
          <span style={{ fontStyle: 'italic', color: 'var(--hl-saddle)' }}> We'll listen.</span>
        </h2>
      </div>
      <a className="hl-btn hl-btn--primary" href="#" onClick={(e) => { e.preventDefault(); window.openConsult(); }}>
        SCHEDULE A CALL
      </a>
    </div>
  </section>
);
window.CtaBand = CtaBand;
