/* =====================================================================
   Shared client helpers: API wrapper, toasts, formatting, SVG charts
   ====================================================================== */
const API = {
  async request(path, opts = {}) {
    const { method = 'GET', body, form } = opts;
    const init = { method, headers: {}, credentials: 'same-origin' };
    if (form) init.body = form;
    else if (body !== undefined) {
      init.headers['Content-Type'] = 'application/json';
      init.body = JSON.stringify(body);
    }
    let res;
    try {
      res = await fetch(path, init);
    } catch (e) {
      throw new Error('Cannot reach the server. Check your connection.');
    }
    let data = null;
    const text = await res.text();
    if (text) { try { data = JSON.parse(text); } catch (e) { data = { error: text }; } }
    if (!res.ok) {
      const err = new Error((data && data.error) || `Request failed (${res.status})`);
      err.status = res.status;
      throw err;
    }
    return data;
  },
  get: (p) => API.request(p),
  post: (p, body) => API.request(p, { method: 'POST', body }),
  patch: (p, body) => API.request(p, { method: 'PATCH', body }),
  put: (p, body) => API.request(p, { method: 'PUT', body }),
  del: (p) => API.request(p, { method: 'DELETE' }),
  postForm: (p, form) => API.request(p, { method: 'POST', form })
};

/* ------------------------------ Toast ----------------------------- */
function toast(message, type = 'success') {
  let host = document.getElementById('toastHost');
  if (!host) {
    host = document.createElement('div');
    host.id = 'toastHost';
    host.className = 'toast-host';
    document.body.appendChild(host);
  }
  const el = document.createElement('div');
  el.className = 'toast toast-' + type;
  el.innerHTML = `<span class="toast-ico">${type === 'error' ? '!' : type === 'info' ? 'i' : '✓'}</span><span></span>`;
  el.lastChild.textContent = message;
  host.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 350); }, 3400);
}

function setBtnLoading(btn, loading, text) {
  if (!btn) return;
  if (loading) {
    btn.dataset.label = btn.textContent;
    btn.disabled = true;
    btn.classList.add('is-loading');
    btn.innerHTML = '<span class="spinner"></span>' + (text || 'Working…');
  } else {
    btn.disabled = false;
    btn.classList.remove('is-loading');
    btn.textContent = btn.dataset.label || text || 'Submit';
  }
}

