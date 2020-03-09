'use strict'
const cacheName = 'app-v0.81' // change when cached content is updated
const pathRoot = (location.host === 'localhost:8887' || location.host === '127.0.0.1:8887')?
	'/Users/Daniel/Documents/GitHub/drunkenclam.github.io/' : // local directory
	'/ratv/' // online directory
const urlsToCache = [
  '',
  './index.html',
  './fetch.js',
  './vue.js',
  './axios.min.js',
  './bootstrap-vue.min.css',
  './bootstrap.min.css',
  './bootstrap-vue.min.js',
  './vue.min.js',
  './polyfill.min.js',
  // 'vue-touch.js.map',
  './hammer.min.js',
  './vue-touch.js',
	'./app.js',
  './icon-192.png',
  './icon-96.png',
  './icon-48.png',
	'./Gruppo-Regular.ttf',
	// 'style.css',
	'./manifest.json'
]
console.log('pathRoot: ' + pathRoot)
self.addEventListener('install', ev => {
	ev.waitUntil(
		caches
		.open(cacheName)
		.then(cache => {
      cache.addAll(urlsToCache.map(el => pathRoot + el))
		})
	)
})

self.addEventListener('activate', ev => {
	ev.waitUntil(
		caches
		.keys()
		.then(keyList => {
			keyList.forEach(key => {
				if (key !== cacheName)
					caches.delete(key)
			})
		})
	)
	return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response){
      if(response)
        return response;
      return fetch(event.request).then(function(response){
        return response;
      });
  }));
});
