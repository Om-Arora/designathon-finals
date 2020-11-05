/*
function changehome_hover() {
  element = document.getElementById('home');
  element.setAttribute('color', '#000');
}

function changehome_unhover() {
  element = document.getElementById('home');
  element.setAttribute('color', '#fff');
}
*/

function changevideogame_hover() {
  element = document.getElementById('videogame');
  //div = document.getElementById('videogamediv');
  //div.setAttribute('style', 'display: inline');
  element.setAttribute('src', 'videogame-pink.svg');
}

function changevideogame_unhover() {
  element = document.getElementById('videogame');
  //div = document.getElementById('videogamediv');
  //div.setAttribute('style', 'display: none');
  element.setAttribute('src', 'videogame.svg');
}

function changeteam_hover() {
  element = document.getElementById('team');
  element.setAttribute('src', 'team-pink.svg');
}

function changeteam_unhover() {
  element = document.getElementById('team');
  element.setAttribute('src', 'team.svg');
}

function changecart_hover() {
  element = document.getElementById('cart');
  element.setAttribute('src', 'shopping-cart-pink.svg');
}

function changecart_unhover() {
  element = document.getElementById('cart');
  element.setAttribute('src', 'shopping-cart.svg');
}

var countDownDate = new Date("Nov 10, 2020 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Released";
  }
}, 1000);
