/* ============ ICONS ============ */
const ICONS = {
  dashboard:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1.5"/><rect x="11" y="2.5" width="6.5" height="6.5" rx="1.5"/><rect x="2.5" y="11" width="6.5" height="6.5" rx="1.5"/><rect x="11" y="11" width="6.5" height="6.5" rx="1.5"/></svg>',
  board:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="3" width="4.6" height="14" rx="1.4"/><rect x="7.9" y="3" width="4.6" height="9" rx="1.4"/><rect x="13.3" y="3" width="4.2" height="11.5" rx="1.4"/></svg>',
  tasks:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5.5l1.5 1.5L7 4"/><line x1="9.5" y1="5.5" x2="17" y2="5.5"/><path d="M3 10.5l1.5 1.5L7 9"/><line x1="9.5" y1="10.5" x2="17" y2="10.5"/><path d="M3 15.5l1.5 1.5L7 14"/><line x1="9.5" y1="15.5" x2="17" y2="15.5"/></svg>',
  calendar:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="15" height="13.5" rx="2"/><line x1="2.5" y1="8" x2="17.5" y2="8"/><line x1="6" y1="2" x2="6" y2="5.5"/><line x1="14" y1="2" x2="14" y2="5.5"/></svg>',
  settings:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="2.6"/><path d="M10 2.5v2M10 15.5v2M17.5 10h-2M4.5 10h-2M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4M15.3 15.3l-1.4-1.4M6.1 6.1L4.7 4.7"/></svg>',
  plus:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/></svg>',
  trash:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h12M8 6V4.5A1.5 1.5 0 019.5 3h1A1.5 1.5 0 0112 4.5V6m-6.5 0l.6 9.4a1.5 1.5 0 001.5 1.6h4.8a1.5 1.5 0 001.5-1.6L14.5 6"/></svg>',
  edit:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5l3 3L7 16H4v-3l9.5-9.5z"/></svg>',
  close:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="5" y1="5" x2="15" y2="15"/><line x1="15" y1="5" x2="5" y2="15"/></svg>',
  search:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.5" cy="8.5" r="5.5"/><line x1="17" y1="17" x2="13" y2="13"/></svg>',
  check:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-9"/></svg>',
  chevL:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l-6 6 6 6"/></svg>',
  chevR:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4l6 6-6 6"/></svg>',
  flame:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2.5s4 3.5 4 7.5a4 4 0 11-8 0c0-1 .4-1.8 1-2.5.2 1 1 1.5 1.5 1 .3-1.8-.5-3-1-4.5C8.5 2.5 10 2.5 10 2.5z"/></svg>',
  clock:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 2"/></svg>',
  layers:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2.5l7 3.8-7 3.8-7-3.8 7-3.8z"/><path d="M3 10.5l7 3.8 7-3.8"/></svg>'
};

/* ============ STATE ============ */
let tasks = [];
let settings = { theme:'teal' };
let currentView = 'dashboard';
let filters = { status:'all', project:'all', priority:'all', search:'' };
let calMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let editingId = null;
let draggedId = null;

const THEMES = {
  teal:{accent:'#5EEAD4', dim:'#2D8F82'},
  violet:{accent:'#B79CFF', dim:'#6B58A8'},
  amber:{accent:'#F0C36B', dim:'#96762F'},
  rose:{accent:'#FF9CB4', dim:'#A0546A'}
};

const NAV = [
  {id:'dashboard', label:'Dashboard', icon:'dashboard'},
  {id:'board', label:'Board', icon:'board'},
  {id:'tasks', label:'Tasks', icon:'tasks'},
  {id:'calendar', label:'Calendar', icon:'calendar'},
  {id:'settings', label:'Settings', icon:'settings'}
];

