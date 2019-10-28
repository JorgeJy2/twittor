//Guardar en el cache
function actualizaCacheDinamico(dynamicCheche, req, res) {
    if (res.ok) {
        return caches.open(dynamicCheche)
            .then(cache => {
                cache.put(req, res.clone());
                return res.clone();
            });
    } else {
        return res;
    }
}