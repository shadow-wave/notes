// GreatNotes Service Worker - iPadOS 27.0.1 Offline PWA Engine with Sub-Second AI Studio (v16)
const CACHE_NAME = 'greatnotes-offline-v18';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './pdf.min.js',
  './pdf.worker.min.js',
  './jspdf.umd.min.js',
  './lucide.min.js',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon.png',
  './icon-light-192.png',
  './icon-light-512.png',
  './apple-touch-icon-light.png',
  './favicon-light.png',
  './icon-dark-192.png',
  './icon-dark-512.png',
  './apple-touch-icon-dark.png',
  './favicon-dark.png'
];

// Install Event: Pre-cache all local assets for 100% offline access
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[GreatNotes SW] Pre-caching local app shell');
      return cache.addAll(APP_SHELL).catch((err) => {
        console.warn('[GreatNotes SW] Pre-cache partial warning:', err);
      });
    })
  );
});

// Activate Event: Purge outdated caches immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[GreatNotes SW] Deleting stale cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First Strategy with Stale-While-Revalidate for offline perfection
self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Non-GET requests pass through directly
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Handle local assets (same origin)
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        if (cachedResponse) {
          // Revalidate in background if online
          fetch(req).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(req, networkResponse.clone()));
            }
          }).catch(() => {/* Offline, ignore */});
          return cachedResponse;
        }

        return fetch(req).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, responseToCache));
          return networkResponse;
        }).catch(() => {
          // Fallback to index.html for navigation requests
          if (req.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
        });
      })
    );
    return;
  }

  // Cross-origin requests (fallback)
  event.respondWith(
    caches.match(req).then((cached) => {
      return cached || fetch(req).then((res) => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