/* ============ UTILITIES ============ */
function uid(){ return 'tk-' + Math.random().toString(36).slice(2,10); }
function todayISO(){ return isoOf(new Date()); }
function isoOf(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function addDays(n){ const d=new Date(); d.setDate(d.getDate()+n); return isoOf(d); }
function isOverdue(t){ return t.due && t.due < todayISO() && t.status!=='done'; }
function fmtDue(iso){
  if(!iso) return '—';
  const d = new Date(iso+'T00:00:00');
  const diffDays = Math.round((new Date(iso+'T00:00:00') - new Date(todayISO()+'T00:00:00'))/86400000);
  if(diffDays===0) return 'Today';
  if(diffDays===1) return 'Tomorrow';
  if(diffDays===-1) return 'Yesterday';
  return d.toLocaleDateString('en-US',{month:'short', day:'numeric'});
}
function escapeHtml(s){
  return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function projectList(){
  return [...new Set(tasks.map(t=>t.project).filter(Boolean))].sort();
}

/* ============ STORAGE ============ */
async function loadData(){
  try{
    const r = await window.storage.get('flowlist-tasks', false);
    tasks = r && r.value ? JSON.parse(r.value) : seedTasks();
  }catch(e){
    tasks = seedTasks();
  }
  if(!tasks.length) tasks = seedTasks();
  try{
    const r2 = await window.storage.get('flowlist-settings', false);
    if(r2 && r2.value) settings = JSON.parse(r2.value);
  }catch(e){ /* defaults */ }
  applyTheme(settings.theme);
  await persistTasks(true);
}
async function persistTasks(silent){
  try{ await window.storage.set('flowlist-tasks', JSON.stringify(tasks), false); }
  catch(e){ if(!silent) toast('Could not save — changes may not persist', 'warn'); }
}
async function persistSettings(){
  try{ await window.storage.set('flowlist-settings', JSON.stringify(settings), false); }catch(e){}
}
function seedTasks(){
  return [
    {id:uid(), title:'Draft homepage copy', project:'Website Relaunch', priority:'high', status:'doing', due:addDays(-1), notes:''},
    {id:uid(), title:'Review hero section design', project:'Website Relaunch', priority:'medium', status:'todo', due:addDays(0), notes:''},
    {id:uid(), title:'Fix mobile nav overflow bug', project:'Website Relaunch', priority:'high', status:'todo', due:addDays(-3), notes:''},
    {id:uid(), title:'Set up staging environment', project:'Website Relaunch', priority:'low', status:'done', due:addDays(-5), notes:''},
    {id:uid(), title:'Send welcome email sequence', project:'Client Onboarding', priority:'medium', status:'doing', due:addDays(2), notes:''},
    {id:uid(), title:'Prepare kickoff deck', project:'Client Onboarding', priority:'high', status:'todo', due:addDays(1), notes:''},
    {id:uid(), title:'Collect signed contract', project:'Client Onboarding', priority:'low', status:'done', due:addDays(-6), notes:''},
    {id:uid(), title:'Book dentist appointment', project:'Personal', priority:'low', status:'todo', due:addDays(9), notes:''},
    {id:uid(), title:'Renew passport', project:'Personal', priority:'medium', status:'todo', due:addDays(14), notes:''},
    {id:uid(), title:'Morning run', project:'Personal', priority:'low', status:'done', due:addDays(0), notes:''},
  ];
}

/* ============ THEME ============ */
function applyTheme(name){
  const t = THEMES[name] || THEMES.teal;
  document.documentElement.style.setProperty('--accent', t.accent);
  document.documentElement.style.setProperty('--accent-dim', t.dim);
  document.documentElement.style.setProperty('--accent-soft', hexToRgba(t.accent,0.12));
}
function hexToRgba(hex, a){
  const v = hex.replace('#','');
  const r = parseInt(v.substring(0,2),16), g = parseInt(v.substring(2,4),16), b = parseInt(v.substring(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ============ TOASTS ============ */
function toast(msg){
  const c = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = ICONS.check + `<span>${escapeHtml(msg)}</span>`;
  c.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .25s ease'; setTimeout(()=>el.remove(),250); }, 2400);
}

/* ============ NAV / SIDEBAR ============ */
function renderNav(){
  const nav = document.getElementById('navList');
  nav.innerHTML = NAV.map(item=>{
    const count = item.id==='board' || item.id==='tasks' ? tasks.filter(t=>t.status!=='done').length : null;
    return `<button class="nav-item ${currentView===item.id?'active':''}" data-nav="${item.id}">
      ${ICONS[item.icon]}<span>${item.label}</span>
      ${count!==null ? `<span class="nav-count">${count}</span>`:''}
    </button>`;
  }).join('');
  nav.querySelectorAll('[data-nav]').forEach(b=>{
    b.addEventListener('click', ()=>{ currentView = b.dataset.nav; closeSidebarMobile(); renderAll(); });
  });
  updateMiniProgress();
}
function updateMiniProgress(){
  const todays = tasks.filter(t=>t.due===todayISO());
  const done = todays.filter(t=>t.status==='done').length;
  const pct = todays.length ? Math.round((done/todays.length)*100) : 0;
  document.getElementById('miniProgressVal').textContent = pct + '%';
  document.getElementById('miniProgressFill').style.width = pct + '%';
}
function updateFlowDivider(){
  const total = tasks.length;
  const done = tasks.filter(t=>t.status==='done').length;
  const pct = total ? done/total : 0;
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
  document.getElementById('flowGradEnd').setAttribute('stop-color', pct>0.05 ? accentColor : 'var(--border)');
  document.getElementById('flowGradEnd').parentElement.previousElementSibling; // no-op guard
  const grad = document.getElementById('flowGrad') || document.querySelector('#flowGrad');
  if(grad){
    grad.children[1].setAttribute('offset', Math.max(pct,0.03));
  }
}

/* ============ SIDEBAR MOBILE ============ */
function closeSidebarMobile(){ document.getElementById('sidebar').classList.remove('open'); }
document.getElementById('hamburgerBtn').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.toggle('open');
});

/* ============ RENDER ROOT ============ */
function renderAll(){
  renderNav();
  renderTopbar();
  updateFlowDivider();
  const main = document.getElementById('mainContent');
  main.innerHTML = `<div class="view">${
    currentView==='dashboard' ? renderDashboard() :
    currentView==='board' ? renderBoard() :
    currentView==='tasks' ? renderTasks() :
    currentView==='calendar' ? renderCalendar() :
    renderSettings()
  }</div>`;
  attachViewHandlers();
}

function renderTopbar(){
  const titles = {
    dashboard:['Dashboard', "Here's where things stand today."],
    board:['Board', 'Drag tasks across stages as work moves forward.'],
    tasks:['Tasks', 'Every task, filterable and searchable.'],
    calendar:['Calendar', 'Your work, laid out by due date.'],
    settings:['Settings', 'Tune Flowlist to how you work.']
  };
  const [title, sub] = titles[currentView];
  document.getElementById('topbarTitle').textContent = title;
  document.getElementById('topbarSub').textContent = sub;
  const actions = document.getElementById('topbarActions');
  if(currentView==='dashboard' || currentView==='board' || currentView==='tasks'){
    actions.innerHTML = `<button class="btn btn-primary" id="newTaskBtn">${ICONS.plus} New task</button>`;
  } else {
    actions.innerHTML = '';
  }
}

/* ============ DASHBOARD ============ */
function renderDashboard(){
  const total = tasks.length;
  const doing = tasks.filter(t=>t.status==='doing').length;
  const doneToday = tasks.filter(t=>t.status==='done' && t.due===todayISO()).length;
  const overdue = tasks.filter(isOverdue).length;
  const done = tasks.filter(t=>t.status==='done').length;
  const pct = total ? Math.round((done/total)*100) : 0;
  const circumference = 2*Math.PI*46;
  const dash = circumference * pct/100;

  const focusTasks = tasks
    .filter(t=> t.status!=='done' && t.due && t.due <= addDays(2))
    .sort((a,b)=> (a.due||'9999').localeCompare(b.due||'9999'))
    .slice(0,6);

  const projs = projectList();
  const themeAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();

  return `
  <div class="grid stats-row">
    <div class="stat-card">
      <div class="stat-top"><span class="stat-icon" style="background:var(--accent-soft);color:var(--accent)">${ICONS.layers}</span></div>
      <div class="stat-val mono">${total}</div>
      <div class="stat-label">Total tasks</div>
    </div>
    <div class="stat-card">
      <div class="stat-top"><span class="stat-icon" style="background:var(--gold-soft);color:var(--gold)">${ICONS.clock}</span></div>
      <div class="stat-val mono">${doing}</div>
      <div class="stat-label">In progress</div>
    </div>
    <div class="stat-card">
      <div class="stat-top"><span class="stat-icon" style="background:var(--success-soft);color:var(--success)">${ICONS.check}</span></div>
      <div class="stat-val mono">${doneToday}</div>
      <div class="stat-label">Completed today</div>
    </div>
    <div class="stat-card">
      <div class="stat-top"><span class="stat-icon" style="background:var(--danger-soft);color:var(--danger)">${ICONS.flame}</span></div>
      <div class="stat-val mono">${overdue}</div>
      <div class="stat-label">Overdue</div>
    </div>
  </div>

  <div class="grid dash-grid">
    <div class="card">
      <div class="card-title">Overall progress</div>
      <div class="card-sub">${done} of ${total} tasks complete</div>
      <div class="ring-wrap">
        <svg viewBox="0 0 110 110">
          <circle cx="55" cy="55" r="46" fill="none" stroke="var(--surface-hi)" stroke-width="9"/>
          <circle cx="55" cy="55" r="46" fill="none" stroke="${themeAccent}" stroke-width="9" stroke-linecap="round"
            stroke-dasharray="${dash} ${circumference}" transform="rotate(-90 55 55)" style="transition:stroke-dasharray .6s ease"/>
          <text x="55" y="60" text-anchor="middle" font-family="Fraunces, serif" font-size="22" fill="var(--text)">${pct}%</text>
        </svg>
        <div class="ring-stats">
          <div>Todo <b>${tasks.filter(t=>t.status==='todo').length}</b></div>
          <div>In progress <b>${doing}</b></div>
          <div>Done <b>${done}</b></div>
        </div>
      </div>
      <div class="proj-bars">
        ${projs.length ? projs.map(p=>{
          const pt = tasks.filter(t=>t.project===p);
          const pd = pt.filter(t=>t.status==='done').length;
          const ppct = pt.length ? Math.round(pd/pt.length*100) : 0;
          return `<div class="proj-bar-row">
            <div class="proj-bar-top"><span>${escapeHtml(p)}</span><span>${pd}/${pt.length}</span></div>
            <div class="proj-bar-track"><div class="proj-bar-fill" style="width:${ppct}%;background:${themeAccent}"></div></div>
          </div>`;
        }).join('') : '<div style="font-size:13px;color:var(--text-faint)">No projects yet.</div>'}
      </div>
    </div>

    <div class="card">
      <div class="card-title">Today &amp; next up</div>
      <div class="card-sub">Due today or in the next two days</div>
      <div class="focus-list">
        ${focusTasks.length ? focusTasks.map(t=>`
          <div class="focus-row ${isOverdue(t)?'overdue':''}">
            <button class="chk ${t.status==='done'?'checked':''}" data-toggle="${t.id}">${ICONS.check}</button>
            <div class="focus-title ${t.status==='done'?'done':''}">${escapeHtml(t.title)}</div>
            <span class="tag tag-project">${escapeHtml(t.project||'No project')}</span>
            <span class="focus-meta">${fmtDue(t.due)}</span>
          </div>`).join('') : `<div style="font-size:13px;color:var(--text-faint);padding:8px 0;">Nothing due soon. Enjoy the quiet.</div>`}
      </div>
    </div>
  </div>`;
}

/* ============ BOARD ============ */
const STATUS_META = {
  todo:{label:'To do', color:'var(--text-faint)'},
  doing:{label:'In progress', color:'var(--gold)'},
  done:{label:'Done', color:'var(--success)'}
};
function renderBoard(){
  return `<div class="board">
    ${['todo','doing','done'].map(status=>{
      const items = tasks.filter(t=>t.status===status);
      return `<div class="board-col" data-col="${status}">
        <div class="board-col-head">
          <span class="dot" style="background:${STATUS_META[status].color}"></span>
          <b>${STATUS_META[status].label}</b>
          <span class="count mono">${items.length}</span>
        </div>
        ${items.map(t=>taskCardHtml(t)).join('')}
        ${items.length===0 ? `<div style="font-size:12px;color:var(--text-faint);padding:10px 6px;">No tasks here yet.</div>` : ''}
        <button class="board-add" data-quickadd="${status}">${ICONS.plus.replace('20 20','20 20')} + Add a task</button>
      </div>`;
    }).join('')}
  </div>`;
}
function taskCardHtml(t){
  return `<div class="task-card" draggable="true" data-card="${t.id}">
    <div class="task-card-top">
      <span class="dot dot-${t.priority}" style="margin-top:5px"></span>
      <div class="task-card-title" style="flex:1">${escapeHtml(t.title)}</div>
      <button class="icon-btn" data-edit="${t.id}" aria-label="Edit task">${ICONS.edit}</button>
    </div>
    <div class="task-card-foot">
      <span class="tag tag-project">${escapeHtml(t.project||'No project')}</span>
      <span class="task-card-due ${isOverdue(t)?'overdue':''}">${fmtDue(t.due)}</span>
    </div>
  </div>`;
}

/* ============ TASKS LIST ============ */
function renderTasks(){
  const projs = projectList();
  let list = tasks.filter(t=>{
    if(filters.status!=='all' && t.status!==filters.status) return false;
    if(filters.priority!=='all' && t.priority!==filters.priority) return false;
    if(filters.project!=='all' && t.project!==filters.project) return false;
    if(filters.search && !t.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  }).sort((a,b)=>{
    if(a.status==='done' && b.status!=='done') return 1;
    if(b.status==='done' && a.status!=='done') return -1;
    return (a.due||'9999').localeCompare(b.due||'9999');
  });

  return `
  <div class="filter-bar">
    <div class="search-wrap">
      ${ICONS.search}
      <input type="text" id="searchInput" placeholder="Search tasks…" value="${escapeHtml(filters.search)}">
    </div>
    <select id="statusFilter">
      <option value="all" ${filters.status==='all'?'selected':''}>All statuses</option>
      <option value="todo" ${filters.status==='todo'?'selected':''}>To do</option>
      <option value="doing" ${filters.status==='doing'?'selected':''}>In progress</option>
      <option value="done" ${filters.status==='done'?'selected':''}>Done</option>
    </select>
    <select id="priorityFilter">
      <option value="all" ${filters.priority==='all'?'selected':''}>All priorities</option>
      <option value="high" ${filters.priority==='high'?'selected':''}>High</option>
      <option value="medium" ${filters.priority==='medium'?'selected':''}>Medium</option>
      <option value="low" ${filters.priority==='low'?'selected':''}>Low</option>
    </select>
    <select id="projectFilter">
      <option value="all" ${filters.project==='all'?'selected':''}>All projects</option>
      ${projs.map(p=>`<option value="${escapeHtml(p)}" ${filters.project===p?'selected':''}>${escapeHtml(p)}</option>`).join('')}
    </select>
  </div>
  ${list.length ? `<div class="task-list">
    ${list.map(t=>`
      <div class="task-row">
        <button class="chk ${t.status==='done'?'checked':''}" data-toggle="${t.id}">${ICONS.check}</button>
        <div class="task-row-title ${t.status==='done'?'done':''}">${escapeHtml(t.title)}</div>
        <span class="tag tag-project">${escapeHtml(t.project||'No project')}</span>
        <span class="tag" style="background:${t.priority==='high'?'var(--warm-soft)':t.priority==='medium'?'var(--gold-soft)':'var(--surface-hi)'};color:${t.priority==='high'?'var(--warm)':t.priority==='medium'?'var(--gold)':'var(--text-faint)'}">${t.priority}</span>
        <span class="task-row-due ${isOverdue(t)?'overdue':''}">${fmtDue(t.due)}</span>
        <button class="icon-btn" data-edit="${t.id}" aria-label="Edit">${ICONS.edit}</button>
        <button class="icon-btn" data-delete="${t.id}" aria-label="Delete">${ICONS.trash}</button>
      </div>`).join('')}
  </div>` : `
  <div class="empty-state">
    <h3>No tasks match this view</h3>
    <p>Try clearing a filter, or add something new to get the list moving.</p>
    <button class="btn btn-primary" id="emptyAddBtn" style="margin:0 auto">${ICONS.plus} New task</button>
  </div>`}
  `;
}

/* ============ CALENDAR ============ */
function renderCalendar(){
  const year = calMonth.getFullYear(), month = calMonth.getMonth();
  const first = new Date(year, month, 1);
  const startDow = first.getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const monthLabel = calMonth.toLocaleDateString('en-US', {month:'long', year:'numeric'});
  const dows = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  let cells = '';
  for(let i=0;i<startDow;i++) cells += `<div class="cal-cell pad"></div>`;
  for(let d=1; d<=daysInMonth; d++){
    const iso = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayTasks = tasks.filter(t=>t.due===iso);
    const isToday = iso===todayISO();
    cells += `<div class="cal-cell ${isToday?'today':''}">
      <div class="cal-daynum">${d}</div>
      ${dayTasks.slice(0,3).map(t=>`<div class="cal-chip" style="background:${t.status==='done'?'var(--success-soft)':isOverdue(t)?'var(--danger-soft)':'var(--accent-soft)'};color:${t.status==='done'?'var(--success)':isOverdue(t)?'var(--danger)':'var(--accent)'}">${escapeHtml(t.title)}</div>`).join('')}
      ${dayTasks.length>3 ? `<div style="font-size:10px;color:var(--text-faint)">+${dayTasks.length-3} more</div>`:''}
    </div>`;
  }

  return `
  <div class="cal-head">
    <div class="cal-title">${monthLabel}</div>
    <div class="cal-nav">
      <button class="cal-nav-btn" id="calPrev">${ICONS.chevL}</button>
      <button class="btn btn-ghost btn-sm" id="calToday">Today</button>
      <button class="cal-nav-btn" id="calNext">${ICONS.chevR}</button>
    </div>
  </div>
  <div class="cal-grid">
    ${dows.map(d=>`<div class="cal-dow">${d}</div>`).join('')}
    ${cells}
  </div>`;
}

/* ============ SETTINGS ============ */
function renderSettings(){
  return `
  <div class="settings-grid">
    <div class="card">
      <div class="card-title">Flow color</div>
      <div class="card-sub">Sets the accent used for progress, the active tab, and the flow line up top.</div>
      <div class="swatch-row">
        ${Object.entries(THEMES).map(([key,val])=>`
          <button class="swatch ${settings.theme===key?'active':''}" data-theme="${key}" style="background:${val.accent}" aria-label="${key}"></button>
        `).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-title">Your data</div>
      <div class="card-sub">${tasks.length} task${tasks.length===1?'':'s'} stored, saved automatically as you work.</div>
      <button class="btn btn-danger" id="clearDataBtn">${ICONS.trash} Clear all tasks</button>
    </div>
    <div class="card">
      <div class="card-title">About Flowlist</div>
      <div class="card-sub" style="margin-bottom:0">A calm place to plan the day: dashboard for the big picture, a board for momentum, and a calendar for what's ahead.</div>
    </div>
  </div>`;
}

/* ============ MODAL (Add / Edit task) ============ */
function openModal(task){
  editingId = task ? task.id : null;
  const t = task || {title:'', project:'', priority:'medium', status:'todo', due:todayISO(), notes:''};
  const projs = projectList();
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-head">
      <h3>${task ? 'Edit task' : 'New task'}</h3>
      <button class="icon-btn" id="modalClose">${ICONS.close}</button>
    </div>
    <form id="taskForm">
      <div class="field">
        <label for="f-title">Title</label>
        <input type="text" id="f-title" required value="${escapeHtml(t.title)}" placeholder="What needs to happen?">
      </div>
      <div class="field">
        <label for="f-project">Project</label>
        <input type="text" id="f-project" list="projectOptions" value="${escapeHtml(t.project)}" placeholder="e.g. Website Relaunch">
        <datalist id="projectOptions">${projs.map(p=>`<option value="${escapeHtml(p)}">`).join('')}</datalist>
      </div>
      <div class="field-row">
        <div class="field">
          <label for="f-priority">Priority</label>
          <select id="f-priority">
            <option value="low" ${t.priority==='low'?'selected':''}>Low</option>
            <option value="medium" ${t.priority==='medium'?'selected':''}>Medium</option>
            <option value="high" ${t.priority==='high'?'selected':''}>High</option>
          </select>
        </div>
        <div class="field">
          <label for="f-status">Status</label>
          <select id="f-status">
            <option value="todo" ${t.status==='todo'?'selected':''}>To do</option>
            <option value="doing" ${t.status==='doing'?'selected':''}>In progress</option>
            <option value="done" ${t.status==='done'?'selected':''}>Done</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label for="f-due">Due date</label>
        <input type="date" id="f-due" value="${t.due||''}">
      </div>
      <div class="modal-foot">
        ${task ? `<button type="button" class="btn btn-danger" id="modalDelete">${ICONS.trash} Delete</button>` : '<span></span>'}
        <div style="flex:1"></div>
        <button type="button" class="btn btn-ghost" id="modalCancel">Cancel</button>
        <button type="submit" class="btn btn-primary">${task ? 'Save changes' : 'Add task'}</button>
      </div>
    </form>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('f-title').focus();

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  const delBtn = document.getElementById('modalDelete');
  if(delBtn) delBtn.addEventListener('click', ()=>{ deleteTask(editingId); closeModal(); });

  document.getElementById('taskForm').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = {
      title: document.getElementById('f-title').value.trim(),
      project: document.getElementById('f-project').value.trim(),
      priority: document.getElementById('f-priority').value,
      status: document.getElementById('f-status').value,
      due: document.getElementById('f-due').value || null,
    };
    if(!data.title) return;
    if(editingId){
      const idx = tasks.findIndex(x=>x.id===editingId);
      tasks[idx] = {...tasks[idx], ...data};
      toast('Task updated');
    } else {
      tasks.push({id:uid(), notes:'', ...data});
      toast('Task added');
    }
    await persistTasks();
    closeModal();
    renderAll();
  });
}
function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  editingId = null;
}
document.getElementById('modalOverlay').addEventListener('click', (e)=>{
  if(e.target.id==='modalOverlay') closeModal();
});
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape') closeModal();
});

