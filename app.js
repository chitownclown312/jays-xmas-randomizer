const $ = s => document.querySelector(s);
let mode = 'movie';
let current = null;
let naughty = false;
const KEY = 'jay-xmas-watched-v1';

function watched(){
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch (err) {
    console.warn('Watched history was unreadable; starting with an empty list.', err);
    return [];
  }
}

function save(items){
  try { localStorage.setItem(KEY, JSON.stringify(items)); }
  catch (err) { console.warn('Could not save watched history.', err); }
}

function pool(){
  let p = mode === 'movie' ? MOVIES : mode === 'tv' ? TV_EPISODES : [...MOVIES, ...TV_EPISODES];
  if ($('#noRepeat').checked) {
    const w = new Set(watched());
    p = p.filter(x => !w.has(x.id));
  }
  if (naughty) {
    const n = p.filter(x => x.naughty);
    if (n.length) p = n;
  }
  return p;
}

function choose(){
  const p = pool();
  if (!p.length) {
    alert('You watched the whole available pool! Reset the season to start over.');
    return null;
  }
  return p[Math.floor(Math.random() * p.length)];
}

function showResult(){
  $('#resultBackdrop').classList.remove('hidden');
  $('#result').classList.remove('hidden');
  document.body.classList.add('result-open');
}

function hideResult(){
  $('#resultBackdrop').classList.add('hidden');
  $('#result').classList.add('hidden');
  document.body.classList.remove('result-open');
}

function render(x){
  current = x;
  const tv = !!x.show;
  $('#kind').textContent = tv ? '📺 TV EPISODE' : '🎬 MOVIE';
  $('#title').textContent = tv ? x.show : x.title;
  $('#subtitle').textContent = tv ? `“${x.title}”` : '';
  $('#meta').textContent = tv
    ? `S${x.season} E${x.episode} • ${x.runtime} • ${x.category}`
    : `${x.year} • ${x.runtime} • ${x.category}`;
  $('#media').innerHTML = `<div class="placeholder">${tv ? '📺' : '🎬'}</div>`;
  $('#stamp').classList.remove('show');
  updateCounter();
  showResult();
}

function animateGift(){
  const g = $('#gift');
  g.classList.remove('open','shake');
  void g.offsetWidth;
  g.classList.add('shake');
  setTimeout(() => g.classList.add('open'), 180);
  setTimeout(() => g.classList.remove('open','shake'), 850);
}

function roll(){
  const x = choose();
  if (!x) return;
  animateGift();
  render(x);
}

function updateCounter(){
  const w = watched();
  const total = MOVIES.length + TV_EPISODES.length;
  $('#counter').textContent = `🎄 ${w.length} watched • ${Math.max(0,total-w.length)} available in current build`;
}

$('.mode').addEventListener('click', e => {
  const btn = e.target.closest('.mode-btn');
  if (!btn) return;
  mode = btn.dataset.mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b === btn));
});

$('#roll').addEventListener('click', roll);
$('#reroll').addEventListener('click', roll);
$('#closeResult').addEventListener('click', hideResult);
$('#resultBackdrop').addEventListener('click', hideResult);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !$('#result').classList.contains('hidden')) hideResult();
});

$('#watched').addEventListener('click', () => {
  if (!current) return;
  const w = watched();
  if (!w.includes(current.id)) {
    w.push(current.id);
    save(w);
  }
  $('#stamp').classList.add('show');
  updateCounter();
});

$('#naughty').addEventListener('click', () => {
  naughty = !naughty;
  $('#naughty').textContent = `☠ NAUGHTY LIST: ${naughty ? 'ON' : 'OFF'}`;
  $('#naughty').classList.toggle('active-naughty', naughty);
});

$('#historyBtn').addEventListener('click', () => {
  const ids = new Set(watched());
  const all = [...MOVIES, ...TV_EPISODES].filter(x => ids.has(x.id));
  $('#historyList').innerHTML = all.length
    ? all.map(x => `<div>✓ <b>${x.show || x.title}</b>${x.show ? ` — “${x.title}”` : ''}</div>`).join('')
    : 'Nothing watched yet.';
  $('#history').showModal();
});

$('#closeHistory').addEventListener('click', () => $('#history').close());
$('#resetBtn').addEventListener('click', () => {
  if (confirm('Reset the entire Christmas watched history?')) {
    save([]);
    updateCounter();
  }
});

function snow(){
  const f = document.createElement('span');
  f.className = 'flake';
  f.textContent = Math.random() > .5 ? '❄' : '·';
  f.style.left = Math.random() * 100 + 'vw';
  f.style.fontSize = (8 + Math.random() * 18) + 'px';
  f.style.opacity = .25 + Math.random() * .7;
  f.style.animationDuration = (5 + Math.random() * 8) + 's';
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 14000);
}
setInterval(snow, 280);
updateCounter();
