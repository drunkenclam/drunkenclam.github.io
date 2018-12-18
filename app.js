'use strict'
var referrer = 'nope';

+function() {
	if (!('serviceWorker' in navigator)) {
		alert('This Browser does not support ServiceWorkers.')
		return
	}

	if (navigator.serviceWorker.controller) {
		console.info('ServiceWorker runs')
		return
	}

	if ('serviceWorker' in navigator && (['localhost', '127'].indexOf(location.hostname) > -1 || location.protocol === 'file:')) {
		console.info('no ServiceWorker on ' + location.hostname + ' URL or ' + location.protocol + ' protocol')
		return
	}

	console.info('Registering ServiceWorker...')
  navigator.serviceWorker.register('/serviceworker.js').then(function(reg) {
    console.log('REGISTERED!')
  }).catch(function(error) {
    // registration failed
    console.log('FAILED TO REGISTER ' + error);
  });

	// navigator.serviceWorker
	// .register('./serviceworker.js')
	// .catch(function(err) {
	// 	console.error('ServiceWorker has not been registered!', err)
	// })
}()

if (location.search) {
	if (location.search.slice(1) === 'from_hs') {
		console.log('Hehe, I\'m an app!')
		referrer = 'App'
		// document.querySelector('h1').insertAdjacentHTML('afterend', '<h2>Hey, I\'m an app!</h2>')
	} else {
		console.log('Hehe, I\'m a Browser window!')
		referrer = 'Browser'
	}
}
