const staticCacheName = 'offline-web-cache';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.css',
    '/icon2.png',
    '/Games',
    '/js/app.js',
    '/Images/2024-07/AB.JPG',
    '/Images/2024-07/DKC.jpg',
    '/Images/2024-07/DTT.jpg',
    '/Images/2024-07/EA.jpg',
    '/Images/2024-07/EBW.jpg',
    '/Images/2024-07/ESF.jpg',
    '/Images/2024-07/GBG.JPG',
    '/Images/2024-07/MMVWM.jpg',
    '/Games/2024-07/AB.html',
    '/Games/2024-07/DKC.html',
    '/Games/2024-07/DTT.html',
    '/Games/2024-07/EA.html',
    '/Games/2024-07/EBW.html',
    '/Games/2024-07/ESF.html',
    '/Games/2024-07/GBG.html',
    '/Games/2024-07/MMVWM.html'
];
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
    );
  });
  
  // activate event
  self.addEventListener('activate', evt => {
    //console.log('service worker activated');
  });
  
  // fetch event
  self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request)
        })
    )
  });