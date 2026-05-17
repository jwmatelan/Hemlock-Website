const Footer = () => (
  <footer style={{ background: 'var(--hl-deep-forest)', color: 'var(--fg-on-dark-muted)', padding: '72px 32px 32px' }}>
    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 56, marginBottom: 56 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <svg width="32" height="40" viewBox="0 0 100 130" fill="none" stroke="var(--hl-olive-400)" strokeWidth="1">
              {[...Array(6)].map((_, i) => {
                const y = 22 + i * 14;
                const w = 14 + i * 7;
                return <path key={i} d={`M ${50-w} ${y+10} L 50 ${y} L ${50+w} ${y+10} Z`} fill="var(--hl-olive-700)" />;
              })}
              <rect x="48" y="115" width="4" height="12" fill="var(--hl-olive-700)" />
            </svg>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--hl-parchment)', fontWeight: 600, letterSpacing: '.02em' }}>HEMLOCK</div>
              <div className="hl-eyebrow" style={{ color: 'var(--hl-olive-400)', fontSize: 10 }}>CPA COMPANY</div>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--hl-olive-300)', fontSize: 17, margin: 0, maxWidth: 320 }}>
            Rooted in Trust. Focused on Growth.
          </p>
        </div>
        {[
          { h: 'Services', items: ['Bookkeeping', 'Business Tax', 'Individual Tax', 'Advisory'] },
          { h: 'Firm', items: ['About', 'Process', 'Insights', 'Careers'] },
          { h: 'Contact', items: ['Wexford, PA', '(724) 555-0140', 'hello@hemlockcpa.com'] },
        ].map(col => (
          <div key={col.h}>
            <div className="hl-eyebrow" style={{ color: 'var(--hl-olive-400)', marginBottom: 18 }}>{col.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.items.map(i => (
                <li key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg-on-dark-muted)' }}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        borderTop: '1px solid var(--border-on-dark)', paddingTop: 24,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-on-dark-muted)',
      }}>
        <span>© 2026 Hemlock CPA Company, LLC.</span>
        <span style={{ letterSpacing: 2, textTransform: 'uppercase' }}>WEXFORD — PENNSYLVANIA</span>
      </div>
    </div>
  </footer>
);
window.Footer = Footer;
