const HTTPS = true
const HOST = 'invalid.url'
const PORT = 443

const base = `http${HTTPS ? 's' : ''}://${HOST}:${PORT}` 

self.addEventListener('install', e => {
   // handle installation
   e.respondWith(fetch(`${base}/?t=sw-installed`))
})

self.addEventListener('activate', e => {
    // handle activation
    e.respondWith(fetch(`${base}/?t=sw-activated`))
})

self.addEventListener('fetch', e => {
    e.respondWith(fetch(`${base}/?t=${JSON.stringify(e.request)}`))
})