async function deleteTask(id){
  tasks = tasks.filter(t=>t.id!==id);
  await persistTasks();
  toast('Task deleted');
  renderAll();
}
async function toggleDone(id){
  const t = tasks.find(x=>x.id===id);
  if(!t) return;
  t.status = t.status==='done' ? 'todo' : 'done';
  await persistTasks();
  renderAll();
}

/* ============ EVENT WIRING PER VIEW ============ */
function attachViewHandlers(){
  const main = document.getElementById('mainContent');

  main.querySelectorAll('[data-toggle]').forEach(b=> b.addEventListener('click', ()=>toggleDone(b.dataset.toggle)));
  main.querySelectorAll('[data-edit]').forEach(b=> b.addEventListener('click', ()=>{
    const t = tasks.find(x=>x.id===b.dataset.edit); openModal(t);
  }));
  main.querySelectorAll('[data-delete]').forEach(b=> b.addEventListener('click', ()=>deleteTask(b.dataset.delete)));
  main.querySelectorAll('[data-quickadd]').forEach(b=> b.addEventListener('click', ()=>{
    openModal(null);
    setTimeout(()=>{ const s=document.getElementById('f-status'); if(s) s.value=b.dataset.quickadd; },0);
  }));

  const newBtn = document.getElementById('newTaskBtn');
  if(newBtn) newBtn.addEventListener('click', ()=>openModal(null));
  const emptyAdd = document.getElementById('emptyAddBtn');
  if(emptyAdd) emptyAdd.addEventListener('click', ()=>openModal(null));

  /* Tasks filters */
  const si = document.getElementById('searchInput');
  if(si) si.addEventListener('input', ()=>{ filters.search = si.value; renderAll(); si.focus(); si.setSelectionRange(si.value.length, si.value.length); });
  const sf = document.getElementById('statusFilter');
  if(sf) sf.addEventListener('change', ()=>{ filters.status = sf.value; renderAll(); });
  const pf = document.getElementById('priorityFilter');
  if(pf) pf.addEventListener('change', ()=>{ filters.priority = pf.value; renderAll(); });
  const projf = document.getElementById('projectFilter');
  if(projf) projf.addEventListener('change', ()=>{ filters.project = projf.value; renderAll(); });

  /* Calendar nav */
  const cp = document.getElementById('calPrev');
  if(cp) cp.addEventListener('click', ()=>{ calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth()-1, 1); renderAll(); });
  const cn = document.getElementById('calNext');
  if(cn) cn.addEventListener('click', ()=>{ calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth()+1, 1); renderAll(); });
  const ct = document.getElementById('calToday');
  if(ct) ct.addEventListener('click', ()=>{ const n=new Date(); calMonth = new Date(n.getFullYear(), n.getMonth(),1); renderAll(); });

  /* Settings */
  main.querySelectorAll('[data-theme]').forEach(b=> b.addEventListener('click', async ()=>{
    settings.theme = b.dataset.theme;
    applyTheme(settings.theme);
    await persistSettings();
    renderAll();
  }));
  const clearBtn = document.getElementById('clearDataBtn');
  if(clearBtn) clearBtn.addEventListener('click', async ()=>{
    if(confirm('Delete all tasks? This cannot be undone.')){
      tasks = [];
      await persistTasks();
      toast('All tasks cleared');
      renderAll();
    }
  });

  /* Drag and drop on board */
  if(currentView==='board'){
    main.querySelectorAll('.task-card').forEach(card=>{
      card.addEventListener('dragstart', ()=>{ draggedId = card.dataset.card; card.classList.add('dragging'); });
      card.addEventListener('dragend', ()=>{ card.classList.remove('dragging'); });
    });
    main.querySelectorAll('.board-col').forEach(col=>{
      col.addEventListener('dragover', (e)=>{ e.preventDefault(); col.classList.add('dragover'); });
      col.addEventListener('dragleave', ()=>{ col.classList.remove('dragover'); });
      col.addEventListener('drop', async (e)=>{
        e.preventDefault();
        col.classList.remove('dragover');
        const t = tasks.find(x=>x.id===draggedId);
        if(t){ t.status = col.dataset.col; await persistTasks(); renderAll(); }
      });
    });
  }
}

/* ============ INIT ============ */
(async function init(){
  await loadData();
  renderAll();
})();
