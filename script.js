// Zappale site interactions: mobile menu, scroll reveal, footer year.
(function () {
  "use strict";

  // Mobile menu
  var menuBtn = document.querySelector(".menu-btn");
  var mobileNav = document.getElementById("siteNavMobile");
  if (menuBtn && mobileNav) {
    var closeMenu = function () {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    };
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuBtn.focus();
      }
    });
  }

  // Scroll reveal
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
