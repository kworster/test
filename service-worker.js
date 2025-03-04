const CACHE_NAME = 'event-scheduler-pwa-cache-v1';
const FILES_TO_CACHE = [
    '/test',
    '/test/index.html',
    '/test/style.css',
    '/test/app.js',
    '/test/manifest.json',
    '/test/icons/icon-128.png',
    '/test/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});