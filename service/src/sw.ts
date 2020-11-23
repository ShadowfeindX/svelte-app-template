declare const self: ServiceWorkerGlobalScope;
const CACHE = "v1";
const ASSETS: string[] = [
  "assets/images/background.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(cache => {
    cache.addAll(ASSETS);
  }))
});

export default null;