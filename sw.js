// Service Worker — cache offline da Calculadora de Massa
// Estratégia: cache-first para os arquivos do app (tudo local, sem rede).

const CACHE = 'pizza-massa-v130';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-background.png',
  './icon-maskable-512.png',
  './favicon.png'
];

// Instala: pré-cacheia os arquivos do app
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Ativa: limpa caches antigos de versões anteriores
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: responde do cache; se não achar, busca na rede e cacheia.
// Para navegações de página (ex.: pedido antigo por calculadora.html),
// faz fallback para index.html — conserta instalações antigas.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Requisições de navegação (abrir uma página): tenta a rede; se falhar
  // ou vier 404 (ex.: pedido antigo por calculadora.html), cai no index.html
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((resp) => {
          if (resp && resp.ok) return resp;
          return caches.match('./index.html').then((r) => r || caches.match('./') || resp);
        })
        .catch(() =>
          caches.match('./index.html').then((r) => r || caches.match('./'))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((resp) => {
          if (resp && resp.status === 200 && resp.type === 'basic') {
            const copy = resp.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return resp;
        })
        .catch(() => cached);
    })
  );
});
