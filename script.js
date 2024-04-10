let menuEvent = document.getElementById("navigation_item"); 

menuEvent.addEventListener("mouseover", function (event) {
  event.target.style.color = "#1b6abf";
}, false);


menuEvent.addEventListener("mouseout", function(event){
  event.target.style.color = "black";
}, false)
