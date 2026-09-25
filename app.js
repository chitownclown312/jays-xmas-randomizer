const $ = s => document.querySelector(s);

let mode = 'movie';
let current = null;
let naughty = false;
let rolling = false;

const KEY_WATCHED = 'jay-xmas-watched-v1';
const KEY_PLAN = 'jay-xmas-12days-v1';
const ALL = [...MOVIES, ...TV_EPISODES];
const BY_ID = new Map(ALL.map(x => [x.id, x]));

function safeRead(key, fallback){
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null');
    return value ?? fallback;
  } catch (err) {
    console.warn(`Could not read ${key}.`, err);
    return fallback;
  }
}

function safeWrite(key, value){
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (err) { console.warn(`Could not save ${key}.`, err); }
}

function watched(){
  const value = safeRead(KEY_WATCHED, []);
  return Array.isArray(value) ? value : [];
}

function saveWatched(items){
  safeWrite(KEY_WATCHED, [...new Set(items)]);
}

function validWatched(){
  return watched().filter(id => BY_ID.has(id));
}

function pool(){
  let p = mode === 'movie' ? [...MOVIES] : mode === 'tv' ? [...TV_EPISODES] : [...ALL];

  if ($('#noRepeat').checked) {
    const w = new Set(validWatched());
    p = p.filter(x => !w.has(x.id));
  }

  if (current && p.length > 1) p = p.filter(x => x.id !== current.id);

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

function metaFor(x){
  if (x.show) {
    const bits = [];
    if (x.season !== undefined && x.season !== null) bits.push(`S${x.season}`);
    if (x.episode !== undefined && x.episode !== null) bits.push(`E${x.episode}`);
    if (x.runtime) bits.push(x.runtime);
    if (x.category) bits.push(x.category);
    return bits.join(' • ');
  }
  return [x.year, x.runtime, x.category].filter(Boolean).join(' • ');
}

function render(x){
  current = x;
  const tv = !!x.show;
  $('#kind').textContent = tv ? '📺 TV EPISODE' : '🎬 MOVIE';
  $('#title').textContent = tv ? x.show : x.title;
  $('#subtitle').textContent = tv ? `“${x.title}”` : '';
  $('#meta').textContent = metaFor(x);
  $('#media').innerHTML = `<div class="placeholder">${tv ? '📺' : '🎬'}</div>`;
  $('#stamp').classList.remove('show');
  updateProgress();
  showResult();
}

function burstMagic(){
  const root = $('#magicBurst');
  root.innerHTML = '';
  const glyphs = ['✦','★','❄','✧','•'];
  for (let i = 0; i < 18; i++) {
    const s = document.createElement('span');
    s.className = 'spark';
    s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    const angle = (Math.PI * 2 * i / 18) + (Math.random() * .3);
    const distance = 55 + Math.random() * 95;
    s.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
    s.style.setProperty('--dy', `${Math.sin(angle) * distance - 35}px`);
    s.style.setProperty('--rot', `${Math.round(Math.random() * 240 - 120)}deg`);
    root.appendChild(s);
  }
  setTimeout(() => { root.innerHTML = ''; }, 850);
}

function playReveal(x){
  if (rolling || !x) return;
  rolling = true;
  const g = $('#gift');
  const token = $('#revealToken');
  const rollBtn = $('#roll');
  const rerollBtn = $('#reroll');

  rollBtn.disabled = true;
  rerollBtn.disabled = true;
  $('#revealIcon').textContent = x.show ? '📺' : '🎬';
  $('#revealText').textContent = x.show ? x.show : x.title;

  g.classList.remove('open','shake');
  token.classList.remove('fly');
  void g.offsetWidth;
  g.classList.add('shake');

  setTimeout(() => {
    g.classList.add('open');
    burstMagic();
  }, 190);

  setTimeout(() => {
    token.classList.remove('fly');
    void token.offsetWidth;
    token.classList.add('fly');
  }, 260);

  setTimeout(() => render(x), 760);

  setTimeout(() => {
    g.classList.remove('open','shake');
    token.classList.remove('fly');
    rollBtn.disabled = false;
    rerollBtn.disabled = false;
    rolling = false;
  }, 1080);
}

function roll(){
  const x = choose();
  if (x) playReveal(x);
}

function updateProgress(){
  const ids = validWatched();
  const set = new Set(ids);
  const movieCount = MOVIES.filter(x => set.has(x.id)).length;
  const tvCount = TV_EPISODES.filter(x => set.has(x.id)).length;
  const total = ALL.length;
  const count = movieCount + tvCount;
  const remaining = Math.max(0, total - count);
  const pctExact = total ? (count / total) * 100 : 0;
  const pctLabel = count && pctExact < 10 ? pctExact.toFixed(1) : Math.round(pctExact).toString();

  $('#counter').textContent = `🎄 ${count} / ${total} watched • ${remaining} remaining • ${pctLabel}%`;
  $('#breakdown').textContent = `🎬 ${movieCount} / ${MOVIES.length} movies • 📺 ${tvCount} / ${TV_EPISODES.length} TV`;
  $('#progressFill').style.width = `${pctExact}%`;
  renderTwelve();
}

function itemLabel(x){
  return x.show ? `${x.show} — “${x.title}”` : x.title;
}

function planIds(){
  const value = safeRead(KEY_PLAN, []);
  return Array.isArray(value) ? value.filter(id => BY_ID.has(id)).slice(0, 12) : [];
}

const dayThemes = [
  'Classic Christmas',
  'Christmas Comedy',
  'Animated / Family',
  'Action or Dark Pick',
  'Cozy / Romance',
  'Movie Wildcard',
  'Sitcom Night',
  'Animated TV',
  '90s Throwback',
  'Naughty TV',
  'TV Wildcard',
  "Dealer's Choice"
];

function chooseDistinct(candidates, usedIds, usedShows = null){
  let p = candidates.filter(x => !usedIds.has(x.id));
  if (usedShows) {
    const distinctShows = p.filter(x => !x.show || !usedShows.has(x.show));
    if (distinctShows.length) p = distinctShows;
  }
  if (!p.length) return null;
  return p[Math.floor(Math.random() * p.length)];
}

function generateTwelve(){
  const watchedSet = new Set(validWatched());
  const respectNoRepeat = $('#noRepeat').checked;
  let movies = MOVIES.filter(x => !respectNoRepeat || !watchedSet.has(x.id));
  let tv = TV_EPISODES.filter(x => !respectNoRepeat || !watchedSet.has(x.id));

  if (movies.length < 6) movies = [...MOVIES];
  if (tv.length < 5) tv = [...TV_EPISODES];

  const used = new Set();
  const usedShows = new Set();
  const picks = [];

  const movieSlots = [
    movies.filter(x => /Classic/.test(x.category || '')),
    movies.filter(x => /Comedy/.test(x.category || '')),
    movies.filter(x => /(Animation|Animated|Family)/.test(x.category || '')),
    movies.filter(x => x.naughty || /(Action|Horror|Thriller)/.test(x.category || '')),
    movies.filter(x => /(Romance|Drama)/.test(x.category || '')),
    movies.filter(x => x.tier === 'wildcard' || x.tier === 'extended')
  ];

  for (const slot of movieSlots) {
    const pick = chooseDistinct(slot.length ? slot : movies, used);
    if (pick) { picks.push(pick); used.add(pick.id); }
  }

  const tvSlots = [
    tv.filter(x => /Comedy/.test(x.category || '') && !/Animation/.test(x.category || '')),
    tv.filter(x => /Animation/.test(x.category || '')),
    tv.filter(x => /90s/.test(x.category || '') || ['Friends','Family Matters','Full House','The Fresh Prince of Bel-Air','Roseanne','Sabrina the Teenage Witch'].includes(x.show)),
    tv.filter(x => x.naughty),
    tv.filter(x => x.tier === 'extended')
  ];

  for (const slot of tvSlots) {
    const pick = chooseDistinct(slot.length ? slot : tv, used, usedShows);
    if (pick) {
      picks.push(pick); used.add(pick.id);
      if (pick.show) usedShows.add(pick.show);
    }
  }

  const finalPick = chooseDistinct(ALL.filter(x => !respectNoRepeat || !watchedSet.has(x.id)), used, usedShows) || chooseDistinct(ALL, used, usedShows);
  if (finalPick) picks.push(finalPick);

  // Fallback safety in case a future filtered database leaves a slot empty.
  while (picks.length < 12) {
    const p = chooseDistinct(ALL, used, usedShows);
    if (!p) break;
    picks.push(p); used.add(p.id);
    if (p.show) usedShows.add(p.show);
  }

  safeWrite(KEY_PLAN, picks.slice(0,12).map(x => x.id));
  renderTwelve();
}

function renderTwelve(){
  const root = $('#twelveList');
  if (!root) return;
  const ids = planIds();
  const watchedSet = new Set(validWatched());
  const done = ids.filter(id => watchedSet.has(id)).length;
  $('#twelveProgress').textContent = `${done} / ${ids.length || 12} watched`;

  if (!ids.length) {
    root.innerHTML = '<div class="day-card"><div class="day-num">🎁</div><div class="day-main"><b>No 12-day plan yet.</b><span>Generate one and the randomizer will build a balanced holiday marathon.</span></div></div>';
    $('#generateTwelve').textContent = 'GENERATE 12 DAYS';
    return;
  }

  $('#generateTwelve').textContent = 'REGENERATE 12 DAYS';
  root.innerHTML = ids.map((id, i) => {
    const x = BY_ID.get(id);
    const isDone = watchedSet.has(id);
    const type = x.show ? `📺 ${x.show}` : `🎬 ${x.year || ''}`;
    return `<div class="day-card ${isDone ? 'done' : ''}">
      <div class="day-num">${isDone ? '✓' : i + 1}</div>
      <div class="day-main"><b>${dayThemes[i] || `Day ${i+1}`}: ${escapeHtml(itemLabel(x))}</b><span>${escapeHtml(type)} • ${escapeHtml(x.category || '')}</span></div>
      <button class="day-open" data-id="${x.id}">OPEN</button>
    </div>`;
  }).join('');
}

function escapeHtml(value){
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
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
  const w = validWatched();
  if (!w.includes(current.id)) {
    w.push(current.id);
    saveWatched(w);
  }
  $('#stamp').classList.add('show');
  updateProgress();
});

