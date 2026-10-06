/* =====================================================================
   CampusDesk dashboard - student / department / super-admin SPA
   ====================================================================== */

/* ------------------------------ Icons ----------------------------- */
const ICONS = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3.6 6h.01M3.6 12h.01M3.6 18h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  flag: '<path d="M4 21V4M4 4.5h13l-2.6 4 2.6 4.5H4"/>',
  chart: '<path d="M4 19V5M4 19h16M8 14.5l3.6-4.5 3 2.8L20 7"/>',
  building: '<path d="M3 21h18M5.5 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16M14.5 10h2.5a2 2 0 0 1 2 2v9"/><path d="M9 7h2M9 11h2M9 15h2"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.6 6-5.6s6 2.3 6 5.6"/><path d="M16 5.3a3.2 3.2 0 0 1 0 5.4M17.5 14.8c1.9.7 3.5 2.4 3.5 5.2"/>',
  activity: '<path d="M3 12h4l3 8 4-16 3 8h4"/>',
  bell: '<path d="M6 9a6 6 0 1 1 12 0c0 4.7 2 6 2 6H4s2-1.3 2-6"/><path d="M10.4 19.5a2 2 0 0 0 3.2 0"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c0-3.7 3.4-6 7.5-6s7.5 2.3 7.5 6"/>',
  logout: '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 17l-5-5 5-5M5 12h11"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M15.8 15.8L20.5 20.5"/>',
  image: '<rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="8.5" cy="10" r="1.7"/><path d="M4.5 17l4.6-4.6 3.4 3.4 2.7-2 4.3 3.9"/>',
  check: '<path d="M4.5 12.5l5 5 10-11"/>',
  send: '<path d="M21 3L3 10.4l7.2 3.1L13.4 21 21 3z"/>',
  settings: '<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="2.1"/><circle cx="15.5" cy="12" r="2.1"/><circle cx="8" cy="17" r="2.1"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  inbox: '<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M4.5 5.5h15L21 13v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5l1.5-7.5z"/>'
};
const icon = (n, s = 17) =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[n] || ''}</svg>`;

/* ------------------------------ Nav -------------------------------- */
const NAV = {
  student: [
    { group: 'Workspace', items: [
      { id: 'overview', label: 'Overview', icon: 'grid' },
      { id: 'new', label: 'New Complaint', icon: 'plus' },
      { id: 'complaints', label: 'My Complaints', icon: 'list' }
    ] },
    { group: 'Account', items: [
      { id: 'notifications', label: 'Notifications', icon: 'bell' },
      { id: 'profile', label: 'Profile', icon: 'user' }
    ] }
  ],
  department: [
    { group: 'Workspace', items: [
      { id: 'overview', label: 'Overview', icon: 'grid' },
      { id: 'complaints', label: 'Assigned Complaints', icon: 'list' },
      { id: 'sla', label: 'SLA Breached', icon: 'clock' },
      { id: 'escalated', label: 'Escalated', icon: 'flag' }
    ] },
    { group: 'Account', items: [
      { id: 'notifications', label: 'Notifications', icon: 'bell' },
      { id: 'profile', label: 'Profile', icon: 'user' }
    ] }
  ],
  admin: [
    { group: 'Workspace', items: [
      { id: 'overview', label: 'Overview', icon: 'grid' },
      { id: 'complaints', label: 'All Complaints', icon: 'list' },
      { id: 'escalated', label: 'Escalated', icon: 'flag' },
      { id: 'sla', label: 'SLA Breached', icon: 'clock' }
    ] },
    { group: 'Management', items: [
      { id: 'analytics', label: 'Analytics', icon: 'chart' },
      { id: 'departments', label: 'Departments', icon: 'building' },
      { id: 'users', label: 'Users', icon: 'users' },
      { id: 'activity', label: 'Activity Logs', icon: 'activity' }
    ] },
    { group: 'Account', items: [
      { id: 'notifications', label: 'Notifications', icon: 'bell' },
      { id: 'profile', label: 'Profile', icon: 'user' }
    ] }
  ]
};

const TITLES = {
  overview: 'Overview', new: 'New Complaint', complaints: 'Complaints',
  sla: 'SLA Breached', escalated: 'Escalated Complaints', analytics: 'Analytics',
  departments: 'Departments', users: 'Users', activity: 'Activity Logs',
  notifications: 'Notifications', profile: 'My Profile'
};

/* --------------- Client-side smart suggestions --------------------- */
const CAT_KEYS = {
  electrical: ['fan', 'light', 'lights', 'electricity', 'electric', 'switch', 'socket', 'bulb', 'power', 'wiring', 'wire', 'ac ', 'air conditioner', 'cooler', 'short circuit', 'spark', 'sparking', 'tube', 'inverter', 'panel', 'shock', 'voltage', 'fuse'],
  it: ['wifi', 'wi-fi', 'internet', 'network', 'lan', 'router', 'server', 'computer', 'computer lab', 'laptop', 'software', 'printer', 'system', 'bandwidth', 'cyber', 'website', 'portal', 'login', 'projector', 'online', 'ethernet', 'cctv'],
  plumbing: ['water', 'pipe', 'pipeline', 'leak', 'leakage', 'leaking', 'tap', 'faucet', 'toilet', 'washroom', 'bathroom', 'drain', 'drainage', 'flush', 'sink', 'sewer', 'tank', 'commode', 'clog', 'plumber'],
  housekeeping: ['garbage', 'dirty', 'dusting', 'cleaning', 'clean', 'dust', 'trash', 'sweep', 'sweeper', 'stain', 'smell', 'stink', 'pest', 'rat', 'rats', 'cockroach', 'litter', 'bin', 'waste', 'mop', 'unhygienic', 'hygiene'],
  furniture: ['chair', 'chairs', 'table', 'tables', 'bench', 'benches', 'desk', 'cupboard', 'almirah', 'shelf', 'shelves', 'door', 'window', 'blackboard', 'broken seat', 'stool', 'wardrobe', 'drawer', 'carpenter', 'furniture', 'partition'],
  general: ['wall', 'floor', 'paint', 'painting', 'construction', 'roof', 'ceiling', 'gate', 'parking', 'sign', 'pathway', 'gardening', 'grass', 'noise']
};
const HIGH_KEYS = ['danger', 'dangerous', 'urgent', 'urgently', 'immediately', 'security', 'theft', 'stolen', 'shock', 'electric shock', 'accident', 'injury', 'injured', 'fire', 'emergency', 'critical', 'collapsed', 'harassment', 'leak', 'leaking', 'sparking', 'short circuit', 'flood', 'blocked'];
const LOW_KEYS = ['minor', 'small issue', 'slight', 'cosmetic', 'whenever', 'not urgent', 'low priority', 'suggestion', 'nice to have', 'little problem', 'scratch', 'dust in corner'];

function smartSuggest(text) {
  const t = ' ' + String(text || '').toLowerCase().replace(/[^a-z0-9\s-]/g, ' ') + ' ';
  let best = null, bestScore = 0;
  for (const [cat, words] of Object.entries(CAT_KEYS)) {
    let n = 0;
    words.forEach((w) => { if (t.includes(w)) n += 1; });
    if (n > bestScore) { bestScore = n; best = cat; }
  }
  const plain = String(text || '').toLowerCase();
  let priority = 'medium';
  if (HIGH_KEYS.some((w) => plain.includes(w))) priority = 'high';
  else if (LOW_KEYS.some((w) => plain.includes(w))) priority = 'low';
  return { category: best || 'general', detected: bestScore > 0, priority };
}

/* ------------------------------ State ------------------------------ */
const state = {
  user: null,
  departments: [],
  categories: {},
  route: 'overview',
  filters: { q: '', status: '', priority: '', category: '', sla: '', escalated: '', page: 1 },
  notifUnread: 0
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const content = () => document.getElementById('content');
const initials = (n) => String(n || '?').split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
const ROLE_LABEL = { student: 'Student', department: 'Department', admin: 'Super Admin' };

async function safe(fn, fallbackMsg = 'Something went wrong') {
  try { return await fn(); } catch (e) { toast(e.message || fallbackMsg, 'error'); return null; }
}

/* ------------------------------ Boot -------------------------------- */
async function boot() {
  const me = await safe(() => API.get('/api/auth/me'));
  if (!me || !me.user) { window.location.href = '/'; return; }
  state.user = me.user;

  document.getElementById('app').hidden = false;
  renderSidebar();
  renderTopUser();

  const deps = await safe(() => API.get('/api/departments' + (me.user.role === 'admin' ? '?all=1' : '')));
  state.departments = deps ? deps.departments : [];
  state.categories = deps ? deps.categories : {};

  window.addEventListener('hashchange', route);
  document.getElementById('menuBtn').onclick = toggleSidebar;
  document.getElementById('sideOverlay').onclick = closeSidebar;
  document.getElementById('logoutBtn').onclick = logout;
  document.getElementById('bellBtn').onclick = openNotifications;
  document.getElementById('closeDrawer').onclick = closeNotifications;
  document.getElementById('drawerOverlay').onclick = closeNotifications;
  document.getElementById('markAllRead').onclick = async () => {
    await safe(() => API.post('/api/notifications/read-all'));
    state.notifUnread = 0; updateBell();
    $('#notifList').innerHTML = '<div class="empty"><p class="empty-title">You are all caught up</p></div>';
    const page = $('#notifPageList');
    if (page) renderNotifPage();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeNotifications(); closeSidebar(); }
  });

  await loadBell();
  setInterval(loadBell, 45000);
  route();
}

function logout() {
  API.post('/api/auth/logout').finally(() => { window.location.href = '/'; });
}

function renderSidebar() {
  const u = state.user;
  $('#sideRole').innerHTML = `<b>${ROLE_LABEL[u.role]}</b><span>${esc(u.role === 'department' && u.department ? u.department.name : u.role === 'admin' ? 'Full system access' : (u.rollNo || u.email))}</span>`;
  $('#sideNav').innerHTML = NAV[u.role].map((g) => `
    <div class="nav-label">${g.group}</div>
    ${g.items.map((i) => `<button class="nav-item" data-route="${i.id}"><span class="ico">${icon(i.icon, 16)}</span>${i.label}</button>`).join('')}
  `).join('');
  $$('#sideNav .nav-item').forEach((b) => { b.onclick = () => { go(b.dataset.route); closeSidebar(); }; });

  $('#sideUser').innerHTML = `<div class="avatar">${initials(u.name)}</div>
    <div class="meta"><b>${esc(u.name)}</b><span>${ROLE_LABEL[u.role]}</span></div>`;
}

function renderTopUser() {
  const u = state.user;
  $('#topUser').innerHTML = `<div class="avatar">${initials(u.name)}</div>
    <div class="meta"><b>${esc(u.name)}</b><span>${ROLE_LABEL[u.role]}</span></div>`;
  $('#topUser').onclick = () => go('profile');
}

function go(route) { window.location.hash = '#/' + route; }

function toggleSidebar() {
  $('#sidebar').classList.toggle('open');
  $('#sideOverlay').classList.toggle('show');
}
function closeSidebar() {
  $('#sidebar').classList.remove('open');
  $('#sideOverlay').classList.remove('show');
}

/* --------------------------- Notifications -------------------------- */
async function loadBell() {
  const data = await safe(() => API.get('/api/notifications'));
  if (!data) return;
  state.notifUnread = data.unread;
  updateBell();
  if ($('#notifDrawer').classList.contains('hidden') === false) renderDrawer(data.notifications);
}
function updateBell() {
  const el = $('#bellCount');
  el.textContent = state.notifUnread > 99 ? '99+' : state.notifUnread;
  el.classList.toggle('hidden', state.notifUnread === 0);
}
const NOTIF_ICO = { sla: 'clock', escalated: 'flag', status: 'check', complaint: 'inbox', comment: 'send', assign: 'users' };

async function openNotifications() {
  $('#notifDrawer').classList.remove('hidden');
  $('#drawerOverlay').classList.remove('hidden');
  $('#notifList').innerHTML = '<div class="page-loading"><span class="spinner"></span></div>';
  const data = await safe(() => API.get('/api/notifications'));
  if (data) renderDrawer(data.notifications);
}
function closeNotifications() {
  $('#notifDrawer').classList.add('hidden');
  $('#drawerOverlay').classList.add('hidden');
}
function renderDrawer(items) {
  const host = $('#notifList');
  if (!items.length) { host.innerHTML = '<div class="empty"><div class="empty-ico">🔔</div><p class="empty-title">No notifications yet</p><p class="empty-sub">Status updates and SLA alerts appear here.</p></div>'; return; }
  host.innerHTML = items.map(notifHtml).join('');
  wireNotifClicks(host);
}
function notifHtml(n) {
  return `<div class="notif ${n.read ? '' : 'unread'} n-${esc(n.type)}" data-cid="${n.complaintId || ''}">
    <div class="n-ico">${icon(NOTIF_ICO[n.type] || 'inbox', 15)}</div>
    <div>
      <div class="n-title">${esc(n.title)}</div>
      <div class="n-msg">${esc(n.message)}</div>
      <div class="n-time">${timeAgo(n.createdAt)}${n.ticketId ? ' · ' + esc(n.ticketId) : ''}</div>
    </div>
  </div>`;
}
function wireNotifClicks(host) {
  $$('.notif', host).forEach((el) => {
    el.onclick = async () => {
      if (el.dataset.cid) { closeNotifications(); openDetail(el.dataset.cid); }
      if (!el.classList.contains('unread')) return;
      el.classList.remove('unread');
      state.notifUnread = Math.max(0, state.notifUnread - 1);
      updateBell();
    };
  });
}

/* ------------------------------ Modal ------------------------------- */
function openModal(html, wide = false) {
  const box = $('#modalBox');
  box.className = 'modal' + (wide ? ' wide' : '');
  box.innerHTML = html;
  $('#modalOverlay').classList.remove('hidden');
  $$('.close', box).forEach((b) => { b.onclick = closeModal; });
}
function closeModal() {
  const ov = $('#modalOverlay');
  if (ov) ov.classList.add('hidden');
  if ($('#modalBox')) $('#modalBox').innerHTML = '';
}
$('#modalOverlay') && ($('#modalOverlay').onclick = (e) => { if (e.target.id === 'modalOverlay') closeModal(); });

function modalHead(title, sub = '') {
  return `<div class="modal-head"><div><h3>${title}</h3>${sub ? `<div class="sub">${sub}</div>` : ''}</div>
    <button class="icon-btn close" aria-label="Close">✕</button></div>`;
}

/* ============================== VIEWS ============================== */
const VIEWS = {};

/* ---------------------------- Overview ------------------------------ */
VIEWS.overview = async function () {
  const el = content();
  el.innerHTML = `<div class="page-loading"><span class="spinner lg"></span> Loading overview…</div>`;
  const [statsRes, recentRes, analyticsRes] = await Promise.all([
    safe(() => API.get('/api/stats')),
    safe(() => API.get('/api/complaints?limit=6')),
    state.user.role === 'admin' ? safe(() => API.get('/api/admin/analytics')) : Promise.resolve(null)
  ]);
  if (!statsRes) { el.innerHTML = emptyState('Could not load your dashboard'); return; }
  const s = statsRes.stats;
  const role = state.user.role;

  const greet = `<div class="page-head">
      <div><h3>${greeting()}, ${esc(state.user.name.split(' ')[0])}</h3>
      <p class="sub">${role === 'student' ? 'Track and manage the complaints you have raised.' :
        role === 'department' ? 'Handle complaints assigned to your department within SLA.' :
        'Live snapshot of every complaint across campus.'}</p></div>
      <div class="actions">
        ${role === 'student' ? `<button class="btn btn-primary" id="quickNew">${icon('plus', 15)} New Complaint</button>` : ''}
        ${role === 'department' ? `<button class="btn btn-outline" id="quickSla">${icon('clock', 15)} SLA Board</button>` : ''}
        ${role === 'admin' ? `<button class="btn btn-outline" id="quickAnalytics">${icon('chart', 15)} Analytics</button>` : ''}
      </div>
    </div>`;

  let statsHtml = '';
  if (role === 'student') {
    statsHtml = `<div class="grid grid-4">
      ${statCard('Total Complaints', s.total, 'tone-blue')}
      ${statCard('Open', s.open, 'tone-amber')}
      ${statCard('In Progress', s.inProgress, 'tone-violet')}
      ${statCard('Resolved', s.resolved, 'tone-green')}
    </div>`;
  } else if (role === 'department') {
    statsHtml = `<div class="grid grid-5">
      ${statCard('Assigned (Queue)', s.assigned, 'tone-blue')}
      ${statCard('Pending', s.pending, 'tone-slate')}
      ${statCard('In Progress', s.inProgress, 'tone-amber')}
      ${statCard('Resolved', s.resolved, 'tone-green')}
      ${statCard('Escalated', s.escalated, 'tone-red')}
    </div>`;
  } else {
    statsHtml = `<div class="grid grid-4">
      ${statCard('Total Complaints', s.total, 'tone-blue')}
      ${statCard('Pending', s.pending, 'tone-slate')}
      ${statCard('In Progress', s.inProgress, 'tone-amber')}
      ${statCard('Resolved', s.resolved, 'tone-green')}
      ${statCard('Escalated', s.escalated, 'tone-red')}
      ${statCard('SLA Breached', s.breached, 'tone-red', s.breached ? 'Needs attention' : 'All within SLA')}
      ${statCard('Unassigned', s.unassigned, 'tone-violet')}
      ${statCard('Students / Depts', `${s.students}<span class="muted" style="font-size:16px"> / ${s.departments}</span>`, 'tone-slate')}
    </div>`;
  }

  const statusData = [
    { label: 'Pending', value: s.pending, color: '#64748b' },
    { label: 'In Progress', value: s.inProgress, color: '#f59e0b' },
    { label: 'Resolved', value: s.resolved, color: '#16a34a' },
    { label: 'Escalated', value: s.escalated, color: '#dc2626' }
  ];

  const analyticsPanel = analyticsRes ? `
    <div class="card">
      <div class="card-head"><div><h4>Complaint trend</h4><div class="sub">Complaints raised over the last 14 days</div></div></div>
      <div class="card-body chart">${lineChart(analyticsRes.trend.map((t) => ({ label: t.date.slice(5), value: t.count })))}</div>
    </div>` : '';

  const slaPanel = `
    <div class="card">
      <div class="card-head"><div><h4>SLA health</h4><div class="sub">Response targets: High 6h · Medium 24h · Low 72h</div></div></div>
      <div class="card-body">
        ${s.breached > 0
          ? `<div class="alert alert-error mb0"><strong>${s.breached} complaint(s) breached SLA</strong> and were escalated automatically.</div>`
          : `<div class="alert alert-success mb0">All active complaints are currently within their SLA window.</div>`}
      </div>
    </div>`;

  el.innerHTML = `${greet}
    ${statsHtml}
    <div class="grid grid-2" style="margin-top:16px">
      <div class="card">
        <div class="card-head"><div><h4>Status breakdown</h4><div class="sub">Distribution of your complaints</div></div></div>
        <div class="card-body chart">${donutChart(statusData)}</div>
      </div>
      <div class="card">
        <div class="card-head"><div><h4>By category</h4><div class="sub">Auto-detected complaint categories</div></div></div>
        <div class="card-body chart">${hbarChart(s.byCategory.map((c) => ({ label: c.label, value: c.count })))}</div>
      </div>
    </div>
    ${analyticsPanel}
    <div class="card">
      <div class="card-head"><div><h4>Recent complaints</h4><div class="sub">Latest activity in your scope</div></div>
        <div class="right"><button class="btn btn-outline btn-sm" id="seeAll">View all</button></div></div>
      <div class="card-body tight">
        ${recentRes && recentRes.complaints.length ? `<div class="table-wrap">
          <table class="tbl"><thead><tr>
            <th>Ticket</th><th>Complaint</th>${role !== 'student' ? '<th>Student</th>' : '<th>Department</th>'}
            <th>Priority</th><th>Status</th><th>SLA</th><th></th>
          </tr></thead><tbody>
          ${recentRes.complaints.map((c) => complaintRow(c, role)).join('')}
          </tbody></table></div>` : emptyState('No complaints yet', role === 'student' ? 'Raise your first complaint to get started.' : 'New complaints will appear here.')}
      </div>
    </div>
    ${role !== 'student' ? slaPanel : ''}`;

  const qn = $('#quickNew'); if (qn) qn.onclick = () => go('new');
  const qs = $('#quickSla'); if (qs) qs.onclick = () => go('sla');
  const qa = $('#quickAnalytics'); if (qa) qa.onclick = () => go('analytics');
  $('#seeAll').onclick = () => go('complaints');
  wireRows(el);
};

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

function complaintRow(c, role) {
  const other = role === 'student'
    ? (c.department ? esc(c.department.name) : '<span class="muted">Unassigned</span>')
    : (c.student ? esc(c.student.name) : '—');
  return `<tr class="clickable" data-id="${c.id}">
    <td class="mono">${esc(c.ticketId)}</td>
    <td><div class="t-main">${esc(c.title)}</div><div class="t-sub">${esc(c.categoryLabel)}${c.location ? ' · ' + esc(c.location) : ''}</div></td>
    <td>${other}</td>
    <td>${priorityBadge(c.priority)}</td>
    <td>${statusBadge(c.status)}${c.slaBreached ? ' <span class="badge st-escalated">SLA</span>' : ''}</td>
    <td>${slaBadge(c)}</td>
    <td class="text-right"><button class="btn btn-outline btn-sm" data-open="${c.id}">View</button></td>
  </tr>`;
}
function wireRows(root) {
  $$('tr.clickable', root).forEach((tr) => { tr.onclick = () => openDetail(tr.dataset.id); });
  $$('[data-open]', root).forEach((b) => { b.onclick = (e) => { e.stopPropagation(); openDetail(b.dataset.open); }; });
}

/* ------------------------ New complaint ----------------------------- */
VIEWS.new = async function () {
  const el = content();
  const cats = Object.entries(state.categories);
  el.innerHTML = `
    <div class="page-head"><div><h3>Raise a new complaint</h3>
      <p class="sub">Describe the issue clearly — the system will detect the category, recommend a priority and assign the right department automatically.</p></div></div>

    <div class="detail-grid">
      <form class="card" id="complaintForm">
        <div class="card-head"><div><h4>Complaint details</h4><div class="sub">Fields marked * are required</div></div></div>
        <div class="card-body">
          <label class="field"><span>Title *</span>
            <input type="text" name="title" maxlength="120" placeholder="e.g. Ceiling fan in Block C seminar hall is not working" required />
          </label>
          <label class="field"><span>Description *</span>
            <textarea name="description" maxlength="2000" placeholder="Explain what is wrong, since when, and any safety concerns…" required></textarea>
          </label>
          <div id="suggestBox" class="alert alert-info hidden"></div>
          <div class="field-row">
            <label class="field"><span>Category</span>
              <select name="category">
                <option value="auto">Auto-detect (recommended)</option>
                ${cats.map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('')}
              </select>
            </label>
            <label class="field"><span>Priority</span>
              <select name="priority">
                <option value="auto">Auto-recommend (recommended)</option>
                <option value="high">High — within 6 hours</option>
                <option value="medium">Medium — within 24 hours</option>
                <option value="low">Low — within 72 hours</option>
              </select>
            </label>
          </div>
          <label class="field"><span>Location *</span>
            <input type="text" name="location" maxlength="120" placeholder="e.g. Boys Hostel, Block B, Room 214" required />
          </label>
          <label class="field"><span>Photo (optional, max 5 MB)</span>
            <input type="file" name="image" accept="image/*" id="imageInput" />
            <span class="help">Stored securely in <strong>MongoDB GridFS</strong> — only authorised staff can view it.</span>
          </label>
          <div id="imgPreview" class="img-frame hidden" style="max-width:340px"><img alt="Preview" /></div>
        </div>
        <div class="modal-foot" style="border-radius:0 0 10px 10px">
          <button type="button" class="btn btn-ghost" id="cancelNew">Cancel</button>
          <button type="submit" class="btn btn-primary" id="submitNew">${icon('send', 15)} Submit complaint</button>
        </div>
      </form>

      <div>
        <div class="card">
          <div class="card-head"><div><h4>How it works</h4></div></div>
          <div class="card-body">
            <div class="timeline">
              <div class="tl-item"><div class="tl-title">1. You submit</div><div class="tl-meta">Category and priority are auto-detected from your description</div></div>
              <div class="tl-item"><div class="tl-title">2. Auto assignment</div><div class="tl-meta">Routed to the matching department (Super Admin can reassign)</div></div>
              <div class="tl-item"><div class="tl-title">3. Department works</div><div class="tl-meta">Status moves Assigned → In Progress → Resolved</div></div>
              <div class="tl-item good"><div class="tl-title">4. You confirm</div><div class="tl-meta">Close the complaint once satisfied</div></div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-head"><div><h4>SLA targets</h4></div></div>
          <div class="card-body">
            <dl class="kv">
              <dt>High priority</dt><dd>6 hours <span class="badge pr-high">Urgent</span></dd>
              <dt>Medium priority</dt><dd>24 hours</dd>
              <dt>Low priority</dt><dd>72 hours</dd>
            </dl>
            <div class="help" style="margin-top:10px">Breaching the target automatically escalates your complaint.</div>
          </div>
        </div>
      </div>
    </div>`;

  const form = $('#complaintForm');
  const desc = form.description;
  const sugg = $('#suggestBox');

  const updateSuggest = () => {
    const text = `${form.title.value} ${desc.value}`;
    if (!text.trim()) { sugg.classList.add('hidden'); return; }
    const s = smartSuggest(text);
    sugg.classList.remove('hidden');
    sugg.innerHTML = `Smart detection: category <strong>${esc(state.categories[s.category] || 'General')}</strong> ·
      priority <strong>${s.priority.toUpperCase()}</strong> (${s.priority === 'high' ? '6h' : s.priority === 'medium' ? '24h' : '72h'} SLA)
      <span class="muted">— you can override both before submitting.</span>`;
  };
  let timer;
  const onType = () => { clearTimeout(timer); timer = setTimeout(updateSuggest, 260); };
  form.title.addEventListener('input', onType);
  desc.addEventListener('input', onType);

  $('#imageInput').addEventListener('change', (e) => {
    const f = e.target.files[0];
    const box = $('#imgPreview');
    if (!f) { box.classList.add('hidden'); return; }
    if (f.size > 5 * 1024 * 1024) { toast('Image must be smaller than 5 MB', 'error'); e.target.value = ''; box.classList.add('hidden'); return; }
    const r = new FileReader();
    r.onload = () => { $('img', box).src = r.result; box.classList.remove('hidden'); };
    r.readAsDataURL(f);
  });

  $('#cancelNew').onclick = () => go('overview');

  form.onsubmit = async (e) => {
    e.preventDefault();
    const btn = $('#submitNew');
    setBtnLoading(btn, true, 'Submitting…');
    try {
      const fd = new FormData(form);
      const res = await API.postForm('/api/complaints', fd);
      toast(res.message || 'Complaint submitted');
      form.reset();
      $('#imgPreview').classList.add('hidden');
      sugg.classList.add('hidden');
      go('complaints');
      await openDetail(res.complaint.id);
    } catch (err) {
      toast(err.message, 'error');
      setBtnLoading(btn, false, 'Submit complaint');
    }
  };
};

/* ------------------------ Complaints list --------------------------- */
const LIST_PRESETS = {
  complaints: { title: null, extra: {} },
  sla: { title: 'SLA Breached', extra: { sla: 'breached' } },
  escalated: { title: 'Escalated', extra: { escalated: '1' } }
};

VIEWS.complaints = () => renderList('complaints');
VIEWS.sla = () => renderList('sla');
VIEWS.escalated = () => renderList('escalated');

async function renderList(presetKey) {
  const preset = LIST_PRESETS[presetKey];
  const el = content();
  const role = state.user.role;
  const f = state.filters;

  const titles = {
    complaints: role === 'student' ? 'My Complaints' : role === 'department' ? 'Assigned Complaints' : 'All Complaints',
    sla: 'SLA Breached',
    escalated: 'Escalated Complaints'
  };
  const subs = {
    complaints: role === 'student' ? 'Every complaint you have raised, with live status and timeline.' : 'Search, filter and update complaints in your scope.',
    sla: 'Complaints that crossed their resolution target and were escalated automatically.',
    escalated: 'Complaints pushed beyond the normal workflow for urgent attention.'
  };

  const catOptions = Object.entries(state.categories).map(([k, v]) => `<option value="${k}" ${f.category === k ? 'selected' : ''}>${esc(v)}</option>`).join('');

  el.innerHTML = `
    <div class="page-head"><div><h3>${titles[presetKey]}</h3><p class="sub">${subs[presetKey]}</p></div>
      <div class="actions">
        ${role === 'student' ? `<button class="btn btn-primary" id="listNew">${icon('plus', 15)} New Complaint</button>` : ''}
        <button class="btn btn-outline" id="reloadList">Refresh</button>
      </div></div>

    <div class="card">
      <div class="filters">
        <input class="search" type="search" id="fq" placeholder="Search ticket, title, description, location…" value="${esc(f.q)}" />
        <select id="fstatus">
          <option value="">All statuses</option>
          ${Object.entries(STATUS_META).map(([k, v]) => `<option value="${k}" ${f.status === k ? 'selected' : ''}>${v.label}</option>`).join('')}
        </select>
        <select id="fpriority">
          <option value="">All priorities</option>
          <option value="high" ${f.priority === 'high' ? 'selected' : ''}>High</option>
          <option value="medium" ${f.priority === 'medium' ? 'selected' : ''}>Medium</option>
          <option value="low" ${f.priority === 'low' ? 'selected' : ''}>Low</option>
        </select>
        ${presetKey === 'complaints' ? `<select id="fcategory"><option value="">All categories</option>${catOptions}</select>` : ''}
        <button class="btn btn-ghost btn-sm" id="clearFilters">Clear</button>
      </div>
      <div class="card-body tight" id="listBody">${skeletonRows(6)}</div>
      <div class="pagination" id="pager"></div>
    </div>`;

  const ln = $('#listNew'); if (ln) ln.onclick = () => go('new');
  $('#reloadList').onclick = () => loadList(presetKey);
  $('#clearFilters').onclick = () => {
    state.filters = { q: '', status: '', priority: '', category: '', sla: preset.extra.sla || '', escalated: preset.extra.escalated || '', page: 1 };
    renderList(presetKey);
  };

  const debounce = (fn, ms = 300) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
  $('#fq').addEventListener('input', debounce((e) => { f.q = e.target.value; f.page = 1; loadList(presetKey); }));
  ['fstatus:status', 'fpriority:priority', 'fcategory:category'].forEach((pair) => {
    const [id, key] = pair.split(':');
    const node = $('#' + id);
    if (node) node.addEventListener('change', (e) => { f[key] = e.target.value; f.page = 1; loadList(presetKey); });
  });

  f.sla = preset.extra.sla || '';
  f.escalated = preset.extra.escalated || '';
  await loadList(presetKey);
}

async function loadList(presetKey) {
  const preset = LIST_PRESETS[presetKey];
  const body = $('#listBody');
  if (body) body.innerHTML = skeletonRows(6);
  const f = state.filters;
  const params = new URLSearchParams({ limit: '12', page: String(f.page) });
  if (f.q) params.set('q', f.q);
  if (f.status) params.set('status', f.status);
  if (f.priority) params.set('priority', f.priority);
  if (f.category) params.set('category', f.category);
  if (preset.extra.sla) params.set('sla', preset.extra.sla);
  if (preset.extra.escalated) params.set('escalated', preset.extra.escalated);

  const data = await safe(() => API.get('/api/complaints?' + params.toString()));
  if (!data) { body.innerHTML = emptyState('Failed to load complaints'); return; }

  const role = state.user.role;
  const host = $('#listBody');
  if (!data.complaints.length) {
    const msg = {
      complaints: role === 'student' ? 'You have not raised any complaints yet' : 'No complaints match these filters',
      sla: 'No SLA breaches — everything is on track',
      escalated: 'No escalated complaints right now'
    }[presetKey];
    host.innerHTML = emptyState(msg, presetKey === 'complaints' && role === 'student' ? 'Click "New Complaint" to report an issue.' : 'Try adjusting the filters.');
  } else {
    host.innerHTML = `<div class="table-wrap"><table class="tbl">
      <thead><tr>
        <th>Ticket</th><th>Complaint</th>
        ${role !== 'student' ? '<th>Student</th>' : '<th>Department</th>'}
        <th>Priority</th><th>Status</th><th>SLA</th><th>Updated</th><th></th>
      </tr></thead>
      <tbody>${data.complaints.map((c) => `
        <tr class="clickable" data-id="${c.id}">
          <td class="mono">${esc(c.ticketId)}</td>
          <td><div class="t-main">${esc(c.title)}</div><div class="t-sub">${esc(c.categoryLabel)}${c.location ? ' · ' + esc(c.location) : ''}</div></td>
          <td>${role === 'student'
            ? (c.department ? esc(c.department.name) : '<span class="muted">Unassigned</span>')
            : (c.student ? esc(c.student.name) : '—')}</td>
          <td>${priorityBadge(c.priority)}</td>
          <td>${statusBadge(c.status)}</td>
          <td>${slaBadge(c)}</td>
          <td class="muted small nowrap">${timeAgo(c.updatedAt)}</td>
          <td class="text-right"><button class="btn btn-outline btn-sm" data-open="${c.id}">View</button></td>
        </tr>`).join('')}</tbody></table></div>`;
  }
  wireRows(host);

  const pager = $('#pager');
  const from = (data.page - 1) * 12 + 1;
  const to = Math.min(data.total, data.page * 12);
  pager.innerHTML = `<span class="info">${data.total ? `${from}–${to} of ${data.total}` : '0 results'}</span>
    <button class="btn btn-outline btn-sm" id="prevPage" ${data.page <= 1 ? 'disabled' : ''}>Prev</button>
    <span class="small muted">Page ${data.page} / ${data.pages}</span>
    <button class="btn btn-outline btn-sm" id="nextPage" ${data.page >= data.pages ? 'disabled' : ''}>Next</button>`;
  $('#prevPage').onclick = () => { state.filters.page = Math.max(1, state.filters.page - 1); loadList(presetKey); };
  $('#nextPage').onclick = () => { state.filters.page = data.pages; loadList(presetKey); };
}

/* -------------------------- Complaint detail ------------------------ */
async function openDetail(id) {
  openModal(`<div class="modal-body"><div class="page-loading"><span class="spinner lg"></span> Loading complaint…</div></div>`, true);
  const data = await safe(() => API.get('/api/complaints/' + id));
  if (!data) { closeModal(); return; }
  const c = data.complaint;
  const role = state.user.role;
  const h = hoursLeft(c.slaDueAt);

  const tlTone = (a) => (a.includes('SLA') || a.includes('Escalat') ? 'warn' : a.includes('Resolved') || a.includes('Closed') ? 'good' : '');

  const imageSection = c.hasImage ? `
    <div class="card">
      <div class="card-head"><div><h4>Attached photo</h4><div class="sub">${esc(c.imageFilename || 'image')} · ${fmtBytes(c.imageSize)}</div></div>
        <div class="right"><a class="btn btn-outline btn-sm" href="/api/complaints/${c.id}/image" target="_blank" rel="noopener">Open full size</a></div></div>
      <div class="card-body"><div class="img-frame"><img src="/api/complaints/${c.id}/image" alt="Complaint photo" loading="lazy" /></div></div>
    </div>` : '';

  const actionPanel = buildActionPanel(c, role);

  openModal(`
    ${modalHead(`<span class="mono">${esc(c.ticketId)}</span> · ${esc(c.title)}`, `${esc(c.categoryLabel)} · raised ${fmtDateTime(c.createdAt)} by ${esc(c.student ? c.student.name : '—')}`)}
    <div class="modal-body">
      <div class="inline-chips" style="margin-bottom:14px">
        ${statusBadge(c.status)} ${priorityBadge(c.priority)}
        <span class="badge ${c.slaBreached ? 'st-escalated' : 'st-assigned'}">${c.slaBreached ? 'SLA Breached' : (h.breached ? 'Overdue' : 'SLA ' + h.text)}</span>
        ${c.escalated ? '<span class="badge st-escalated">Escalated</span>' : ''}
        ${c.autoCategory ? '<span class="badge st-submitted">Auto category</span>' : ''}
        ${c.autoPriority ? '<span class="badge st-submitted">Auto priority</span>' : ''}
      </div>

      <div class="detail-grid">
        <div>
          <div class="card">
            <div class="card-head"><div><h4>Description</h4></div></div>
            <div class="card-body">
              <div class="desc-block">${esc(c.description)}</div>
              <dl class="kv" style="margin-top:16px">
                <dt>Location</dt><dd>${esc(c.location || '—')}</dd>
                <dt>Raised by</dt><dd>${esc(c.student ? c.student.name : '—')}${c.student && c.student.rollNo ? ' · ' + esc(c.student.rollNo) : ''}</dd>
                <dt>Department</dt><dd>${c.department ? esc(c.department.name) : '<span class="muted">Not assigned yet</span>'}</dd>
                <dt>Created</dt><dd>${fmtDateTime(c.createdAt)}</dd>
                ${c.resolvedAt ? `<dt>Resolved</dt><dd>${fmtDateTime(c.resolvedAt)}</dd>` : ''}
                ${c.resolutionRemarks ? `<dt>Resolution</dt><dd>${esc(c.resolutionRemarks)}</dd>` : ''}
                ${c.escalatedReason ? `<dt>Escalation reason</dt><dd>${esc(c.escalatedReason)}</dd>` : ''}
              </dl>
            </div>
          </div>

          ${imageSection}

          <div class="card">
            <div class="card-head"><div><h4>Timeline</h4><div class="sub">${c.timeline.length} events</div></div></div>
            <div class="card-body">
              <div class="timeline">
                ${c.timeline.slice().reverse().map((t) => `
                  <div class="tl-item ${tlTone(t.action)}">
                    <div class="tl-title">${esc(t.action)}</div>
                    <div class="tl-meta">${fmtDateTime(t.at)} · ${esc(t.byName)}${t.byRole ? ' (' + ROLE_LABEL[t.byRole] + ')' : ''}</div>
                    ${t.note ? `<div class="tl-note">${esc(t.note)}</div>` : ''}
                  </div>`).join('')}
              </div>
            </div>
          </div>

          <div class="card mb0">
            <div class="card-head"><div><h4>Comments</h4><div class="sub">${c.comments.length} message(s)</div></div></div>
            <div class="card-body">
              ${c.comments.length ? c.comments.map((m) => `
                <div class="comment">
                  <div class="avatar">${initials(m.byName)}</div>
                  <div style="flex:1;min-width:0">
                    <div class="c-head"><b>${esc(m.byName)}</b><span class="badge ${m.byRole === 'student' ? 'st-assigned' : 'role-badge'}">${ROLE_LABEL[m.byRole]}</span><span class="c-time">${fmtDateTime(m.at)}</span></div>
                    <div class="c-text">${esc(m.text)}</div>
                  </div>
                </div>`).join('') : '<p class="muted small" style="padding:6px 0 14px">No comments yet. Use the box below to ask a question or add information.</p>'}
              <form id="commentForm" style="margin-top:12px">
                <label class="field"><span>Add a comment</span>
                  <textarea name="text" rows="2" placeholder="Write a message…" required></textarea>
                </label>
                <div style="display:flex;justify-content:flex-end">
                  <button class="btn btn-primary btn-sm" type="submit">${icon('send', 14)} Post comment</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <div class="sla-box ${c.slaBreached ? 'breached' : ''}" style="margin-bottom:16px">
            <div><div class="lbl">${c.slaBreached ? 'SLA breached' : 'SLA target'}</div>
              <div class="val">${c.slaBreached ? `Exceeded ${c.slaHours}h target` : h.text}</div></div>
            <div class="text-right"><div class="lbl">Due</div><div class="small">${fmtDateTime(c.slaDueAt)}</div></div>
          </div>
          ${actionPanel}
        </div>
      </div>
    </div>`, true);

  wireDetailActions(c, role);
}

function buildActionPanel(c, role) {
  const panel = (title, inner) => `<div class="card"><div class="card-head"><div><h4>${title}</h4></div></div><div class="card-body">${inner}</div></div>`;
  const next = {
    assigned: [
      { to: 'in_progress', label: 'Start work', cls: 'btn-primary' },
      { to: 'resolved', label: 'Mark resolved', cls: 'btn-success' },
      { to: 'escalated', label: 'Escalate', cls: 'btn-danger' }
    ],
    in_progress: [
      { to: 'resolved', label: 'Mark resolved', cls: 'btn-success' },
      { to: 'escalated', label: 'Escalate', cls: 'btn-danger' }
    ],
    escalated: [
      { to: 'in_progress', label: 'Resume work', cls: 'btn-primary' },
      { to: 'resolved', label: 'Mark resolved', cls: 'btn-success' }
    ],
    resolved: [
      { to: 'in_progress', label: 'Reopen', cls: 'btn-outline' }
    ],
    closed: [
      { to: 'in_progress', label: 'Reopen', cls: 'btn-outline' }
    ],
    submitted: []
  };

  if (role === 'student') {
    if (c.status === 'resolved') {
      return panel('Your action', `
        <p class="help" style="margin-bottom:12px">The department marked this as resolved. Confirm once the issue is actually fixed.</p>
        <button class="btn btn-success btn-block" id="actClose">${icon('check', 15)} Confirm &amp; close complaint</button>`);
    }
    if (c.status === 'closed') {
      return panel('Completed', `<div class="alert alert-success mb0">This complaint is closed. Thank you for using CampusDesk.</div>`);
    }
    return panel('Status', `<div class="alert alert-info mb0">Waiting for the department to act. You will be notified on every status change.</div>`);
  }

  const canAct = role === 'admin' ||
    (role === 'department' && c.department && String(c.department.id) === String(state.user.department ? state.user.department.id : ''));

  const buttons = (next[c.status] || [])
    .filter(() => canAct)
    .map((b) => `<button class="btn ${b.cls} btn-block" data-status="${b.to}" style="margin-bottom:8px">${b.label}</button>`).join('');

  const assignBlock = role === 'admin' ? `
    <label class="field"><span>Assign / reassign department</span>
      <select id="assignDept">
        ${state.departments.map((d) => `<option value="${d.id}" ${c.department && c.department.id === d.id ? 'selected' : ''}>${esc(d.name)}</option>`).join('')}
      </select>
    </label>
    <button class="btn btn-primary btn-block" id="actAssign" style="margin-bottom:14px">Save assignment</button>` : '';

  const statusBlock = canAct && buttons ? buttons
    : (canAct ? '<p class="help">No further actions available for this status.</p>'
      : '<p class="help">This complaint is not assigned to your department.</p>');

  return panel('Update complaint', `${assignBlock}${statusBlock}`);
}

function wireDetailActions(c, role) {
  const cf = $('#commentForm');
  if (cf) {
    cf.onsubmit = async (e) => {
      e.preventDefault();
      const btn = $('button[type=submit]', cf);
      setBtnLoading(btn, true, 'Posting…');
      try {
        await API.post(`/api/complaints/${c.id}/comments`, { text: cf.text.value });
        toast('Comment posted');
        openDetail(c.id);
      } catch (err) { toast(err.message, 'error'); setBtnLoading(btn, false, 'Post comment'); }
    };
  }

  const closeBtn = $('#actClose');
  if (closeBtn) closeBtn.onclick = async () => {
    setBtnLoading(closeBtn, true, 'Closing…');
    try { const r = await API.post(`/api/complaints/${c.id}/close`); toast(r.message); openDetail(c.id); }
    catch (err) { toast(err.message, 'error'); setBtnLoading(closeBtn, false, 'Confirm & close complaint'); }
  };

  const assignBtn = $('#actAssign');
  if (assignBtn) assignBtn.onclick = async () => {
    setBtnLoading(assignBtn, true, 'Saving…');
    try {
      const r = await API.post(`/api/complaints/${c.id}/assign`, { departmentId: $('#assignDept').value });
      toast(r.message); openDetail(c.id);
    } catch (err) { toast(err.message, 'error'); setBtnLoading(assignBtn, false, 'Save assignment'); }
  };

  $$('[data-status]').forEach((btn) => {
    btn.onclick = () => {
      const to = btn.dataset.status;
      if (to === 'resolved') return showResolveForm(c);
      if (to === 'escalated') return showEscalateForm(c);
      applyStatus(c, to);
    };
  });
}

async function applyStatus(c, to, remarks = '', note = '') {
  try {
    const r = await API.patch(`/api/complaints/${c.id}/status`, { status: to, resolutionRemarks: remarks, note });
    toast(r.message || 'Updated');
    openDetail(c.id);
    if (state.route === 'complaints' || state.route === 'sla' || state.route === 'escalated') loadList(state.route);
  } catch (e) { toast(e.message, 'error'); }
}

function showResolveForm(c) {
  openModal(`${modalHead('Mark as resolved', c.ticketId + ' · ' + c.title)}
    <div class="modal-body">
      <label class="field"><span>Resolution remarks ${state.user.role === 'department' ? '*' : '(optional)'}</span>
        <textarea id="resolveNote" rows="4" placeholder="Describe what was done to fix the issue…"></textarea>
      </label>
      <div class="help">The student will be notified and can confirm to close the complaint.</div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost close">Cancel</button>
      <button class="btn btn-success" id="confirmResolve">${icon('check', 15)} Confirm resolved</button>
    </div>`);
  $('#confirmResolve').onclick = async () => {
    const note = $('#resolveNote').value.trim();
    if (!note && state.user.role === 'department') { toast('Resolution remarks are required', 'error'); return; }
    const b = $('#confirmResolve');
    setBtnLoading(b, true, 'Saving…');
    await applyStatus(c, 'resolved', note);
  };
}

function showEscalateForm(c) {
  openModal(`${modalHead('Escalate complaint', c.ticketId + ' · ' + c.title)}
    <div class="modal-body">
      <label class="field"><span>Reason for escalation</span>
        <textarea id="escalateNote" rows="3" placeholder="e.g. Requires senior attention / vendor support needed"></textarea>
      </label>
      <div class="alert alert-warn mb0">Escalating moves the complaint to the Super Admin's attention list immediately.</div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost close">Cancel</button>
      <button class="btn btn-danger" id="confirmEscalate">Escalate now</button>
    </div>`);
  $('#confirmEscalate').onclick = async () => {
    const b = $('#confirmEscalate');
    setBtnLoading(b, true, 'Escalating…');
    try {
      const r = await API.post(`/api/complaints/${c.id}/escalate`, { reason: $('#escalateNote').value.trim() });
      toast(r.message); openDetail(c.id);
    } catch (e) { toast(e.message, 'error'); setBtnLoading(b, false, 'Escalate now'); }
  };
}

/* ---------------------------- Analytics ----------------------------- */
VIEWS.analytics = async function () {
  const el = content();
  el.innerHTML = '<div class="page-loading"><span class="spinner lg"></span> Crunching numbers…</div>';
  const [a, st] = await Promise.all([
    safe(() => API.get('/api/admin/analytics')),
    safe(() => API.get('/api/stats'))
  ]);
  if (!a || !st) { el.innerHTML = emptyState('Could not load analytics'); return; }
  const s = st.stats;

  el.innerHTML = `
    <div class="page-head"><div><h3>Analytics</h3><p class="sub">Campus-wide complaint intelligence — volume, resolution speed and department performance.</p></div>
      <div class="actions"><button class="btn btn-outline" id="reloadAnalytics">Refresh</button></div></div>

    <div class="grid grid-4">
      ${statCard('Resolution rate', a.resolution.rate + '%', 'tone-green')}
      ${statCard('Avg resolution time', a.resolution.avgHours + 'h', 'tone-blue', `Fastest ${a.resolution.fastest}h · Slowest ${a.resolution.slowest}h`)}
      ${statCard('SLA breaches', s.breached, 'tone-red', 'Open complaints past target')}
      ${statCard('Total volume', s.total, 'tone-slate', `${s.open} still open`)}
    </div>

    <div class="card" style="margin-top:16px">
      <div class="card-head"><div><h4>Complaint volume — last 14 days</h4><div class="sub">New complaints raised per day</div></div></div>
      <div class="card-body chart">${lineChart(a.trend.map((t) => ({ label: t.date.slice(5), value: t.count })))}</div>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <div class="card-head"><div><h4>By status</h4><div class="sub">Where complaints sit today</div></div></div>
        <div class="card-body chart">${donutChart(a.byStatus.map((x) => ({ label: x.label, value: x.count, color: { submitted: '#64748b', assigned: '#2563eb', in_progress: '#f59e0b', resolved: '#16a34a', closed: '#334155', escalated: '#dc2626' }[x.key] })))}</div>
      </div>
      <div class="card">
        <div class="card-head"><div><h4>By category</h4><div class="sub">Auto-detected distribution</div></div></div>
        <div class="card-body chart">${barChart(a.byCategory.map((x) => ({ label: x.label.split(' ')[0], value: x.count })))}</div>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><div><h4>Department performance</h4><div class="sub">Load, resolution and SLA compliance per department</div></div></div>
      <div class="card-body tight">
        ${a.byDepartment.length ? `<div class="table-wrap"><table class="tbl">
          <thead><tr><th>Department</th><th>Assigned</th><th>Resolved</th><th>Open</th><th>SLA breaches</th><th>Resolution %</th></tr></thead>
          <tbody>${a.byDepartment.map((d) => {
            const pct = d.total ? Math.round((d.resolved / d.total) * 100) : 0;
            return `<tr><td class="t-main">${esc(d.name)}</td><td>${d.total}</td><td>${d.resolved}</td><td>${d.total - d.resolved}</td>
              <td>${d.breached ? `<span class="badge st-escalated">${d.breached}</span>` : '<span class="badge st-resolved">0</span>'}</td>
              <td><div class="hbar-track" style="width:130px"><div class="hbar-fill" style="width:${pct}%;background:${pct >= 70 ? '#16a34a' : pct >= 40 ? '#f59e0b' : '#dc2626'}"></div></div><span class="small muted">${pct}%</span></td></tr>`;
          }).join('')}</tbody></table></div>` : emptyState('No departments yet')}
      </div>
    </div>`;
  $('#reloadAnalytics').onclick = () => VIEWS.analytics();
};

/* ---------------------------- Departments --------------------------- */
VIEWS.departments = async function () {
  const el = content();
  el.innerHTML = '<div class="page-loading"><span class="spinner lg"></span> Loading departments…</div>';
  const [depsRes, an] = await Promise.all([
    safe(() => API.get('/api/departments?all=1')),
    safe(() => API.get('/api/admin/analytics'))
  ]);
  if (!depsRes) { el.innerHTML = emptyState('Could not load departments'); return; }
  const perf = (an && an.byDepartment) || [];
  state.departments = depsRes.departments;

  el.innerHTML = `
    <div class="page-head"><div><h3>Departments</h3><p class="sub">Each department owns one complaint category. Complaints are auto-routed here on submission.</p></div>
      <div class="actions"><button class="btn btn-primary" id="addDept">${icon('plus', 15)} New department</button></div></div>
    <div class="card"><div class="card-body tight">
      ${depsRes.departments.length ? `<div class="table-wrap"><table class="tbl">
        <thead><tr><th>Department</th><th>Category</th><th>Contact</th><th>Complaints</th><th>Resolved</th><th>Status</th><th></th></tr></thead>
        <tbody>${depsRes.departments.map((d) => {
          const p = perf.find((x) => x.id === d.id) || { total: 0, resolved: 0 };
          return `<tr>
            <td><div class="t-main">${esc(d.name)}</div><div class="t-sub">${esc(d.description || '')}</div></td>
            <td><span class="badge st-assigned">${esc(d.label)}</span></td>
            <td class="muted">${esc(d.email || '—')}</td>
            <td>${p.total}</td><td>${p.resolved}</td>
            <td>${d.active ? '<span class="badge st-resolved">Active</span>' : '<span class="badge st-closed">Inactive</span>'}</td>
            <td><div class="cell-actions">
              <button class="btn btn-outline btn-sm" data-edit="${d.id}">Edit</button>
              <button class="btn btn-ghost btn-sm" data-toggle="${d.id}" data-active="${d.active}">${d.active ? 'Disable' : 'Enable'}</button>
            </div></td></tr>`;
        }).join('')}</tbody></table></div>` : emptyState('No departments yet')}
    </div></div>`;

  $('#addDept').onclick = () => deptModal();
  $$('[data-edit]').forEach((b) => b.onclick = () => {
    const d = state.departments.find((x) => x.id === b.dataset.edit);
    deptModal(d);
  });
  $$('[data-toggle]').forEach((b) => b.onclick = async () => {
    const active = b.dataset.active !== 'true';
    const r = await safe(() => API.patch('/api/admin/departments/' + b.dataset.toggle, { active }));
    if (r) { toast(r.message); VIEWS.departments(); }
  });
};

function deptModal(d) {
  const isEdit = !!d;
  openModal(`${modalHead(isEdit ? 'Edit department' : 'New department')}
    <div class="modal-body">
      <label class="field"><span>Name *</span><input type="text" id="dName" value="${isEdit ? esc(d.name) : ''}" placeholder="e.g. Electrical Department" /></label>
      <div class="field-row">
        <label class="field"><span>Category key *</span>
          <select id="dCat" ${isEdit ? 'disabled' : ''}>
            ${Object.entries(state.categories).map(([k, v]) => `<option value="${k}" ${d && d.category === k ? 'selected' : ''}>${esc(v)} (${k})</option>`).join('')}
          </select></label>
        <label class="field"><span>Contact email</span><input type="text" id="dEmail" value="${isEdit ? esc(d.email || '') : ''}" placeholder="dept@campus.edu" /></label>
      </div>
      <label class="field"><span>Description</span><textarea id="dDesc" rows="3" placeholder="What this department handles…">${isEdit ? esc(d.description || '') : ''}</textarea></label>
      <div class="help">The category key decides which complaints are auto-assigned to this department.</div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost close">Cancel</button>
      <button class="btn btn-primary" id="saveDept">${isEdit ? 'Save changes' : 'Create department'}</button>
    </div>`);
  $('#saveDept').onclick = async () => {
    const body = { name: $('#dName').value.trim(), category: $('#dCat').value, description: $('#dDesc').value.trim(), email: $('#dEmail').value.trim() };
    if (!body.name) { toast('Department name is required', 'error'); return; }
    const b = $('#saveDept');
    setBtnLoading(b, true, 'Saving…');
    try {
      const r = isEdit ? await API.patch('/api/admin/departments/' + d.id, body) : await API.post('/api/admin/departments', body);
      toast(r.message); closeModal();
      const deps = await API.get('/api/departments?all=1');
      state.departments = deps.departments;
      VIEWS.departments();
    } catch (e) { toast(e.message, 'error'); setBtnLoading(b, false, isEdit ? 'Save changes' : 'Create department'); }
  };
}

/* ------------------------------- Users ------------------------------ */
VIEWS.users = async function () {
  const el = content();
  el.innerHTML = '<div class="page-loading"><span class="spinner lg"></span> Loading users…</div>';
  const data = await safe(() => API.get('/api/admin/users'));
  if (!data) { el.innerHTML = emptyState('Could not load users'); return; }

  const c = data.counts;
  el.innerHTML = `
    <div class="page-head"><div><h3>Users</h3><p class="sub">Students, department operators and administrators.</p></div>
      <div class="actions"><button class="btn btn-primary" id="addUser">${icon('plus', 15)} New user</button></div></div>

    <div class="grid grid-3">
      ${statCard('Students', c.student || 0, 'tone-blue')}
      ${statCard('Department accounts', c.department || 0, 'tone-amber')}
      ${statCard('Administrators', c.admin || 0, 'tone-violet')}
    </div>

    <div class="card" style="margin-top:16px">
      <div class="filters">
        <input class="search" type="search" id="uq" placeholder="Search name, email or roll number…" />
        <select id="urole"><option value="">All roles</option><option value="student">Students</option><option value="department">Departments</option><option value="admin">Admins</option></select>
      </div>
      <div class="card-body tight" id="usersBody">${skeletonRows(6)}</div>
    </div>`;

  const load = async () => {
    const q = new URLSearchParams();
    if ($('#uq').value) q.set('q', $('#uq').value);
    if ($('#urole').value) q.set('role', $('#urole').value);
    const body = $('#usersBody');
    body.innerHTML = skeletonRows(6);
    const res = await safe(() => API.get('/api/admin/users?' + q.toString()));
    if (!res) { body.innerHTML = emptyState('Failed to load users'); return; }
    if (!res.users.length) { body.innerHTML = emptyState('No users found'); return; }
    body.innerHTML = `<div class="table-wrap"><table class="tbl">
      <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Department</th><th>Joined</th><th>Status</th><th></th></tr></thead>
      <tbody>${res.users.map((u) => `<tr>
        <td><div class="t-main">${esc(u.name)}</div>${u.rollNo ? `<div class="t-sub">${esc(u.rollNo)}</div>` : ''}</td>
        <td class="muted">${esc(u.email)}</td>
        <td><span class="badge ${u.role === 'admin' ? 'role-badge' : u.role === 'department' ? 'pr-medium' : 'st-assigned'}">${ROLE_LABEL[u.role]}</span></td>
        <td>${u.department ? esc(u.department.name) : '<span class="muted">—</span>'}</td>
        <td class="muted small">${fmtDate(u.createdAt)}</td>
        <td>${u.active ? '<span class="badge st-resolved">Active</span>' : '<span class="badge st-closed">Disabled</span>'}</td>
        <td><div class="cell-actions">
          <button class="btn btn-outline btn-sm" data-edit="${u.id}">Edit</button>
          <button class="btn btn-ghost btn-sm" data-del="${u.id}">Delete</button>
        </div></td></tr>`).join('')}</tbody></table></div>`;

    $$('[data-edit]', body).forEach((b) => b.onclick = () => userModal(res.users.find((x) => x.id === b.dataset.edit)));
    $$('[data-del]', body).forEach((b) => b.onclick = async () => {
      if (!confirm('Delete this user? This cannot be undone.')) return;
      const r = await safe(() => API.del('/api/admin/users/' + b.dataset.del));
      if (r) { toast(r.message); VIEWS.users(); }
    });
  };

  let t;
  $('#uq').addEventListener('input', () => { clearTimeout(t); t = setTimeout(load, 300); });
  $('#urole').addEventListener('change', load);
  $('#addUser').onclick = () => userModal(null);
  await load();
};

function userModal(u) {
  const isEdit = !!u;
  openModal(`${modalHead(isEdit ? 'Edit user' : 'New user')}
    <div class="modal-body">
      <label class="field"><span>Full name *</span><input type="text" id="uName" value="${isEdit ? esc(u.name) : ''}" /></label>
      <label class="field"><span>Email *</span><input type="email" id="uEmail" value="${isEdit ? esc(u.email) : ''}" ${isEdit ? 'disabled' : ''} /></label>
      <div class="field-row">
        <label class="field"><span>Role</span>
          <select id="uRole">
            <option value="student" ${u && u.role === 'student' ? 'selected' : ''}>Student</option>
            <option value="department" ${u && u.role === 'department' ? 'selected' : ''}>Department</option>
            <option value="admin" ${u && u.role === 'admin' ? 'selected' : ''}>Super Admin</option>
          </select></label>
        <label class="field"><span>Department</span>
          <select id="uDept"><option value="">— none —</option>
            ${state.departments.map((d) => `<option value="${d.id}" ${u && u.department && u.department.id === d.id ? 'selected' : ''}>${esc(d.name)}</option>`).join('')}
          </select></label>
      </div>
      <div class="field-row">
        <label class="field"><span>Roll number</span><input type="text" id="uRoll" value="${isEdit ? esc(u.rollNo || '') : ''}" /></label>
        <label class="field"><span>${isEdit ? 'New password (leave blank to keep)' : 'Password *'}</span><input type="text" id="uPass" placeholder="Minimum 6 characters" /></label>
      </div>
      ${isEdit ? `<label style="display:flex;gap:8px;align-items:center;font-size:13.5px"><input type="checkbox" id="uActive" ${u.active ? 'checked' : ''} style="width:auto;height:auto" /> Account active</label>` : ''}
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost close">Cancel</button>
      <button class="btn btn-primary" id="saveUser">${isEdit ? 'Save changes' : 'Create user'}</button>
    </div>`);

  const syncDept = () => {
    const isDept = $('#uRole').value === 'department';
    $('#uDept').closest('.field').style.opacity = isDept || $('#uRole').value === 'admin' ? '1' : '.55';
  };
  $('#uRole').addEventListener('change', syncDept);
  syncDept();

  $('#saveUser').onclick = async () => {
    const body = {
      name: $('#uName').value.trim(),
      role: $('#uRole').value,
      departmentId: $('#uDept').value,
      rollNo: $('#uRoll').value.trim(),
      password: $('#uPass').value
    };
    if (!isEdit) body.email = $('#uEmail').value.trim();
    if (isEdit) body.active = $('#uActive').checked;
    if (!body.name) { toast('Name is required', 'error'); return; }
    if (!isEdit && (!body.email || !body.password)) { toast('Email and password are required', 'error'); return; }
    if (body.role === 'department' && !body.departmentId) { toast('Choose a department for department accounts', 'error'); return; }
    const b = $('#saveUser');
    setBtnLoading(b, true, 'Saving…');
    try {
      const r = isEdit ? await API.patch('/api/admin/users/' + u.id, body) : await API.post('/api/admin/users', body);
      toast(r.message); closeModal(); VIEWS.users();
    } catch (e) { toast(e.message, 'error'); setBtnLoading(b, false, isEdit ? 'Save changes' : 'Create user'); }
  };
}

/* ---------------------------- Activity log -------------------------- */
VIEWS.activity = async function () {
  const el = content();
  el.innerHTML = '<div class="page-loading"><span class="spinner lg"></span> Loading activity…</div>';
  const data = await safe(() => API.get('/api/admin/activity'));
  if (!data) { el.innerHTML = emptyState('Could not load activity logs'); return; }
  const icoFor = (a) => ({ login: 'user', register: 'users', complaint_created: 'plus', status_change: 'check', assign: 'users', escalate: 'flag', sla_breach: 'clock', close: 'check', user_create: 'users', user_update: 'settings', user_delete: 'users', department_create: 'building', department_update: 'building', profile_update: 'settings' }[a] || 'activity');

  el.innerHTML = `
    <div class="page-head"><div><h3>Activity Logs</h3><p class="sub">Audit trail of every important action in the system.</p></div>
      <div class="actions"><button class="btn btn-outline" id="reloadAct">Refresh</button></div></div>
    <div class="card"><div class="activity">
      ${data.logs.length ? data.logs.map((l) => `<div class="act-item">
        <div class="act-ico">${icon(icoFor(l.action), 15)}</div>
        <div style="flex:1;min-width:0">
          <div class="act-title">${esc(l.detail)}</div>
          <div class="act-meta">${esc(l.actorName)} · ${ROLE_LABEL[l.actorRole] || l.actorRole}${l.ticketId ? ' · ' + esc(l.ticketId) : ''} · ${fmtDateTime(l.createdAt)}</div>
        </div>
        <div class="muted small nowrap">${timeAgo(l.createdAt)}</div>
      </div>`).join('') : emptyState('No activity recorded yet')}
    </div></div>`;
  $('#reloadAct').onclick = () => VIEWS.activity();
};

/* --------------------------- Notifications page --------------------- */
async function renderNotifPage() {
  const data = await safe(() => API.get('/api/notifications'));
  const host = $('#notifPageList');
  if (!host) return;
  if (!data || !data.notifications.length) { host.innerHTML = emptyState('No notifications', 'Status changes, SLA alerts and comments show up here.'); return; }
  host.innerHTML = data.notifications.map(notifHtml).join('');
  wireNotifClicks(host);
}
VIEWS.notifications = function () {
  const el = content();
  el.innerHTML = `
    <div class="page-head"><div><h3>Notifications</h3><p class="sub">Everything that happened to your complaints.</p></div>
      <div class="actions"><button class="btn btn-outline" id="readAllPage">Mark all as read</button></div></div>
    <div class="card"><div class="card-body" id="notifPageList">${skeletonRows(4)}</div></div>`;
  $('#readAllPage').onclick = async () => {
    await safe(() => API.post('/api/notifications/read-all'));
    state.notifUnread = 0; updateBell(); renderNotifPage();
    toast('All notifications marked as read');
  };
  renderNotifPage();
};

/* ------------------------------ Profile ----------------------------- */
VIEWS.profile = function () {
  const u = state.user;
  const el = content();
  el.innerHTML = `
    <div class="page-head"><div><h3>My Profile</h3><p class="sub">Manage your personal details and password.</p></div></div>
    <div class="grid grid-2">
      <form class="card" id="profileForm">
        <div class="card-head"><div><h4>Account details</h4></div></div>
        <div class="card-body">
          <div class="field-row">
            <label class="field"><span>Full name</span><input type="text" name="name" value="${esc(u.name)}" required /></label>
            <label class="field"><span>Email</span><input type="email" value="${esc(u.email)}" disabled /></label>
          </div>
          <div class="field-row">
            <label class="field"><span>${u.role === 'student' ? 'Roll number' : 'Phone'}</span>
              <input type="text" name="${u.role === 'student' ? 'rollNo' : 'phone'}" value="${esc(u.role === 'student' ? (u.rollNo || '') : (u.phone || ''))}" /></label>
            <label class="field"><span>Role</span><input type="text" value="${ROLE_LABEL[u.role]}" disabled /></label>
          </div>
          <label class="field"><span>Department</span><input type="text" value="${esc(u.department ? u.department.name : (u.role === 'admin' ? 'All departments' : '—'))}" disabled /></label>
          <button class="btn btn-primary" type="submit">Save changes</button>
        </div>
      </form>

      <form class="card" id="passForm">
        <div class="card-head"><div><h4>Change password</h4></div></div>
        <div class="card-body">
          <label class="field"><span>Current password</span><input type="password" name="currentPassword" required /></label>
          <label class="field"><span>New password</span><input type="password" name="newPassword" required placeholder="Minimum 6 characters" /></label>
          <button class="btn btn-outline" type="submit">Update password</button>
        </div>
      </form>
    </div>`;

  $('#profileForm').onsubmit = async (e) => {
    e.preventDefault();
    const btn = $('button[type=submit]', e.target);
    setBtnLoading(btn, true, 'Saving…');
    try {
      const f = new FormData(e.target);
      const body = Object.fromEntries(f.entries());
      const r = await API.put('/api/profile', body);
      const me = await API.get('/api/auth/me');
      state.user = me.user;
      renderSidebar(); renderTopUser();
      toast(r.message);
      setBtnLoading(btn, false, 'Save changes');
    } catch (err) { toast(err.message, 'error'); setBtnLoading(btn, false, 'Save changes'); }
  };

  $('#passForm').onsubmit = async (e) => {
    e.preventDefault();
    const btn = $('button[type=submit]', e.target);
    setBtnLoading(btn, true, 'Updating…');
    try {
      const f = new FormData(e.target);
      const r = await API.put('/api/profile', Object.fromEntries(f.entries()));
      toast(r.message);
      e.target.reset();
      setBtnLoading(btn, false, 'Update password');
    } catch (err) { toast(err.message, 'error'); setBtnLoading(btn, false, 'Update password'); }
  };
};

/* ------------------------------ Router ------------------------------ */
function route() {
  if (!state.user) return;
  const hash = (window.location.hash || '').replace(/^#\/?/, '').split('?')[0];
  const allowed = NAV[state.user.role].flatMap((g) => g.items).map((i) => i.id);
  const id = allowed.includes(hash) ? hash : 'overview';
  state.route = id;
  if (id !== 'complaints' && id !== 'sla' && id !== 'escalated') {
    state.filters = { q: '', status: '', priority: '', category: '', sla: '', escalated: '', page: 1 };
  } else {
    state.filters.page = 1;
  }
  $$('#sideNav .nav-item').forEach((b) => b.classList.toggle('active', b.dataset.route === id));
  $('#pageTitle').textContent = TITLES[id] || 'Dashboard';
  document.title = 'CampusDesk — ' + (TITLES[id] || 'Dashboard');
  closeModal();
  (VIEWS[id] || VIEWS.overview)();
}

boot();
