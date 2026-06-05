/* ============================================================
   contact.js — Supabase-backed contact form with mailto fallback
   ============================================================ */
(() => {
  const nameEl    = document.getElementById('cf_name');
  const emailEl   = document.getElementById('cf_email');
  const msgEl     = document.getElementById('cf_message');
  const submitBtn = document.getElementById('cf_submit');
  const statusEl  = document.getElementById('cf_status');

  if (!submitBtn) return;

  const setStatus = (msg, isError = false) => {
    statusEl.textContent = msg;
    statusEl.className = 'contact__status' + (isError ? ' contact__status--error' : '');
  };

  const isValidEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  submitBtn.addEventListener('click', async () => {
    const name    = nameEl.value.trim();
    const email   = emailEl.value.trim();
    const message = msgEl.value.trim();

    if (!name || !email || !message) {
      setStatus('Please fill in all fields.', true); return;
    }
    if (!isValidEmail(email)) {
      setStatus('Please enter a valid email address.', true); return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    setStatus('');

    /* Supabase path — only active when window.SUPABASE_URL is set in api/config.js */
    if (window.SUPABASE_URL && window.SUPABASE_ANON_KEY) {
      try {
        const res = await fetch(`${window.SUPABASE_URL}/rest/v1/messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': window.SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${window.SUPABASE_ANON_KEY}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({ name, email, message })
        });

        if (res.ok) {
          setStatus('Message sent! I\'ll get back to you soon.');
          nameEl.value = emailEl.value = msgEl.value = '';
        } else {
          throw new Error('Supabase error');
        }
      } catch {
        fallbackMailto(name, email, message);
      }
    } else {
      fallbackMailto(name, email, message);
    }

    submitBtn.disabled = false;
    submitBtn.textContent = 'Send message';
  });

  function fallbackMailto(name, email, message) {
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:irfan@addify.ae?subject=${subject}&body=${body}`;
    setStatus('Opening your email client…');
  }
})();
