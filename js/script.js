(function () {
    'use srtict';
    var openLink = document.querySelector(".open_menu");
    var findMenu = document.querySelector(".close_menu");
  
    if(openLink) {
      openLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        findMenu.classList.toggle("close_menu");
      });
    }  
  })();