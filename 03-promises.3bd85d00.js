var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("eWCmQ");let i;function l(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{i=setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault(),clearTimeout(i);const{delay:t,step:o,amount:n}=e.target.elements;let a=Number(t.value);for(let e=1;e<=n.value;e+=1)l(e,a).then((({position:e,delay:t})=>r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`))).catch((({position:e,delay:t})=>r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`))),a+=Number(o.value);e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.3bd85d00.js.map