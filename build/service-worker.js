if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,s,a)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+i.slice(1)};return Promise.all(s.map(i=>{switch(i){case"exports":return c;case"module":return r;default:return e(i)}})).then(e=>{const i=a(...e);return c.default||(c.default=i),c})}))}}define("./service-worker.js",["./workbox-ff0258e0"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"48f087045ef8337bf8dedec9666ceca7"},{url:"/static/css/2.0292b0eb.chunk.css",revision:"1cbab744a98419135e7111bda39804be"},{url:"/static/js/2.68fca004.chunk.js",revision:"9a7f5b58a718e08b08c13174c7248cfd"},{url:"/static/js/2.68fca004.chunk.js.LICENSE.txt",revision:"eff3b4d7e4bb0087ce53139cd90bc880"},{url:"/static/js/main.7e618506.chunk.js",revision:"678a6337b8cb45776e712ee00c42314f"},{url:"/static/js/runtime-main.1cabf0f6.js",revision:"c6f74e18401bde0ba3aa068b916f73ab"},{url:"/static/media/img_1.c2956206.jpg",revision:"c295620676f5eaf980610aa2e995d189"},{url:"/static/media/img_10.cc44945c.jpg",revision:"cc44945c667a9aa824010661f9b81e3f"},{url:"/static/media/img_11.940040b4.jpg",revision:"940040b4da9b30ecf56a9d58d8885e71"},{url:"/static/media/img_2.fc764c48.jpg",revision:"fc764c484874d7deeb131d6046d70c59"},{url:"/static/media/img_3.bb822ca1.jpg",revision:"bb822ca15c101277288c15ae6f5e79fc"},{url:"/static/media/img_4.4b3da944.jpg",revision:"4b3da944d7704bb2845a6bffdeafe356"},{url:"/static/media/img_5.0835d528.jpg",revision:"0835d528bc92f905b0229f7ef4b0b6a5"},{url:"/static/media/img_6.583ce5f9.jpg",revision:"583ce5f945c6af0a882d97edd297a4c4"},{url:"/static/media/img_7.c995292c.jpg",revision:"c995292c00d0da5a907cb8af00ca0da7"},{url:"/static/media/img_8.3b703b1c.jpeg",revision:"3b703b1ca557f0db2c6188422130b9f0"},{url:"/static/media/img_9.83fdd654.jpeg",revision:"83fdd6540c7853445f35af7508085f7e"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
