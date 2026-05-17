const SERVICES = [
  {
    eyebrow: 'MONTHLY BOOKKEEPING',
    title: 'Accurate books, every month.',
    body: 'Clean financials. Peace of mind. We close the month so you can open the next one.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 14l4-4 4 4 5-5"/></svg>),
  },
  {
    eyebrow: 'BUSINESS TAX',
    title: 'Plan ahead. Pay less.',
    body: 'Quarterly check-ins, no April surprises. Federal, PA, and local business filings handled.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
  },
  {
    eyebrow: 'INDIVIDUAL TAX RETURNS',
    title: 'Your return, done right.',
    body: 'Personal 1040s for owners, families, and W-2 households. Straightforward filing, careful review.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>),
  },
  {
    eyebrow: 'ADVISORY / CFO',
    title: 'A steady hand on the numbers.',
    body: 'Forecasting, cash flow, entity structure, owner comp. The CFO conversation, monthly.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>),
  },
];

const ServiceCard = ({ s }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-md)',
        padding: 32,
        transition: 'box-shadow var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease)',
        boxShadow: hover ? 'var(--shadow-md)' : 'none',
        borderColor: hover ? 'rgba(30,51,32,.24)' : 'var(--border-hairline)',
        transform: hover ? 'translateY(-2px)' : 'none',
        cursor: 'pointer',
      }}
    >
      <div style={{ color: 'var(--hl-deep-forest)', marginBottom: 18 }}>{s.icon}</div>
      <div className="hl-eyebrow" style={{ marginBottom: 10 }}>{s.eyebrow}</div>
      <h3 style={{ fontSize: 24, marginBottom: 10, color: 'var(--fg-1)' }}>{s.title}</h3>
      <p style={{ fontSize: 15, color: 'var(--fg-2)', margin: 0, lineHeight: 1.55 }}>{s.body}</p>
      <div style={{ marginTop: 22, fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--hl-deep-forest)' }}>
        LEARN MORE →
      </div>
    </div>
  );
};

const Services = () => (
  <section id="services" data-screen-label="Home — Services" style={{ background: 'var(--bg-page)', padding: '120px 32px', scrollMarginTop: 'var(--nav-height)' }}>
    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto' }}>
      <div style={{ maxWidth: 640, marginBottom: 64 }}>
        <div className="hl-eyebrow" style={{ marginBottom: 14 }}>WHAT WE DO</div>
        <h2 style={{ fontSize: 48, marginBottom: 14 }}>Steady accounting, year-round.</h2>
        <p style={{ fontSize: 18 }}>Four service lines for businesses and the people who run them. Pick what you need — most clients start with bookkeeping and grow from there.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {SERVICES.map(s => <ServiceCard key={s.eyebrow} s={s} />)}
      </div>
    </div>
  </section>
);
window.Services = Services;
