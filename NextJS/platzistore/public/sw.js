if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>i(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/bt_add_to_cart.c13587f7.svg",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next//static/media/bt_added_to_cart.ac33eec5.svg",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next//static/media/flechita.e419d8c9.svg",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next//static/media/icon_close.89e14351.png",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next//static/media/icon_menu.3aa38c5e.svg",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next//static/media/icon_shopping_cart.6ee01907.svg",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next//static/media/logo_yard_sale.f5c1d07e.svg",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/7Sqt5gi3-c2eYeSa0p6QL/_buildManifest.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/7Sqt5gi3-c2eYeSa0p6QL/_middlewareManifest.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/7Sqt5gi3-c2eYeSa0p6QL/_ssgManifest.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/chunks/647-f521638c6fd64c29.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/chunks/main-7c4ed1e41b10e592.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/chunks/pages/_app-a827a8e46af318b9.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/chunks/pages/checkout-44171f4952403b0b.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/chunks/pages/index-5db14830ba720d6f.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/chunks/webpack-514908bffb652963.js",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/css/9e45c7541a9961b7.css",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/css/9fe3e30cac9f29ae.css",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/_next/static/css/c9d80a288e2a58a9.css",revision:"7Sqt5gi3-c2eYeSa0p6QL"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"459059c1edccda12306d90a8235032b5"},{url:"/icon-256x256.png",revision:"a947ccbb5360efd0122bce60dbfe0a37"},{url:"/icon-384x384.png",revision:"7ae7d29ff53bf8561c4e157926ee53c9"},{url:"/icon-512x512.png",revision:"7e7f81cb5a1aee3afedba07875305e57"},{url:"/manifest.json",revision:"dbff4966e3e4dede34035b9fe58907ac"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
