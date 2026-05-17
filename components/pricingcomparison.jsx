// Feature-comparison table for a single service line.
// Reads `service.comparison` groups and renders a Deep-Forest header
// + alternating rows. Middle column gets a saddle tint.

const TIER_LABELS = ['The Foundation', 'The Steward', 'The Counsel'];

const ComparisonCell = ({ v, recommended }) => {
  if (v === true) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="var(--hl-defender)" strokeWidth="2"
           strokeLinecap="round" strokeLinejoin="round" aria-label="Included">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    );
  }
  if (v === false) {
    return <span style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1 }} aria-label="Not included">—</span>;
  }
  return (
    <span style={{
      fontFamily: 'var(--font-sans)', fontSize: 14,
      color: recommended ? 'var(--hl-deep-forest)' : 'var(--fg-2)',
      fontWeight: recommended ? 600 : 500,
    }}>{v}</span>
  );
};

const Comparison = ({ service }) => (
  <section data-screen-label={`${service.label} — Comparison`} style={{
    background: 'var(--hl-mist)', padding: '120px 32px',
  }}>
    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto' }}>
      <div style={{ marginBottom: 56, maxWidth: 680 }}>
        <div className="hl-eyebrow" style={{ marginBottom: 14 }}>WHAT'S INCLUDED</div>
        <h2 style={{ fontSize: 40, marginBottom: 16, letterSpacing: '-.01em' }}>The three tiers, line by line.</h2>
        <p style={{ fontSize: 17 }}>
          Every feature laid out so you can see exactly where each tier ends and the next begins.
        </p>
      </div>

      <div style={{
        background: '#fff',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
      }}>
        {/* Header row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          background: 'var(--hl-deep-forest)',
          color: 'var(--hl-parchment)',
          padding: '24px 28px',
          alignItems: 'end',
        }}>
          <div className="hl-eyebrow" style={{ color: 'var(--hl-olive-300)' }}>FEATURE</div>
          {TIER_LABELS.map((name, i) => (
            <div key={name} style={{ textAlign: 'center', position: 'relative' }}>
              {i === 1 && (
                <div className="hl-eyebrow" style={{
                  color: 'var(--hl-saddle-400)', fontSize: 10, marginBottom: 6,
                }}>MOST CHOSEN</div>
              )}
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: 19,
                color: i === 1 ? 'var(--hl-saddle-300)' : 'var(--hl-parchment)',
                fontWeight: 700, letterSpacing: '-.005em',
                lineHeight: 1.1,
              }}>{name}</div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 12,
                color: 'var(--fg-on-dark-muted)', marginTop: 6,
                textTransform: 'uppercase', letterSpacing: 1.5,
              }}>
                {`Tier ${['I', 'II', 'III'][i]}`}
              </div>
            </div>
          ))}
        </div>

        {service.comparison.map((g, gi) => (
          <React.Fragment key={g.group}>
            <div style={{
              padding: '24px 28px 14px',
              borderTop: gi > 0 ? '1px solid var(--border-hairline)' : 'none',
              background: 'var(--bg-surface-alt)',
            }}>
              <div className="hl-eyebrow" style={{ fontSize: 11 }}>{g.group.toUpperCase()}</div>
            </div>
            {g.rows.map((row, ri) => (
              <div key={ri} style={{
                display: 'grid',
                gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
                padding: '18px 28px',
                alignItems: 'center',
                borderTop: '1px solid var(--border-hairline)',
                background: ri % 2 === 0 ? '#fff' : 'rgba(212,207,196,.18)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-sans)', fontSize: 14.5,
                  color: 'var(--fg-1)', fontWeight: 500,
                }}>{row[0]}</div>
                {[row[1], row[2], row[3]].map((v, ci) => (
                  <div key={ci} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: ci === 1 ? 'rgba(139,94,60,.06)' : 'transparent',
                    padding: ci === 1 ? '8px 0' : 0,
                    borderRadius: ci === 1 ? 'var(--radius-xs)' : 0,
                  }}>
                    <ComparisonCell v={v} recommended={ci === 1} />
                  </div>
                ))}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

window.Comparison = Comparison;
