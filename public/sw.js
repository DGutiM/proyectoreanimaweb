self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith('reanima-empresas-')).map((key) => caches.delete(key)))),
      self.registration.unregister(),
    ]),
  );
});
