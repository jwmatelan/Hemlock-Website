// Reusable add-ons grid + FAQ accordion.
// Both take a `service` object so the same components render
// per-service content on each pricing page.

// ============================================================
// ADD-ONS
// ============================================================

const AddOnCard = ({ item }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: '1px solid',
        borderColor: hover ? 'rgba(30,51,32,.24)' : 'var(--border-hairline)',
        borderRadius: 'var(--radius-md)',
        padding: '26px 26px 24px',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease)',
        boxShadow: hover ? 'var(--shadow-sm)' : 'none',
        height: '100%',
      }}
    >
      <div style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 44, height: 44, borderRadius: 'var(--radius-xs)',
        background: 'var(--hl-olive-100)',
        color: 'var(--hl-deep-forest)',
        marginBottom: 18,
      }}>{item.icon}</div>
      <h4 style={{ fontSize: 20, color: 'var(--fg-1)', marginBottom: 8, letterSpacing: '-.005em', lineHeight: 1.2 }}>
        {item.name}
      </h4>
      <p style={{ fontSize: 14, color: 'var(--fg-2)', margin: 0, lineHeight: 1.6 }}>
        {item.body}
      </p>
    </div>
  );
};

const AddOnsGrid = ({ service }) => (
  <section data-screen-label={`${service.label} — Add-ons`} style={{
    background: 'var(--bg-page)', padding: '120px 32px',
  }}>
    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto' }}>
      <div style={{ marginBottom: 56, maxWidth: 720 }}>
        <div className="hl-eyebrow" style={{ marginBottom: 14 }}>A LA CARTE</div>
        <h2 style={{ fontSize: 40, marginBottom: 16, letterSpacing: '-.01em' }}>
          One-off work, scoped to fit.
        </h2>
        <p style={{ fontSize: 17 }}>
          Bolt-on services for the things that don't happen every month. Each one is quoted up front,
          based on the work involved — never by the hour.
        </p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
      }}>
        {service.addons.map(a => <AddOnCard key={a.name} item={a} />)}
      </div>
    </div>
  </section>
);

// ============================================================
// FAQ
// ============================================================

const FAQItem = ({ item, open, onToggle }) => (
  <div style={{
    borderTop: '1px solid var(--border-hairline)',
    transition: 'background var(--dur-fast) var(--ease)',
  }}>
    <button
      onClick={onToggle}
      style={{
        width: '100%', textAlign: 'left',
        background: 'transparent', border: 'none', cursor: 'pointer',
        padding: '28px 0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        fontFamily: 'var(--font-serif)', fontWeight: 700,
        fontSize: 22, color: 'var(--fg-1)', letterSpacing: '-.005em',
        lineHeight: 1.3,
      }}
    >
      <span>{item.q}</span>
      <span style={{
        flexShrink: 0,
        width: 36, height: 36, borderRadius: '50%',
        border: '1px solid var(--border-hairline)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--hl-deep-forest)',
        transition: 'transform var(--dur-fast) var(--ease), background var(--dur-fast) var(--ease)',
        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        background: open ? 'var(--hl-saddle-300)' : 'transparent',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
      </span>
    </button>
    <div style={{
      maxHeight: open ? 320 : 0, overflow: 'hidden',
      transition: 'max-height var(--dur-base) var(--ease), opacity var(--dur-fast) var(--ease), padding var(--dur-base) var(--ease)',
      opacity: open ? 1 : 0,
      paddingBottom: open ? 28 : 0,
    }}>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--fg-2)',
        lineHeight: 1.65, margin: 0, maxWidth: 760,
      }}>{item.a}</p>
    </div>
  </div>
);

const FAQ = ({ service }) => {
  const [openIdx, setOpenIdx] = React.useState(0);
  const heading = service.id === 'bookkeeping' ? 'Bookkeeping questions' : 'Tax questions';
  return (
    <section data-screen-label={`${service.label} — FAQ`} style={{
      background: 'var(--bg-page)', padding: '40px 32px 120px',
    }}>
      <div style={{
        maxWidth: 'var(--container-marketing)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '.8fr 1.4fr', gap: 64, alignItems: 'start',
      }}>
        <div style={{ position: 'sticky', top: 'calc(var(--nav-height) + 32px)' }}>
          <div className="hl-eyebrow" style={{ marginBottom: 14 }}>QUESTIONS</div>
          <h2 style={{ fontSize: 40, marginBottom: 16, lineHeight: 1.1 }}>
            {heading.split(' ')[0]}<br/>
            <span style={{ fontStyle: 'italic', color: 'var(--fg-accent)' }}>{heading.split(' ').slice(1).join(' ')}.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--fg-2)', marginBottom: 24 }}>
            Anything we missed? We'd rather you ask now than wonder later.
          </p>
          <a className="hl-btn hl-btn--secondary" href="#" onClick={(e) => { e.preventDefault(); window.openConsult && window.openConsult(); }}>
            ASK A QUESTION
          </a>
        </div>
        <div>
          {service.faqs.map((f, i) => (
            <FAQItem key={i} item={f} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
          <div style={{ borderTop: '1px solid var(--border-hairline)' }} />
        </div>
      </div>
    </section>
  );
};

window.AddOnsGrid = AddOnsGrid;
window.FAQ = FAQ;
