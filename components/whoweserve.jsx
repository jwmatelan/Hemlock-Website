const INDUSTRIES = [
  {
    name: 'Contractors & Trades',
    detail: 'Builders, electricians, plumbers, and HVAC professionals who keep Western PA running and need a CPA who understands the business of skilled work.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 12l-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15L22 10.64"/><path d="M20.91 11.7l-1.25-1.25a2.4 2.4 0 0 1 0-3.4l1.49-1.49a5 5 0 0 0-7.07 0L9.41 9.83a2.4 2.4 0 0 0 0 3.4l1.25 1.25"/></svg>),
  },
  {
    name: 'Oil & Gas',
    detail: 'Working interest owners and royalty recipients who need a CPA with genuine expertise in depletion, IDCs, lease income, and the tax rules that govern the industry.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18"/><path d="M5 20l5-12 4 7 3-4 4 9"/></svg>),
  },
  {
    name: 'Real Estate Investors',
    detail: 'Landlords and investors building long-term wealth through property — who want every deduction, every depreciation schedule, and every structure working in their favor.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2h-3v-7H10v7H5a2 2 0 0 1-2-2z"/></svg>),
  },
  {
    name: 'Restaurants & Retail',
    detail: 'Food and retail operators who run on tight margins and need clean books, strong cash flow visibility, and a CPA who understands the pace of the business.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.66 1.34 3 3 3s3-1.34 3-3V2M6 12v10"/><path d="M15 22V12a4 4 0 0 1 4-4V2"/></svg>),
  },
  {
    name: 'Professional Services',
    detail: 'Attorneys, consultants, agencies, and advisors who give counsel for a living — and deserve the same in return from their financial team.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-3V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M9 7V5h6v2"/></svg>),
  },
  {
    name: 'Growing Businesses',
    detail: 'New and expanding operations that want to get the financial foundation right from the start — entity structure, bookkeeping, and tax strategy done properly from day one.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c.5 5.4-1 8.7-3 11.3-1.8 2.6-4.2 4.4-7.2 5.74"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>),
  },
];

const IndustryCard = ({ ind }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-md)',
        padding: 28,
        transition: 'box-shadow var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease)',
        boxShadow: hover ? 'var(--shadow-md)' : 'none',
        borderColor: hover ? 'rgba(30,51,32,.24)' : 'var(--border-hairline)',
        transform: hover ? 'translateY(-2px)' : 'none',
        cursor: 'pointer',
        display: 'flex', flexDirection: 'column', height: '100%',
      }}
    >
      <div style={{ color: 'var(--hl-deep-forest)', marginBottom: 18 }}>{ind.icon}</div>
      <h3 style={{ fontSize: 22, marginBottom: 10, color: 'var(--fg-1)', lineHeight: 1.2 }}>{ind.name}</h3>
      <p style={{ fontSize: 14, color: 'var(--fg-2)', margin: 0, lineHeight: 1.6 }}>{ind.detail}</p>
    </div>
  );
};

const WhoWeServe = () => (
  <section id="who" data-screen-label="Home — Who We Serve" style={{ background: 'var(--hl-mist)', padding: '120px 32px', scrollMarginTop: 'var(--nav-height)' }}>
    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto' }}>
      <div style={{ marginBottom: 64, maxWidth: 720 }}>
        <div className="hl-eyebrow" style={{ marginBottom: 14 }}>WHO WE SERVE</div>
        <h2 style={{ fontSize: 44, marginBottom: 18 }}>Built for Western PA — and the people behind it.</h2>
        <p style={{ fontSize: 17 }}>
          We work with owner-operated businesses across six categories. Different books, same standards: accurate, on-time, and quietly thorough.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {INDUSTRIES.map(ind => <IndustryCard key={ind.name} ind={ind} />)}
      </div>
    </div>
  </section>
);
window.WhoWeServe = WhoWeServe;
