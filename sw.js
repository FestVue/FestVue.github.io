// FestVue Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activated');
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // ലൈവ് ഡാറ്റ അപ്ഡേറ്റ് ആവാൻ വേണ്ടി കാഷിംഗ് ഒഴിവാക്കി നേരിട്ട് ഫെച്ച് ചെയ്യുന്നു
    e.respondWith(fetch(e.request).catch(() => console.log('Network request failed')));
});
