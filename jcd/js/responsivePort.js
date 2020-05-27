/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("topNav");
  var icon = document.getElementsByClassName("fa-caret-down");
  if (x.className == "myTopNav") {
    x.className += " responsive";
    icon.className += " fa-caret-up";
  } 
  else {
    x.className = "myTopNav";
    icon.className = "fa-caret-up";
  }
}

/*white*/
var igp = document.getElementById("instagramPort");
var wpp = document.getElementById("whatsappPort");
var fbp = document.getElementById("facebookPort");

igp.onmouseover = function(){MouseOverIcons("instagramPort", 'img/instagramPink.svg', 'img/instagramWhitee.svg')};
wpp.onmouseover = function(){MouseOverIcons("whatsappPort", 'img/whatsappPink.svg', 'img/whatsappWhite.svg')};
fbp.onmouseover = function(){MouseOverIcons("facebookPort", 'img/facebookPink.svg', 'img/facebookWhite.svg')};

function MouseOverIcons(social, ruta, back) {
  var obji = document.getElementById(social)
  obji.src = ruta;
  obji.onmouseout = function (){MouseOutIcons(social, back)};
    
}

function MouseOutIcons(obj, back){
  document.getElementById(obj).src = back;
}

/*STICKY SCROLL*/

window.onscroll = function() {scrollFunction()};

// Get the navbar
var navbar = document.getElementById("topNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  else {
    navbar.classList.remove("sticky");
  }
}
