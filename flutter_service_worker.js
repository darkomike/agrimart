'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "882ef4d4be796e85ad96c49f979136ab",
".git/logs/HEAD": "2bd53231a183e3d1bf3ed3cecfa192a3",
".git/logs/refs/remotes/origin/master": "acb15c7ca51837bc5333c8213a6246d8",
".git/logs/refs/heads/master": "2bd53231a183e3d1bf3ed3cecfa192a3",
".git/objects/8e/4153088779d97166355dcd1b6bc57edb98cdab": "cd31eb68e34d1ce5b04f29060b35718a",
".git/objects/8e/4a67687aabaad44d45bba2f99b4715c23b86f3": "caa0bed78bcdb58ebfce30a0d2d6c1ed",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/c7/859e12e842bf20d3408d0b39bd287d9af59b02": "df63400a1521d0be201a4d386c146721",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/f4/837cc9cab6792274ab64872d6fdcb678691ee6": "47ae94b902c17b2c9e7229f4551bcc4f",
".git/objects/0c/9b55d6f159a03bdf9b3df0b05301e6ccb43387": "7daadf30eb2acbfaae9d217e039d767f",
".git/objects/72/5ee416ea12babaa69f812e3360ce68faa064fd": "31202ac3599410a9714d1d2985b55512",
".git/objects/95/5055f5aaf6f981f91b1d1044360f5602cd7ddd": "f1056ae30bd321784b317bb171088cee",
".git/objects/4d/312561fe09f412660e7cdaafe3a6184b171731": "8f112579c217d421929d6db185521ef8",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/14/3df1710b5c1b103ddf5142f276fee12f662a8c": "ef8291fb47b1eb56124f79d3f534929d",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/98/0edda4ae738c9e3a55dfae6d429ba991ab43e6": "d1961ba9cfbc64daf9395ec75f302814",
".git/objects/47/26bcad350ad917ac113212c8fcb6b314592d64": "516379cac540f77f083d9834bd14d118",
".git/objects/cb/67a247b273176825a36e8be8f37b3a6410a089": "e053a8b19ed7f40c6d00cbe8b1b34595",
".git/objects/4a/fa96f13cf7e7f864b16d9d6bfffbf98aed86b5": "e165694af16c51f95c87d13a2054c744",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/6d/5a91b85d793fc4f48fdc350711b1cf3fa9a023": "9f86bdca7ba993980b89216803baa992",
".git/objects/5e/bad7777a2f175feea8c63476d625177ddcfa92": "fbd2aa5066d8002f76b0854d1a4d6445",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/71/4375631d15ff2b79c893d28d1406c9df539046": "d94a93bbb442b333e6f912662996c7b3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/58/8a0b7e9952b2a1ad560ded5825aa9667bcc8eb": "c51634fdc22261cd0bd8925af285b616",
".git/objects/16/104efa76fb3847c0dc9a7f6f3f55198d98d50e": "20bd05e914ed6028fdbec02a66615374",
".git/objects/91/362e61defd5d9123b3b0e8a968910ebf119761": "57be458853940472b5702239c91a35d2",
".git/objects/d4/b02c5cecca6a496b57cf7be5350fa79b1964e9": "87e65bd99a88e7c3ca08f4a2609fc14e",
".git/objects/a3/43dddfd532b38e58e9b0981520ddc80f682ce4": "5762601b462a5bbc5375e6b77769ae36",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/04/526e381d50f9131777976bcd557f425a0efa50": "d9c70e3ba4019682fddbfabc5fb8bf88",
".git/objects/eb/10ffc7751fdfb69e383f770e81243a40e87c18": "26ee0cec2f810a5374dd65e4524c0453",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/cd/1e429b0056f9c6bb798b3432e7231e28a39931": "d76e613012a6138bb0b74a6ef85777aa",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/02/a60ca50921e7e6e1dabea19e4c1050e52e198e": "f58e58ec31174fe4b42c7fa53414268c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ad/9fc4bbdc2dd3896283225f2231d682c8e90815": "f9310cd1f4474c4c64621c985bdf8b51",
".git/objects/e9/d9e0d7ca44a07ac9a7cca367ddd67c1c790ded": "a2e9a24ad3678672cc3df34bbdb2c81e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/49/7e2e97f69ad3347e708aee11afe11e4757d037": "c961de1ef2a3d7dd292e71c6b35d8e43",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/42/5bfd03a4262ec713fcc48f6b3d458f54ed63b3": "0b47737a65c45c2267e46ed207db6922",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/a5/b5ba32b2b614380c0f606ded8f0c4edc67a06b": "c8509419bedf87c61b1202d34952aad2",
".git/objects/3d/9e042bb502f18d212b96338f46d320492b38b8": "835dc8ab2f0bd4291fe6b643e538d362",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/21ba5bb24f07af99d014630493d61cfa563c96": "81b15eb83c1a672b7598bfbc25617096",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/194b46986052cc580a2187fa961206ed51e384": "951a16222cd43935888a092a2419b99a",
".git/objects/77/f20d6c91836820904a332fabaf4226851d7a34": "c499e94c6ff881910dd3dbb70be0624c",
".git/objects/03/d79d5b4207a7a38f1b3105ee71fd57793d1cb2": "215b029bf45e05995a811c07babfedf4",
".git/objects/6e/8802d55fe7b7ece226d643844a6d2ec42ef934": "14aff992d451480596d531bc42f19b3f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/b6/e87a3147a7df79992f560d84f8c16dba9667ab": "5d8b61983f2b8fb3e985ac93270c3d25",
".git/objects/37/6d65678d6033ebaca300c6004db00f077b8ffa": "20253d83ef82e4f43fe557d2bc4bd1b5",
".git/objects/86/5ea735b906b8ab34145f6850e86fae0829a3ea": "190fb7075a9d0b8d985a2c2b26eb98da",
".git/objects/55/2f09c976402ec85ef2583608b3abfd9d14f238": "cd650b3dac8b2bfc64313785d1bbd0ac",
".git/objects/06/d428d27c13e0dcc8a414134873b6e033262718": "b0bc7a14e54656ef887c9b639f3e8e2f",
".git/objects/06/a74ef400063cfbd7bfdc869cc996b94342dc6d": "abaed511d3906c6d7f75286083cb4848",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/70/0fda68340700c9793b06e324820a9b3f6f5a64": "f633deaeeaa12f95b5d16fc6b3a78997",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/config": "5a13db82214dd4dac4f70d320cfcd3b8",
".git/index": "744c04732003d5fee861f9c74fd94b9d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "3823f8e5d40a63ba804fdb8941ed1a40",
".git/refs/heads/master": "3823f8e5d40a63ba804fdb8941ed1a40",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/workspace.xml": "4ca50dc5cbb81a6686ff9045405e1382",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
"main.dart.js": "e2ed7ccb4f5d6e0f7a74dc8136360f6c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"img/welcome.png": "26f523072fa51ad66c0ec621ca24ffff",
"index.html": "707f4bcdba452e2a5afc5a1becc583f1",
"/": "707f4bcdba452e2a5afc5a1becc583f1",
"manifest.json": "64d6c67a37ee460760787fc4ca8065f6",
"style.css": "01ddf5811b8593a3d721ede630e064d4",
"version.json": "104d3bf8ecc52d090e6e0251c02a2363",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/FontManifest.json": "6c53bbbc3cc28228c29cece3da5e696d",
"assets/NOTICES": "a44d6a0aabcbb4a22bd8489ed2b94842",
"assets/AssetManifest.json": "de1c70be9f48a2795e21c633662734ea",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Quicksand/Quicksand-Medium.ttf": "db0ad2fc713ab72ea682687be4bd1021",
"assets/assets/fonts/Quicksand/Quicksand-Bold.ttf": "05fcffc56e72bc6889ecea672078dc4f",
"assets/assets/fonts/Quicksand/Quicksand-SemiBold.ttf": "9e7757030c60a7a6973c9a95d9cea1c0",
"assets/assets/fonts/Quicksand/Quicksand-Regular.ttf": "6cbafd2cb6e973c96ade779edc39c62a",
"assets/assets/fonts/Quicksand/Quicksand-Light.ttf": "10ce81d2a0fc09f271edf43e66d80301",
"assets/assets/lottie/two-factor-authentication.json": "e0fc1049f0ebdea3c65bc2c46fd00afe",
"assets/assets/lottie/crypto-blockchain.json": "24db64e3e6833575085dfa080f89443b",
"assets/assets/lottie/networked-data.json": "218417bb7a1e77ffc6a694e28af8f17f",
"assets/assets/images/farm.jpg": "915302dec405b9e2a1a27456d1bd09fc",
"assets/assets/images/harvesting-wheat.jpg": "ac5822bf24b63135527159b0b713fff5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
