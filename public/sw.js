if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8a2c03959e0a48bdf4e6cdb9aaac4f04"},{url:"/_next/static/chunks/150-1bacc30300f5581d.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/23-519834153c1a0bba.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/231-08b361e857bab7b5.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/328-e8eb1cbf62ecba8a.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/49-1293735c2206724d.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/app/_not-found/page-ac9417c201aa2941.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/app/about/page-2e52beca69f9ed22.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/app/layout-454ad31d09e958a2.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/app/page-9d5ff51c6ff6b503.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/app/predict/page-1ab08795097640ee.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/fd9d1056-27ed2dd9c5c83287.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/main-987bdafc2fae7d85.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/main-app-9a67fa15f76ed9b9.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-86541e751059f0df.js",revision:"osYZtPP10o_H4wVsex6Qx"},{url:"/_next/static/css/fa8873dbdff2bbe0.css",revision:"fa8873dbdff2bbe0"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/osYZtPP10o_H4wVsex6Qx/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/osYZtPP10o_H4wVsex6Qx/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/fishing.png",revision:"4fd1146e684a54066b76f98c1d6b256d"},{url:"/icon3.png",revision:"94de3eeda8076fe4f2c85fc2bc8a7e30"},{url:"/icon4.png",revision:"0da99eca202608d7bf411ef6c3aee9e5"},{url:"/manifest.json",revision:"c670e725af2a8dac1ef5ae8f1072ca0f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/og.png",revision:"72c19d6becce486c09fa28a05fad465a"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));