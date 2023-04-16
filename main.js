// Get the button:
let mybutton = document.getElementById("top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function increase_width1(){
  document.getElementById("Box1").style.width= "50%";
}

function increase_width2(){
  document.getElementById("Box2").style.width= "50%";
}



function open_signin(){
  document.getElementById("login-in").style.display= "flex";
  document.getElementById("login-in").style.top= "50%";
  document.getElementById("login-in").style.animation="login 0.8s 1";
}

function close_signin(){
  document.getElementById("login-in").style.animation="closelogin 0.8s 1";
  document.getElementById("login-in").style.top= "150%";
}

function open_signup(){
  close_signin();
  document.getElementById("sign-up").style.display= "flex";
  document.getElementById("sign-up").style.top="50%";
}

function close_signup(){
  document.getElementById("sign-up").style.animation="closesignup 0.8s 1";
  document.getElementById("sign-up").style.top= "150%";



}

function openjoin(){
  window.location.href = 'join.html';
}