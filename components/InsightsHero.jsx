const InsightsHero = () => (
  <section style={{
    background: 'var(--hl-deep-forest)',
    padding: '96px 32px 80px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Subtle texture layer */}
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.04,
      backgroundImage: 'radial-gradient(circle at 20% 50%, var(--hl-olive-300) 0%, transparent 60%), radial-gradient(circle at 80% 20%, var(--hl-saddle-300) 0%, transparent 50%)',
      pointerEvents: 'none',
    }} />

    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto', position: 'relative' }}>
      <div className="hl-eyebrow" style={{ color: 'var(--hl-olive-400)', marginBottom: 20 }}>
        HEMLOCK INSIGHTS
      </div>
      <h1 style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 5vw, 58px)',
        color: 'var(--hl-parchment)', lineHeight: 'var(--lh-tight)',
        maxWidth: 680, marginBottom: 24,
      }}>
        Clear thinking on tax, bookkeeping,
        <span style={{ fontStyle: 'italic', color: 'var(--hl-olive-300)' }}> and your business.</span>
      </h1>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-lg)',
        color: 'var(--fg-on-dark-muted)', maxWidth: 560, margin: 0,
        lineHeight: 'var(--lh-body)',
      }}>
        Practical guidance from our team — no jargon, no filler. Just the financial insights that help Western PA business owners make better decisions.
      </p>
    </div>
  </section>
);
window.InsightsHero = InsightsHero;
