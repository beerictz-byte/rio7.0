const CACHE_NAME = 'ai-assistant-v2';
self.addEventListener('install', function(e) {
    e.waitUntil(caches.open(CACHE_NAME).then(function(c) { return c.addAll(['./', './index.html', './manifest.json']); }));
});
self.addEventListener('fetch', function(e) {
    e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request); }));
});
