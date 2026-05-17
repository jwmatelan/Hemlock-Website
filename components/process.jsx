const STEPS = [
  { n: '01', title: 'A short conversation.', body: 'Twenty minutes on the phone. We learn the business, you learn how we work. No pitch.' },
  { n: '02', title: 'A clear engagement.', body: 'A one-page scope and a flat monthly fee. No hourly surprises, no creep.' },
  { n: '03', title: 'A steady cadence.', body: 'Monthly close, quarterly review, year-end planning. Same date every month.' },
];

const Process = () => (
  <section id="process" data-screen-label="Home — Process" style={{ background: 'var(--bg-page)', padding: '120px 32px', scrollMarginTop: 'var(--nav-height)' }}>
    <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto' }}>
      <div style={{ marginBottom: 72 }}>
        <div className="hl-eyebrow" style={{ marginBottom: 14 }}>HOW WE WORK</div>
        <h2 style={{ fontSize: 48, maxWidth: 640 }}>Three steps to clean books.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
        {STEPS.map(s => (
          <div key={s.n} style={{ borderTop: '2px solid var(--hl-deep-forest)', paddingTop: 28 }}>
            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: 64, fontWeight: 600,
              color: 'var(--hl-saddle)', lineHeight: 1, marginBottom: 18, fontStyle: 'italic',
            }}>{s.n}</div>
            <h3 style={{ fontSize: 26, marginBottom: 12 }}>{s.title}</h3>
            <p style={{ fontSize: 16, margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
window.Process = Process;
