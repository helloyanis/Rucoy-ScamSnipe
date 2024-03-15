const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/Rucoy-ScamSnipe/",
      "/Rucoy-ScamSnipe/index.html",
      "/Rucoy-ScamSnipe/about.html",
      "/Rucoy-ScamSnipe/icon.png",
      "/Rucoy-ScamSnipe/styles/style.css",
      "/Rucoy-ScamSnipe/styles/nav.css",
      "/Rucoy-ScamSnipe/styles/search.css",
      "/Rucoy-ScamSnipe/script.js",
    ])
  );
});
