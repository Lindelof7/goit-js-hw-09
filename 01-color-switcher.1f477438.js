const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){o.style.backgroundColor=d(),timerId=setInterval((()=>{o.style.backgroundColor=d()}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(timerId),e.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1f477438.js.map
