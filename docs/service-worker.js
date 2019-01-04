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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "49cf9d1a80a2254fa9a35597760ae85f"
  },
  {
    "url": "assets/css/0.styles.9deebd69.css",
    "revision": "27441bafb19468360901359e6d25a1bc"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b45f1e11.js",
    "revision": "686521065dde415799d74848aed9bb14"
  },
  {
    "url": "assets/js/11.c0ee1c08.js",
    "revision": "e5ed617745c4868a8bf5502575396883"
  },
  {
    "url": "assets/js/12.1efeed2c.js",
    "revision": "0128d5b37b2d798d0bc923de57e4e98f"
  },
  {
    "url": "assets/js/13.55fa67f0.js",
    "revision": "dd2c29737e8845f119f8503645ba5373"
  },
  {
    "url": "assets/js/14.fb19edcd.js",
    "revision": "20c97c099619a8161ecca00b3812e8da"
  },
  {
    "url": "assets/js/15.777cc476.js",
    "revision": "8507856b9a0e28c269210ccdc5e792a2"
  },
  {
    "url": "assets/js/16.ca8f992b.js",
    "revision": "8fe89ea32944789c038f32682c203850"
  },
  {
    "url": "assets/js/17.ab385495.js",
    "revision": "91af4be0ffc186a35aea576f793b6d1a"
  },
  {
    "url": "assets/js/18.b2e5d004.js",
    "revision": "68ae99072d4417aa1c3a4081b1b6d49a"
  },
  {
    "url": "assets/js/19.47f177b3.js",
    "revision": "6918829ae7a6ce245740f96afd68986d"
  },
  {
    "url": "assets/js/2.39b79780.js",
    "revision": "61d12edf920efb070a7356d37cd573ef"
  },
  {
    "url": "assets/js/20.ff66bb09.js",
    "revision": "ca04974bbb19aa43e49f27f91a91e885"
  },
  {
    "url": "assets/js/21.6e9b57c4.js",
    "revision": "d90f0dd5b01a3a8e4f68978f76a24158"
  },
  {
    "url": "assets/js/3.8cdf3ee0.js",
    "revision": "2785d36309083deab107dc94a7334c0a"
  },
  {
    "url": "assets/js/4.e6b0347d.js",
    "revision": "f7a5b82fe8d9a5a39881b80a27941d8b"
  },
  {
    "url": "assets/js/5.24174e08.js",
    "revision": "2f3f0b907910b29e59c7ca94ca258dbd"
  },
  {
    "url": "assets/js/6.de64321f.js",
    "revision": "f826e5b835ccd7bb7ca4d7405c2d1bc9"
  },
  {
    "url": "assets/js/7.0d813a53.js",
    "revision": "fad8e89810e9dd754e09af3114c3d202"
  },
  {
    "url": "assets/js/8.e35ff0be.js",
    "revision": "c1b0780e5694120dbbc971a87cdc5d27"
  },
  {
    "url": "assets/js/9.64f88ab3.js",
    "revision": "12333dd2a22b5ff072e8a8339582fbda"
  },
  {
    "url": "assets/js/app.20a0b5fb.js",
    "revision": "c916528fa31685aed366e21f3bdced8f"
  },
  {
    "url": "front/components.html",
    "revision": "934cebd21dec8f8fb13202d1f04ab16e"
  },
  {
    "url": "front/demo.html",
    "revision": "ef17815911731ae192f7ea4433a7ccb6"
  },
  {
    "url": "front/directive.html",
    "revision": "a240d1c13afe3dcb1a9da5da9ebe331c"
  },
  {
    "url": "front/frontRules.html",
    "revision": "8a5acb4c5f10ea00fb6c895497410d41"
  },
  {
    "url": "front/globalFun.html",
    "revision": "3c902833b3ef3cf49ca751a061e3779d"
  },
  {
    "url": "front/index.html",
    "revision": "d97c1d0164df28c64107d5b3f113917f"
  },
  {
    "url": "front/moduleConf.html",
    "revision": "9b9a5024d3690627d8efbbdb357db09e"
  },
  {
    "url": "front/pageConf.html",
    "revision": "e35827b0f42a41458365b61ceda70f8a"
  },
  {
    "url": "front/renderComs.html",
    "revision": "d5ed496d316d45ddeed422a37785b565"
  },
  {
    "url": "front/reportConf.html",
    "revision": "8bee7a7f02a9f5ea23c074ba95e9b596"
  },
  {
    "url": "img/icons/Icon-120.png",
    "revision": "d9af784629637c1c2e829268e4de0b33"
  },
  {
    "url": "img/icons/Icon-152.png",
    "revision": "0e0ad78fa76b08a5cc86225e7ac00cdc"
  },
  {
    "url": "img/icons/Icon-16.png",
    "revision": "93b79a403d5ee034dda25a9142995a3f"
  },
  {
    "url": "img/icons/Icon-180.png",
    "revision": "6f0be66d424dbab3ee6b2f4456fbc3bb"
  },
  {
    "url": "img/icons/Icon-192.png",
    "revision": "81d7a254033bca2eb5679d1dee7d95da"
  },
  {
    "url": "img/icons/Icon-32.png",
    "revision": "3a9bef5cef661719efe1192e52373b85"
  },
  {
    "url": "img/icons/Icon-512.png",
    "revision": "c1b43cfb8d6cd2c2d9bb269c547566c7"
  },
  {
    "url": "img/icons/Icon-60.png",
    "revision": "87d3950becc76f86a88b81b64223b244"
  },
  {
    "url": "img/icons/Icon-76.png",
    "revision": "cab8dac9f5cd3cb6846d6980b40839ec"
  },
  {
    "url": "img/logo.png",
    "revision": "d9af784629637c1c2e829268e4de0b33"
  },
  {
    "url": "img/main.svg",
    "revision": "4072298607dcd4069594c5382441f75e"
  },
  {
    "url": "index.html",
    "revision": "d6a0d8448216f9325c9c868da70dde81"
  },
  {
    "url": "more/git.html",
    "revision": "1d117305a00934f3adcadaa6eb881ff5"
  },
  {
    "url": "more/index.html",
    "revision": "728c86ddff684b0a1d3e61eb6f0ff464"
  },
  {
    "url": "more/markdown.html",
    "revision": "d977b6644660bc29d15491f49715a018"
  },
  {
    "url": "service/index.html",
    "revision": "99eb82de82d7ed5f4b88bbc8008124a5"
  },
  {
    "url": "service/service.html",
    "revision": "eadbbed549dca2e8e180b0554d34c8d7"
  },
  {
    "url": "update/index.html",
    "revision": "50b99d9bc7c630f35029256f8e099215"
  },
  {
    "url": "webapp/index.html",
    "revision": "468920e06e2f1a6ea887fce1b8b05d63"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
