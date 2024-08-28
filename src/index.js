'use strict';

document.addEventListener("DOMContentLoaded",function(){
  const title = document.querySelector(".title");
  if (title && !title.innerHTML) {
    var redirectObj = JSON.parse(redirect_obj);
    var params = new URLSearchParams(location.search);
    var redirectLink = redirectObj[params.get("r")] || redirectObj["*"] || "";
    
    if (redirectLink) {
      var urlParameters = window.location.search.substring(1).split("&").filter(function(a){
        return a.indexOf("r=") !== 0;
      });
      window.location.replace(`${redirectLink}?${urlParameters.join("&")}`);
    } else {
      title.insertAdjacentHTML("beforeend", "Não encontrado");
    }
  }
});
