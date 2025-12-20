// ================= TYPEWRITER EFFECT =================
document.addEventListener("DOMContentLoaded", function() {
    const mainTitle = document.querySelector(".main-title");
    const subtitle = document.querySelector(".subtitle");
    const description = document.querySelector(".description");

    let delay = 0;

    // Typewriter effect for main title
    if (mainTitle) {
        const titleText = "Felix Ouma";
        typewriterEffect(mainTitle, titleText, 80, delay);
        delay += titleText.length * 80 + 500;
    }

    // Typewriter effect for subtitle
    if (subtitle) {
        const subtitleText = "I'm a Data Scientist";
        setTimeout(() => {
            typewriterEffect(subtitle, subtitleText, 50, 0);
        }, delay);
        delay += subtitleText.length * 50 + 500;
    }

    // Typewriter effect for description
    if (description) {
        const descriptionText = "Specializing in machine learning, predictive analytics, and data forecasting to solve complex business challenges. Experienced in finance, healthcare, and e-commerce sectors. Proficient with Python, R, SQL, and cloud-based data platforms to deliver impactful, data-driven solutions.";
        setTimeout(() => {
            typewriterEffect(description, descriptionText, 30, 0);
        }, delay);
    }
});

// Typewriter effect function
function typewriterEffect(element, text, speed, initialDelay) {
    element.textContent = "";
    let index = 0;

    setTimeout(() => {
        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, speed);
            }
        }
        type();
    }, initialDelay);
}

// ================= MOBILE MENU TOGGLE =================
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Toggle menu on icon click
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            nav.classList.toggle("active");
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            nav.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function(event) {
        if (!event.target.closest("header")) {
            nav.classList.remove("active");
        }
    });
});

// ================= SKILL SLIDERS =================
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".skill-slider");
    
    sliders.forEach(slider => {
        slider.addEventListener("input", function() {
            const skillType = this.dataset.skill;
            const value = this.value;
            
            // Update progress bar
            const progressFill = document.querySelector(`.progress-fill.${skillType}`);
            if (progressFill) {
                progressFill.style.width = value + "%";
            }
            
            // Update percentage text
            const percentageElement = document.querySelector(`.${skillType}-percent`);
            if (percentageElement) {
                percentageElement.textContent = value + "%";
            }
        });
    });
});