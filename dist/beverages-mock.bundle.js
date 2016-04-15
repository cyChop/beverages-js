/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    !(function webpackMissingModule() { var e = new Error("Cannot find module \"lib/fake-server\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (server) {
	    'use strict';

	    server.respondWith('GET', /spreadsheets\.google\.com\/.*\/values\?alt=json$/,
	        [200, {'Content-Type': 'application/json'}, JSON.stringify(__webpack_require__(28))]);

	    return server;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 28:
/***/ function(module, exports) {

	module.exports = {
		"version": "1.0",
		"encoding": "UTF-8",
		"feed": {
			"xmlns": "http://www.w3.org/2005/Atom",
			"xmlns$openSearch": "http://a9.com/-/spec/opensearchrss/1.0/",
			"xmlns$gsx": "http://schemas.google.com/spreadsheets/2006/extended",
			"id": {
				"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values"
			},
			"updated": {
				"$t": "2016-04-09T07:21:38.946Z"
			},
			"category": [
				{
					"scheme": "http://schemas.google.com/spreadsheets/2006",
					"term": "http://schemas.google.com/spreadsheets/2006#list"
				}
			],
			"title": {
				"type": "text",
				"$t": "teas"
			},
			"link": [
				{
					"rel": "alternate",
					"type": "application/atom+xml",
					"href": "https://docs.google.com/spreadsheets/d/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/pubhtml"
				},
				{
					"rel": "http://schemas.google.com/g/2005#feed",
					"type": "application/atom+xml",
					"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values"
				},
				{
					"rel": "http://schemas.google.com/g/2005#post",
					"type": "application/atom+xml",
					"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values"
				},
				{
					"rel": "self",
					"type": "application/atom+xml",
					"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values?alt=json"
				}
			],
			"author": [
				{
					"name": {
						"$t": "cyrille.chopelet"
					},
					"email": {
						"$t": "cyrille.chopelet@gmail.com"
					}
				}
			],
			"openSearch$totalResults": {
				"$t": "65"
			},
			"openSearch$startIndex": {
				"$t": "1"
			},
			"entry": [
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cokwr"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Libertango"
					},
					"content": {
						"type": "text",
						"$t": "brand: Mariage Frères, stock: TRUE, packaged: FALSE, basis: tea-green, theine: unknown, t-min: 80, t-max: 80, time-min: 5, time-max: 5, ingredients: Maté vert parfumé, benefits: antioxidant, énergisant, détoxifiant"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cokwr"
						}
					],
					"gsx$name": {
						"$t": "Libertango"
					},
					"gsx$brand": {
						"$t": "Mariage Frères"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": "80"
					},
					"gsx$t-max": {
						"$t": "80"
					},
					"gsx$time-min": {
						"$t": "5"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "Maté vert parfumé"
					},
					"gsx$benefits": {
						"$t": "antioxidant, énergisant, détoxifiant"
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cpzh4"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Latin Lover"
					},
					"content": {
						"type": "text",
						"$t": "brand: Mariage Frères, stock: TRUE, packaged: FALSE, basis: tea-green, theine: unknown, t-min: 80, t-max: 80, time-min: 5, time-max: 5, ingredients: Maté vert parfumé, benefits: antioxidant, énergisant, détoxifiant"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cpzh4"
						}
					],
					"gsx$name": {
						"$t": "Latin Lover"
					},
					"gsx$brand": {
						"$t": "Mariage Frères"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": "80"
					},
					"gsx$t-max": {
						"$t": "80"
					},
					"gsx$time-min": {
						"$t": "5"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "Maté vert parfumé"
					},
					"gsx$benefits": {
						"$t": "antioxidant, énergisant, détoxifiant"
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cre1l"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Polo Club"
					},
					"content": {
						"type": "text",
						"$t": "brand: Mariage Frères, stock: TRUE, packaged: FALSE, basis: tea-green, theine: unknown, t-min: 80, t-max: 80, time-min: 5, time-max: 5, ingredients: Maté vert parfumé, benefits: antioxidant, énergisant, détoxifiant"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cre1l"
						}
					],
					"gsx$name": {
						"$t": "Polo Club"
					},
					"gsx$brand": {
						"$t": "Mariage Frères"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": "80"
					},
					"gsx$t-max": {
						"$t": "80"
					},
					"gsx$time-min": {
						"$t": "5"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "Maté vert parfumé"
					},
					"gsx$benefits": {
						"$t": "antioxidant, énergisant, détoxifiant"
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/chk2m"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Domino"
					},
					"content": {
						"type": "text",
						"$t": "brand: Envouthé, stock: TRUE, packaged: FALSE, basis: tea-black, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 90, t-max: 90, time-min: 4, time-max: 5, ingredients: thés noir et blanc de Chine, piment, cerise, benefits: vivifiant, note: Dans un jeu de dominos, les touches de noir investissent la surface blanche des pièces. Jolie métaphores de la féminité et de la douceur du Yin qui prend le dessus sur la force et l'aspect masculin du Yang, Domino se veut un thé où les énergies qui nous habitent s'harmonisent sans lutter. Enrober de douceur la puissance, oser révéler la sensibilité qui nous habite et franchir le pas de l'harmonie : Domino symbolise sans préjugé l'importance d'être soi-même."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/chk2m"
						}
					],
					"gsx$name": {
						"$t": "Domino"
					},
					"gsx$brand": {
						"$t": "Envouthé"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "90"
					},
					"gsx$t-max": {
						"$t": "90"
					},
					"gsx$time-min": {
						"$t": "4"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "thés noir et blanc de Chine, piment, cerise"
					},
					"gsx$benefits": {
						"$t": "vivifiant"
					},
					"gsx$note": {
						"$t": "Dans un jeu de dominos, les touches de noir investissent la surface blanche des pièces. Jolie métaphores de la féminité et de la douceur du Yin qui prend le dessus sur la force et l'aspect masculin du Yang, Domino se veut un thé où les énergies qui nous habitent s'harmonisent sans lutter. Enrober de douceur la puissance, oser révéler la sensibilité qui nous habite et franchir le pas de l'harmonie : Domino symbolise sans préjugé l'importance d'être soi-même."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ciyn3"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Temple de la Lune"
					},
					"content": {
						"type": "text",
						"$t": "brand: Les saisons du thé, stock: TRUE, packaged: FALSE, basis: tea-oolong, theine: low, morning: FALSE, daytime: TRUE, evening: TRUE, t-min: 90, t-max: 95, time-min: 4, time-max: 5, ingredients: thé Oolong de Chine, rhubarbe, groseille, pétales de mauve, benefits: réconfortant, note: Dans la symbolique du Yin et du Yang, la lune est associée au Yin. Temple de la Lune est ainsi un très bel hommage au satellite de la Terre, unique endroit non terrestre qui a été foulé par le pied de l'Homme. Entre légendes et fantasmes, la Lune s'imagine ici douce et féminine, tantôt bienveillante et tantôt taquine."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ciyn3"
						}
					],
					"gsx$name": {
						"$t": "Temple de la Lune"
					},
					"gsx$brand": {
						"$t": "Les saisons du thé"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-oolong"
					},
					"gsx$theine": {
						"$t": "low"
					},
					"gsx$morning": {
						"$t": "FALSE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "TRUE"
					},
					"gsx$t-min": {
						"$t": "90"
					},
					"gsx$t-max": {
						"$t": "95"
					},
					"gsx$time-min": {
						"$t": "4"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "thé Oolong de Chine, rhubarbe, groseille, pétales de mauve"
					},
					"gsx$benefits": {
						"$t": "réconfortant"
					},
					"gsx$note": {
						"$t": "Dans la symbolique du Yin et du Yang, la lune est associée au Yin. Temple de la Lune est ainsi un très bel hommage au satellite de la Terre, unique endroit non terrestre qui a été foulé par le pied de l'Homme. Entre légendes et fantasmes, la Lune s'imagine ici douce et féminine, tantôt bienveillante et tantôt taquine."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ckd7g"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Lumière du Matin"
					},
					"content": {
						"type": "text",
						"$t": "brand: Tea & TY, stock: TRUE, packaged: FALSE, basis: tea-green, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 80, t-max: 80, time-min: 2, time-max: 3, ingredients: thés vert et blanc de Chine, mangue, bergamote, benefits: vivifiant, note: Lumière du Matin envoie un joli clin d'œil au Soleil, l'astre que l'on associe au Yang. La ronde bergamote et la mangue dorée s'associent ici pour dessiner au fond de la tasse une aurore lumineuse, qui colore le thé de notes fruitées et d'agrumes pétillantes."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ckd7g"
						}
					],
					"gsx$name": {
						"$t": "Lumière du Matin"
					},
					"gsx$brand": {
						"$t": "Tea & TY"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "80"
					},
					"gsx$t-max": {
						"$t": "80"
					},
					"gsx$time-min": {
						"$t": "2"
					},
					"gsx$time-max": {
						"$t": "3"
					},
					"gsx$ingredients": {
						"$t": "thés vert et blanc de Chine, mangue, bergamote"
					},
					"gsx$benefits": {
						"$t": "vivifiant"
					},
					"gsx$note": {
						"$t": "Lumière du Matin envoie un joli clin d'œil au Soleil, l'astre que l'on associe au Yang. La ronde bergamote et la mangue dorée s'associent ici pour dessiner au fond de la tasse une aurore lumineuse, qui colore le thé de notes fruitées et d'agrumes pétillantes."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/clrrx"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Paï Mu Tan"
					},
					"content": {
						"type": "text",
						"$t": "brand: La Route des Comptoirs, stock: TRUE, packaged: FALSE, basis: tea-white, theine: low, morning: FALSE, daytime: TRUE, evening: TRUE, t-min: 85, t-max: 90, time-min: 8, time-max: 10, ingredients: thé blanc de Chine nature aux notes naturelles fleuries, benefits: stimulant, note: Paï Mu Tan signifie littéralement « pivoine blanche », et il est composé du bourgeon du théier et de ses deux premières feuilles recouvertes d'un fin duvet blanc. Rare, cueilli à la main et produit en petite quantité, ce thé biologique vient à merveille illustrer toute la subtibilité du Yang."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/clrrx"
						}
					],
					"gsx$name": {
						"$t": "Paï Mu Tan"
					},
					"gsx$brand": {
						"$t": "La Route des Comptoirs"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-white"
					},
					"gsx$theine": {
						"$t": "low"
					},
					"gsx$morning": {
						"$t": "FALSE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "TRUE"
					},
					"gsx$t-min": {
						"$t": "85"
					},
					"gsx$t-max": {
						"$t": "90"
					},
					"gsx$time-min": {
						"$t": "8"
					},
					"gsx$time-max": {
						"$t": "10"
					},
					"gsx$ingredients": {
						"$t": "thé blanc de Chine nature aux notes naturelles fleuries"
					},
					"gsx$benefits": {
						"$t": "stimulant"
					},
					"gsx$note": {
						"$t": "Paï Mu Tan signifie littéralement « pivoine blanche », et il est composé du bourgeon du théier et de ses deux premières feuilles recouvertes d'un fin duvet blanc. Rare, cueilli à la main et produit en petite quantité, ce thé biologique vient à merveille illustrer toute la subtibilité du Yang."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cyevm"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Darjeeling"
					},
					"content": {
						"type": "text",
						"$t": "brand: Nina's Paris, stock: TRUE, packaged: FALSE, basis: tea-black, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 80, t-max: 85, time-min: 2, time-max: 4, ingredients: thé noir d'Inde nature aux notes naturelles fleuries, benefits: stimulant, note: Les feuilles de ce thé noir naturellement doux et fruité pourraient presque s'apparenter à celles d'un thé vert une fois infusées : c'est là toute la délicatesse du Yin ! Produit au pied de l'Himalaya, la douceur et les touches naturellement fleuries de ce Darjeeling en font un thé à déguster tout au long de la journée."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cyevm"
						}
					],
					"gsx$name": {
						"$t": "Darjeeling"
					},
					"gsx$brand": {
						"$t": "Nina's Paris"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "80"
					},
					"gsx$t-max": {
						"$t": "85"
					},
					"gsx$time-min": {
						"$t": "2"
					},
					"gsx$time-max": {
						"$t": "4"
					},
					"gsx$ingredients": {
						"$t": "thé noir d'Inde nature aux notes naturelles fleuries"
					},
					"gsx$benefits": {
						"$t": "stimulant"
					},
					"gsx$note": {
						"$t": "Les feuilles de ce thé noir naturellement doux et fruité pourraient presque s'apparenter à celles d'un thé vert une fois infusées : c'est là toute la délicatesse du Yin ! Produit au pied de l'Himalaya, la douceur et les touches naturellement fleuries de ce Darjeeling en font un thé à déguster tout au long de la journée."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cztg3"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "La femme"
					},
					"content": {
						"type": "text",
						"$t": "brand: Yogi Tea, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, morning: FALSE, daytime: TRUE, evening: TRUE, t-min: 95, t-max: 100, time-min: 6, time-max: 10, ingredients: gingembre, zeste d'orange, cannelle, fenouil, camomille, pissenlit, malt d'orge, réglisse, huile essentielle d'orange, poivre noir, baies de genièvre, cardamome, clous de girofle, extrait de racine d'angélique, benefits: réconfortant, note: Cette infusion aux plantes et aux épices aromatiques soutient la créativité féminine et l'équilibre intérieur. Composée d'un mélange ayurvédique unique, elle aide à soutenir l'équilibre durant les cycles naturels de la vie. Le message subtil de cette infusion est : « la compassion profonde »."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cztg3"
						}
					],
					"gsx$name": {
						"$t": "La femme"
					},
					"gsx$brand": {
						"$t": "Yogi Tea"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": "FALSE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "TRUE"
					},
					"gsx$t-min": {
						"$t": "95"
					},
					"gsx$t-max": {
						"$t": "100"
					},
					"gsx$time-min": {
						"$t": "6"
					},
					"gsx$time-max": {
						"$t": "10"
					},
					"gsx$ingredients": {
						"$t": "gingembre, zeste d'orange, cannelle, fenouil, camomille, pissenlit, malt d'orge, réglisse, huile essentielle d'orange, poivre noir, baies de genièvre, cardamome, clous de girofle, extrait de racine d'angélique"
					},
					"gsx$benefits": {
						"$t": "réconfortant"
					},
					"gsx$note": {
						"$t": "Cette infusion aux plantes et aux épices aromatiques soutient la créativité féminine et l'équilibre intérieur. Composée d'un mélange ayurvédique unique, elle aide à soutenir l'équilibre durant les cycles naturels de la vie. Le message subtil de cette infusion est : « la compassion profonde »."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d180g"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "L'homme"
					},
					"content": {
						"type": "text",
						"$t": "brand: Yogi Tea, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, morning: FALSE, daytime: TRUE, evening: TRUE, t-min: 95, t-max: 100, time-min: 6, time-max: 10, ingredients: gingembre, cardamome, réglisse, caroube, cannelle, malt d'orange, chicorée torréfiée, menthe poivrée, fenugrec, fenouil, macis, anis, racine de ginseng, astragale, curcuma, piment, huile de cannelle, poivre noir, benefits: vivifiant, note: Le stress, l'épuisement et les excès alimentaires peuvent avoir un effet négatif sur la force et la puissance des hommes. L'équilibre peut être rétabli par de l'exercice, un repos adéquat et un régime alimentaire sain. Le message subtil de cette infusion est : « La force »."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d180g"
						}
					],
					"gsx$name": {
						"$t": "L'homme"
					},
					"gsx$brand": {
						"$t": "Yogi Tea"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": "FALSE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "TRUE"
					},
					"gsx$t-min": {
						"$t": "95"
					},
					"gsx$t-max": {
						"$t": "100"
					},
					"gsx$time-min": {
						"$t": "6"
					},
					"gsx$time-max": {
						"$t": "10"
					},
					"gsx$ingredients": {
						"$t": "gingembre, cardamome, réglisse, caroube, cannelle, malt d'orange, chicorée torréfiée, menthe poivrée, fenugrec, fenouil, macis, anis, racine de ginseng, astragale, curcuma, piment, huile de cannelle, poivre noir"
					},
					"gsx$benefits": {
						"$t": "vivifiant"
					},
					"gsx$note": {
						"$t": "Le stress, l'épuisement et les excès alimentaires peuvent avoir un effet négatif sur la force et la puissance des hommes. L'équilibre peut être rétabli par de l'exercice, un repos adéquat et un régime alimentaire sain. Le message subtil de cette infusion est : « La force »."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d2mkx"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Bogor"
					},
					"content": {
						"type": "text",
						"$t": "brand: Envouthé, stock: TRUE, packaged: FALSE, basis: tea-green, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 70, t-max: 75, time-min: 2, time-max: 3, ingredients: thé vert Gunpowder d'Indonésie, thé vert Chun Mee de Chine, orchidée, pétales de roses rouge et rose, benefits: réconfortant, note: Au cœur de la ville de Bogor trône un fabuleux jardin botanique. Parmi les fleurs taquines, aux formes parfois atypiques et souvent surprenantes, se cache la plus grande orchidée du monde ! Tantôt blanche, tantôt rose, elle vient ici s'associer aux longues feuilles de thés verts pour faire éclore Bogor, une création exclusive aussi légère qu'un poème, aussi raffinée qu'un bourgeon encore endormi, aussi belle qu'un bouquet de fleurs fraîches."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d2mkx"
						}
					],
					"gsx$name": {
						"$t": "Bogor"
					},
					"gsx$brand": {
						"$t": "Envouthé"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "70"
					},
					"gsx$t-max": {
						"$t": "75"
					},
					"gsx$time-min": {
						"$t": "2"
					},
					"gsx$time-max": {
						"$t": "3"
					},
					"gsx$ingredients": {
						"$t": "thé vert Gunpowder d'Indonésie, thé vert Chun Mee de Chine, orchidée, pétales de roses rouge et rose"
					},
					"gsx$benefits": {
						"$t": "réconfortant"
					},
					"gsx$note": {
						"$t": "Au cœur de la ville de Bogor trône un fabuleux jardin botanique. Parmi les fleurs taquines, aux formes parfois atypiques et souvent surprenantes, se cache la plus grande orchidée du monde ! Tantôt blanche, tantôt rose, elle vient ici s'associer aux longues feuilles de thés verts pour faire éclore Bogor, une création exclusive aussi légère qu'un poème, aussi raffinée qu'un bourgeon encore endormi, aussi belle qu'un bouquet de fleurs fraîches."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cssly"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Garuda"
					},
					"content": {
						"type": "text",
						"$t": "brand: Envouthé, stock: TRUE, packaged: FALSE, basis: tea-black, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 90, t-max: 95, time-min: 4, time-max: 5, ingredients: thé noir de Sumatra BOP Supérieur, mangoustan, jacquier, pétales de souci, morceaux de papaye, benefits: réconfortant, note: Emblème de l'Indonésie, Garuda est tour à tour selon les légendes un homme-oiseau ou un aigle géant. Rassurez-vous cependant : dans cette mythique envolée, vous ne devriez perdre aucune plume ! Garuda, c'est le thé qui couple deux fruits originaire d'Indonésie, pour que l'hommage à la figure fantastique soit le plus complet qui soit. Du haut de son arbre, perché vers son nid, il se dit que Garuda lui-même aurait envie de tremper son bec dans une tasse de ce thé !"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cssly"
						}
					],
					"gsx$name": {
						"$t": "Garuda"
					},
					"gsx$brand": {
						"$t": "Envouthé"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "90"
					},
					"gsx$t-max": {
						"$t": "95"
					},
					"gsx$time-min": {
						"$t": "4"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "thé noir de Sumatra BOP Supérieur, mangoustan, jacquier, pétales de souci, morceaux de papaye"
					},
					"gsx$benefits": {
						"$t": "réconfortant"
					},
					"gsx$note": {
						"$t": "Emblème de l'Indonésie, Garuda est tour à tour selon les légendes un homme-oiseau ou un aigle géant. Rassurez-vous cependant : dans cette mythique envolée, vous ne devriez perdre aucune plume ! Garuda, c'est le thé qui couple deux fruits originaire d'Indonésie, pour que l'hommage à la figure fantastique soit le plus complet qui soit. Du haut de son arbre, perché vers son nid, il se dit que Garuda lui-même aurait envie de tremper son bec dans une tasse de ce thé !"
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cu76f"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Borobudur"
					},
					"content": {
						"type": "text",
						"$t": "brand: Envouthé, stock: TRUE, packaged: FALSE, basis: tea-black, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 90, t-max: 90, time-min: 4, time-max: 4, ingredients: thé noir d'Indonésie, jasmin, pétales de jasmin, benefits: stimulant, note: Particulièrement bu et apprécié dans l'est de Java, le jasmin s'apprécie ici sur base de thé noir contrairement au plus courant thé vert au jasmin, quant à lui symbole de la Chine. La finesse des saveurs est principalement due aux pétales de jasmin, qui complètent l'aromatisation naturelle du thé. Situé en Indonésie, sur l'île de Java, le temple de Borobudur est le plus grand temple bouddhiste au monde."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cu76f"
						}
					],
					"gsx$name": {
						"$t": "Borobudur"
					},
					"gsx$brand": {
						"$t": "Envouthé"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "90"
					},
					"gsx$t-max": {
						"$t": "90"
					},
					"gsx$time-min": {
						"$t": "4"
					},
					"gsx$time-max": {
						"$t": "4"
					},
					"gsx$ingredients": {
						"$t": "thé noir d'Indonésie, jasmin, pétales de jasmin"
					},
					"gsx$benefits": {
						"$t": "stimulant"
					},
					"gsx$note": {
						"$t": "Particulièrement bu et apprécié dans l'est de Java, le jasmin s'apprécie ici sur base de thé noir contrairement au plus courant thé vert au jasmin, quant à lui symbole de la Chine. La finesse des saveurs est principalement due aux pétales de jasmin, qui complètent l'aromatisation naturelle du thé. Situé en Indonésie, sur l'île de Java, le temple de Borobudur est le plus grand temple bouddhiste au monde."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cvlqs"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Java OP Ciater"
					},
					"content": {
						"type": "text",
						"$t": "brand: Envouthé, stock: TRUE, packaged: FALSE, basis: tea-black, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 90, t-max: 95, time-min: 4, time-max: 5, ingredients: thé noir d'Indonésie nature, benefits: vivifiant, note: Au tout début du XIXème siècle, vers l'année 1825, les colons hollandais ont commencé à faire pousser des plants de thé sur l'île indonésienne de Java. De là, la production s'est également étendue jusqu'à l'île de Sumatra. Pour ce thé Java OP Ciater, les feuilles ont été récoltées à la meilleure période de production de la plantation Malabar, entre août et septembre."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cvlqs"
						}
					],
					"gsx$name": {
						"$t": "Java OP Ciater"
					},
					"gsx$brand": {
						"$t": "Envouthé"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "90"
					},
					"gsx$t-max": {
						"$t": "95"
					},
					"gsx$time-min": {
						"$t": "4"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "thé noir d'Indonésie nature"
					},
					"gsx$benefits": {
						"$t": "vivifiant"
					},
					"gsx$note": {
						"$t": "Au tout début du XIXème siècle, vers l'année 1825, les colons hollandais ont commencé à faire pousser des plants de thé sur l'île indonésienne de Java. De là, la production s'est également étendue jusqu'à l'île de Sumatra. Pour ce thé Java OP Ciater, les feuilles ont été récoltées à la meilleure période de production de la plantation Malabar, entre août et septembre."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cx0b9"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Ginseng Flower"
					},
					"content": {
						"type": "text",
						"$t": "brand: Yogi Tea, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, morning: FALSE, daytime: TRUE, evening: TRUE, t-min: 95, t-max: 100, time-min: 6, time-max: 10, ingredients: infusion biologique citronnelle, menthe poivrée, cynorrhodon, zeste d'orange, réglisse, cardamome, racine de ginseng, cannelle, fleurs de ginseng, gingembre, extrait d'agrumes, ortie, luzerne, poivre noir, graines de céleri, clous de girofle, boisson de kombucha, benefits: vivifiant, note: Ginsleng Flower recentre, apaise et soutient votre force intérieure. La racine de ginseng est ici combinée avec la fleur de ginseng, la citronnelle fruitée, un zeste d'orange et la menthe poivrée fraîche. Le message de cette infusion est : « La paix intérieure et la confiance »."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cx0b9"
						}
					],
					"gsx$name": {
						"$t": "Ginseng Flower"
					},
					"gsx$brand": {
						"$t": "Yogi Tea"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": "FALSE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "TRUE"
					},
					"gsx$t-min": {
						"$t": "95"
					},
					"gsx$t-max": {
						"$t": "100"
					},
					"gsx$time-min": {
						"$t": "6"
					},
					"gsx$time-max": {
						"$t": "10"
					},
					"gsx$ingredients": {
						"$t": "infusion biologique citronnelle, menthe poivrée, cynorrhodon, zeste d'orange, réglisse, cardamome, racine de ginseng, cannelle, fleurs de ginseng, gingembre, extrait d'agrumes, ortie, luzerne, poivre noir, graines de céleri, clous de girofle, boisson de kombucha"
					},
					"gsx$benefits": {
						"$t": "vivifiant"
					},
					"gsx$note": {
						"$t": "Ginsleng Flower recentre, apaise et soutient votre force intérieure. La racine de ginseng est ici combinée avec la fleur de ginseng, la citronnelle fruitée, un zeste d'orange et la menthe poivrée fraîche. Le message de cette infusion est : « La paix intérieure et la confiance »."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d9ney"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Mrs Figg"
					},
					"content": {
						"type": "text",
						"$t": "brand: Envouthé, stock: TRUE, packaged: FALSE, basis: tea-oolong, theine: low, morning: FALSE, daytime: TRUE, evening: TRUE, t-min: 90, t-max: 90, time-min: 4, time-max: 4, ingredients: thé Oolong de Chine, figue, géranium, pétales de mauve, benefits: réconfortant, note: Mais qui donc est Mrs Figg ? Dans la saga Harry Potter, elle est la discrète voisine, qui se révèle dans le cinquième tome appartenir aussi au monde de la magie. Sans son intervention au tribunal des sorciers, c'en était fini des aventures de Harry ! Tout comme cette vieille femme qui dorlote ses chats et arrose ses géraniums, prêtez une attention particulière aux personnages secondaires des livres que vous dévorez : vous n'avez pas le temps de finir votre théière que leur rôle dans l'histoire peut se révéler crucial !"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d9ney"
						}
					],
					"gsx$name": {
						"$t": "Mrs Figg"
					},
					"gsx$brand": {
						"$t": "Envouthé"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-oolong"
					},
					"gsx$theine": {
						"$t": "low"
					},
					"gsx$morning": {
						"$t": "FALSE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "TRUE"
					},
					"gsx$t-min": {
						"$t": "90"
					},
					"gsx$t-max": {
						"$t": "90"
					},
					"gsx$time-min": {
						"$t": "4"
					},
					"gsx$time-max": {
						"$t": "4"
					},
					"gsx$ingredients": {
						"$t": "thé Oolong de Chine, figue, géranium, pétales de mauve"
					},
					"gsx$benefits": {
						"$t": "réconfortant"
					},
					"gsx$note": {
						"$t": "Mais qui donc est Mrs Figg ? Dans la saga Harry Potter, elle est la discrète voisine, qui se révèle dans le cinquième tome appartenir aussi au monde de la magie. Sans son intervention au tribunal des sorciers, c'en était fini des aventures de Harry ! Tout comme cette vieille femme qui dorlote ses chats et arrose ses géraniums, prêtez une attention particulière aux personnages secondaires des livres que vous dévorez : vous n'avez pas le temps de finir votre théière que leur rôle dans l'histoire peut se révéler crucial !"
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/db1zf"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Vallée du Nil"
					},
					"content": {
						"type": "text",
						"$t": "brand: Nunshen, stock: TRUE, packaged: FALSE, basis: tea-green, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 70, t-max: 75, time-min: 2, time-max: 3, ingredients: thé vert de Chine, rose, jasmin, bergamote, benefits: vivifiant, note: Nous sommes en 1937, sur la terrasse d'un hôtel qui donne sur le Nil. De là, on aperçoit le vapeur S.S. Karnak qui ondule sur le fleuve, théâtre d'une croisière que l'on imagine paisible. Et pourtant, si vous saviez ce qui se trame à bord ! Les passagers, des touristes aisés, sont les témoins d'un drame qui se révèle savamment orchestré par l'incroyable tourbillon qui opère dans le cerveau d'Agatha Christie, et tout aussi savamment résolu par les petites cellules grises d'Hercule Poirot."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/db1zf"
						}
					],
					"gsx$name": {
						"$t": "Vallée du Nil"
					},
					"gsx$brand": {
						"$t": "Nunshen"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "70"
					},
					"gsx$t-max": {
						"$t": "75"
					},
					"gsx$time-min": {
						"$t": "2"
					},
					"gsx$time-max": {
						"$t": "3"
					},
					"gsx$ingredients": {
						"$t": "thé vert de Chine, rose, jasmin, bergamote"
					},
					"gsx$benefits": {
						"$t": "vivifiant"
					},
					"gsx$note": {
						"$t": "Nous sommes en 1937, sur la terrasse d'un hôtel qui donne sur le Nil. De là, on aperçoit le vapeur S.S. Karnak qui ondule sur le fleuve, théâtre d'une croisière que l'on imagine paisible. Et pourtant, si vous saviez ce qui se trame à bord ! Les passagers, des touristes aisés, sont les témoins d'un drame qui se révèle savamment orchestré par l'incroyable tourbillon qui opère dans le cerveau d'Agatha Christie, et tout aussi savamment résolu par les petites cellules grises d'Hercule Poirot."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dcgjs"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Romantique allemand"
					},
					"content": {
						"type": "text",
						"$t": "brand: Le thé des écrivains, stock: TRUE, packaged: FALSE, basis: tea-black, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 90, t-max: 95, time-min: 4, time-max: 5, ingredients: thé noir de Chine, chocolat, gentiane, mangue, citron vert, benefits: stimulant, note: Publié pour la première fois sous sa forme complète en 1963, le recueil les Romantiques Allemands de Armel Guerne rassemble l'une des plus belles brassées de textes qui se puissent réver. Considéré comme l'un des grands livres de son époque, il manquerait à tout amoureux du Romantisme allemand ! Des frères Schlegel à Goethe en passant par la touchante Caroline von Günderoche, Le thé des écrivains a conçu son thé comme un nouveau chapitre de cet incroyable mouvement littéraire."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dcgjs"
						}
					],
					"gsx$name": {
						"$t": "Romantique allemand"
					},
					"gsx$brand": {
						"$t": "Le thé des écrivains"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "90"
					},
					"gsx$t-max": {
						"$t": "95"
					},
					"gsx$time-min": {
						"$t": "4"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "thé noir de Chine, chocolat, gentiane, mangue, citron vert"
					},
					"gsx$benefits": {
						"$t": "stimulant"
					},
					"gsx$note": {
						"$t": "Publié pour la première fois sous sa forme complète en 1963, le recueil les Romantiques Allemands de Armel Guerne rassemble l'une des plus belles brassées de textes qui se puissent réver. Considéré comme l'un des grands livres de son époque, il manquerait à tout amoureux du Romantisme allemand ! Des frères Schlegel à Goethe en passant par la touchante Caroline von Günderoche, Le thé des écrivains a conçu son thé comme un nouveau chapitre de cet incroyable mouvement littéraire."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ddv49"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Paul & Virginie"
					},
					"content": {
						"type": "text",
						"$t": "brand: Dammann Frères, stock: TRUE, packaged: FALSE, basis: tea-black, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 90, t-max: 95, time-min: 4, time-max: 5, ingredients: thés noirs de Chine et d'Inde, vanille, caramel, framboise, groseille, fraise, cerise, benefits: réconfortant, note: Paul & Virginie est un roman de Jacques-Henri Bernardin de Saint-Pierre, paru en 1788 et qui retrace l'histoire de deux enfants élevés ensemble comme un frère et une sœur, qui finissent par tomber amoureux l'un de l'autre. Inspiré par l'une de ses propres histoires d'amour, l'auteur a composé son œuvre dans le registre pathétique, en utilisant le cadre idyllique de l'île Maurice pour donner sa propre vision du monde."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ddv49"
						}
					],
					"gsx$name": {
						"$t": "Paul & Virginie"
					},
					"gsx$brand": {
						"$t": "Dammann Frères"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "90"
					},
					"gsx$t-max": {
						"$t": "95"
					},
					"gsx$time-min": {
						"$t": "4"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "thés noirs de Chine et d'Inde, vanille, caramel, framboise, groseille, fraise, cerise"
					},
					"gsx$benefits": {
						"$t": "réconfortant"
					},
					"gsx$note": {
						"$t": "Paul & Virginie est un roman de Jacques-Henri Bernardin de Saint-Pierre, paru en 1788 et qui retrace l'histoire de deux enfants élevés ensemble comme un frère et une sœur, qui finissent par tomber amoureux l'un de l'autre. Inspiré par l'une de ses propres histoires d'amour, l'auteur a composé son œuvre dans le registre pathétique, en utilisant le cadre idyllique de l'île Maurice pour donner sa propre vision du monde."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d415a"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Émotion"
					},
					"content": {
						"type": "text",
						"$t": "brand: Herboristerie du Palais Royal, stock: TRUE, packaged: FALSE, basis: infusion, theine: none, morning: FALSE, daytime: TRUE, evening: TRUE, t-min: 95, t-max: 100, time-min: 6, time-max: 10, ingredients: tisane de France pomme, cynorhodon, hibiscus, eucalyptus, menthe poivrée, benefits: vivifiant, note: Ils nous font hurler de rire, pleurer à chaudes larmes, frissonner de suspens, trépigner d'impatience ou encore nous révolter : les livres dissimulent à chaque page une nouvelle émotion, qui semble bondir hors des lignes pour venir nous toucher en plein cœur. L'Herboristerie du Palais Royal a ainsi joué avec des notes douces et d'autres plus toniques, pour vous offrir un concentré d'émotions différentes dans votre tasse."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d415a"
						}
					],
					"gsx$name": {
						"$t": "Émotion"
					},
					"gsx$brand": {
						"$t": "Herboristerie du Palais Royal"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": "FALSE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "TRUE"
					},
					"gsx$t-min": {
						"$t": "95"
					},
					"gsx$t-max": {
						"$t": "100"
					},
					"gsx$time-min": {
						"$t": "6"
					},
					"gsx$time-max": {
						"$t": "10"
					},
					"gsx$ingredients": {
						"$t": "tisane de France pomme, cynorhodon, hibiscus, eucalyptus, menthe poivrée"
					},
					"gsx$benefits": {
						"$t": "vivifiant"
					},
					"gsx$note": {
						"$t": "Ils nous font hurler de rire, pleurer à chaudes larmes, frissonner de suspens, trépigner d'impatience ou encore nous révolter : les livres dissimulent à chaque page une nouvelle émotion, qui semble bondir hors des lignes pour venir nous toucher en plein cœur. L'Herboristerie du Palais Royal a ainsi joué avec des notes douces et d'autres plus toniques, pour vous offrir un concentré d'émotions différentes dans votre tasse."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d5fpr"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Ligne"
					},
					"content": {
						"type": "text",
						"$t": "brand: Pagès, stock: TRUE, packaged: TRUE, basis: tea-green, theine: medium, morning: TRUE, daytime: TRUE, evening: FALSE, t-min: 70, t-max: 75, time-min: 3, time-max: 5, ingredients: infusion au thé vert et au maté biologiques, ananas, cranberry, benefits: stimulant, note: Autrefois, la plume et l'encre grattaient les feuilles de papier qui allaient devenir un roman. Aujourd'hui, ce sont les écrans des écrivains contemporains qui voient défiler des lignes et des lignes de texte, dont les lettres s'entremêlent et s'assemblent au final pour donner naissance à ce qui sera peut-être le prochain livre posé sur votre table de chevet, ouvert chaque fois avec le même empressement de poursuivre l'histoire ligne après ligne."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d5fpr"
						}
					],
					"gsx$name": {
						"$t": "Ligne"
					},
					"gsx$brand": {
						"$t": "Pagès"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "medium"
					},
					"gsx$morning": {
						"$t": "TRUE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "FALSE"
					},
					"gsx$t-min": {
						"$t": "70"
					},
					"gsx$t-max": {
						"$t": "75"
					},
					"gsx$time-min": {
						"$t": "3"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "infusion au thé vert et au maté biologiques, ananas, cranberry"
					},
					"gsx$benefits": {
						"$t": "stimulant"
					},
					"gsx$note": {
						"$t": "Autrefois, la plume et l'encre grattaient les feuilles de papier qui allaient devenir un roman. Aujourd'hui, ce sont les écrans des écrivains contemporains qui voient défiler des lignes et des lignes de texte, dont les lettres s'entremêlent et s'assemblent au final pour donner naissance à ce qui sera peut-être le prochain livre posé sur votre table de chevet, ouvert chaque fois avec le même empressement de poursuivre l'histoire ligne après ligne."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d6ua4"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Smokey Lapsang"
					},
					"content": {
						"type": "text",
						"$t": "brand: Dammann Frères, stock: TRUE, packaged: FALSE, basis: tea-black, theine: low, morning: FALSE, daytime: TRUE, evening: TRUE, t-min: 90, t-max: 90, time-min: 3, time-max: 3, ingredients: thé noir de Chine aux notes fumées, benefits: vivifiant, note: On a tendance à l'oublier, mais Sherlock Holmes est un personnage de fiction et non un détective que l'on pouvait croiser dans les rues de Londres ! Arthur Conan Doyle avait cependant bien pris soin de fignoler son personnage : un costume et une casquette de tweed, une pipe à la bouche, une loupe dans une main et... une tasse de Lapsang Souchong dans l'autre ! Ce thé fumé est en effet le préféré du célèbre détective."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d6ua4"
						}
					],
					"gsx$name": {
						"$t": "Smokey Lapsang"
					},
					"gsx$brand": {
						"$t": "Dammann Frères"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "low"
					},
					"gsx$morning": {
						"$t": "FALSE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "TRUE"
					},
					"gsx$t-min": {
						"$t": "90"
					},
					"gsx$t-max": {
						"$t": "90"
					},
					"gsx$time-min": {
						"$t": "3"
					},
					"gsx$time-max": {
						"$t": "3"
					},
					"gsx$ingredients": {
						"$t": "thé noir de Chine aux notes fumées"
					},
					"gsx$benefits": {
						"$t": "vivifiant"
					},
					"gsx$note": {
						"$t": "On a tendance à l'oublier, mais Sherlock Holmes est un personnage de fiction et non un détective que l'on pouvait croiser dans les rues de Londres ! Arthur Conan Doyle avait cependant bien pris soin de fignoler son personnage : un costume et une casquette de tweed, une pipe à la bouche, une loupe dans une main et... une tasse de Lapsang Souchong dans l'autre ! Ce thé fumé est en effet le préféré du célèbre détective."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d88ul"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Thé vert de Pâques"
					},
					"content": {
						"type": "text",
						"$t": "brand: Vert & Noir, stock: TRUE, packaged: FALSE, basis: tea-green, theine: unknown, ingredients: thés vert et blanc parfumés à la rose et au chocolat, écorce de cacao, pétales de rose"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/d88ul"
						}
					],
					"gsx$name": {
						"$t": "Thé vert de Pâques"
					},
					"gsx$brand": {
						"$t": "Vert & Noir"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "thés vert et blanc parfumés à la rose et au chocolat, écorce de cacao, pétales de rose"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dkvya"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Pleine Lune"
					},
					"content": {
						"type": "text",
						"$t": "brand: Vert & Noir, stock: TRUE, packaged: FALSE, basis: tea-white, theine: unknown, t-min: 70, t-max: 70, time-min: 6, time-max: 12, ingredients: thé blanc de Chine parfumé au melon, caramel, cannelle, orange"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dkvya"
						}
					],
					"gsx$name": {
						"$t": "Pleine Lune"
					},
					"gsx$brand": {
						"$t": "Vert & Noir"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-white"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": "70"
					},
					"gsx$t-max": {
						"$t": "70"
					},
					"gsx$time-min": {
						"$t": "6"
					},
					"gsx$time-max": {
						"$t": "12"
					},
					"gsx$ingredients": {
						"$t": "thé blanc de Chine parfumé au melon, caramel, cannelle, orange"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dmair"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Papillon blanc"
					},
					"content": {
						"type": "text",
						"$t": "brand: Vert & Noir, stock: TRUE, packaged: FALSE, basis: tea-white, theine: unknown, t-min: 65, t-max: 70, time-min: 7, time-max: 12, ingredients: thé blanc Paï Mu Tan à l'ananas, pêche, poire"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dmair"
						}
					],
					"gsx$name": {
						"$t": "Papillon blanc"
					},
					"gsx$brand": {
						"$t": "Vert & Noir"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-white"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": "65"
					},
					"gsx$t-max": {
						"$t": "70"
					},
					"gsx$time-min": {
						"$t": "7"
					},
					"gsx$time-max": {
						"$t": "12"
					},
					"gsx$ingredients": {
						"$t": "thé blanc Paï Mu Tan à l'ananas, pêche, poire"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dnp34"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Voyage à Tokyo"
					},
					"content": {
						"type": "text",
						"$t": "brand: Vert & Noir, stock: TRUE, packaged: FALSE, basis: tea-green, theine: unknown, t-min: 80, t-max: 80, time-min: 3, time-max: 3, ingredients: thés verts de Chine et du Japon, écorce d'orange, citron, gingembre"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dnp34"
						}
					],
					"gsx$name": {
						"$t": "Voyage à Tokyo"
					},
					"gsx$brand": {
						"$t": "Vert & Noir"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": "80"
					},
					"gsx$t-max": {
						"$t": "80"
					},
					"gsx$time-min": {
						"$t": "3"
					},
					"gsx$time-max": {
						"$t": "3"
					},
					"gsx$ingredients": {
						"$t": "thés verts de Chine et du Japon, écorce d'orange, citron, gingembre"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dp3nl"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Jardin des poètes"
					},
					"content": {
						"type": "text",
						"$t": "brand: Vert & Noir, stock: FALSE, packaged: FALSE, basis: tea-green, theine: unknown, t-min: 95, t-max: 95, time-min: 3, time-max: 5, ingredients: thé noir parfumé à la vanille, caramel, fruits rouges, pétales de fleurs"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dp3nl"
						}
					],
					"gsx$name": {
						"$t": "Jardin des poètes"
					},
					"gsx$brand": {
						"$t": "Vert & Noir"
					},
					"gsx$stock": {
						"$t": "FALSE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": "95"
					},
					"gsx$t-max": {
						"$t": "95"
					},
					"gsx$time-min": {
						"$t": "3"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "thé noir parfumé à la vanille, caramel, fruits rouges, pétales de fleurs"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/df9om"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Forêt envoûtante"
					},
					"content": {
						"type": "text",
						"$t": "brand: Vert & Noir, stock: TRUE, packaged: FALSE, basis: infusion, theine: none, t-min: 95, t-max: 95, time-min: 6, time-max: 6, ingredients: fraise, framboise, pomme, églantier, fleur d'hibiscus"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/df9om"
						}
					],
					"gsx$name": {
						"$t": "Forêt envoûtante"
					},
					"gsx$brand": {
						"$t": "Vert & Noir"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": "95"
					},
					"gsx$t-max": {
						"$t": "95"
					},
					"gsx$time-min": {
						"$t": "6"
					},
					"gsx$time-max": {
						"$t": "6"
					},
					"gsx$ingredients": {
						"$t": "fraise, framboise, pomme, églantier, fleur d'hibiscus"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/e0c8p"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Hibiscus à l'égyptienne"
					},
					"content": {
						"type": "text",
						"$t": "brand: Terre d'Oc, stock: TRUE, packaged: FALSE, basis: tea-green, theine: unknown, t-min: 100, t-max: 100, time-min: 3, time-max: 5, ingredients: thé vert de Chine, hibiscus, note: En Égypte, on offre très souvent un verre chaud ou glacé de karkadé aux invités en signe d'hospitalité. Cette boisson rouge à la saveur acidulée est réalisée à partir des fleurs rouges de l'hibiscus. Ce thé vert glacé à l'égyptienne rappelle cette délicieuse boisson désaltérante, acidulée et légèrement fruitée."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/e0c8p"
						}
					],
					"gsx$name": {
						"$t": "Hibiscus à l'égyptienne"
					},
					"gsx$brand": {
						"$t": "Terre d'Oc"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": "100"
					},
					"gsx$t-max": {
						"$t": "100"
					},
					"gsx$time-min": {
						"$t": "3"
					},
					"gsx$time-max": {
						"$t": "5"
					},
					"gsx$ingredients": {
						"$t": "thé vert de Chine, hibiscus"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "En Égypte, on offre très souvent un verre chaud ou glacé de karkadé aux invités en signe d'hospitalité. Cette boisson rouge à la saveur acidulée est réalisée à partir des fleurs rouges de l'hibiscus. Ce thé vert glacé à l'égyptienne rappelle cette délicieuse boisson désaltérante, acidulée et légèrement fruitée."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dqi9q"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Thé de Noël"
					},
					"content": {
						"type": "text",
						"$t": "brand: Compagnie Coloniale, stock: TRUE, packaged: FALSE, basis: tea-black, theine: unknown, ingredients: thé de Ceylan, cerise, amande, gingembre, pétales de fleurs, note: Préparé en exclusivité par Compagnie Coloniale, le Thé de Noël est un thé au goût unique. L'alliance de thé, d'arômes (cerise, amande, gingembre) et de pétales de fleurs, vous offre un mélange riche en couleurs et une saveur exquise."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dqi9q"
						}
					],
					"gsx$name": {
						"$t": "Thé de Noël"
					},
					"gsx$brand": {
						"$t": "Compagnie Coloniale"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "thé de Ceylan, cerise, amande, gingembre, pétales de fleurs"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "Préparé en exclusivité par Compagnie Coloniale, le Thé de Noël est un thé au goût unique. L'alliance de thé, d'arômes (cerise, amande, gingembre) et de pétales de fleurs, vous offre un mélange riche en couleurs et une saveur exquise."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/drwu7"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Original Earl Grey"
					},
					"content": {
						"type": "text",
						"$t": "brand: Twinings, stock: FALSE, packaged: FALSE, basis: tea-black, theine: unknown, morning: FALSE, daytime: TRUE, evening: TRUE, ingredients: Earl Grey, arôme de bergamote"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/drwu7"
						}
					],
					"gsx$name": {
						"$t": "Original Earl Grey"
					},
					"gsx$brand": {
						"$t": "Twinings"
					},
					"gsx$stock": {
						"$t": "FALSE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-black"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": "FALSE"
					},
					"gsx$daytime": {
						"$t": "TRUE"
					},
					"gsx$evening": {
						"$t": "TRUE"
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "Earl Grey, arôme de bergamote"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dtbek"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Thé à la menthe "
					},
					"content": {
						"type": "text",
						"$t": "brand: Twinings, stock: FALSE, packaged: FALSE, basis: tea-green, theine: unknown, ingredients: thé vert Gunpowder, menthe, note: Mélange maison"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dtbek"
						}
					],
					"gsx$name": {
						"$t": "Thé à la menthe "
					},
					"gsx$brand": {
						"$t": "Twinings"
					},
					"gsx$stock": {
						"$t": "FALSE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-green"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "thé vert Gunpowder, menthe"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "Mélange maison"
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eilm2"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Verveine Bio"
					},
					"content": {
						"type": "text",
						"$t": "brand: Pagès, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, ingredients: verveine, note: Cultivée avec soin dans les meilleurs jardins, rigoureusement préservée de toute pollution, la verveine se distingue particulièrement par son parfum et sa saveur très légèrement citronnée."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eilm2"
						}
					],
					"gsx$name": {
						"$t": "Verveine Bio"
					},
					"gsx$brand": {
						"$t": "Pagès"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "verveine"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "Cultivée avec soin dans les meilleurs jardins, rigoureusement préservée de toute pollution, la verveine se distingue particulièrement par son parfum et sa saveur très légèrement citronnée."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ek06j"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Tilleul Bio"
					},
					"content": {
						"type": "text",
						"$t": "brand: Pagès, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, ingredients: tilleul, note: C'est une des plantes les plus demandées en herboristerie pour ses nombreuses vertus. Cueilli avec soin dans les meilleurs jardins du bassin méditerranéen, le tilleul se distingue particulièrement par son goût et son parfum des plus agréables."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ek06j"
						}
					],
					"gsx$name": {
						"$t": "Tilleul Bio"
					},
					"gsx$brand": {
						"$t": "Pagès"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "tilleul"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "C'est une des plantes les plus demandées en herboristerie pour ses nombreuses vertus. Cueilli avec soin dans les meilleurs jardins du bassin méditerranéen, le tilleul se distingue particulièrement par son goût et son parfum des plus agréables."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eleqw"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Spécial 5 plantes bio (aromatisé citron)"
					},
					"content": {
						"type": "text",
						"$t": "brand: Pagès, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, ingredients: tilleul, menthe poivrée, verveine, oranger bigarade feuilles, camomille matricaire, arôme naturel de citron, note: Le mélange 'Spécial 5 plantes' est une recette secrète de la maison Pagès depuis plus de quarante ans. Minutieusement dosées, cinq plantes ont été choisies pour réaliser cette infusion qui se distingue par la finesse de son parfum et sa saveur douce et délicate."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eleqw"
						}
					],
					"gsx$name": {
						"$t": "Spécial 5 plantes bio (aromatisé citron)"
					},
					"gsx$brand": {
						"$t": "Pagès"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "tilleul, menthe poivrée, verveine, oranger bigarade feuilles, camomille matricaire, arôme naturel de citron"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "Le mélange 'Spécial 5 plantes' est une recette secrète de la maison Pagès depuis plus de quarante ans. Minutieusement dosées, cinq plantes ont été choisies pour réaliser cette infusion qui se distingue par la finesse de son parfum et sa saveur douce et délicate."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/emtbd"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Réglisse menthe fenouil Bio"
					},
					"content": {
						"type": "text",
						"$t": "brand: Pagès, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, ingredients: réglisse racine, menthe douce, fenouil graines, note: L'arôme ample de la menthe et la petite note anisée du fenouil se marient harmonieusement à la suavité rafraîchissante de la réglisse pour une boisson aromatique puissante et stimulante."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/emtbd"
						}
					],
					"gsx$name": {
						"$t": "Réglisse menthe fenouil Bio"
					},
					"gsx$brand": {
						"$t": "Pagès"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "réglisse racine, menthe douce, fenouil graines"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "L'arôme ample de la menthe et la petite note anisée du fenouil se marient harmonieusement à la suavité rafraîchissante de la réglisse pour une boisson aromatique puissante et stimulante."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eczce"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Verveine menthe Bio"
					},
					"content": {
						"type": "text",
						"$t": "brand: Pagès, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, ingredients: verveine, menthe poivrée, note: Issue des meilleurs jardins, sélectionnée avec soin, la verveine menthe biologique se distingue particulièrement par son équilibre parfait entre son parfum puissant et sa saveur vive et délicate."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eczce"
						}
					],
					"gsx$name": {
						"$t": "Verveine menthe Bio"
					},
					"gsx$brand": {
						"$t": "Pagès"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "verveine, menthe poivrée"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "Issue des meilleurs jardins, sélectionnée avec soin, la verveine menthe biologique se distingue particulièrement par son équilibre parfait entre son parfum puissant et sa saveur vive et délicate."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eedwv"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Tilleul menthe Bio"
					},
					"content": {
						"type": "text",
						"$t": "brand: Pagès, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, ingredients: tilleul, menthe poivrée, note: Le tilleul menthe biologique est une des infusions les plus appréciées pour son équilibre parfait entre son parfum puissant et sa saveur vive et délicate."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eedwv"
						}
					],
					"gsx$name": {
						"$t": "Tilleul menthe Bio"
					},
					"gsx$brand": {
						"$t": "Pagès"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "tilleul, menthe poivrée"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "Le tilleul menthe biologique est une des infusions les plus appréciées pour son équilibre parfait entre son parfum puissant et sa saveur vive et délicate."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/efsh8"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Verveine oranger Bio (aromatisé Néroli)"
					},
					"content": {
						"type": "text",
						"$t": "brand: Pagès, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, ingredients: verveine, oranger feuilles, oranger fleurs, arôme naturel Néroli, note: La saveur délicate, très légèrement citronnée de la verveine se marie harmonieusement au parfum chaud et léger de la fleur d'oranger pour une infusion douce, agréable, propice à la détente."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/efsh8"
						}
					],
					"gsx$name": {
						"$t": "Verveine oranger Bio (aromatisé Néroli)"
					},
					"gsx$brand": {
						"$t": "Pagès"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "verveine, oranger feuilles, oranger fleurs, arôme naturel Néroli"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "La saveur délicate, très légèrement citronnée de la verveine se marie harmonieusement au parfum chaud et léger de la fleur d'oranger pour une infusion douce, agréable, propice à la détente."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eh71p"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Tilleul citron Bio (aromatisé framboise citron)"
					},
					"content": {
						"type": "text",
						"$t": "brand: Pagès, stock: TRUE, packaged: TRUE, basis: infusion, theine: none, ingredients: tilleul, arôme naturel citron, arôme naturel framboise, écorce de citron, note: La saveur douce et agréable du tilleul se marie harmonieusement à la senteur d'ambre et de rose de la framboise pour une infusion délicatement fraîche et fruitée."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/eh71p"
						}
					],
					"gsx$name": {
						"$t": "Tilleul citron Bio (aromatisé framboise citron)"
					},
					"gsx$brand": {
						"$t": "Pagès"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "infusion"
					},
					"gsx$theine": {
						"$t": "none"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "tilleul, arôme naturel citron, arôme naturel framboise, écorce de citron"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "La saveur douce et agréable du tilleul se marie harmonieusement à la senteur d'ambre et de rose de la framboise pour une infusion délicatement fraîche et fruitée."
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/etu5e"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Mirabella"
					},
					"content": {
						"type": "text",
						"$t": "brand: Comptoir français du thé, stock: TRUE, packaged: TRUE, basis: tea-white, theine: unknown, ingredients: mirabelle"
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/etu5e"
						}
					],
					"gsx$name": {
						"$t": "Mirabella"
					},
					"gsx$brand": {
						"$t": "Comptoir français du thé"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "TRUE"
					},
					"gsx$basis": {
						"$t": "tea-white"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "mirabelle"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": ""
					}
				},
				{
					"id": {
						"$t": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ev8pv"
					},
					"updated": {
						"$t": "2016-04-09T07:21:38.946Z"
					},
					"category": [
						{
							"scheme": "http://schemas.google.com/spreadsheets/2006",
							"term": "http://schemas.google.com/spreadsheets/2006#list"
						}
					],
					"title": {
						"type": "text",
						"$t": "Blue Tea"
					},
					"content": {
						"type": "text",
						"$t": "brand: Vital Leaf, stock: TRUE, packaged: FALSE, basis: tea-oolong, theine: unknown, ingredients: thé Oolong, note: Nécessite un trempage avant infusion."
					},
					"link": [
						{
							"rel": "self",
							"type": "application/atom+xml",
							"href": "https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/ev8pv"
						}
					],
					"gsx$name": {
						"$t": "Blue Tea"
					},
					"gsx$brand": {
						"$t": "Vital Leaf"
					},
					"gsx$stock": {
						"$t": "TRUE"
					},
					"gsx$packaged": {
						"$t": "FALSE"
					},
					"gsx$basis": {
						"$t": "tea-oolong"
					},
					"gsx$theine": {
						"$t": "unknown"
					},
					"gsx$morning": {
						"$t": ""
					},
					"gsx$daytime": {
						"$t": ""
					},
					"gsx$evening": {
						"$t": ""
					},
					"gsx$t-min": {
						"$t": ""
					},
					"gsx$t-max": {
						"$t": ""
					},
					"gsx$time-min": {
						"$t": ""
					},
					"gsx$time-max": {
						"$t": ""
					},
					"gsx$ingredients": {
						"$t": "thé Oolong"
					},
					"gsx$benefits": {
						"$t": ""
					},
					"gsx$note": {
						"$t": "Nécessite un trempage avant infusion."
					}
				}
			]
		}
	};

/***/ }

/******/ });