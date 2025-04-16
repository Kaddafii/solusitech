// Wait for document to load
document.addEventListener("DOMContentLoaded", function () {
  // Loader
  setTimeout(function () {
    document.querySelector(".loader").classList.add("hidden");
  }, 1000);

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Sticky Header
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll to Top Button
  const scrollBtn = document.createElement("div");
  scrollBtn.classList.add("scroll-top");
  scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // FAQ Toggle
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const toggle = this.querySelector(".faq-toggle");
      answer.classList.toggle("active");
      toggle.classList.toggle("active");
    });
  });

  // Optional: Animate Number Count (Stats Section)
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText.replace(/\D/g, "");

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment) + "+";
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };

    // Animate when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(counter);
  });
});
