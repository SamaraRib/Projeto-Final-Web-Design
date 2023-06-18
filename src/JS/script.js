let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 6500);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

/* BOTÃO NAVBAR MOBILE */

var botaoNavbar = document.querySelector(".openbtn");
var navbarMobile = document.querySelector("#mobileNav");

botaoNavbar.addEventListener("click", function () {
  if (navbarMobile.style.display === "block") {
    navbarMobile.style.display = "none";
  } else {
    navbarMobile.style.display = "block";
  }
});

window.onresize = function () {
  if (window.innerWidth > 985) {
    navbarMobile.style.display = "none";
  }
};
