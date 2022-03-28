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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bcb1a629231c3e299a8418f22485ffe4"
  },
  {
    "url": "about/index.html",
    "revision": "5a93bcd0f4c58d336ea043b171e791f7"
  },
  {
    "url": "assets/css/0.styles.464a11c1.css",
    "revision": "e013a1b93b8101eb97d2f73444c36222"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.21945b8f.js",
    "revision": "519cbb806a3c05a80137329d1f5ad551"
  },
  {
    "url": "assets/js/10.6006cf55.js",
    "revision": "a40bcdc254cdc52de82c1a3b32bbe796"
  },
  {
    "url": "assets/js/11.d78f24a4.js",
    "revision": "8707de441ec04d2133c319be06310597"
  },
  {
    "url": "assets/js/12.2ad8a4d6.js",
    "revision": "c8c2373043a71a5aca2a54cba344fddf"
  },
  {
    "url": "assets/js/13.216fa58c.js",
    "revision": "deeb6189cdaa4a9bdffb7427d8f2b2a3"
  },
  {
    "url": "assets/js/14.fc8e26f6.js",
    "revision": "94b366a579bff494b8b37a6c7e99ebb7"
  },
  {
    "url": "assets/js/15.d72cae67.js",
    "revision": "d63874092a869b062c0ae1e9be6c65a6"
  },
  {
    "url": "assets/js/16.47d05400.js",
    "revision": "6c66162bc72edf736d87cd1d2024dd60"
  },
  {
    "url": "assets/js/17.809a7016.js",
    "revision": "79851e6caae9d82f326308239d0b7796"
  },
  {
    "url": "assets/js/18.d889f7c1.js",
    "revision": "c72dee1e5c1cc2ebf99871736075df83"
  },
  {
    "url": "assets/js/19.412d8047.js",
    "revision": "e99b94bd13b67d6d9f65e19e03d4487b"
  },
  {
    "url": "assets/js/2.bcbf55bb.js",
    "revision": "3eb8f18b9fd508de4eaee6055a80d240"
  },
  {
    "url": "assets/js/20.6f15cdb6.js",
    "revision": "ee2f5e2f2a4a1a776ca25394fe4ae740"
  },
  {
    "url": "assets/js/21.aee4923f.js",
    "revision": "cd73b4979357f83da0ed4d7fcaabf41b"
  },
  {
    "url": "assets/js/22.536d5004.js",
    "revision": "310bfcc01b992ccffacba9174557683b"
  },
  {
    "url": "assets/js/23.b77f82b7.js",
    "revision": "e4f275d648d844fb03431746a50051a5"
  },
  {
    "url": "assets/js/24.c2ac6851.js",
    "revision": "a0f1dfff0b7f067082ed8d0b8c50ceda"
  },
  {
    "url": "assets/js/25.84bff1ab.js",
    "revision": "07c81885514ec209a3b462d7e28baabc"
  },
  {
    "url": "assets/js/26.efecfc31.js",
    "revision": "7ed368b80effca2e7b09310b6086121d"
  },
  {
    "url": "assets/js/27.03b36097.js",
    "revision": "93d3bb434d85cfce745a2a1f51481a16"
  },
  {
    "url": "assets/js/28.fb66c26f.js",
    "revision": "3267fd0661400c9ddfd7e04248a2e89b"
  },
  {
    "url": "assets/js/29.fd4c25d6.js",
    "revision": "da1bf339b39c3417106b1dba66b11c98"
  },
  {
    "url": "assets/js/30.d5bf29e0.js",
    "revision": "ff7921f127136c559e29e21ed2298da2"
  },
  {
    "url": "assets/js/31.c4297e89.js",
    "revision": "181bba86bdac7045084d9f6a162fcaee"
  },
  {
    "url": "assets/js/32.a8f66e28.js",
    "revision": "b92d520c99e7f537deade1e5f25916e8"
  },
  {
    "url": "assets/js/33.e2b16f69.js",
    "revision": "079f7f6838d0eb999e2224939e10971c"
  },
  {
    "url": "assets/js/34.58046bdb.js",
    "revision": "aaefc759cb644004aed9b23261726d41"
  },
  {
    "url": "assets/js/35.9b60ba9b.js",
    "revision": "36f8f371f93d1641dce9f71ec9c717f5"
  },
  {
    "url": "assets/js/36.603e956b.js",
    "revision": "1fb0aaee4a4391d9c0b4d5e8072711de"
  },
  {
    "url": "assets/js/5.2761643c.js",
    "revision": "22a89eff8ea719aca45f86ad5a49bb6a"
  },
  {
    "url": "assets/js/6.66a43332.js",
    "revision": "21236f9135dc799f22d5be4d557072d0"
  },
  {
    "url": "assets/js/7.1ddf665f.js",
    "revision": "a4bd6a7c2fb2cea5b2deaf69aae8b7d6"
  },
  {
    "url": "assets/js/8.39e86693.js",
    "revision": "18a970ac785f06a8e1205c6e18273e87"
  },
  {
    "url": "assets/js/9.f3479128.js",
    "revision": "e9c8d35f29c692e8fdfdb9de4eb71ee0"
  },
  {
    "url": "assets/js/app.77ee5d9f.js",
    "revision": "6eeb76ceafb4fed09cb38318e5f030e5"
  },
  {
    "url": "assets/js/vendors~flowchart.2ebe4a06.js",
    "revision": "dd71ac753a9dfd78d1a3145b4eec0aa6"
  },
  {
    "url": "categories/index.html",
    "revision": "6f2832e0140d235f5c7646dec7a3b654"
  },
  {
    "url": "categories/前端 Front-end/index.html",
    "revision": "cafac1f68ec9a81cdcfbc04048b89341"
  },
  {
    "url": "categories/后端 Back-end/index.html",
    "revision": "b0e68998772323cb804763a42e47f247"
  },
  {
    "url": "categories/知识晶体 Q&A/index.html",
    "revision": "c20ff3fd370cd58980c0a07475bc4553"
  },
  {
    "url": "categories/规范 Standard/index.html",
    "revision": "b4588be104669633ac13976b1c231369"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/backend/48c832dbb6fd5266b69d8573bc18972bd4073622.gif",
    "revision": "4610075c7aed0ae0955dced2bc01a0c0"
  },
  {
    "url": "img/backend/48c832dbb6fd5266b6c18573bc18972bd50736f6.gif",
    "revision": "72dfacdee62e91b256eb177a7c7bd68a"
  },
  {
    "url": "img/backend/4e97afc27d1ed21b532a9782ba6eddc450da3ffd.gif",
    "revision": "101cc6e81bb5cc60aa99a76d4bc1af45"
  },
  {
    "url": "img/backend/HashMap/20180423002750407.png",
    "revision": "f35b7d5feca86f51427b731dd5310e6e"
  },
  {
    "url": "img/backend/itext/pdf2.png",
    "revision": "f557069c584ea0c2bf4031d2306beb5f"
  },
  {
    "url": "img/backend/itext/pdf3.png",
    "revision": "18753afbd11acf6c3864eab6b2e2dd16"
  },
  {
    "url": "img/frontend/viaStart/thumb.png",
    "revision": "0d4c9d70e021216c051bf1ce37a37da3"
  },
  {
    "url": "img/other/4ec4e5f0-947b-3abe-9e8b-47bad5b8cf1c.jpg",
    "revision": "bb87f71654723ad895fa663f73f988b9"
  },
  {
    "url": "img/other/5666c8e4-867a-3356-9708-6ba918e87853.jpg",
    "revision": "8ea7006c94abe02131fccb395d9b82dd"
  },
  {
    "url": "img/other/72c84642-4439-3120-9794-13892b29f00d.jpg",
    "revision": "ee5956c70fc130b28ed254f12a8c297b"
  },
  {
    "url": "img/other/766d39ee-fbf0-329e-8973-45e90625b579.jpg",
    "revision": "74a8a345f1e226513f3c5c0d4c8249bd"
  },
  {
    "url": "img/other/c33a5027-85d3-3eb4-a785-dd404f674baa.jpg",
    "revision": "ef1950ef5e1aec69e6f87b12e760c518"
  },
  {
    "url": "img/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "img/other/git_001.png",
    "revision": "dad7a6694ad6026308d580ada34703f5"
  },
  {
    "url": "img/other/http001.jpg",
    "revision": "856031f897fce74ca2103cd443e81fae"
  },
  {
    "url": "img/other/person_lital.gif",
    "revision": "3ef9a43d5849c4a7f5abd163f80de6b2"
  },
  {
    "url": "index.html",
    "revision": "ed68b71dca4880380d70427676e07bb6"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "logo.png",
    "revision": "75a7175d16facb204b22f536bb9bb289"
  },
  {
    "url": "other/friends.html",
    "revision": "52b478beb1b84f48726d06b069566449"
  },
  {
    "url": "other/project.html",
    "revision": "05acdd631a3d89b3346718ff799dec27"
  },
  {
    "url": "tag/index.html",
    "revision": "9e92dd2eede2c14dcad2d9f80e73c8e5"
  },
  {
    "url": "tag/IO模型/index.html",
    "revision": "fa61e1570ff1ca8bdd747c0e45a15178"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "a6f879e72eee85dbb0828dc9453a7a70"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "e93fbc6abd6c31458c7ce9945011d39e"
  },
  {
    "url": "tag/poi/index.html",
    "revision": "9d766a1e70078319e8c59537024bd92a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d6896f1795e908c1cb87527f34cfd803"
  },
  {
    "url": "tag/分布式/index.html",
    "revision": "8b81530817e1c81f931f4cb80193f7ff"
  },
  {
    "url": "tag/复习/index.html",
    "revision": "e3635b7d34b408da963bdc8ac0c9d30d"
  },
  {
    "url": "tag/源码分析/index.html",
    "revision": "b5c6508ded3dfb264e33f4df79959aed"
  },
  {
    "url": "timeline/index.html",
    "revision": "59469fe688969c317d9ef7b7374890e7"
  },
  {
    "url": "view/index.html",
    "revision": "a42ca4e3d2624c385eca0e43c9385106"
  },
  {
    "url": "view/kQWXr.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/love.html",
    "revision": "f936a35b3ecc5442cd688223e306fba8"
  },
  {
    "url": "view/rddek.gif",
    "revision": "638c77362a2c110318d58cc3935f3177"
  },
  {
    "url": "view/比心1.png",
    "revision": "e7be9815e3eda6fdda33d952ec4055bb"
  },
  {
    "url": "views/backend/ArrayList.html",
    "revision": "cb09ba7ad9110f6c9ed00605e03faaed"
  },
  {
    "url": "views/backend/EasyExcel.html",
    "revision": "cf3c0e54421d40684b62dc06fa56e055"
  },
  {
    "url": "views/backend/HashMap.html",
    "revision": "abfadb4e89a7df455fa9bc4b5bf95554"
  },
  {
    "url": "views/backend/itext.html",
    "revision": "7059b5c4f11f81caf549890373d71598"
  },
  {
    "url": "views/backend/java_io模型.html",
    "revision": "3ad75b9095eda2f0d9455afeac0c34a7"
  },
  {
    "url": "views/frontend/reco-info.html",
    "revision": "6767d85023914f342e12e6c4cba9d4e7"
  },
  {
    "url": "views/frontend/vuepress-plugin-boxx.html",
    "revision": "fcc7447535f64e65f2a5dc465b661b6b"
  },
  {
    "url": "views/index.html",
    "revision": "7f6a2173471a4e6edf4afc6cecadceab"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "af39a1922328bcd1247ba73d138ca4c4"
  },
  {
    "url": "views/specification/guide.html",
    "revision": "9c424705a6239f4330a763033c4472f8"
  },
  {
    "url": "vuepress/android-chrome-192x192.png",
    "revision": "c9e32c4dc8764cfc7e5b7a13771a2f14"
  },
  {
    "url": "vuepress/android-chrome-512x512.png",
    "revision": "dc6d4703b55a3a4273fe1b906f022563"
  },
  {
    "url": "vuepress/apple-touch-icon-120x120.png",
    "revision": "aca5f9ce7aff36245ae262dff595d0de"
  },
  {
    "url": "vuepress/apple-touch-icon-152x152.png",
    "revision": "4a999ef21d86256ea277b2f23bd0bd4a"
  },
  {
    "url": "vuepress/apple-touch-icon-180x180.png",
    "revision": "b1bffec5d656865886b7336a59a94401"
  },
  {
    "url": "vuepress/apple-touch-icon-57x57.png",
    "revision": "7ae9f6028ae7e58e784f7f006c1b1902"
  },
  {
    "url": "vuepress/apple-touch-icon-60x60.png",
    "revision": "ccba5c67847684194179d64aa996a781"
  },
  {
    "url": "vuepress/apple-touch-icon-72x72.png",
    "revision": "6f63676dd29d51891e9a9921947c77bf"
  },
  {
    "url": "vuepress/apple-touch-icon-76x76.png",
    "revision": "cc4159e14bf07dac50be9a1b3d05ec09"
  },
  {
    "url": "vuepress/apple-touch-icon.png",
    "revision": "b1bffec5d656865886b7336a59a94401"
  },
  {
    "url": "vuepress/avatar.png",
    "revision": "a89678ac9563b06f54a6f278daa49de9"
  },
  {
    "url": "vuepress/favicon-16x16.png",
    "revision": "a95d55ee9164ac2d295287f577fc9caf"
  },
  {
    "url": "vuepress/favicon-32x32.png",
    "revision": "c3d1d95b9b8c82e14083eeb7a62da466"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "ab7a9c264c4e2e0cddbf8a3229e8b2a0"
  },
  {
    "url": "vuepress/logo.png",
    "revision": "75a7175d16facb204b22f536bb9bb289"
  },
  {
    "url": "vuepress/msapplication-icon-144x144.png",
    "revision": "0495b48d6df2671dcd9cca864ea69934"
  },
  {
    "url": "vuepress/safari-pinned-tab.svg",
    "revision": "da18cbd56328aea79d471efbee77ba53"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "bf80a6f75ed6aff874261bb1d13ff529"
  },
  {
    "url": "vuepress/xinghe.png",
    "revision": "57d9b1b699a244f00f610ab201dc0554"
  },
  {
    "url": "vuepress/zanshang01.png",
    "revision": "19f90a3088cb6c2d9eca4bcd02feae9c"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
  },
  {
    "url": "vuepress/zpj80231-logo-1.png",
    "revision": "97de419e4928299047a1de1b2b249f63"
  },
  {
    "url": "vuepress/zpj80231-logo-2.png",
    "revision": "a2aa1799583b0104477b398b98b757c3"
  },
  {
    "url": "vuepress/zpj80231-logo-bg.png",
    "revision": "097cde6f5b50f6d9dabc79d51bf415ee"
  },
  {
    "url": "vuepress/三合一收款码.png",
    "revision": "d5d8a1bb8c7853f3845d53f56b09d522"
  },
  {
    "url": "vuepress/个人微信二维码.jpg",
    "revision": "fb796aa8dbaae9b4b2c30ccc71e80ec5"
  },
  {
    "url": "vuepress/公众号二维码.jpg",
    "revision": "e46e1fe888d2c44a6c2be14a213b1b70"
  }
].concat(self.__precacheManifest || []);
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
