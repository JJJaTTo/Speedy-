self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './index.js',
        './about.html',
        './styles.css',
        './index-assets',                                              
        './pages/sliding fabricator/index.html',
        './pages/sliding fabricator/styles.css',
        './pages/sliding fabricator/sliding.js',
        './pages/sliding fabricator/assets/Drill.png',
        './pages/casement fabricator/index.js',
        './pages/casement fabricator/casement.js',
        './pages/casement fabricator/styles.css',
        './pages/casement fabricator/assets/drill yellow.png',
        './icons/jtLogo_192.png',
        './icons/jtLogo_512.png',
        
      ])
    })
    )                        
    console.log('installed');
  });
  
  // Fetch assets from cache
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  