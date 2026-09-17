// State Game
let score = 0;
let clickPower = 1;
let upgradeCost = 10;

// Element DOM
const scoreEl = document.getElementById('score');
const clickPowerEl = document.getElementById('click-power');
const upgradeCostEl = document.getElementById('upgrade-cost');
const clickBtn = document.getElementById('click-btn');
const upgradeBtn = document.getElementById('upgrade-btn');

// Fungsi Pembaruan Tampilan UI (Responsif)
function updateUI() {
    scoreEl.textContent = score;
    clickPowerEl.textContent = clickPower;
    upgradeCostEl.textContent = upgradeCost;

    document.body.classList.toggle('theme-100', score >= 100 && score < 1000);
    document.body.classList.toggle('theme-1000', score >= 1000);

    // Tombol upgrade otomatis langsung aktif/nonaktif tanpa lag
    upgradeBtn.disabled = score < upgradeCost;
}

// Action Klik Utama
clickBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah behaviou delay/double tap bawaan
    score += clickPower;
    updateUI();
});

// Action Upgrade (Direct & Instant Check)
upgradeBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Validasi skor
    if (score >= upgradeCost) {
        score -= upgradeCost;           // Kurangi skor
        clickPower += 1;                // Tambah kekuatan klik
        upgradeCost = Math.floor(upgradeCost * 1.5); // Naikkan harga upgrade

        updateUI(); // Langsung update tampilan saat itu juga
    }
});