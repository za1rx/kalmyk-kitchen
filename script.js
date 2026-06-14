/* ========================= BURGER MENU ========================= */ const burger =
  document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  burger.classList.toggle("active");
});
/* закрытие меню после клика */ mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
/* ========================= REVEAL ANIMATION ========================= */ const revealElements =
  document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 },
);
revealElements.forEach((el) => {
  observer.observe(el);
});
/* ========================= HEADER SHADOW ON SCROLL ========================= */ const header =
  document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});
/* ========================= SMOOTH SCROLL ========================= */ document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    });
  });
/* ========================= HERO PARALLAX ========================= */ const heroImage =
  document.querySelector(".floating-image");
window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 45;
  const y = (window.innerHeight / 2 - e.pageY) / 45;
  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});
/* ========================= BUTTON HOVER EFFECT ========================= */ const buttons =
  document.querySelectorAll(".btn-primary, .nav-btn, .cta-btn");
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px) scale(1.02)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) scale(1)";
  });
});
/* ========================= ACTIVE NAV LINK ========================= */ const sections =
  document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
