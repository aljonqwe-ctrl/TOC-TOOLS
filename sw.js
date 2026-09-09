// Minimal service worker — just enough to make TOC Tools "installable".
// No aggressive caching, so your tool files always load fresh.

const CACHE_NAME = 'toc-tools-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
