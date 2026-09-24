const donors = [
  {
    "stt": 1,
    "nam": "7/2026",
    "ten": "Khóa học 2003-2006",
    "thongtin": "ĐĐ: Dương Khắc Bảy",
    "tien": 10000000,
    "vatpham": "01 bộ ấm chén",
    "ghichu": "Tiền mặt",
    "khoa": "2003-2006",
    "lop": ""
  },
  {
    "stt": 2,
    "nam": "7/2026",
    "ten": "Lớp A8 khóa 2013-2016",
    "thongtin": "ĐĐ: Nguyễn Hồng Nhung",
    "tien": 10000000,
    "vatpham": "02 ghế đá",
    "ghichu": "Tiền mặt",
    "khoa": "2013-2016",
    "lop": "A8"
  },
  {
    "stt": 3,
    "nam": "8/2026",
    "ten": "Ngô Thị Vân",
    "thongtin": "Cá nhân Khóa 1968-1971",
    "tien": 10000000,
    "vatpham": "",
    "ghichu": "Chuyển vào TK trường",
    "khoa": "1968-1971",
    "lop": ""
  },
  {
    "stt": 4,
    "nam": "8/2026",
    "ten": "Nguyễn Thị Lương",
    "thongtin": "Cá nhân Khóa 1968-1971",
    "tien": 10000000,
    "vatpham": "",
    "ghichu": "Chuyển vào TK trường",
    "khoa": "1968-1971",
    "lop": ""
  },
  {
    "stt": 5,
    "nam": "8/2026",
    "ten": "Lớp A1 khóa 2007-2010",
    "thongtin": "ĐĐ: Trương Công Điệp",
    "tien": 10000000,
    "vatpham": "",
    "ghichu": "Tiền mặt",
    "khoa": "2007-2010",
    "lop": "A1"
  },
  {
    "stt": 6,
    "nam": "8/2026",
    "ten": "Lớp A1 khóa 2018-2021",
    "thongtin": "ĐĐ: Bùi Phương Thảo",
    "tien": 4000000,
    "vatpham": "",
    "ghichu": "Tiền mặt",
    "khoa": "2018-2021",
    "lop": "A1"
  },
  {
    "stt": 7,
    "nam": "8/2026",
    "ten": "Lớp A4 khóa 2016-2019",
    "thongtin": "ĐĐ: Ngô Thị Phương Thảo",
    "tien": 3600000,
    "vatpham": "",
    "ghichu": "Tiền mặt",
    "khoa": "2016-2019",
    "lop": "A4"
  },
  {
    "stt": 8,
    "nam": "8/2026",
    "ten": "Lớp A3 khóa 2010-2013",
    "thongtin": "ĐĐ: Nguyễn Thị Mỹ",
    "tien": 4000000,
    "vatpham": "",
    "ghichu": "Chuyển vào TK trường",
    "khoa": "2010-2013",
    "lop": "A3"
  },
  {
    "stt": 9,
    "nam": "8/2026",
    "ten": "Em: Nguyễn Thị Thương",
    "thongtin": "Cựu học sinh lớp A1 (Niên khóa: 2004-2007)",
    "tien": 5000000,
    "vatpham": "",
    "ghichu": "Chuyển vào TK trường",
    "khoa": "2004-2007",
    "lop": "A1"
  },
  {
    "stt": 10,
    "nam": "8/2026",
    "ten": "Em: Nguyễn Thùy Dung",
    "thongtin": "Cựu học sinh lớp A1 (Niên khóa: 2004-2007)",
    "tien": 3000000,
    "vatpham": "",
    "ghichu": "Chuyển vào TK trường",
    "khoa": "2004-2007",
    "lop": "A1"
  },
  {
    "stt": 11,
    "nam": "9/2026",
    "ten": "Lớp A1 khóa 2010-2013",
    "thongtin": "ĐĐ: Lê Duy Lộc",
    "tien": 13000000,
    "vatpham": "",
    "ghichu": "Tiền mặt",
    "khoa": "2010-2013",
    "lop": "A1"
  },
  {
    "stt": 12,
    "nam": "9/2026",
    "ten": "Lớp A1 khóa 2016-2019",
    "thongtin": "ĐĐ: Nguyễn Thị Phương Thảo",
    "tien": 5000000,
    "vatpham": "",
    "ghichu": "Tiền mặt",
    "khoa": "2016-2019",
    "lop": "A1"
  },
  {
    "stt": 13,
    "nam": "9/2026",
    "ten": "Lớp A1 khóa 2017-2020",
    "thongtin": "ĐĐ: Đặng Trung Kiên",
    "tien": 6000000,
    "vatpham": "",
    "ghichu": "Tiền mặt",
    "khoa": "2017-2020",
    "lop": "A1"
  },
  {
    "stt": 14,
    "nam": "9/2026",
    "ten": "Lớp A5 khóa 2010-2013",
    "thongtin": "ĐĐ: Trương Văn Quý",
    "tien": 7000000,
    "vatpham": "",
    "ghichu": "Tiền mặt",
    "khoa": "2010-2013",
    "lop": "A5"
  },
  {
    "stt": 15,
    "nam": "9/2026",
    "ten": "Em: Nguyễn Xuân Quyền",
    "thongtin": "Cựu học sinh lớp A5 (Niên khóa: 2003-2006)",
    "tien": 2000000,
    "vatpham": "",
    "ghichu": "Tiền mặt",
    "khoa": "2003-2006",
    "lop": "A5"
  },
  {
    "stt": 16,
    "nam": "9/2026",
    "ten": "Lớp A1 khóa 2013-2016",
    "thongtin": "ĐĐ: Lê Huy Thu",
    "tien": 10000000,
    "vatpham": "",
    "ghichu": "",
    "khoa": "2013-2016",
    "lop": "A1"
  }
];

