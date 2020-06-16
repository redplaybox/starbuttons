importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@5.1.3/build/workbox-sw.min.js", "/precache-manifest.5d848aa70c166ab78d2672b6e295b079.js");

workbox.setConfig({
  modulePathCb(name, debug) {
    const env = debug ? "dev" : "prod";
    return `https://cdn.jsdelivr.net/npm/${name}@5.1.3/build/${name}.${env}.js`;
  }
});

const INITIAL_PRECACHING_URL = [
  "/assets/ehhh.mp3",
  "/assets/ehhh2.mp3",
  "/assets/ehhh3.mp3"
];

/**
 * @schema { revision, url }
 */
workbox.precaching.precacheAndRoute(
  self.__precacheManifest.filter(obj => {
    INITIAL_PRECACHING_URL.includes(obj.url);
  }) || []
);

workbox.routing.registerRoute(
  /\.(?:mp3|ogg|webm|m4a)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "audios",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 120,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
);
