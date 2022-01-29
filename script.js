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

const title = document.getElementById("title");

window.addEventListener("load", function () {
  title.style.opacity = "100%";
  title.style.transition = "1s";
});

// portfolio
$(window).scroll(function () {
  const wScroll = $(this).scrollTop();
  if (wScroll > $("#portfolio").offset().top - 250) {
    $(".thumbnail").each(function (i) {
      setTimeout(function () {
        $(".thumbnail").eq(i).addClass("muncul");
      }, 350 * (i + 1));
    });
  }
});
// akhir portfolio

$(window).scroll(function () {
  const wScroll = $(this).scrollTop();
  if (wScroll > $("#contact").offset().top - 100) {
    $(".icon").each(function (i) {
      setTimeout(function () {
        $(".icon").eq(i).addClass("muncul");
      }, 500 * (i + 1));
    });
  }
});
