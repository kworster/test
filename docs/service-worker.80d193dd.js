const e=["./","./index.html","./style.css","./app.js","./manifest.json","./icons/icon-128.png","./icons/icon-512.png"];self.addEventListener("install",n=>{n.waitUntil(caches.open("event-scheduler-pwa-cache-v1").then(n=>n.addAll(e)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(n=>n||fetch(e.request)))});
//# sourceMappingURL=service-worker.80d193dd.js.map
