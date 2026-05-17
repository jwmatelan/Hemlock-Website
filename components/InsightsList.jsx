const CATEGORY_COLORS = {
  'Tax Strategy':      { bg: 'var(--hl-olive-200)',   fg: 'var(--hl-olive-900)' },
  'Bookkeeping':       { bg: 'var(--hl-saddle-200)',  fg: 'var(--hl-saddle-900)' },
  'Cash Flow':         { bg: '#e8f0f8',               fg: '#1e3a5f' },
  'Business Advisory': { bg: 'var(--hl-saddle-300)',  fg: 'var(--hl-saddle-800)' },
};

const CategoryBadge = ({ category }) => {
  const colors = CATEGORY_COLORS[category] || { bg: 'var(--hl-olive-200)', fg: 'var(--hl-olive-900)' };
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: '1.5px',
      padding: '4px 10px', borderRadius: 'var(--radius-pill)',
      background: colors.bg, color: colors.fg,
    }}>
      {category}
    </span>
  );
};

const FeaturedCard = ({ article }) => (
  <article style={{
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-hairline)',
    borderRadius: 'var(--radius-md)',
    padding: '48px',
    boxShadow: 'var(--shadow-md)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    alignItems: 'center',
    gridColumn: '1 / -1',
  }}>
    {/* Left: text */}
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <CategoryBadge category={article.category} />
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
          color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '1px',
        }}>FEATURED</span>
      </div>
      <h2 style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 34px)',
        color: 'var(--fg-1)', lineHeight: 'var(--lh-snug)', marginBottom: 18,
      }}>
        {article.title}
      </h2>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)',
        color: 'var(--fg-2)', lineHeight: 'var(--lh-body)', marginBottom: 28,
      }}>
        {article.excerpt}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <a className="hl-btn hl-btn--primary" href={article.href || '#'} style={{ padding: '12px 24px', fontSize: 12 }}>
          READ ARTICLE
        </a>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-3)' }}>
          {article.date} · {article.readTime}
        </span>
      </div>
    </div>

    {/* Right: decorative block */}
    <div style={{
      background: 'var(--hl-olive-200)',
      borderRadius: 'var(--radius-md)',
      height: 260,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="72" height="90" viewBox="0 0 100 130" fill="none">
        {[...Array(6)].map((_, i) => {
          const y = 22 + i * 14;
          const w = 14 + i * 7;
          return <path key={i} d={`M ${50-w} ${y+10} L 50 ${y} L ${50+w} ${y+10} Z`} fill="var(--hl-olive-600)" opacity={0.5 + i * 0.08} />;
        })}
        <rect x="48" y="115" width="4" height="12" fill="var(--hl-olive-600)" opacity="0.7" />
      </svg>
    </div>
  </article>
);

const ArticleCard = ({ article }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { if (article.href) window.location.href = article.href; }}
      style={{
        background: 'var(--bg-surface)',
        border: `1px solid ${hovered ? 'var(--border-strong)' : 'var(--border-hairline)'}`,
        borderRadius: 'var(--radius-md)',
        padding: '32px',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease)',
        boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        cursor: 'pointer',
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <CategoryBadge category={article.category} />
      </div>
      <h3 style={{
        fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-h4)',
        color: 'var(--fg-1)', lineHeight: 'var(--lh-snug)',
        marginBottom: 14, flex: 0,
      }}>
        {article.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 15,
        color: 'var(--fg-2)', lineHeight: 'var(--lh-body)',
        marginBottom: 24, flex: 1,
      }}>
        {article.excerpt}
      </p>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 20, borderTop: '1px solid var(--border-hairline)',
        marginTop: 'auto',
      }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)' }}>
          {article.date} · {article.readTime}
        </span>
        <a href={article.href || '#'} className="hl-btn hl-btn--ghost" style={{ fontSize: 12, padding: '6px 0' }}>
          READ →
        </a>
      </div>
    </article>
  );
};

const InsightsList = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const articles = window.INSIGHTS_DATA || [];
  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];

  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  const filtered = activeFilter === 'All'
    ? rest
    : rest.filter(a => a.category === activeFilter);

  return (
    <section style={{ background: 'var(--bg-page)', padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto' }}>

        {/* Featured article */}
        {featured && activeFilter === 'All' && (
          <div style={{ marginBottom: 48 }}>
            <FeaturedCard article={featured} />
          </div>
        )}

        {/* Filter bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          marginBottom: 48, flexWrap: 'wrap',
        }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-3)', marginRight: 4 }}>
            Filter:
          </span>
          {categories.map(cat => {
            const isActive = cat === activeFilter;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: isActive ? 600 : 500,
                  background: isActive ? 'var(--hl-deep-forest)' : 'transparent',
                  color: isActive ? 'var(--hl-parchment)' : 'var(--fg-2)',
                  border: `1px solid ${isActive ? 'var(--hl-deep-forest)' : 'var(--border-strong)'}`,
                  borderRadius: 'var(--radius-pill)',
                  padding: '6px 16px', cursor: 'pointer',
                  transition: 'all var(--dur-fast) var(--ease)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Article grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 28,
        }}>
          {filtered.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--fg-3)', fontFamily: 'var(--font-sans)' }}>
            No articles in this category yet — check back soon.
          </div>
        )}

      </div>
    </section>
  );
};
window.InsightsList = InsightsList;
