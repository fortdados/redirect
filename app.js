(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".title");if(e&&!e.innerHTML){var t=JSON.parse('{"form": "https://fortdados.github.io/form-to-wpp/index.html"}'),n=t[new URLSearchParams(location.search).get("r")]||t["*"]||"";if(n){var o=window.location.search.substring(1).split("&").filter((function(e){return 0!==e.indexOf("r=")}));window.location.replace(`${n}?${o.join("&")}`)}else e.insertAdjacentHTML("beforeend","Não encontrado")}}))})();