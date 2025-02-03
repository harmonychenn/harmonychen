//elements fade in
document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".fade-in");

    function checkFade() {
        fadeElements.forEach((element) => {
            let rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                element.classList.add("visible"); 
            }
        });
    }

    window.addEventListener("scroll", checkFade);
    checkFade(); 
});

//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, 
                behavior: "smooth"
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Smooth scrolling on click
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Auto-Detect Active Section
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`.nav-link[href="#${entry.target.id}"]`).classList.add("active");
            }
        });
    }, { threshold: 0.6 }); 

    sections.forEach(section => observer.observe(section));
});

//type effect
document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I'm Harmony.";
    const typingElement = document.getElementById("typing-text");
    let index = 0;
  
    function typeEffect() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150); // Adjust typing speed (in milliseconds)
      } else {
        typingElement.style.borderRight = "none"; // Remove cursor after typing is complete
      }
    }
  
    typeEffect();
  });