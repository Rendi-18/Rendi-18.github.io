const GraphicDesign = document.getElementById("GraphicDesign");
const WebDesign = document.getElementById("WebDesign");
const WebDevelopment = document.getElementById("WebDevelopment");
const Office = document.getElementById("Office");

window.addEventListener("load", function () {
  setTimeout(function () {
    GraphicDesign.style.width = "90%";
    GraphicDesign.style.transition = "2s";
  }, 250);

  setTimeout(function () {
    WebDesign.style.width = "70%";
    WebDesign.style.transition = "2s";
  }, 500);

  setTimeout(function () {
    WebDevelopment.style.width = "80%";
    WebDevelopment.style.transition = "2s";
  }, 750);

  setTimeout(function () {
    Office.style.width = "85%";
    Office.style.transition = "2s";
  }, 1000);
});

// Ketik
var i = 0;
var txt =
  "Saya seorang mahasiswa Teknik infrastruktur Sipil dan perancangan Arsitektur Universitas Diponegoro. Saya antusias dalam dunia teknologi seperti sofware dan pemograman. Selain itu saya memiliki skill dalam desain grafis maupun User Interface/User Experiance.";
var speed = 10;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);
// akhir ketik

// profile
// const profile = document.getElementById("profile");

// window.addEventListener("load", function () {
//   profile.style.width = "80%";
// });
// akhir profile

const title = document.getElementById("title");

window.addEventListener("load", function () {
  title.style.opacity = "100%";
  title.style.transition = "1s";
});

// const card = document.getElementsByClassName("card");

// for (let i = 0; i < card.length; i++) {
//   window.addEventListener("load", function () {
//     setTimeout(function () {
//       card[i].style.opacity = "100%";
//       card[i].style.transition = "5s";
//     }, 100 * (i + 1));
//   });
// }
