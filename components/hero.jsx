const Hero = () => (
  <section style={{
    background: 'var(--hl-deep-forest)',
    color: 'var(--hl-parchment)',
    padding: '120px 32px 140px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* subtle radial vignette */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 70% 30%, rgba(61,74,46,.5), transparent 60%)',
      pointerEvents: 'none',
    }} />
    <div style={{
      maxWidth: 'var(--container-marketing)', margin: '0 auto',
      position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 64, alignItems: 'center',
    }}>
      <div>
        <div className="hl-eyebrow" style={{ color: 'var(--hl-olive-300)', marginBottom: 20 }}>
          WEXFORD — PENNSYLVANIA
        </div>
        <h1 style={{ fontSize: 72, lineHeight: 1.05, color: 'var(--hl-parchment)', marginBottom: 20, letterSpacing: '-.015em' }}>
          We handle the books.<br/>
          <span style={{ fontStyle: 'italic', color: 'var(--hl-olive-300)' }}>You run the business.</span>
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--fg-on-dark-muted)', maxWidth: 540, marginBottom: 36 }}>
          Trusted accounting and tax services for Western Pennsylvania businesses.
          Steady, plain-spoken, and rooted in the work.
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <a className="hl-btn" href="#" onClick={(e) => { e.preventDefault(); window.openConsult(); }}
             style={{ background: 'var(--hl-parchment)', color: 'var(--hl-deep-forest)' }}>
            SCHEDULE A FREE CONSULTATION
          </a>
          <a className="hl-btn hl-btn--secondary" href="#services-summary"
             style={{ borderColor: 'var(--hl-parchment)', color: 'var(--hl-parchment)' }}>
            OUR SERVICES
          </a>
        </div>
      </div>
      {/* placeholder portrait-ish image slot */}
      <div style={{
        aspectRatio: '4/5', borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(155deg, #2a3520, #1e3320 60%, #142217)',
        border: '1px solid rgba(212,207,196,.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg width="160" height="200" viewBox="0 0 100 130" fill="none" stroke="rgba(168,191,138,.45)" strokeWidth=".5">
          {/* stylized hemlock tree silhouette */}
          {[...Array(7)].map((_, i) => {
            const y = 22 + i * 12;
            const w = 14 + i * 6;
            return <path key={i} d={`M ${50-w} ${y+10} L 50 ${y} L ${50+w} ${y+10} Z`} fill="rgba(168,191,138,.08)" />;
          })}
          <rect x="48" y="115" width="4" height="12" fill="rgba(168,191,138,.3)" />
        </svg>
        <div style={{
          position: 'absolute', bottom: 18, left: 20,
          fontFamily: 'var(--font-sans)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 2,
          color: 'rgba(212,207,196,.55)',
        }}>
          IMAGE SLOT — heritage portrait
        </div>
      </div>
    </div>
  </section>
);
window.Hero = Hero;
