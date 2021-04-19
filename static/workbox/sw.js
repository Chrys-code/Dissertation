/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "/static/workbox/workbox-v4.3.1/workbox-sw.js",
  "/static/workbox/workbox-v4.3.1/workbox-sw.js",
  "/static/workbox/workbox-v4.3.1/workbox-sw.js",
  "/static/workbox/workbox-v4.3.1/workbox-sw.js",
  "/static/workbox/next-precache-manifest-6d5b4bfd236bb0284477e7b94b4175ce.js",
  "/static/workbox/next-precache-manifest-aea0d06cd83ae569cb393a6754d1896a.js",
  "/static/workbox/next-precache-manifest-aea0d06cd83ae569cb393a6754d1896a.js",
  "/static/workbox/next-precache-manifest-aea0d06cd83ae569cb393a6754d1896a.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst({ "cacheName":"html-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/localhost:3000\/signin/, new workbox.strategies.NetworkFirst({ "cacheName":"signin-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/[^3]\/form\//, new workbox.strategies.NetworkFirst({ "cacheName":"form-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/[^3]\/verify\//, new workbox.strategies.NetworkFirst({ "cacheName":"verify-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/[^3]\/links\//, new workbox.strategies.NetworkFirst({ "cacheName":"links-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/[^3]\/profile\//, new workbox.strategies.NetworkFirst({ "cacheName":"profile-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/covid-193.p.rapidapi.com\/statistics/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"api-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"image-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 11, purgeOnQuotaError: false })] }), 'GET');
