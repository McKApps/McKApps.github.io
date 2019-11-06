var navbar = document.getElementById("navbar");
var brand = document.getElementById("brand");
var toggler = document.getElementById("toggler");

document.getElementById("navbar").style.top = "0";
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-137px";
  }
  prevScrollpos = currentScrollPos;
}

if(toggler.classList.contains("show"))
{
    console.log("SHOWING");
}

$("html5button").hover(function(){
    $(this).classList.add('shadow');
}, function(){
    $(this).classList.remove('shadow');
});

// $(window).scroll(function () {
//
//     if ($(window).scrollTop() >= 1) {
//         navbar.classList.add('bg-dark');
//         brand.style.width = '200px';
//
//     } else {
//         navbar.classList.remove('bg-dark');
//         brand.style.width = '250px';
//         $('.navbar').css('background-color','rgba(255,255,255,0.2)');
//     }
// });
