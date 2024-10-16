// Функція для форматування часу
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} хв ${remainingSeconds} с`;
}

// Отримати збережену статистику і відобразити її
chrome.storage.local.get(null, (data) => {
  let statsHtml = '';
  for (let site in data) {
    statsHtml += `<p><strong>${site}:</strong> ${formatTime(data[site])}</p>`;
  }
  document.getElementById('stats').innerHTML = statsHtml || 'Ще немає даних.';
});
