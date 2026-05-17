const CATEGORY_COLORS_DETAIL = {
  'Tax Strategy':      { bg: 'var(--hl-olive-200)',   fg: 'var(--hl-olive-900)' },
  'Bookkeeping':       { bg: 'var(--hl-saddle-200)',  fg: 'var(--hl-saddle-900)' },
  'Cash Flow':         { bg: '#e8f0f8',               fg: '#1e3a5f' },
  'Business Advisory': { bg: 'var(--hl-saddle-300)',  fg: 'var(--hl-saddle-800)' },
};

const ArticleBodyBlock = ({ block }) => {
  const bodyTextStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    color: 'var(--fg-2)',
    lineHeight: 1.8,
    margin: '0 0 24px',
  };
  const h2Style = {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(20px, 2.5vw, 26px)',
    color: 'var(--fg-1)',
    lineHeight: 'var(--lh-snug)',
    margin: '48px 0 16px',
    paddingTop: 8,
    borderTop: '1px solid var(--border-hairline)',
  };
  const liStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    color: 'var(--fg-2)',
    lineHeight: 1.8,
    marginBottom: 10,
  };

  switch (block.type) {
    case 'h2':
      return <h2 style={h2Style}>{block.text}</h2>;
    case 'p':
      return <p style={bodyTextStyle}>{block.text}</p>;
    case 'ul':
      return (
        <ul style={{ paddingLeft: 24, margin: '0 0 28px' }}>
          {block.items.map((item, i) => (
            <li key={i} style={liStyle}>{item}</li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div style={{
          background: 'var(--hl-olive-100)',
          borderLeft: '4px solid var(--hl-olive-500)',
          borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
          padding: '20px 24px',
          margin: '0 0 28px',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            color: 'var(--hl-olive-900)',
            lineHeight: 1.7,
            margin: 0,
            fontStyle: 'italic',
          }}>{block.text}</p>
        </div>
      );
    default:
      return null;
  }
};

const ArticleDetail = () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const articles = window.INSIGHTS_DATA || [];
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 32px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--fg-1)', marginBottom: 16 }}>Article not found</h2>
          <a href="insights.html" style={{ fontFamily: 'var(--font-sans)', color: 'var(--hl-olive-700)', textDecoration: 'none', fontWeight: 600 }}>
            ← Back to Insights
          </a>
        </div>
      </div>
    );
  }

  const colors = CATEGORY_COLORS_DETAIL[article.category] || { bg: 'var(--hl-olive-200)', fg: 'var(--hl-olive-900)' };

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'var(--hl-deep-forest)',
        padding: '80px 32px 72px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle at 20% 50%, var(--hl-olive-300) 0%, transparent 60%), radial-gradient(circle at 80% 20%, var(--hl-saddle-300) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: 28 }}>
            <a href="insights.html" style={{
              fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
              color: 'var(--hl-olive-400)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              letterSpacing: '0.5px',
            }}>
              ← HEMLOCK INSIGHTS
            </a>
          </div>
          {/* Category badge */}
          <div style={{ marginBottom: 20 }}>
            <span style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '1.5px',
              padding: '4px 12px', borderRadius: 'var(--radius-pill)',
              background: colors.bg, color: colors.fg,
            }}>
              {article.category}
            </span>
          </div>
          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 46px)',
            color: 'var(--hl-parchment)',
            lineHeight: 'var(--lh-tight)',
            marginBottom: 24,
          }}>
            {article.title}
          </h1>
          {/* Meta */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 20,
            fontFamily: 'var(--font-sans)', fontSize: 13,
            color: 'var(--hl-olive-400)',
          }}>
            <span>{article.date}</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ background: 'var(--bg-page)', padding: '64px 32px 96px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* Lede */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 20,
            color: 'var(--fg-1)',
            lineHeight: 1.7,
            marginBottom: 40,
            paddingBottom: 40,
            borderBottom: '1px solid var(--border-hairline)',
            fontWeight: 400,
          }}>
            {article.excerpt}
          </p>

          {/* Body blocks */}
          {(article.body || []).map((block, i) => (
            <ArticleBodyBlock key={i} block={block} />
          ))}

          {/* Footer CTA */}
          <div style={{
            marginTop: 72,
            padding: '40px 48px',
            background: 'var(--hl-olive-100)',
            borderRadius: 'var(--radius-md)',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16,
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 22,
              color: 'var(--fg-1)',
              lineHeight: 'var(--lh-snug)',
              margin: 0,
            }}>
              Have questions about how this applies to your business?
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: 'var(--fg-2)',
              lineHeight: 'var(--lh-body)',
              margin: 0,
            }}>
              We work with Western PA small business owners on tax planning, bookkeeping, and business advisory — and we're happy to talk through any of this.
            </p>
            <button
              onClick={() => { if (window.openConsult) window.openConsult(); }}
              className="hl-btn hl-btn--primary"
              style={{ marginTop: 4 }}
            >
              SCHEDULE A CONSULTATION
            </button>
          </div>

          {/* Back link */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border-hairline)' }}>
            <a href="insights.html" style={{
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
              color: 'var(--hl-olive-700)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              ← Back to all articles
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

window.ArticleDetail = ArticleDetail;