$('#naughty').addEventListener('click', () => {
  naughty = !naughty;
  $('#naughty').textContent = `☠ NAUGHTY LIST: ${naughty ? 'ON' : 'OFF'}`;
  $('#naughty').classList.toggle('active-naughty', naughty);
});

$('#historyBtn').addEventListener('click', () => {
  const ids = new Set(validWatched());
  const items = ALL.filter(x => ids.has(x.id));
  $('#historyList').innerHTML = items.length
    ? items.map(x => `<div>✓ <b>${escapeHtml(x.show || x.title)}</b>${x.show ? ` — “${escapeHtml(x.title)}”` : ''}</div>`).join('')
    : 'Nothing watched yet.';
  $('#history').showModal();
});

$('#closeHistory').addEventListener('click', () => $('#history').close());
$('#resetBtn').addEventListener('click', () => {
  if (confirm('Reset the entire Christmas watched history?')) {
    saveWatched([]);
    updateProgress();
  }
});

$('#twelveBtn').addEventListener('click', () => {
  renderTwelve();
  $('#twelveDialog').showModal();
});
$('#closeTwelve').addEventListener('click', () => $('#twelveDialog').close());
$('#generateTwelve').addEventListener('click', generateTwelve);
$('#clearTwelve').addEventListener('click', () => {
  safeWrite(KEY_PLAN, []);
  renderTwelve();
});
$('#twelveList').addEventListener('click', e => {
  const btn = e.target.closest('.day-open');
  if (!btn) return;
  const x = BY_ID.get(btn.dataset.id);
  if (!x) return;
  $('#twelveDialog').close();
  render(x);
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
updateProgress();
renderTwelve();