const $ = (s) => document.querySelector(s);
const money = n => new Intl.NumberFormat('vi-VN').format(n) + 'đ';

const searchInput = $('#searchInput');
const khoaFilter = $('#khoaFilter');
const lopFilter = $('#lopFilter');
const namFilter = $('#namFilter');
const tableBody = $('#tableBody');
const mobileCards = $('#mobileCards');
const emptyState = $('#emptyState');
const resultCount = $('#resultCount');
const chips = $('#chips');

function unique(key) {
  return [...new Set(donors.map(d => d[key]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'vi'));
}

function fillSelect(select, values) {
  values.forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = keyLabel(v);
    select.appendChild(o);
  });
}

function keyLabel(v) {
  return v.includes('/') ? 'Năm ' + v : 'Khóa ' + v;
}

fillSelect(khoaFilter, unique('khoa'));
fillSelect(lopFilter, unique('lop'));
fillSelect(namFilter, unique('nam'));

function matches(d) {
  const q = searchInput.value.trim().toLowerCase();
  const hay = [d.ten,d.thongtin,d.khoa,d.lop,d.nam,d.vatpham,d.ghichu].join(' ').toLowerCase();
  return (!q || hay.includes(q))
    && (!khoaFilter.value || d.khoa === khoaFilter.value)
    && (!lopFilter.value || d.lop === lopFilter.value)
    && (!namFilter.value || d.nam === namFilter.value);
}

function render() {
  const filtered = donors.filter(matches);
  resultCount.textContent = `${filtered.length} kết quả`;
  tableBody.innerHTML = '';
  mobileCards.innerHTML = '';
  emptyState.hidden = filtered.length !== 0;

  filtered.forEach(d => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${d.stt}</td>
      <td>${d.nam}</td>
      <td>${escapeHtml(d.ten)}</td>
      <td>${escapeHtml(d.thongtin)}</td>
      <td>${money(d.tien)}</td>
      <td>${escapeHtml(d.vatpham || '—')}</td>
      <td>${escapeHtml(d.ghichu || '—')}</td>`;
    tableBody.appendChild(tr);

    const card = document.createElement('article');
    card.className = 'donor-card';
    card.innerHTML = `
      <div class="donor-top"><strong>${escapeHtml(d.ten)}</strong><span class="donor-money">${money(d.tien)}</span></div>
      <div class="donor-meta">${d.nam} · ${d.khoa ? 'Khóa '+escapeHtml(d.khoa) : ''} ${d.lop ? '· Lớp '+escapeHtml(d.lop) : ''}</div>
      <div class="donor-info">${escapeHtml(d.thongtin)}</div>
      <div class="donor-tags">
        ${d.vatpham ? `<span class="donor-tag">🎁 ${escapeHtml(d.vatpham)}</span>` : ''}
        ${d.ghichu ? `<span class="donor-tag">ℹ️ ${escapeHtml(d.ghichu)}</span>` : ''}
      </div>`;
    mobileCards.appendChild(card);
  });

  renderChips();
}

function renderChips() {
  chips.innerHTML = '';
  [['khoaFilter','Khóa'],['lopFilter','Lớp'],['namFilter','Năm']].forEach(([id,label]) => {
    const el = $('#' + id);
    if (el.value) {
      const b = document.createElement('button');
      b.className='chip';
      b.textContent = `× ${label}: ${el.value}`;
      b.onclick = () => { el.value=''; render(); };
      chips.appendChild(b);
    }
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}

[searchInput,khoaFilter,lopFilter,namFilter].forEach(el => el.addEventListener('input', render));
$('#resetBtn').addEventListener('click', () => {
  searchInput.value=''; khoaFilter.value=''; lopFilter.value=''; namFilter.value=''; render();
});
$('#menuBtn').addEventListener('click', () => $('#navLinks').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => $('#navLinks').classList.remove('open')));

render();
