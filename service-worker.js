const CACHE_NAME = 'sorteador-cache-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './matrix.js',
  './icon-192.png',
  './icon-512.png',
  './manifest.json'
];

// Instala o Service Worker e faz o cache dos arquivos
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Fazendo cache dos arquivos');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// Ativa o Service Worker e limpa caches antigos se tiver
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Ativando...');
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removendo cache antigo', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Intercepta requisições e serve o cache primeiro
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
