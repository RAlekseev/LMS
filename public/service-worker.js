importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),importScripts("/precache-manifest.7e9776167f251ecde3fadae9877b82ff.js"),workbox.core.setCacheNameDetails({prefix:"crm_admin"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),self.__precacheManifest=[].concat(self.__precacheManifest||[]),workbox.precaching.precacheAndRoute(self.__precacheManifest,{});
