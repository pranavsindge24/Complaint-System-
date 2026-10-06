/* Login / registration page */
(function () {
  const tabs = document.getElementById('authTabs');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  function show(tab) {
    tabs.querySelectorAll('.auth-tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === tab));
    loginForm.classList.toggle('hidden', tab !== 'login');
    registerForm.classList.toggle('hidden', tab !== 'register');
  }

  tabs.addEventListener('click', (e) => {
    const b = e.target.closest('.auth-tab');
    if (b) show(b.dataset.tab);
  });

  async function go(user) {
    const dest = { student: '/dashboard', department: '/dashboard', admin: '/dashboard' }[user.role] || '/';
    window.location.href = dest;
  }

  /* already signed in? */
  API.get('/api/auth/me').then((d) => go(d.user)).catch(() => {});

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    setBtnLoading(btn, true, 'Signing in…');
    try {
      const f = new FormData(loginForm);
      const data = await API.post('/api/auth/login', { email: f.get('email'), password: f.get('password') });
      toast('Welcome back, ' + data.user.name);
      setTimeout(() => go(data.user), 350);
    } catch (err) {
      toast(err.message, 'error');
      setBtnLoading(btn, false, 'Sign in');
    }
  });

  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('registerBtn');
    setBtnLoading(btn, true, 'Creating account…');
    try {
      const f = new FormData(registerForm);
      const data = await API.post('/api/auth/register', {
        name: f.get('name'), email: f.get('email'), rollNo: f.get('rollNo'),
        phone: f.get('phone'), password: f.get('password')
      });
      toast('Account created. Redirecting…');
      setTimeout(() => go(data.user), 400);
    } catch (err) {
      toast(err.message, 'error');
      setBtnLoading(btn, false, 'Create student account');
    }
  });
})();
