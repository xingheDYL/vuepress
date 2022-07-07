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
    "revision": "bbc46ae4cbfca3a45f2af626ddaf6bde"
  },
  {
    "url": "about/index.html",
    "revision": "3c2dd646f7239660c13913a2b1e56597"
  },
  {
    "url": "assets/css/0.styles.09c96e12.css",
    "revision": "c9a6ac790df9e1bdc1a760d9b0906212"
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
    "url": "assets/js/1.d09109fa.js",
    "revision": "6e301fe94c9f499a46f4b830f93d5b46"
  },
  {
    "url": "assets/js/10.e15a2a6d.js",
    "revision": "270a7504fc2aad4b2a49f7b571e39437"
  },
  {
    "url": "assets/js/11.88f943f0.js",
    "revision": "e7048ed468b991e297551bfe881a53cb"
  },
  {
    "url": "assets/js/12.4b23298e.js",
    "revision": "0bc8bee65707944aa8b47a94d500ae80"
  },
  {
    "url": "assets/js/13.1cdaa483.js",
    "revision": "86f18ce86599707618aac4d7072958f7"
  },
  {
    "url": "assets/js/14.3c3a37b3.js",
    "revision": "3c8db755bbd0b5792f107b058a9c55bd"
  },
  {
    "url": "assets/js/15.91d4fc0f.js",
    "revision": "87c7e51ad824bfa8f1b4e89f372dee9a"
  },
  {
    "url": "assets/js/16.7ae37ec8.js",
    "revision": "8471706840e6d65e656124430e173963"
  },
  {
    "url": "assets/js/17.1b76ffba.js",
    "revision": "dffc1861363df64daba9816e583451b3"
  },
  {
    "url": "assets/js/18.b79e0423.js",
    "revision": "1b48d7ec03df2d0b50372521ad502f7d"
  },
  {
    "url": "assets/js/19.4fd50f4d.js",
    "revision": "e73f0738cb8fd1dfc1ad3aaf0f1fba53"
  },
  {
    "url": "assets/js/2.4b1cf9a6.js",
    "revision": "262da817f3d673f023d3e67022628cf3"
  },
  {
    "url": "assets/js/20.6274ba21.js",
    "revision": "7bfd913e6e828e2ad12c0df6a0d0982a"
  },
  {
    "url": "assets/js/21.bc10a49b.js",
    "revision": "825e5b5d4d2bdd2749d30c8f347042e7"
  },
  {
    "url": "assets/js/22.f111d4e9.js",
    "revision": "c743d05007a9edda4b94d3f2ccbc4a03"
  },
  {
    "url": "assets/js/23.791a4a97.js",
    "revision": "96ad7c0c8f3a1cfa6d3d63703d6b7061"
  },
  {
    "url": "assets/js/24.470b1066.js",
    "revision": "3adb637be86fb26ccf9d0adae882c124"
  },
  {
    "url": "assets/js/25.8cc1c4a8.js",
    "revision": "9c76ca4b0126216415f884830083ca9e"
  },
  {
    "url": "assets/js/26.b71bf3a6.js",
    "revision": "ee50d081ecaede92da3e4c06e024824e"
  },
  {
    "url": "assets/js/27.bbd8244e.js",
    "revision": "78f6577519a6d6371e90c6e4e5bd193c"
  },
  {
    "url": "assets/js/28.1e7a413e.js",
    "revision": "e8ebfbc70269eeb7fd07eed3115df172"
  },
  {
    "url": "assets/js/29.5f8fa7e6.js",
    "revision": "657c7db319e3156b067426d0ffc05cf2"
  },
  {
    "url": "assets/js/30.64117589.js",
    "revision": "8682ed373a79ef7bad15eb09e68f6203"
  },
  {
    "url": "assets/js/31.34785dbf.js",
    "revision": "e387420cddb96ea3724be44033fff86f"
  },
  {
    "url": "assets/js/32.c6cce8a6.js",
    "revision": "05586a7f327bde854f6f133c65249e49"
  },
  {
    "url": "assets/js/33.ec7150d9.js",
    "revision": "0a8d02d649d402a44dccec50b8cfa3ef"
  },
  {
    "url": "assets/js/34.ec3a43d3.js",
    "revision": "6e3fd88bffec8cc5ad83dfd49086e677"
  },
  {
    "url": "assets/js/35.c4c10d87.js",
    "revision": "d2d1993921c04cb70c8c412526c728c8"
  },
  {
    "url": "assets/js/36.1be1eba9.js",
    "revision": "97848072ee8813fc5d2aaac5a3c68db2"
  },
  {
    "url": "assets/js/5.c43ab8bb.js",
    "revision": "cffddf593ad77670f7405f12a9bf30a8"
  },
  {
    "url": "assets/js/6.0164876f.js",
    "revision": "78bbcec5e635711daa9ce5e1af802d0e"
  },
  {
    "url": "assets/js/7.0b2ea2f5.js",
    "revision": "5feefd0a2d3dfe297b35c8b3547bdb3c"
  },
  {
    "url": "assets/js/8.f088506a.js",
    "revision": "435d6b4766015479731e30e1cc52b72b"
  },
  {
    "url": "assets/js/9.3c29646f.js",
    "revision": "68b1b7e6ae96eb07fd0df66b3e5316af"
  },
  {
    "url": "assets/js/app.fbb5fc4a.js",
    "revision": "8c97edebca2b0c08203a006b49aea43e"
  },
  {
    "url": "assets/js/vendors~flowchart.0aad603b.js",
    "revision": "1880a5229dbe75b33fe7a4fd07ed3c80"
  },
  {
    "url": "categories/index.html",
    "revision": "119dadd441befa886f6643559df01738"
  },
  {
    "url": "categories/前端 Front-end/index.html",
    "revision": "88ff6b6beb4d4cff679277222cfcc8ea"
  },
  {
    "url": "categories/后端 Back-end/index.html",
    "revision": "3978b3872e4165d384e2ace4a67d3bc2"
  },
  {
    "url": "categories/知识晶体 Q&A/index.html",
    "revision": "825f7c7da64fdcf9b173036d3ac95105"
  },
  {
    "url": "categories/规范 Standard/index.html",
    "revision": "dfa1ae2aa2f6c5dd1e340e2762c04f2f"
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
    "revision": "56187387c0de644726b7f512dc566d4d"
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
    "revision": "4888722c6f3753fd144e849bfb8c46c5"
  },
  {
    "url": "other/project.html",
    "revision": "6525b412d5fab2039d2bcec4a1eddec3"
  },
  {
    "url": "tag/index.html",
    "revision": "3e8f18ef377112f63fb42b3064969abc"
  },
  {
    "url": "tag/IO模型/index.html",
    "revision": "c460a51d61f2f64b42ea38aaa7594933"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "83dd49b566fdb0837586cc4437de59b5"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "e405e96916e9dfe9b948ab1a9dfa4f3c"
  },
  {
    "url": "tag/poi/index.html",
    "revision": "232335369780a943ed846ca6ef817328"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "30738e7e6c80a0217c7827603806d80b"
  },
  {
    "url": "tag/分布式/index.html",
    "revision": "97f9e657b001c868b5644290e830cee9"
  },
  {
    "url": "tag/复习/index.html",
    "revision": "30b8472ff46f36bc0e188dd8078f5802"
  },
  {
    "url": "tag/源码分析/index.html",
    "revision": "8f90045d4b0b78f8ed696d241677b6e7"
  },
  {
    "url": "timeline/index.html",
    "revision": "1c1c73f4bd2fd98708a85381ddfa4222"
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
    "revision": "b598f342d108371a5532eca1905398cc"
  },
  {
    "url": "views/backend/EasyExcel.html",
    "revision": "7ce561b41292faddd8a97de07ae1c36f"
  },
  {
    "url": "views/backend/HashMap.html",
    "revision": "266a6508bab8651d53e2e5602e60d2cb"
  },
  {
    "url": "views/backend/itext.html",
    "revision": "17fd4281a1afd953270fd32a69a260ae"
  },
  {
    "url": "views/backend/java_io模型.html",
    "revision": "161ca6804867389a9db063ff43ce264f"
  },
  {
    "url": "views/frontend/reco-info.html",
    "revision": "998d14581ef031a5638114ee3fcf0292"
  },
  {
    "url": "views/frontend/vuepress-plugin-boxx.html",
    "revision": "8bc96fe93eafcd93ff81ff20acac1a55"
  },
  {
    "url": "views/index.html",
    "revision": "f891702879cdb809d6238e76cd7b648c"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "f70a662454527a6e6ffc23b14363dfed"
  },
  {
    "url": "views/specification/guide.html",
    "revision": "690b36763146bfc92f22234a6e7c55ec"
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
