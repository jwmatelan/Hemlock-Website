// Reusable pricing components — render once per service-line page
// (Bookkeeping or Tax). Pulls service object from window.PRICING_DATA.

// ---------- HERO ----------
const ServiceHero = ({ service, kicker = 'PRICING' }) => (
  <section data-screen-label={`${service.label} — Hero`} style={{
    background: 'var(--hl-deep-forest)',
    color: 'var(--hl-parchment)',
    padding: '120px 32px 100px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 30% 30%, rgba(61,74,46,.45), transparent 60%)',
      pointerEvents: 'none',
    }} />
    <div style={{
      maxWidth: 'var(--container-marketing)', margin: '0 auto', position: 'relative',
      textAlign: 'center',
    }}>
      <div className="hl-eyebrow" style={{ color: 'var(--hl-olive-300)', marginBottom: 20 }}>
        {kicker} — {service.eyebrow}
      </div>
      <h1 style={{ fontSize: 64, lineHeight: 1.05, color: 'var(--hl-parchment)', letterSpacing: '-.015em', maxWidth: 900, margin: '0 auto 22px' }}>
        {service.headline}<br/>
        <span style={{ fontStyle: 'italic', color: 'var(--hl-olive-300)' }}>{service.italic}</span>
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--fg-on-dark-muted)', maxWidth: 640, margin: '0 auto' }}>
        {service.supporting}
      </p>
    </div>
  </section>
);

// ---------- TIER CARD ----------
const TierCard = ({ tier, idx }) => {
  const [hover, setHover] = React.useState(false);
  const isRec = idx === 1;
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: isRec ? 'var(--hl-saddle-300)' : '#fff',
        border: '1px solid',
        borderColor: isRec ? 'rgba(139,94,60,.35)' : (hover ? 'rgba(30,51,32,.24)' : 'var(--border-hairline)'),
        borderRadius: 'var(--radius-md)',
        padding: '36px 32px 32px',
        position: 'relative',
        boxShadow: isRec ? 'var(--shadow-md)' : (hover ? 'var(--shadow-sm)' : 'none'),
        transform: isRec ? 'translateY(-8px)' : 'none',
        transition: 'box-shadow var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {isRec && (
        <div style={{
          position: 'absolute', top: -1, left: -1, right: -1, height: 4,
          background: 'var(--hl-defender)',
          borderTopLeftRadius: 'var(--radius-md)', borderTopRightRadius: 'var(--radius-md)',
        }} />
      )}

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, marginBottom: 8 }}>
        <div>
          <div className="hl-eyebrow" style={{
            marginBottom: 4,
            color: isRec ? 'var(--hl-saddle-900)' : 'var(--fg-accent)',
            fontSize: 11,
          }}>
            {isRec ? `TIER ${tier.roman} — MOST CHOSEN` : `TIER ${tier.roman}`}
          </div>
          <h3 style={{ fontSize: 28, color: 'var(--fg-1)', letterSpacing: '-.01em', margin: 0, lineHeight: 1.1 }}>
            {tier.name}
          </h3>
        </div>
        <div style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
          fontSize: 56, lineHeight: 1, letterSpacing: '-.02em',
          color: isRec ? 'var(--hl-saddle)' : 'var(--hl-olive-500)',
          opacity: .85,
        }}>{tier.roman}</div>
      </div>

      <p style={{
        fontFamily: 'var(--font-serif)', fontStyle: 'italic',
        color: 'var(--fg-accent)', fontSize: 17, lineHeight: 1.35,
        margin: '0 0 22px',
      }}>
        {tier.tagline}
      </p>

      <div style={{
        alignSelf: 'flex-start',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '7px 12px',
        background: isRec ? 'rgba(255,255,255,.55)' : 'var(--bg-surface-alt)',
        border: '1px solid',
        borderColor: isRec ? 'rgba(139,94,60,.2)' : 'var(--border-hairline)',
        borderRadius: 'var(--radius-xs)',
        marginBottom: 24,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--hl-deep-forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
        </svg>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
          color: 'var(--fg-1)', letterSpacing: '.02em',
        }}>{tier.cadence}</span>
      </div>

      {tier.inherits && (
        <div style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          color: 'var(--fg-accent)', fontSize: 15, lineHeight: 1.4,
          margin: '0 0 14px',
          paddingBottom: 14,
          borderBottom: '1px solid',
          borderColor: isRec ? 'rgba(139,94,60,.25)' : 'var(--border-hairline)',
        }}>
          — {tier.inherits}, plus —
        </div>
      )}

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 11 }}>
        {tier.included.map((f, i) => (
          <li key={i} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            fontSize: 14.5, lineHeight: 1.5, color: 'var(--fg-2)',
            fontFamily: 'var(--font-sans)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="var(--hl-defender)" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round"
                 style={{ flexShrink: 0, marginTop: 3 }}>
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {tier.excluded && tier.excluded.length > 0 && (
        <div style={{
          paddingTop: 14,
          borderTop: '1px dashed',
          borderColor: 'var(--border-hairline)',
          marginBottom: 28,
        }}>
          <div className="hl-eyebrow" style={{ fontSize: 10, marginBottom: 10, color: 'var(--fg-3)' }}>
            NOT INCLUDED
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {tier.excluded.map((f, i) => (
              <li key={i} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                fontSize: 13.5, lineHeight: 1.5, color: 'var(--fg-3)',
                fontFamily: 'var(--font-sans)',
              }}>
                <span style={{
                  flexShrink: 0, marginTop: 1,
                  fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1,
                  color: 'var(--fg-3)',
                }}>—</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ flex: 1 }} />

      <a
        href="#" onClick={(e) => { e.preventDefault(); window.openConsult && window.openConsult(); }}
        className={isRec ? 'hl-btn hl-btn--primary' : 'hl-btn hl-btn--secondary'}
        style={{ alignSelf: 'stretch', justifyContent: 'center' }}
      >
        REQUEST A QUOTE
      </a>
    </div>
  );
};

// ---------- TIERS GRID ----------
const TierGrid = ({ service }) => (
  <section data-screen-label={`${service.label} — Tiers`} style={{
    background: 'var(--bg-page)', padding: '100px 32px 60px',
  }}>
    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch',
      }}>
        {service.tiers.map((t, i) => <TierCard key={t.roman} tier={t} idx={i} />)}
      </div>
      <p style={{
        marginTop: 40, maxWidth: 760,
        fontFamily: 'var(--font-serif)', fontStyle: 'italic',
        fontSize: 16, color: 'var(--fg-accent)', lineHeight: 1.5,
      }}>
        — {service.footnote}
      </p>
    </div>
  </section>
);

window.ServiceHero = ServiceHero;
window.TierCard = TierCard;
window.TierGrid = TierGrid;
