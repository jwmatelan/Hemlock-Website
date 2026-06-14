// Two large service-line tiles — Bookkeeping + Tax — each with a tier breakdown
// and a CTA linking to the detail page. Drops in on index.html in place of the
// old testimonial.

const ServiceTile = ({ eyebrow, title, italic, body, points, href, ctaLabel }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: '1px solid',
        borderColor: hover ? 'rgba(30,51,32,.32)' : 'var(--border-hairline)',
        borderRadius: 'var(--radius-md)',
        padding: '44px 44px 40px',
        display: 'flex', flexDirection: 'column',
        textDecoration: 'none', color: 'inherit',
        boxShadow: hover ? 'var(--shadow-md)' : 'none',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div className="hl-eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>
      <h3 style={{ fontSize: 38, marginBottom: 10, letterSpacing: '-.01em', lineHeight: 1.1 }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-serif)', fontStyle: 'italic',
        color: 'var(--fg-accent)', fontSize: 19, lineHeight: 1.35,
        margin: '0 0 22px',
      }}>{italic}</p>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: '0 0 24px' }}>
        {body}
      </p>
      <div style={{
        borderTop: '1px solid var(--border-hairline)', paddingTop: 22, marginBottom: 28,
      }}>
        <div className="hl-eyebrow" style={{ fontSize: 11, marginBottom: 14 }}>TIERS</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {points.map((p, i) => (
            <li key={i} style={{
              display: 'flex', gap: 12, alignItems: 'baseline',
              fontSize: 14.5, color: 'var(--fg-2)',
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                color: 'var(--hl-saddle)', fontSize: 16, fontWeight: 700,
                minWidth: 32,
              }}>{p.roman} —</span>
              <span><strong style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{p.name}.</strong> {p.note}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13,
        textTransform: 'uppercase', letterSpacing: 2,
        color: 'var(--hl-deep-forest)',
      }}>
        {ctaLabel}
        <svg width="18" height="14" viewBox="0 0 24 18" fill="none"
             style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform var(--dur-fast) var(--ease)' }}>
          <path d="M1 9h21M15 1l8 8-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
};

const ServiceTiles = () => (
  <section id="services-summary" data-screen-label="Home — Service Tiles" style={{
    background: 'var(--hl-mist)', padding: '120px 32px',
    scrollMarginTop: 'var(--nav-height)',
  }}>
    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto' }}>
      <div style={{ marginBottom: 64, maxWidth: 720 }}>
        <div className="hl-eyebrow" style={{ marginBottom: 14 }}>HOW WE ENGAGE</div>
        <h2 style={{ fontSize: 44, marginBottom: 18, letterSpacing: '-.01em' }}>
          Two service lines. Three tiers each.
        </h2>
        <p style={{ fontSize: 17 }}>
          Bookkeeping and tax are scoped separately so you only pay for what you need.
          Each engagement is quoted up front as a flat fee — monthly for bookkeeping, annual for tax.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        <ServiceTile
          eyebrow="MONTHLY BOOKKEEPING"
          title="Accurate books, every month."
          italic="Clean financials. Peace of mind."
          body="From foundation bookkeeping to a full strategic advisor partnership. Customized to your transaction volume and the season your business is in."
          points={[
            { roman: 'I',   name: 'The Foundation', note: 'Reconciliation, monthly statements, 1099 prep.' },
            { roman: 'II',  name: 'The Steward',    note: 'Job-level tracking, management reports, KPI dashboard.' },
            { roman: 'III', name: 'The Counsel',    note: 'Rolling forecasts, scenario modeling, lender packages.' },
          ]}
          href="bookkeeping.html"
          ctaLabel="SEE BOOKKEEPING DETAILS"
        />
        <ServiceTile
          eyebrow="TAX PLANNING & PREPARATION"
          title="Clean returns. Fewer surprises."
          italic="Plan ahead. Pay less."
          body="Business taxes and personal taxes belong together. We coordinate both, keep you in compliance, and plan around where you're going — not just where you've been."
          points={[
            { roman: 'I',   name: 'The Foundation', note: 'Business & owner return prep, federal & state filing.' },
            { roman: 'II',  name: 'The Steward',    note: 'Mid-year planning, entity review, projection.' },
            { roman: 'III', name: 'The Counsel',    note: 'Quarterly planning, multi-year strategy, M&A support.' },
          ]}
          href="tax.html"
          ctaLabel="SEE TAX DETAILS"
        />
      </div>

      <div style={{
        marginTop: 48,
        textAlign: 'center',
        fontFamily: 'var(--font-serif)', fontStyle: 'italic',
        fontSize: 17, color: 'var(--fg-accent)',
      }}>
        Not sure where to start? — that's what the free consultation is for.
      </div>
    </div>
  </section>
);

window.ServiceTiles = ServiceTiles;
