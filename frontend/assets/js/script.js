/* ==============================================
   BUILTBYAMOS PORTFOLIO - SCRIPT.JS
   Author: Amos Anand (BuiltByAmos)
   ============================================== */

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// ====== INTERSECTION OBSERVER ANIMATION ======
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("section, .glass-card").forEach(el => observer.observe(el));

// ====== TYPEWRITER EFFECT IN HERO SECTION ======
const typeText = document.querySelector(".hero-content h1");
if (typeText) {
  const fullText = typeText.textContent;
  let index = 0;
  typeText.textContent = "";
  
  function typeWriter() {
    if (index < fullText.length) {
      typeText.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
}

// ====== DARK MODE TOGGLE ======
const toggleButton = document.createElement("button");
toggleButton.textContent = "🌙";
toggleButton.className = "dark-mode-btn";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ====== DARK MODE STYLES ======
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
  body.dark-mode {
    background: linear-gradient(135deg, #0b132b, #1c2541);
    color: #f0f0f0;
  }
  body.dark-mode .glass-card {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
  }
  body.dark-mode nav {
    background: rgba(20, 20, 30, 0.5);
  }
  body.dark-mode a {
    color: #00d4ff;
  }
  body.dark-mode .btn {
    background: linear-gradient(135deg, #00c6ff, #007bff);
  }
`;
document.head.appendChild(darkModeStyles);

// ====== CONTACT FORM FEEDBACK ======
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const messageInput = contactForm.querySelector("#message");
    
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert("Please fill out all fields before submitting.");
      e.preventDefault();
      return;
    }
    
    alert("Thank you, " + nameInput.value + "! Your message has been sent successfully 💌");
  });
}

// ====== SCROLL TO TOP BUTTON ======
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "⬆";
scrollTopBtn.className = "scroll-top-btn";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ====== BUTTON STYLING (DYNAMIC) ======
const styleEl = document.createElement("style");
styleEl.textContent = `
  .dark-mode-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #007bff, #00c6ff);
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 1.4rem;
    width: 50px;
    height: 50px;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 999;
  }

  .dark-mode-btn:hover {
    transform: scale(1.1);
  }

  .scroll-top-btn {
    position: fixed;
    bottom: 30px;
    left: 30px;
    background: linear-gradient(135deg, #00c6ff, #007bff);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    width: 45px;
    height: 45px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 999;
  }

  .scroll-top-btn.visible {
    opacity: 1;
    pointer-events: all;
  }
`;
document.head.appendChild(styleEl);

// Simple reveal on scroll for about page elements
(function() {
  const opts = { threshold: 0.15 };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, opts);
  
  document.querySelectorAll('.about-hero, .about-section, .stat-card').forEach(el => {
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    io.observe(el);
  });
  
  // when element gets .in-view apply styles
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .in-view { opacity: 1 !important; transform: translateY(0) !important; }
  `;
  document.head.appendChild(styleEl);
})();