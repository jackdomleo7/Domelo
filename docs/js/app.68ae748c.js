(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"5db97e80","chunk-882fe588":"b17355ef"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-882fe588":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-882fe588":"e75466d7"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},ca6e:function(e,t,n){"use strict";var r=n("daf6"),o=n.n(r);o.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("header",{staticClass:"header-bar"},[n("button",{on:{click:e.toggleSidebar}},[e._v("Toggle nav")])]),n("sidebar",{attrs:{"sidebar-open":e.isSidebarOpen}}),n("router-view")],1)},a=[],i=n("d4ec"),s=n("bee2"),c=n("99de"),u=n("7e84"),l=n("262e"),d=n("9ab4"),f=n("60a3"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("aside",{staticClass:"sidebar",class:!!e.isSidebarOpen&&"sidebar--open"},[n("div",{staticClass:"sidebar__container"},[n("div",{staticClass:"sidebar__header"},[n("router-link",{staticClass:"sidebar__header-link",attrs:{to:"/"}},[n("h2",{staticClass:"sidebar__header-title"},[e._v("Domelo")])]),e._m(0)],1),n("div",{staticClass:"sidebar__navigation"},[n("ul",{attrs:{role:"tree"}},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[e._v(" Foundation "),n("ul",{attrs:{role:"group"}},[n("li",[n("router-link",{attrs:{to:"/foundation/colors",disabled:""}},[e._v("Colors")])],1),n("li",[n("router-link",{attrs:{to:"/foundation/typography"}},[e._v("Typography")])],1),n("li",[n("router-link",{attrs:{to:"/foundation/scale"}},[e._v("Platform scale")])],1),n("li",[n("router-link",{attrs:{to:"/foundation/reset"}},[e._v("Reset stylesheet")])],1),n("li",[n("router-link",{attrs:{to:"/foundation/grid"}},[e._v("Grid")])],1)])])])])])]),e.isSidebarOpen?n("div",{staticClass:"sidebar__overlay",on:{click:e.toggleSidebar}}):e._e()])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("A design system by "),n("a",{attrs:{href:"https://jackdomleo.dev",target:"_blank"}},[e._v("Jack Domleo")])])}],h=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.isSidebarOpen=!1,e}return Object(l["a"])(t,e),Object(s["a"])(t,[{key:"onSidebarOpenChanged",value:function(){this.isSidebarOpen=this.sidebarOpen}},{key:"toggleSidebar",value:function(){this.isSidebarOpen=!this.isSidebarOpen}},{key:"created",value:function(){this.isSidebarOpen=this.sidebarOpen}}]),t}(f["c"]);Object(d["a"])([Object(f["b"])({type:Boolean,default:!1})],h.prototype,"sidebarOpen",void 0),Object(d["a"])([Object(f["d"])("sidebarOpen")],h.prototype,"onSidebarOpenChanged",null),h=Object(d["a"])([f["a"]],h);var v=h,g=v,m=(n("ca6e"),n("2877")),O=Object(m["a"])(g,p,b,!1,null,"088027ad",null),y=O.exports,_=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.isSidebarOpen=!1,e}return Object(l["a"])(t,e),Object(s["a"])(t,[{key:"toggleSidebar",value:function(){this.isSidebarOpen=!this.isSidebarOpen}}]),t}(f["c"]);_=Object(d["a"])([Object(f["a"])({components:{Sidebar:y}})],_);var k=_,j=k,S=(n("5c0b"),Object(m["a"])(j,o,a,!1,null,null,null)),w=S.exports,C=(n("d3b7"),n("8c4f"));r["a"].use(C["a"]);var E=[{path:"/",name:"home",component:function(){return n.e("chunk-882fe588").then(n.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],P=new C["a"]({mode:"history",base:"/",routes:E}),A=P,T=n("9483");Object(T["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:A,render:function(e){return e(w)}}).$mount("#app")},daf6:function(e,t,n){}});
//# sourceMappingURL=app.68ae748c.js.map