/* ---------------------------- Formatting -------------------------- */
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function fmtDate(d) {
  if (!d) return '—';
  const dt = new Date(d);
  if (isNaN(dt)) return '—';
  return dt.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
}
function fmtDateTime(d) {
  if (!d) return '—';
  const dt = new Date(d);
  if (isNaN(dt)) return '—';
  return dt.toLocaleString(undefined, {
    day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true
  });
}
function timeAgo(d) {
  const s = Math.floor((Date.now() - new Date(d).getTime()) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return Math.floor(s / 60) + 'm ago';
  if (s < 86400) return Math.floor(s / 3600) + 'h ago';
  if (s < 2592000) return Math.floor(s / 86400) + 'd ago';
  return fmtDate(d);
}
function fmtBytes(b) {
  if (!b) return '0 B';
  const u = ['B', 'KB', 'MB'];
  let i = 0; let n = b;
  while (n >= 1024 && i < u.length - 1) { n /= 1024; i++; }
  return n.toFixed(n < 10 && i > 0 ? 1 : 0) + ' ' + u[i];
}
function hoursLeft(dueAt) {
  const diff = new Date(dueAt).getTime() - Date.now();
  const abs = Math.abs(diff);
  const h = Math.floor(abs / 3600000);
  const m = Math.floor((abs % 3600000) / 60000);
  const txt = h ? `${h}h ${m}m` : `${m}m`;
  return diff < 0 ? { text: txt + ' overdue', breached: true } : { text: txt + ' left', breached: false };
}

const STATUS_META = {
  submitted: { label: 'Submitted', cls: 'st-submitted' },
  assigned: { label: 'Assigned', cls: 'st-assigned' },
  in_progress: { label: 'In Progress', cls: 'st-progress' },
  resolved: { label: 'Resolved', cls: 'st-resolved' },
  closed: { label: 'Closed', cls: 'st-closed' },
  escalated: { label: 'Escalated', cls: 'st-escalated' }
};
const PRIORITY_META = {
  high: { label: 'High', cls: 'pr-high' },
  medium: { label: 'Medium', cls: 'pr-medium' },
  low: { label: 'Low', cls: 'pr-low' }
};

const statusBadge = (s) => {
  const m = STATUS_META[s] || { label: s, cls: '' };
  return `<span class="badge ${m.cls}">${m.label}</span>`;
};
const priorityBadge = (p) => {
  const m = PRIORITY_META[p] || { label: p, cls: '' };
  return `<span class="badge ${m.cls}"><i class="prio-dot"></i>${m.label}</span>`;
};
const slaBadge = (c) => {
  if (c.slaBreached) return '<span class="badge st-escalated">SLA Breached</span>';
  if (['resolved', 'closed'].includes(c.status)) return '<span class="badge st-resolved">SLA Met</span>';
  const h = hoursLeft(c.slaDueAt);
  return `<span class="badge ${h.breached ? 'pr-high' : 'st-assigned'}">${esc(h.text)}</span>`;
};

/* ------------------------------ Charts ---------------------------- */
const CHART_COLORS = ['#2563eb', '#0ea5e9', '#f59e0b', '#16a34a', '#a855f7', '#64748b', '#dc2626', '#14b8a6'];

function donutChart(data, opts = {}) {
  const items = data.filter((d) => d.value > 0);
  const total = items.reduce((s, d) => s + d.value, 0);
  if (!total) return `<div class="chart-empty">${opts.empty || 'No data yet'}</div>`;
  const r = 58, cx = 78, cy = 78, C = 2 * Math.PI * r;
  let offset = 0;
  const segs = items.map((d, i) => {
    const frac = d.value / total;
    const len = frac * C;
    const s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${d.color || CHART_COLORS[i % CHART_COLORS.length]}" stroke-width="22" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-offset}" />`;
    offset += len;
    return s;
  }).join('');
  const legend = items.map((d, i) => `
    <div class="legend-row">
      <i style="background:${d.color || CHART_COLORS[i % CHART_COLORS.length]}"></i>
      <span>${esc(d.label)}</span>
      <b>${d.value}</b>
    </div>`).join('');
  return `
    <div class="chart-donut">
      <svg viewBox="0 0 156 156" role="img" aria-label="distribution chart">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#eef1f6" stroke-width="22" />
        <g transform="rotate(-90 ${cx} ${cy})">${segs}</g>
        <text x="${cx}" y="${cy - 4}" class="donut-total" text-anchor="middle">${total}</text>
        <text x="${cx}" y="${cy + 16}" class="donut-sub" text-anchor="middle">total</text>
      </svg>
      <div class="legend">${legend}</div>
    </div>`;
}

function barChart(data, opts = {}) {
  const items = data.slice(0, 8);
  if (!items.length || items.every((d) => !d.value)) return `<div class="chart-empty">${opts.empty || 'No data yet'}</div>`;
  const max = Math.max(...items.map((d) => d.value), 1);
  const bars = items.map((d, i) => {
    const h = Math.max(4, Math.round((d.value / max) * 100));
    return `<div class="bar-col" title="${esc(d.label)}: ${d.value}">
        <span class="bar-val">${d.value}</span>
        <div class="bar" style="height:${h}%;background:${d.color || CHART_COLORS[i % CHART_COLORS.length]}"></div>
        <span class="bar-lbl">${esc(d.label)}</span>
      </div>`;
  }).join('');
  return `<div class="chart-bars">${bars}</div>`;
}

function hbarChart(data, opts = {}) {
  const items = data.slice(0, 8);
  if (!items.length || items.every((d) => !d.value)) return `<div class="chart-empty">${opts.empty || 'No data yet'}</div>`;
  const max = Math.max(...items.map((d) => d.value), 1);
  return `<div class="chart-hbars">${items.map((d, i) => `
    <div class="hbar-row">
      <span class="hbar-lbl">${esc(d.label)}</span>
      <div class="hbar-track"><div class="hbar-fill" style="width:${Math.max(3, (d.value / max) * 100)}%;background:${d.color || CHART_COLORS[i % CHART_COLORS.length]}"></div></div>
      <span class="hbar-val">${d.value}</span>
    </div>`).join('')}</div>`;
}

function lineChart(data, opts = {}) {
  const pts = data || [];
  if (!pts.length) return `<div class="chart-empty">${opts.empty || 'No data yet'}</div>`;
  const W = 640, H = 220, padL = 34, padR = 12, padT = 16, padB = 34;
  const max = Math.max(...pts.map((p) => p.value), 1);
  const step = (W - padL - padR) / Math.max(1, pts.length - 1);
  const x = (i) => padL + i * step;
  const y = (v) => padT + (H - padT - padB) * (1 - v / max);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.value).toFixed(1)}`).join(' ');
  const area = `${line} L${x(pts.length - 1).toFixed(1)},${y(0)} L${x(0).toFixed(1)},${y(0)} Z`;
  const gridLines = [0, 0.25, 0.5, 0.75, 1].map((f) => {
    const yy = padT + (H - padT - padB) * (1 - f);
    return `<line x1="${padL}" y1="${yy}" x2="${W - padR}" y2="${yy}" class="grid-line" />
            <text x="${padL - 8}" y="${yy + 4}" class="axis-lbl" text-anchor="end">${Math.round(max * f)}</text>`;
  }).join('');
  const every = Math.ceil(pts.length / 7);
  const labels = pts.map((p, i) => (i % every === 0
    ? `<text x="${x(i)}" y="${H - 10}" class="axis-lbl" text-anchor="middle">${esc(p.label)}</text>` : '')).join('');
  const dots = pts.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.value)}" r="3.5" fill="#2563eb"><title>${esc(p.label)}: ${p.value}</title></circle>`).join('');
  return `<svg class="line-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="trend chart">
      ${gridLines}
      <path d="${area}" fill="rgba(37,99,235,.10)" />
      <path d="${line}" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
      ${dots}${labels}
    </svg>`;
}

/* --------------------------- Small widgets ------------------------ */
function emptyState(title, sub = '') {
  return `<div class="empty">
      <div class="empty-ico">◻</div>
      <p class="empty-title">${esc(title)}</p>
      ${sub ? `<p class="empty-sub">${esc(sub)}</p>` : ''}
    </div>`;
}

function skeletonRows(n = 5) {
  let out = '';
  for (let i = 0; i < n; i++) out += '<div class="skeleton-row"><span class="sk sk-w40"></span><span class="sk sk-w20"></span><span class="sk sk-w15"></span></div>';
  return `<div class="skeleton">${out}</div>`;
}

function statCard(label, value, cls, sub = '') {
  return `<div class="stat-card ${cls || ''}">
      <div class="stat-label">${esc(label)}</div>
      <div class="stat-value">${value}</div>
      ${sub ? `<div class="stat-sub">${esc(sub)}</div>` : ''}
    </div>`;
}
