/* Sintonia Interiores — interações */
(function () {
  "use strict";

  var header = document.getElementById("header");
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");

  function onScroll() {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function closeMenu() {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menu");
    document.body.style.overflow = "";
  }

  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = open && window.innerWidth <= 680 ? "hidden" : "";
    document.body.classList.toggle("menu-open", open && window.innerWidth <= 680);
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeMenu();
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
  });

  /* revelar ao rolar */
  var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 60 + "ms";
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* formulário demonstrativo */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nome = form.querySelector("#nome");
    var email = form.querySelector("#email");

    if (!nome.value.trim()) {
      status.textContent = "Conte seu nome para continuarmos.";
      nome.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      status.textContent = "Verifique o e-mail informado.";
      email.focus();
      return;
    }

    var btn = form.querySelector("button[type=submit]");
    var primeiroNome = nome.value.trim().split(" ")[0];
    btn.disabled = true;
    btn.textContent = "Enviando…";

    window.setTimeout(function () {
      form.reset();
      btn.disabled = false;
      btn.textContent = "Enviar mensagem";
      /* página demonstrativa: nenhum dado é enviado */
      status.textContent = "Mensagem registrada, " + primeiroNome + " — retornaremos em até 2 dias úteis.";
      status.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 700);
  });
})();
