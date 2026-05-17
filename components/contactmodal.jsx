// Netlify-connected consultation form.
// Detection: Netlify scans static HTML at build time for a form tagged with
// `data-netlify="true"`. Because this form is rendered by React at runtime,
// a hidden mirror form is also placed in index.html so Netlify's bot can
// find it. Submission is AJAX (urlencoded POST to "/") so we keep the
// in-modal success state instead of a Netlify redirect.

const FORM_NAME = 'consultation';

const encodeForm = (data) => Object.keys(data)
  .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k] || ''))
  .join('&');

const ContactModal = ({ open, onClose }) => {
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = React.useState('');

  // Reset when modal closes
  React.useEffect(() => {
    if (!open) { setStatus('idle'); setErrorMsg(''); }
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const form = e.target;
    const fd = new FormData(form);

    // Honeypot — if the bot-field is filled in, silently "succeed"
    if (fd.get('bot-field')) { setStatus('sent'); return; }

    const data = {};
    fd.forEach((v, k) => { data[k] = v; });
    data['form-name'] = FORM_NAME;

    setStatus('sending');
    setErrorMsg('');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm(data),
    })
      .then(res => {
        if (!res.ok) throw new Error('Submission failed (' + res.status + ').');
        setStatus('sent');
      })
      .catch(err => {
        setStatus('error');
        setErrorMsg(err.message || 'Something went wrong. Please try again or email hello@hemlockcpa.com.');
      });
  };

  if (!open) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(30,51,32,.55)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-page)', borderRadius: 'var(--radius-md)',
        maxWidth: 560, width: '100%', padding: 48,
        boxShadow: 'var(--shadow-lg)', position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16, background: 'transparent', border: 'none',
          fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
          letterSpacing: 2, color: 'var(--fg-2)', cursor: 'pointer', padding: 8,
        }}>CLOSE ✕</button>

        {status !== 'sent' ? (
          <>
            <div className="hl-eyebrow" style={{ marginBottom: 12 }}>FREE CONSULTATION</div>
            <h3 style={{ fontSize: 32, marginBottom: 8 }}>Tell us about your business.</h3>
            <p style={{ fontSize: 15, marginBottom: 28 }}>
              Twenty minutes. No pitch. We'll listen and let you know if we're a fit.
            </p>
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              {/* Required by Netlify when submitting via AJAX */}
              <input type="hidden" name="form-name" value={FORM_NAME} />

              {/* Honeypot — hidden from real users */}
              <p style={{ display: 'none' }}>
                <label>Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" /></label>
              </p>

              <Field name="name"     label="Your name" placeholder="Henry MacAllister" required />
              <Field name="email"    label="Email"     placeholder="henry@example.com" type="email" required />
              <Field name="business" label="Business"  placeholder="LLC, S-Corp, sole proprietor..." />
              <Field name="industry" label="Industry"  placeholder="Contracting, restaurant, oil & gas..." />
              <Field name="message"  label="What can we help with?" textarea />

              {status === 'error' && (
                <div style={{
                  fontFamily: 'var(--font-sans)', fontSize: 13,
                  color: 'var(--state-danger)', lineHeight: 1.5,
                  background: 'rgba(139,58,46,.08)',
                  border: '1px solid rgba(139,58,46,.25)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '10px 14px',
                }}>{errorMsg}</div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="hl-btn hl-btn--primary"
                style={{
                  marginTop: 10, alignSelf: 'flex-start',
                  opacity: status === 'sending' ? 0.6 : 1,
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                }}
              >
                {status === 'sending' ? 'SENDING…' : 'REQUEST A CALL'}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--fg-accent)', marginBottom: 10 }}>
              Thank you.
            </div>
            <h3 style={{ fontSize: 28, marginBottom: 12 }}>We'll be in touch.</h3>
            <p style={{ fontSize: 15, maxWidth: 380, margin: '0 auto' }}>
              Expect a call within one business day, usually Tuesday morning.
            </p>
            <button onClick={onClose} className="hl-btn hl-btn--secondary" style={{ marginTop: 28 }}>BACK TO SITE</button>
          </div>
        )}
      </div>
    </div>
  );
};

const Field = ({ label, textarea, ...rest }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <span className="hl-eyebrow" style={{ fontSize: 11 }}>{label}</span>
    {textarea
      ? <textarea rows="3" style={fieldStyle} {...rest} />
      : <input type={rest.type || 'text'} style={fieldStyle} {...rest} />}
  </label>
);
const fieldStyle = {
  fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--fg-1)',
  background: '#fff', border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-xs)', padding: '12px 14px', outline: 'none',
  resize: 'vertical',
};
window.ContactModal = ContactModal;
