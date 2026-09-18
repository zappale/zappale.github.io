// Zappale site interactions: theme cycle, mobile menu, filters, reveal, year.
(function () {
  "use strict";
  var root = document.documentElement;

  // ---- Theme: system → light → dark ----
  var themeBtn = document.getElementById("themeBtn");
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  var LABELS = null;
  if (themeBtn) {
    LABELS = {
      sys: themeBtn.getAttribute("data-l-sys") || "Theme: system",
      light: themeBtn.getAttribute("data-l-light") || "Theme: light",
      dark: themeBtn.getAttribute("data-l-dark") || "Theme: dark"
    };
  }
  var applyMode = function (mode, persist) {
    var dark = mode === "dark" || (mode === "sys" && mq.matches);
    root.dataset.mode = mode;
    root.dataset.theme = dark ? "dark" : "light";
    if (themeBtn && LABELS) {
      var label = LABELS[mode] || LABELS.sys;
      themeBtn.setAttribute("title", label);
      themeBtn.setAttribute("aria-label", label);
    }
    if (persist) {
      try { localStorage.setItem("zappale-mode", mode); } catch (e) {}
    }
  };
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var order = ["sys", "light", "dark"];
      var next = order[(order.indexOf(root.dataset.mode || "sys") + 1) % order.length];
      applyMode(next, true);
    });
  }
  var onScheme = function () {
    if (root.dataset.mode === "sys" || !root.dataset.mode) applyMode("sys", false);
  };
  if (mq.addEventListener) mq.addEventListener("change", onScheme);
  else if (mq.addListener) mq.addListener(onScheme);

  // ---- Mobile menu ----
  var menuBtn = document.querySelector(".menu-btn");
  var mobileNav = document.getElementById("mobileNav");
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
      if (e.target.closest("a") && !e.target.closest(".lang-nav")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuBtn.focus();
      }
    });
  }

  // ---- Feature filters ----
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip[data-filter]"));
  var cards = Array.prototype.slice.call(document.querySelectorAll(".f-card"));
  if (chips.length && cards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.classList.toggle("is-active", c === chip); });
        cards.forEach(function (card) {
          card.hidden = f !== "all" && card.getAttribute("data-cat") !== f;
        });
      });
    });
  }

  // ---- Scroll reveal ----
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

  // ---- Footer year ----
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
