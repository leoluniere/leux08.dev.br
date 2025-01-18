importScripts("https://cdn.pushalert.co/sw-78571.js");

var closethememusicpopup = document.getElementById("closethememusicbutton");
var thememusicpopup = document.getElementById("thememusic")

closethememusicpopup.addEventListener('click', function() {
    thememusicpopup.style.display = "none"
  });
