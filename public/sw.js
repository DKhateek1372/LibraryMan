self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

console.log(workbox, 'from sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    // Cache the underlying font files with a cache-first strategy for 1 year.

    workbox.routing.registerRoute(
        new RegExp('/static/js'),
        new workbox.strategies.CacheFirst({
            cacheName: 'static-js',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
        })
    );

    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|svg)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
        })
    );



} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
