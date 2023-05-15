window.addEventListener("scroll", () => {
        var navbar = document.querySelector(".navbar");
        var scrollPosition = window.pageYOffset;

        if (scrollPosition > 100) {
            navbar.style.backgroundColor = "#0f2535";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });

    var hamburgerBtn = document.getElementById("hamburger-btn");
hamburgerBtn.addEventListener("click", function() {
  var navbar = document.querySelector(".navbar");
  navbar.style.backgroundColor = "#0f2535";
});

var hamburgerBtn = document.getElementById("hamburger-btn");
hamburgerBtn.addEventListener("click", function() {
  var navbar = document.querySelector(".navbar");
  navbar.style.backgroundColor = "#0f2535";
  hamburgerBtn.classList.toggle("clicked");
});

// window.addEventListener("scroll", function() {
//     // code to handle scroll event goes here
//   });

//   window.addEventListener("scroll", function() {
//     var scrollPos = window.scrollY;
//     if (scrollPos > 100) {
//       document.getElementById("ProductBanner").classList.add("fade-out");
//     } else {
//       document.getElementById("ProductBanner").classList.remove("fade-out");
//     }
//   });
    
  