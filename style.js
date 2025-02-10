document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Dark Mode Toggle
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "🌙 Dark Mode";
    toggleButton.classList.add("dark-mode-btn");
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleButton.innerText = "☀️ Light Mode";
        } else {
            toggleButton.innerText = "🌙 Dark Mode";
        }
    });

    // Contact Form Submission Alert
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent. ☕📖");
        contactForm.reset();
    });

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.innerText = "⬆️ Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
