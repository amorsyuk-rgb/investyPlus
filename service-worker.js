const CACHE_NAME = 'invyplus-pro-v1';
const ASSETS = ['index.html','manifest.json','icon-192.png','icon-512.png','invy6.html'];
self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', evt => evt.waitUntil(clients.claim()));
self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(resp => resp || fetch(evt.request)));
});
