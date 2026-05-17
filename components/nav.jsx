const Nav = ({ active = 'home' }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { label: 'Home',        href: 'index.html',       id: 'home' },
    { label: 'Bookkeeping', href: 'bookkeeping.html', id: 'bookkeeping' },
    { label: 'Tax',         href: 'tax.html',         id: 'tax' },
    { label: 'Insights',    href: 'insights.html',    id: 'insights' },
    { label: 'Contact',     href: 'index.html#contact', id: 'contact' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      height: 'var(--nav-height)',
      background: scrolled ? 'rgba(242,237,228,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-hairline)' : '1px solid transparent',
      transition: 'background var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease)',
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{
        maxWidth: 'var(--container-marketing)', margin: '0 auto', padding: '0 32px',
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottom: 'none' }}>
          <img src="assets/hemlock-logo.png" alt="Hemlock CPA" style={{ height: 42, width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(l => {
            const isActive = l.id === active;
            return (
              <a key={l.label} href={l.href} style={{
                fontFamily: 'var(--font-sans)', fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                color: 'var(--fg-1)', borderBottom: 'none',
                letterSpacing: '.01em',
                position: 'relative',
                paddingBottom: 4,
                borderBottomWidth: isActive ? 1 : 0,
                borderBottomStyle: 'solid',
                borderBottomColor: isActive ? 'var(--hl-deep-forest)' : 'transparent',
              }}>{l.label}</a>
            );
          })}
          <a className="hl-btn hl-btn--primary" href="#" onClick={(e) => { e.preventDefault(); window.openConsult && window.openConsult(); }}
             style={{ padding: '11px 20px', fontSize: 12 }}>
            FREE CONSULTATION
          </a>
        </div>
      </div>
    </nav>
  );
};
window.Nav = Nav;
