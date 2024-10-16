let currentTab = null;
let startTime = null;

// Функція для обчислення часу, проведеного на сайті
function stopTracking() {
  if (currentTab && startTime) {
    const currentTime = Date.now();
    const timeSpent = Math.round((currentTime - startTime) / 1000); // у секундах
    chrome.storage.local.get([currentTab], (data) => {
      const totalTime = (data[currentTab] || 0) + timeSpent;
      chrome.storage.local.set({ [currentTab]: totalTime });
    });
    console.log(`Time spent on ${currentTab}: ${timeSpent} seconds`);
  }
}

// Слухати зміни активної вкладки
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    stopTracking(); // Зупинити відстеження попередньої вкладки

    if (tab && tab.url) {
      const url = new URL(tab.url);
      currentTab = url.hostname; // Отримуємо домен
      startTime = Date.now(); // Починаємо відстеження нового сайту
      console.log(`Start tracking time on ${currentTab}`);
    }
  });
});

// Слухати оновлення вкладок (коли змінюється URL)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    stopTracking(); // Зупинити відстеження попереднього сайту

    const url = new URL(tab.url);
    currentTab = url.hostname; // Отримуємо новий домен
    startTime = Date.now(); // Почати відстеження нового сайту
    console.log(`Start tracking time on ${currentTab}`);
  }
});

// Слухати закриття вкладок
chrome.tabs.onRemoved.addListener(() => {
  stopTracking(); // Зупинити відстеження при закритті вкладки
});

// Створити нагадування про перерву кожну годину
chrome.alarms.create('breakReminder', { delayInMinutes: 1, periodInMinutes: 1 });

// Слухати спрацювання нагадувань
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'breakReminder') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Перерва',
      message: 'Час зробити перерву!',
    });
  }
});
