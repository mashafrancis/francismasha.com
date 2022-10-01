/******/ (() => {
	// webpackBootstrap
	/******/ 'use strict';
	var __webpack_exports__ = {};

	self.fallback = async (request) => {
		// https://developer.mozilla.org/en-US/docs/Web/API/RequestDestination
		switch (request.destination) {
			case 'document':
				if (false) {
				}

			case 'image':
				if (false) {
				}

			case 'audio':
				if (false) {
				}

			case 'video':
				if (false) {
				}

			case 'font':
				if (true)
					return caches.match('/static/font/fallback.woff2', {
						ignoreSearch: true,
					});

			case '':
				if (false) {
				}

			default:
				return Response.error();
		}
	};
	/******/
})();
