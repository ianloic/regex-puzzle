// The simplest service worker. Just cache one HTML file please.

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('cache')
        .then(function(cache) {
          return cache.addAll(['puzzle.html']);
        })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request);
      }
    )
  );
});

