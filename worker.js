const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/about.html",
      "/icon.png",
      "/styles/style.css",
      "/styles/nav.css",
      "/styles/search.css",
      "/script.js",
    ])
  );
});
