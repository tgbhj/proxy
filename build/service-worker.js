if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()})),i.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},i=(i,a)=>{Promise.all(i.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(i)};self.define=(i,c,d)=>{a[i]||(a[i]=Promise.resolve().then(()=>{let a={};const s={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return a;case"module":return s;default:return e(i)}})).then(e=>{const i=d(...e);return a.default||(a.default=i),a})}))}}define("./service-worker.js",["./workbox-c53a4ca0"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"dbc1e499fed1219c2b6436e17557af60"},{url:"/static/css/2.957513ab.chunk.css",revision:"9d1479431924d7749d50ad0774f03bc1"},{url:"/static/js/2.41ba4f8f.chunk.js",revision:"fa91f2e685005c6f11c2bf3ab7ad61ee"},{url:"/static/js/2.41ba4f8f.chunk.js.LICENSE.txt",revision:"176c1a1a28b19c611d9701905d8d60b7"},{url:"/static/js/main.c8060950.chunk.js",revision:"10fdf7d78eadaed33ed856d5bbe9e954"},{url:"/static/js/runtime-main.1cabf0f6.js",revision:"c6f74e18401bde0ba3aa068b916f73ab"},{url:"/static/media/KD logo & ISO logo &JAS .9ea228f2.jpg",revision:"08d83d8f7f94e643b0bfc8a3b731861d"},{url:"/static/media/img_1.85a6b643.jpg",revision:"c295620676f5eaf980610aa2e995d189"},{url:"/static/media/img_10.dd8af442.jpg",revision:"49b69382083d280c5fea65b506b3ebdc"},{url:"/static/media/img_11.e43453f1.jpg",revision:"79a52fc004dbf6c52c0de756eb475cd6"},{url:"/static/media/img_12.8b5fd372.jpg",revision:"b037f5a6ab37e68696a2fa3c9c29ac61"},{url:"/static/media/img_13.038c53dc.jpg",revision:"81f8dfc1b88328083bb26e915acf499f"},{url:"/static/media/img_14.3098f2d9.jpg",revision:"b49e65a894a4d40f6b2b8bed555d3437"},{url:"/static/media/img_15.dc8a150a.jpg",revision:"3a6f9e9b9bc44ff2bd46f40711bad371"},{url:"/static/media/img_16.6714d0f2.jpg",revision:"d61cdbfdf14262a5c1fb9cac98c556ac"},{url:"/static/media/img_17.aea75ae3.jpg",revision:"44d9900858be2fd040cc70f8edca59bf"},{url:"/static/media/img_18.b2de2f8d.jpg",revision:"3960277dd2ef4bf543341723aaa81504"},{url:"/static/media/img_19.79fa379b.jpg",revision:"e42030f60962fad63ccb02b5821ca400"},{url:"/static/media/img_2.a895d0ea.jpg",revision:"fc764c484874d7deeb131d6046d70c59"},{url:"/static/media/img_20.c2d39bb5.jpg",revision:"940040b4da9b30ecf56a9d58d8885e71"},{url:"/static/media/img_3.1f538e19.jpg",revision:"bb822ca15c101277288c15ae6f5e79fc"},{url:"/static/media/img_4.64fad87b.jpg",revision:"4b3da944d7704bb2845a6bffdeafe356"},{url:"/static/media/img_5.44775f9a.jpg",revision:"0835d528bc92f905b0229f7ef4b0b6a5"},{url:"/static/media/img_6.3c495af7.jpg",revision:"583ce5f945c6af0a882d97edd297a4c4"},{url:"/static/media/img_7.69783530.jpg",revision:"c995292c00d0da5a907cb8af00ca0da7"},{url:"/static/media/img_8.cd37e5e2.jpeg",revision:"3b703b1ca557f0db2c6188422130b9f0"},{url:"/static/media/img_9.12bc9fae.jpg",revision:"cc44945c667a9aa824010661f9b81e3f"},{url:"/static/media/logo.f2a7f2f9.png",revision:"df36cca5cdd304fe95575f20bb8995bb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
