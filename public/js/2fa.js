(()=>{"use strict";var e,n={311:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(519),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"pre{background:#e0e0e0;border-radius:4px;font-size:20px;padding:10px}.lds-ring{display:inline-block;height:80px;position:relative;width:80px}.lds-ring div{animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:4px solid #fff;border-color:var(--bs-secondary) transparent transparent transparent;border-radius:50%;box-sizing:border-box;display:block;height:64px;margin:8px;position:absolute;width:64px}.lds-ring div:first-child{animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]);const i=o},519:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],d=n.base?i[0]+n.base:i[0],c=t[d]||0,l="".concat(d," ").concat(c);t[d]=c+1;var u=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:m(f,n),references:1}),r.push(l)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=v||(v=c(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=c(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=s(t[r]);a[o].references--}for(var i=d(e,n),c=0;c<t.length;c++){var l=s(t[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((n,t)=>(r.f[t](e,n),n)),[])),r.u=e=>142===e?"vendor/core/plugins/2fa/js/142.js":547===e?"vendor/core/plugins/2fa/js/547.js":400===e?"vendor/core/plugins/2fa/js/400.js":void 0,r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e={},r.l=(n,t,o,i)=>{if(e[n])e[n].push(t);else{var a,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var l=d[c];if(l.getAttribute("src")==n){a=l;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=n),e[n]=[t];var u=(t,r)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),s&&document.head.appendChild(a)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={508:0};r.f.j=(n,t)=>{var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(((t,r)=>o=e[n]=[t,r]));t.push(o[2]=i);var a=r.p+r.u(n),s=new Error;r.l(a,(t=>{if(r.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+n,n)}};var n=(n,t)=>{var o,i,[a,s,d]=t,c=0;if(a.some((n=>0!==e[n]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)d(r)}for(n&&n(t);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(311),o={insert:"head",singleton:!1};n()(t.Z,o);t.Z.locals;vueApp.booting((function(e){e.component("two-factor-setup-modal",(function(){return r.e(142).then(r.bind(r,142))})),e.component("two-factor-remove-modal",(function(){return r.e(547).then(r.bind(r,547))})),e.component("two-factor-challenge",(function(){return r.e(400).then(r.bind(r,400))}))}))})()})();