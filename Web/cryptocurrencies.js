// Coin data (mocked for demo)
const coins = [
  { name: "Bitcoin", symbol: "BTC", price: "$103,941.64", change: "-0.15%", cap: "$2,064,830,887,774.06" },
  { name: "Ethereum", symbol: "ETH", price: "$2,490.89", change: "-3.55%", cap: "$300,718,956,677.25" },
  { name: "Tether", symbol: "USDT", price: "$1.00", change: "-0.01%", cap: "$151,608,095,883.6" },
  { name: "XRP", symbol: "XRP", price: "$2.34", change: "-2.91%", cap: "$136,560,558,191.65" },
  { name: "Binance", symbol: "BNB", price: "$641.28", change: "-1.12%", cap: "$91,152,447,347.56" },
  { name: "Shiba Inu", symbol: "SHB", price: "$0.0000143", change: "-0.98%", cap: "$8,442,944,503.73" },
  { name: "Solana", symbol: "SOL", price: "$166.73", change: "-2.37%", cap: "$88,689,717,198.57" },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.215", change: "-2.05%", cap: "$33,029,657,790.49" }
];

let showingAll = false;

function renderTable() {
  const tbody = document.getElementById('coin-table-body');
  tbody.innerHTML = '';
  const showCount = showingAll ? coins.length : 4;
  for (let i = 0; i < showCount; i++) {
    const c = coins[i];
    tbody.innerHTML += `
      <tr>
        <td><span class="coin-name">${c.name}</span> <span class="coin-symbol">${c.symbol}</span></td>
        <td><span class="coin-price">${c.price}</span></td>
        <td><span class="coin-change">${c.change}</span></td>
        <td><span class="coin-cap">${c.cap}</span></td>
      </tr>
    `;
  }
  document.getElementById('show-more-btn').textContent = showingAll ? "Show less" : "Show more";
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  document.getElementById('show-more-btn').addEventListener('click', () => {
    showingAll = !showingAll;
    renderTable();
  });
});
